"use client";
import React, { useState, useEffect } from "react";
import EditModalComp from "./EditModalComp";
import axios from "axios";
import { DatasType } from "@/types/modal.type";
import DeleteModalComp from "./DeleteModalComp";

const HomeMain = ({ datas, setDatas }: { datas: any; setDatas: any }) => {
  const [open, setOpen] = useState(false);
  const [del, setDel] = useState(false);
  const [id, setId] = useState("0");

  const [data, setData] = useState({
    id: "",
    fName: "",
    lName: "",
    country: "Uzbekistan",
    birthday: "",
    position: "Junior",
    job: "UX/UI Designer",
    salary: "",
    isMarried: false,
  });
  const handleOpen = async (id: string) => {
    setId(id);
    setOpen(true);
    try {
      const res = await axios.get(`http://localhost:3000/api/${id}`);
      const data = await res.data;
      setData(data);
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  const handleDelete = (id: string) => {
    setDel(true);
    setId(id);
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
      <table className="w-full text-sm text-left rtl:text-right">
        <thead className="text-md">
          <tr>
            <th scope="col" className="px-6 py-3">
              No
            </th>
            <th scope="col" className="px-6 py-3">
              Firstname
            </th>
            <th scope="col" className="px-6 py-3">
              Lastname
            </th>
            <th scope="col" className="px-6 py-3">
              Country
            </th>
            <th scope="col" className="px-6 py-3">
              Birthday
            </th>
            <th scope="col" className="px-6 py-3">
              Position
            </th>
            <th scope="col" className="px-6 py-3">
              Job
            </th>
            <th scope="col" className="px-6 py-3">
              Salary
            </th>
            <th scope="col" className="px-6 py-3">
              isMarried
            </th>
            <th scope="col" className="px-6 py-3 text-end">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {datas?.map((data: DatasType, i: number) => (
            <tr
              key={i}
              className="bg-white border-b text-black hover:bg-gray-50"
            >
              <th scope="row" className="px-6 py-4 font-medium">
                {i + 1}
              </th>
              <td className="px-6 py-4">{data.fName}</td>
              <td className="px-6 py-4">{data.lName}</td>
              <td className="px-6 py-4">{data.country}</td>
              <td className="px-6 py-4">{data.birthday}</td>
              <td className="px-6 py-4">{data.position}</td>
              <td className="px-6 py-4">{data.job}</td>
              <td className="px-6 py-4">{data.salary}</td>
              <td className="px-6 py-4">{data.isMarried ? "Yes" : "No"}</td>
              <td className="px-6 py-4 flex gap-2 justify-end">
                <button
                  onClick={() => handleOpen(data.id)}
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 active:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(data.id)}
                  type="button"
                  className="text-white bg-red-700 hover:bg-red-800 active:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <EditModalComp
        setDatas={setDatas}
        open={open}
        setOpen={setOpen}
        data={data}
      />
      <DeleteModalComp open={del} setOpen={setDel} id={id} />
    </div>
  );
};

export default HomeMain;
