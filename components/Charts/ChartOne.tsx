// "use client";
/*import {ApexOptions} from "apexcharts";
import React, {useEffect, useState} from "react";
import dynamic from "next/dynamic";
import {arrayOutputType} from "zod";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
    ssr: false,
});

const options: ApexOptions = {
    legend: {
        show: false,
        position: "top",
        horizontalAlign: "left",
    },
    colors: ["#3056D3", "#80CAEE", "#10B981", "#F0950C"],
    chart: {
        // events: {
        //   beforeMount: (chart) => {
        //     chart.windowResizeHandler();
        //   },
        // },
        fontFamily: "Satoshi, sans-serif",
        height: 335,
        type: "area",
        dropShadow: {
            enabled: true,
            color: "#623CEA14",
            top: 10,
            blur: 4,
            left: 0,
            opacity: 0.1,
        },

        toolbar: {
            show: false,
        },
    },
    responsive: [
        {
            breakpoint: 1024,
            options: {
                chart: {
                    height: 300,
                },
            },
        },
        {
            breakpoint: 1366,
            options: {
                chart: {
                    height: 350,
                },
            },
        },
    ],
    stroke: {
        width: [2, 2],
        curve: "straight",
    },
    // labels: {
    //   show: false,
    //   position: "top",
    // },
    grid: {
        xaxis: {
            lines: {
                show: true,
            },
        },
        yaxis: {
            lines: {
                show: true,
            },
        },
    },
    dataLabels: {
        enabled: false,
    },
    markers: {
        size: 4,
        colors: "#fff",
        strokeColors: ["#3056D3", "#80CAEE", "#10B981", "#F0950C"],
        strokeWidth: 3,
        strokeOpacity: 0.9,
        strokeDashArray: 0,
        fillOpacity: 1,
        discrete: [],
        hover: {
            size: undefined,
            sizeOffset: 5,
        },
    },
    xaxis: {
        type: "category",
        categories: [
            "Sep",
            "Oct",
            "Nov",
            "Dec",
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
        ],
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
    },
    yaxis: {
        title: {
            style: {
                fontSize: "0px",
            },
        },
        min: 0,
        max: 100,
    },
};

type ChartOneState = {
    series: {
        name: string;
        data: number[];
    }[];
};

const initialSeries = [
    {
        "name": "persons",
        "data": [30, 55, 36, 40, 25, 35, 64, 52, 59, 36, 39, 51]
    },
    {
        "name": "bicycles",
        "data": [35, 50, 40, 45, 30, 40, 69, 57, 64, 40, 43, 55]
    },
    {
        "name": "cars",
        "data": [40, 45, 50, 55, 35, 45, 74, 62, 69, 45, 48, 60]
    },
    {
        "name": "motorbikes",
        "data": [45, 40, 55, 60, 40, 50, 79, 67, 74, 50, 53, 65]
    },
    {
        "name": "buses",
        "data": [50, 35, 60, 65, 45, 55, 84, 72, 79, 55, 58, 70]
    },
    {
        "name": "trucks",
        "data": [55, 30, 65, 70, 50, 60, 89, 77, 84, 60, 63, 75]
    }
];*//*


// Use the props type in your component definition
const ChartOne: React.FC = () => {
    const [state, setState] = useState<ChartOneState>({series: initialSeries});


    // NextJS Requirement
    const isWindowAvailable = () => typeof window !== "undefined";

    if (!isWindowAvailable()) return <></>;

    return (
        <div
            className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8">
            <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
                <div className="flex w-full max-w-45 justify-end">
                    <div className="inline-flex items-center rounded-md bg-whiter p-1.5 dark:bg-meta-4">
                        <button
                            className="rounded bg-white py-1 px-3 text-xs font-medium text-black shadow-card hover:bg-white hover:shadow-card dark:bg-boxdark dark:text-white dark:hover:bg-boxdark">
                            Day
                        </button>
                        <button
                            className="rounded py-1 px-3 text-xs font-medium text-black hover:bg-white hover:shadow-card dark:text-white dark:hover:bg-boxdark">
                            Week
                        </button>
                        <button
                            className="rounded py-1 px-3 text-xs font-medium text-black hover:bg-white hover:shadow-card dark:text-white dark:hover:bg-boxdark">
                            Month
                        </button>
                    </div>
                </div>
            </div>

            <div>
                <div id="chartOne" className="-ml-5 h-[355px] w-[105%]">
                    <ReactApexChart
                        options={options}
                        series={state.series}
                        type="area"
                        width="100%"
                        height="100%"
                    />
                </div>
            </div>
        </div>
    );
};

export default ChartOne;*/


"use client";
import {ApexOptions} from "apexcharts";
import React, {useState} from "react";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
    ssr: false,
});


const options: ApexOptions = {
    legend: {
        show: false,
        position: "top",
        horizontalAlign: "left",
    },
    colors: ["#3056D3", "#80CAEE", "#10B981", "#F0950C"],
    chart: {
        // events: {
        //   beforeMount: (chart) => {
        //     chart.windowResizeHandler();
        //   },
        // },
        fontFamily: "Satoshi, sans-serif",
        height: 335,
        type: "area",
        dropShadow: {
            enabled: true,
            color: "#623CEA14",
            top: 10,
            blur: 4,
            left: 0,
            opacity: 0.1,
        },

        toolbar: {
            show: false,
        },
    },
    responsive: [
        {
            breakpoint: 1024,
            options: {
                chart: {
                    height: 300,
                },
            },
        },
        {
            breakpoint: 1366,
            options: {
                chart: {
                    height: 350,
                },
            },
        },
    ],
    stroke: {
        width: [2, 2],
        curve: "straight",
    },
    // labels: {
    //   show: false,
    //   position: "top",
    // },
    grid: {
        xaxis: {
            lines: {
                show: true,
            },
        },
        yaxis: {
            lines: {
                show: true,
            },
        },
    },
    dataLabels: {
        enabled: false,
    },
    markers: {
        size: 4,
        colors: "#fff",
        strokeColors: ["#3056D3", "#80CAEE", "#10B981", "#F0950C"],
        strokeWidth: 3,
        strokeOpacity: 0.9,
        strokeDashArray: 0,
        fillOpacity: 1,
        discrete: [],
        hover: {
            size: undefined,
            sizeOffset: 5,
        },
    },
    xaxis: {
        type: "category",
        categories: [
            "Sep",
            "Oct",
            "Nov",
            "Dec",
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
        ],
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
    },
    yaxis: {
        title: {
            style: {
                fontSize: "0px",
            },
        },
        min: 0,
        max: 100,
    },
};

interface ChartOneState {
    series: {
        name: string;
        data: number[];
    }[];
}

const initialSeries = [
    {
        name: "Cars",
        data: [30, 55, 36, 40, 25, 35, 64, 52, 59, 36, 39, 51],
    },
    {
        name: "Moto Bikes",
        data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 45],
    },
    {
        name: "Bikes",
        data: [23, 21, 22, 17, 13, 22, 37, 21, 44, 12, 30, 15],
    },
    {
        name: "Pedestrians",
        data: [13, 11, 22, 27, 23, 22, 17, 21, 34, 22, 10, 45],
    },
];

const ChartOne: React.FC = () => {
    const [activeSeries, setActiveSeries] = useState<string>("All");

    const getFilteredSeries = () => {
        if (activeSeries === "All") {
            return initialSeries;
        } else {
            return initialSeries.filter((serie) => serie.name === activeSeries);
        }
    };

    /*    const handleReset = () => {
            setState((prevState) => ({
                ...prevState,
            }));
        };

        handleReset;*/

    // NextJS Requirement
    const isWindowAvailable = () => typeof window !== "undefined";

    if (!isWindowAvailable()) return <></>;

    return (
        <div className="your-component-classes">
            {/* Your existing component layout */}

            {/* Buttons for selecting the series data */}
            <div className="series-buttons">
                <button onClick={() => setActiveSeries("All")}>All</button>
                <button onClick={() => setActiveSeries("Cars")}>Cars</button>
                <button onClick={() => setActiveSeries("Moto Bikes")}>Moto Bikes</button>
                <button onClick={() => setActiveSeries("Bikes")}>Bikes</button>
                <button onClick={() => setActiveSeries("Pedestrians")}>Pedestrians</button>
            </div>

            <div id="chartOne" className="chart-container">
                <ReactApexChart
                    options={options}
                    series={getFilteredSeries()}
                    type="area"
                    width="100%"
                    height="100%"
                />
            </div>
        </div>
    );
};

export default ChartOne;
