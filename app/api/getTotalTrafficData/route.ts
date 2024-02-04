export async function GET() {
    try {
        // Fetch data from the external API
        const apiUrl = 'https://arafatmollik.online/fundy/api/v1/traffitrack/getdata';
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

        // Parse the JSON response
        const data = await response.json();

        // Return the parsed data as the response
        return new Response(JSON.stringify(data), {
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
