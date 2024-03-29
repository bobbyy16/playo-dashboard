import React from "react";
import data from "../assets/data.json";
import { FaSort, FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import TableHead from "./TableHead";
import TableFoot from "./TableFoot";

export default function Table() {
  const dataArray = data.data;

  return (
    <div className="container mx-auto px-4 py-8">
      <TableHead />
      <table className="w-full border-collapse">
        <thead>
          <tr className="">
            <th className="px-4 py-2">Tracking ID</th>
            <th className="px-4 py-2">Product</th>
            <th className="px-4 py-2">
              <FaSort className="inline-block mr-1" />
              Customer
            </th>
            <th className="px-4 py-2">
              <FaSort className="inline-block mr-1" />
              Date
            </th>
            <th className="px-4 py-2">
              <FaSort className="inline-block mr-1" />
              Amount
            </th>
            <th className="px-4 py-2">Payment Mode</th>
            <th className="px-4 py-2">
              <FaSort className="inline-block mr-1" />
              Status
            </th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {dataArray.map((customerData, index) => (
            <tr
              key={index}
              className={`${index % 2 === 0 ? "bg-gray-200" : ""}`}
            >
              <td className="border-gray-300 px-2 py-2 text-center text-black-500">
                {customerData.trackingId}
              </td>
              <td className="border-gray-300 px-2 py-2 flex items-center justify-center text-black">
                {customerData.img && (
                  <img
                    src={customerData.img}
                    width={25}
                    height={25}
                    className="mr-2 rounded-lg"
                    alt="Product"
                  />
                )}
                {customerData.productName}
              </td>

              <td className="border-gray-300 px-2 py-2 text-center text-black-500">
                {customerData.customer}
              </td>
              <td className="border-gray-300 px-2 py-2 text-center text-black-500">
                {customerData.date}
              </td>
              <td className="border-gray-300 px-2 py-2 text-center text-black-500">
                {customerData.amount}
              </td>
              <td className="border-gray-300 px-2 py-2 text-center text-black-500">
                {customerData.paymentMode}
              </td>
              <td className="border-gray-300 px-2 py-2 text-center text-black-500">
                <span
                  className={`inline-block px-2 py-1 rounded-2xl ${
                    customerData.status === "Delivered"
                      ? "bg-green-100 text-green-500"
                      : customerData.status === "Process"
                      ? "bg-orange-100 text-orange-500"
                      : customerData.status === "Canceled"
                      ? "bg-red-100 text-red-500"
                      : ""
                  }`}
                >
                  {customerData.status}
                </span>
              </td>
              <td className="border-gray-300 px-2 py-2 text-center text-black-500 flex justify-center items-center">
                <FaRegEdit className="text-black cursor-pointer mr-2 text-xl" />
                <RiDeleteBinLine className="text-gray-400 text-xl" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <TableFoot />
    </div>
  );
}
