export async function POST(req: Request) {
    const dateRange = await req.json();
    try {
        // Fetch data from the external API
        const apiUrl = 'https://arafatmollik.online/fundy/api/v2/traffitrack/getdata';
        // Your username and password
        const username = 'user';
        const password = 'password';

        // Encode your username and password in base64
        const base64Credentials = Buffer.from(`${username}:${password}`).toString('base64');
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                // If the API requires specific headers, add them here
                'Content-Type': 'application/json',
                // Example: 'Authorization': 'Bearer YOUR_API_TOKEN',
                'Authorization': `Basic ${base64Credentials}`,
            },
        });

        // Check if the request was successful
        if (!response.ok) {
            throw new Error(`Error fetching data: ${response.statusText}`);
        }

        const data = await response.json();
        const dateRangeString = JSON.stringify(dateRange.dateRange);
        const [startDateString, endDateString] = dateRangeString.split(' to ').map(date => date.trim());
        const moment = require("moment");
        const startDate = moment(startDateString, "DD-MM-YYYY HH:mm");
        const endDate = moment(endDateString, "DD-MM-YYYY HH:mm");
        interface HourlyCount {
            totalCars: number;
            totalMotorBikes: number;
            totalBikes: number;
            totalPedestrians: number;
        }

        interface HourlyCounts {
            [key: string]: HourlyCount;
        }
        let hourlyCounts: HourlyCounts = {};
        let currentHour = startDate.clone().startOf('hour');
        while (currentHour <= endDate) {
            hourlyCounts[currentHour.format("YYYY-MM-DD HH:mm")] = {totalCars: 0, totalMotorBikes: 0, totalBikes: 0, totalPedestrians: 0};
            currentHour.add(1, 'hours');
        }

        data.result.data.forEach((item: { time: string | number | Date; class_id: any[]; }) => {
            const itemDate = moment(new Date(item.time));
            if (itemDate >= startDate && itemDate <= endDate) {
                const classId = item.class_id[0]; // Assuming class_id is an array, take the first element
                const hourKey = itemDate.clone().startOf('hour').format("YYYY-MM-DD HH:mm");
                switch (classId) {
                    case 1:
                        hourlyCounts[hourKey].totalCars += 1;
                        break;
                    case 2:
                        hourlyCounts[hourKey].totalMotorBikes += 1;
                        break;
                    case 3:
                        hourlyCounts[hourKey].totalBikes += 1;
                        break;
                    case 4:
                        hourlyCounts[hourKey].totalPedestrians += 1;
                        break;
                    // Add more cases as needed
                }
            }
        });

        // Convert hourlyCounts to the desired stream format
        let streamOfData = Object.keys(hourlyCounts).map(hour => ({
            data: [
                hourlyCounts[hour].totalCars,
                hourlyCounts[hour].totalMotorBikes,
                hourlyCounts[hour].totalBikes,
                hourlyCounts[hour].totalPedestrians
            ]
        }));


        // Sum up totals from hourlyCounts
        let totalCount = {
            totalCars: 0,
            totalMotorBikes: 0,
            totalBikes: 0,
            totalPedestrians: 0,
        };

        Object.values(hourlyCounts).forEach(count => {
            totalCount.totalCars += count.totalCars;
            totalCount.totalMotorBikes += count.totalMotorBikes;
            totalCount.totalBikes += count.totalBikes;
            totalCount.totalPedestrians += count.totalPedestrians;
        });

        // Return the parsed data as the response
        return new Response(JSON.stringify({ totalCount, streamOfData }), {
            status: 200, // OK status
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        // Handle any errors that occur during the fetch
        console.error('Fetch error:', error);

        // Return an error response
        return new Response(JSON.stringify({ error: 'Failed to fetch data' }), {
            status: 500, // Internal Server Error status
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}