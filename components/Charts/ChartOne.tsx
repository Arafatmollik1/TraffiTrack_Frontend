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
];


const ChartOne: React.FC = () => {
    const [activeSeries, setActiveSeries] = useState<string>("persons");
    const getButtonClass = (seriesName: string) => {
        return `h-auto p-4 drop-shadow-lg rounded-lg ${activeSeries !== seriesName ? '' : 'bg-white text-black'}`;
    };

    const getFilteredSeries = () => {
        return initialSeries.filter((serie) => serie.name === activeSeries);
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
        <div
            className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8">
            <div className="w-1/2 flex gap-3 px-8">
                <button className={getButtonClass("persons")} onClick={() => setActiveSeries("persons")}>Persons
                </button>
                <button className={getButtonClass("bicycles")} onClick={() => setActiveSeries("bicycles")}>Bicycles
                </button>
                <button className={getButtonClass("cars")} onClick={() => setActiveSeries("cars")}>Cars</button>
                <button className={getButtonClass("motorbikes")}
                        onClick={() => setActiveSeries("motorbikes")}>Motorbikes
                </button>
                <button className={getButtonClass("buses")} onClick={() => setActiveSeries("buses")}>Buses</button>
                <button className={getButtonClass("trucks")} onClick={() => setActiveSeries("trucks")}>Trucks</button>
            </div>

            <div id="chartOne" className="h-96">
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
