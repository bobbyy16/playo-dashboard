import React from "react";
import { FaSearch } from "react-icons/fa";
import { IoAddOutline } from "react-icons/io5";

export default function TableHead() {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <span className="mr-4">
          Show
          <select
            className="mx-2 border rounded-xl px-2 py-1"
            defaultValue="10"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
          entries
        </span>
        <div className="relative">
          <FaSearch className="absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            className="border rounded-xl px-8 py-1"
          />
        </div>
      </div>
      <button className="bg-green-500 px-4 py-2 text-white rounded-lg flex items-center">
        <IoAddOutline className="mr-1" /> Add Customer
      </button>
    </div>
  );
}
