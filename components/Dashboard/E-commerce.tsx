"use client";
import React, {useEffect, useRef, useState} from "react";
import 'flatpickr/dist/flatpickr.min.css';
import ChartOne from "../Charts/ChartOne";
import ChartThree from "../Charts/ChartThree";
import CardDataStats from "../CardDataStats";
import FlatpickrCustom from "@/components/Calender/FlatpickrCustom";
import {FaCar} from "react-icons/fa";
import {RiMotorbikeFill} from "react-icons/ri";
import {MdDirectionsBike} from "react-icons/md";
import {FaBus} from "react-icons/fa6";
import {LiaTruckSolid} from "react-icons/lia";
import {IoMdPeople} from "react-icons/io";
import flatpickr from "flatpickr";


const ECommerce: React.FC = () => {
    const [trafficData, setTrafficData] = useState({
        totalPersons: 0,
        totalBicycles: 0,
        totalCars: 0,
        totalMotorBikes: 0,
        totalBus: 0,
        totalTrucks: 0,
    });

    useEffect(() => {
        fetch('/api/getTotalTrafficData/')
            .then(response => response.json())
            .then(data => {
                setTrafficData(data);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            });
    }, []);
    const startDateRef = useRef(null);
    const endDateRef = useRef(null);

    useEffect(() => {
        const now = new Date();
        // @ts-ignore
        flatpickr(startDateRef.current, {
            enableTime: true,
            dateFormat: "d-m-Y H:i",
            maxDate: now,
        });
        // @ts-ignore
        flatpickr(endDateRef.current, {
            enableTime: true,
            dateFormat: "d-m-Y H:i",
            maxDate: now,
        });
    }, []);
    const handleSubmit = () => {
        // @ts-ignore
        const startDate = startDateRef.current.value;
        // @ts-ignore
        const endDate = endDateRef.current.value;
        fetch('/api/getTrafficDataByDate/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({startDate, endDate}),
            cache: 'no-cache',
        })
            .then(response => response.json())
            .then(data => {
                console.log('yo');
                console.log(data);
                setTrafficData(data);
                //setDataStream(data.streamOfData);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            });
    };
    const handleLiveUpdate = () => {
        //add some live update logic here
    };
    return (
        <>
            {/* <!-- Time and date --> */}
            <div
                className="mb-4 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                    <h3 className="font-medium text-black dark:text-white">
                        Filter by time and date
                    </h3>
                </div>
                <div className="flex flex-col gap-5.5 p-6.5">

                    <div>
                        <label className="mb-3 block text-black dark:text-white">
                            Set start and end date
                        </label>
                        <div className="relative">
                            <input ref={startDateRef} placeholder="Start Date"
                                   className="custom-input-date custom-input-date-1 my-4 w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"/>
                            <input ref={endDateRef} placeholder="End Date"
                                   className="custom-input-date custom-input-date-1 my-4 w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"/>
                        </div>
                    </div>

                    <div className="flex justify-start gap-3">

                        <button
                            className="max-w-xs rounded bg-primary py-2 px-4 text-white hover:bg-primary-dark"
                            onClick={handleSubmit}
                        >
                            Submit
                        </button>
                        {/*
                      <button
                          className="max-w-xs rounded bg-danger py-2 px-4 text-white hover:bg-primary-dark"
                          onClick={handleLiveUpdate}
                      >
                          Live update
                      </button>
                      */}
                    </div>

                </div>

            </div>
            {/* <!-- Chat card --> */}

            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 xl:grid-cols-3 2xl:gap-7.5">
                <CardDataStats title="Total People" total={trafficData.totalPersons.toString()} rate=''>
                    <IoMdPeople size={'2em'} color="#845EC2"/>
                </CardDataStats>
                <CardDataStats title="Total Bicycles" total={trafficData.totalBicycles.toString()} rate=''>
                    <MdDirectionsBike size={'2em'} color="#D65DB1"/>
                </CardDataStats>
                <CardDataStats title="Total Cars" total={trafficData.totalCars.toString()} rate=''>
                    <FaCar size={'2em'} color="#FF6F91"/>
                </CardDataStats>
                <CardDataStats title="Total Motorbikes" total={trafficData.totalMotorBikes.toString()} rate=''>
                    <RiMotorbikeFill size={'2em'} color="#FF9671"/>
                </CardDataStats>
                <CardDataStats title="Total Buses" total={trafficData.totalBus.toString()} rate=''>
                    <FaBus size={'2em'} color="#FFC75F"/>
                </CardDataStats>
                <CardDataStats title="Total Trucks" total={trafficData.totalTrucks.toString()} rate=''>
                    <LiaTruckSolid size={'2em'} color="#FF8066"/>
                </CardDataStats>
            </div>

            <div className="mt-4 w-full">
                {
                    <ChartOne/>

                }
                <br/>
                <ChartThree
                    persons={trafficData.totalPersons}
                    bicycles={trafficData.totalBicycles}
                    cars={trafficData.totalCars}
                    motorbikes={trafficData.totalMotorBikes}
                    buses={trafficData.totalBus}
                    trucks={trafficData.totalTrucks}/>
            </div>
        </>
    );
};

export default ECommerce;
