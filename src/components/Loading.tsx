import React from "react";

const Loading = () => {
  return (
    <div className="pt-9 px-8 pb-11 rounded-xl shadow-lg">
      <h2 className="text-lg font-medium text-[#4f4f4f]">Uploading...</h2>
      <div className="w-[340.71px] bg-gray-200 rounded-full mt-[30px] h-2 dark:bg-gray-700 relative overflow-hidden">
        <div className="bg-blue-600 h-2 rounded-full progress overflow-hidden w-[33%]"></div>
      </div>
    </div>
  );
};

export default Loading;
