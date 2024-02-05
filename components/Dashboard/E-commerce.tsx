"use client";
import React, {useEffect, useRef, useState} from "react";
import 'flatpickr/dist/flatpickr.min.css';
import ChartOne from "../Charts/ChartOne";
import ChartThree from "../Charts/ChartThree";
import CardDataStats from "../CardDataStats";
import FlatpickrCustom from "@/components/Calender/FlatpickrCustom";
import { FaCar } from "react-icons/fa";
import { RiMotorbikeFill } from "react-icons/ri";
import { MdDirectionsBike } from "react-icons/md";
import { IoMdPeople } from "react-icons/io";
import flatpickr from "flatpickr";


const ECommerce: React.FC = () => {
    const [trafficData, setTrafficData] = useState({
        totalCars: 0,
        totalMotorBikes: 0,
        totalBikes: 0,
        totalPedestrians: 0,
    });
    const [dataStream, setDataStream] = useState([] );

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
    const dateRangeRef = useRef(null);

    useEffect(() => {
        const now = new Date();

        // @ts-ignore
        flatpickr(dateRangeRef.current, {
            enableTime: true,
            dateFormat: "d-m-Y H:i",
            mode: "range",
            maxDate: now,
        });
    }, []);
    const handleSubmit = () => {
        // @ts-ignore
        const dateRange =   dateRangeRef.current.value;
        fetch('/api/getTrafficDataByDate/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({dateRange}),
            cache: 'no-cache',
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setTrafficData(data.totalCount);
                setDataStream(data.streamOfData);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            });
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

                  <FlatpickrCustom dateRangeRef={dateRangeRef}/>

                  <button
                      className="max-w-xs rounded bg-primary py-2 px-4 text-white hover:bg-primary-dark"
                      onClick={handleSubmit}
                  >
                      Submit
                  </button>
              </div>

          </div>
          {/* <!-- Chat card --> */}

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
              <CardDataStats title="Total Cars" total={trafficData.totalCars.toString()} rate=''>
              <FaCar color="#3C50E0"/>
              </CardDataStats>
              <CardDataStats title="Total Motor Bikes" total={trafficData.totalMotorBikes.toString()} rate=''>
                  <RiMotorbikeFill color="#80CAEE"/>
              </CardDataStats>
              <CardDataStats title="Total Bikes" total={trafficData.totalBikes.toString()} rate=''>
                  <MdDirectionsBike color="#10B981"/>
              </CardDataStats>
              <CardDataStats title="Total Pedestrians" total={trafficData.totalPedestrians.toString()} rate=''>
                  <IoMdPeople color="#F0950C"/>
              </CardDataStats>
          </div>

          <div className="mt-4 w-full">
              <ChartOne dataStream={dataStream}/>
              <br/>
              <ChartThree/>

          </div>
      </>
  );
};

export default ECommerce;
