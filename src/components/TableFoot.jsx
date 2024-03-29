import React from "react";

export default function TableFoot() {
  return (
    <div className="flex justify-center mt-4">
      <span className="px-2 py-1 text-gray-400 cursor-pointer">previous</span>
      <button className="px-3 py-1 bg-green-500 text-white font-semibold rounded mr-2">
        1
      </button>
      <button className="px-3 py-1 border text-black font-semibold rounded mr-2">
        2
      </button>
      <button className="px-3 py-1 border text-black font-semibold rounded mr-2">
        3
      </button>
      <span className="px-2 py-1 text-gray-400 cursor-pointer">next</span>
    </div>
  );
}
