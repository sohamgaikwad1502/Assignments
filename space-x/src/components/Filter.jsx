import React from "react";

const Filter = () => {
  const generate_years = () => {
    const arr = [];
    for (let i = 2006; i <= 2020; i++) {
      arr.push(i);
    }
    return arr;
  };

  return (
    <div className="w-64 bg-white p-4 rounded-lg shadow-sm">
      <h1 className="font-bold text-2xl text-center mb-4">Filters</h1>
      <div className="mb-4">
        <h1 className="text-xl text-center mb-2 border-b">Launch Year</h1>
        <div className="grid grid-cols-2 gap-2">
          {generate_years().map((year) => (
            <button
              key={year}
              className="bg-green-200 py-2 px-4 rounded-sm text-sm 
                  cursor-pointer hover:bg-green-300 transition-colors duration-200"
            >
              {year}
            </button>
          ))}
        </div>
      </div>
      <div className="mb-2  pt-2">
        <h1 className="text-xl text-center mb-4 border-b pb-2">
          Successful Launch
        </h1>
        <div className="grid grid-cols-2 gap-2">
          <button
            className="bg-green-200 rounded-sm py-2 px-4 text-sm 
              cursor-pointer hover:bg-green-300 transition-colors duration-200"
          >
            True
          </button>
          <button
            className="bg-green-200 rounded-sm py-2 px-4 text-sm 
              cursor-pointer hover:bg-green-300 transition-colors duration-200"
          >
            False
          </button>
        </div>
      </div>
      <div className="mb-2  pt-2">
        <h1 className="text-xl text-center mb-4 border-b pb-2">
          Successful Landing
        </h1>
        <div className="grid grid-cols-2 gap-2">
          <button
            className="bg-green-200 rounded-sm py-2 px-4 text-sm 
              cursor-pointer hover:bg-green-300 transition-colors duration-200"
          >
            True
          </button>
          <button
            className="bg-green-200 rounded-sm py-2 px-4 text-sm 
              cursor-pointer hover:bg-green-300 transition-colors duration-200"
          >
            False
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
