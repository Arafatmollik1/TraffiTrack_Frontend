"use client";
import React, {useEffect, useState} from "react";
import ChartOne from "../Charts/ChartOne";
import ChartThree from "../Charts/ChartThree";
import ChartTwo from "../Charts/ChartTwo";
import ChatCard from "../Chat/ChatCard";
import TableOne from "../Tables/TableOne";
import CardDataStats from "../CardDataStats";
import { FaCar } from "react-icons/fa";
import { RiMotorbikeFill } from "react-icons/ri";
import { MdDirectionsBike } from "react-icons/md";
import { IoMdPeople } from "react-icons/io";

// import Map from "../Maps/TestMap";

// without this the component renders on server and throws an error
import dynamic from "next/dynamic";
const MapOne = dynamic(() => import("../Maps/MapOne"), {
  ssr: false,
});

const ECommerce: React.FC = () => {
    const [trafficData, setTrafficData] = useState({
        totalCars: 0,
        totalMotorBikes: 0,
        totalBikes: 0,
        totalPedestrians: 0,
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
  return (
    <>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardDataStats title="Total Cars" total={trafficData.totalCars.toString()} rate='' >
          <FaCar color="#3C50E0" />
        </CardDataStats>
        <CardDataStats title="Total Motor Bikes" total={trafficData.totalMotorBikes.toString()} rate=''>
          <RiMotorbikeFill color="#80CAEE" />
        </CardDataStats>
        <CardDataStats title="Total Bikes" total={trafficData.totalBikes.toString()} rate=''>
          <MdDirectionsBike color="#10B981" />
        </CardDataStats>
        <CardDataStats title="Total Pedestrians" total={trafficData.totalPedestrians.toString()} rate=''>
          <IoMdPeople color="#F0950C" />
        </CardDataStats>
      </div>

      <div className="mt-4 w-full">
        <ChartOne />
        <br/>
        <ChartThree />

      </div>
    </>
  );
};

export default ECommerce;
