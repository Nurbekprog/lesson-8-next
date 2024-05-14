"use client";
import React, { useEffect, useState } from "react";
import HomeHeader from "@/components/HomeHeader";
import HomeMain from "@/components/HomeMain";
import axios from "axios";

const Home = () => {
  const [datas, setDatas] = useState([]);
  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api");
      const data = await res.data;
      setDatas(data);
    } catch (error) {
      console.log((error as Error).message);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="bg-black">
        <h1 className="container py-5 text-4xl font-bold text-center text-white">Users</h1>
      </div>
      <div className="container mx-auto px-10 py-10">
        <HomeHeader setDatas={setDatas} fetchData={fetchData} />
        <HomeMain setDatas={setDatas} datas={datas} />
      </div>
    </>
  );
};

export default Home;
