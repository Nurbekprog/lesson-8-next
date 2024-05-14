"use client";
import React, { useEffect, useState } from "react";
import AddModalComp from "./AddModalComp";
import axios from "axios";

const HomeHeader = ({ setDatas, fetchData }: any) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    try {
      const res = await axios.get(`http://localhost:3000/api/search?q=${text}`);
      const searched = await res.data;
      setDatas(searched);
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  const handleChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const text = e.target.value;
    if (text !== "All") {
      try {
        const res = await axios.get(
          `http://localhost:3000/api/search?q=${text}`
        );
        const filtered = await res.data;
        setDatas(filtered);
      } catch (error) {
        console.log((error as Error).message);
      }
    } else {
      try {
        const res = await axios.get(`http://localhost:3000/api`);
        const datas = await res.data;
        setDatas(datas);
      } catch (error) {
        console.log((error as Error).message);
      }
    }
  };
  return (
    <div>
      <div className="grid grid-cols-3 gap-5 items-center">
        <div className="lg:col-span-2">
          <input
            type="text"
            onChange={handleSearch}
            placeholder="Search..."
            className="w-full border-gray-400 border rounded-md px-3.5 py-2 text-gray-900 placeholder:text-gray-400 outline-none focus:shadow-[0_0_5px_1px_#00000083] sm:text-sm sm:leading-6"
          />
        </div>
        <div className="grid grid-cols-10 gap-5 items-center col-span-2 lg:col-span-1">
          <div className="col-start-1 col-end-5">
            <select
              onChange={handleChange}
              className="w-full bg-yellow-500 rounded-md border-none p-2 outline-none cursor-pointer text-white focus:ring-4 shadow-[0_0_5px_1px_#00000083] duration-200"
            >
              <option value="All">Select level</option>
              <option value="Junior">Junior</option>
              <option value="Middle">Middle</option>
              <option value="Senior">Senior</option>
            </select>
          </div>
          <div className="col-start-5 col-end-9">
            <select
              onChange={handleChange}
              className="w-full bg-emerald-800 rounded-md border-none p-2 outline-none cursor-pointer text-white ring-gray-400 focus:ring-4 shadow-[0_0_5px_1px_#00000083] duration-200"
            >
              <option value="All">Select country</option>
              <option value="Uzbekistan">Uzbekistan</option>
              <option value="Germany">Germany</option>
              <option value="USA">USA</option>
              <option value="Malaysia">Malaysia</option>
              <option value="Canada">Canada</option>
            </select>
          </div>
          <div className="col-start-9 col-end-11">
            <button
              onClick={handleOpen}
              className="w-full bg-green-700 hover:bg-green-900 text-white p-2 outline-none rounded shadow-[0_0_5px_1px_#006c1448]"
            >
              Add
            </button>
          </div>
        </div>
      </div>
      <div className="">
        <AddModalComp open={open} setOpen={setOpen} fetchData={fetchData} />
      </div>
    </div>
  );
};

export default HomeHeader;
