import React from "react";
import Launches from "./Launches";
import Filter from "./Filter";
const Home = () => {
  return (
    <div className="min-h-screen bg-gray-200 p-1">
      <div>
        <h1 className="text-4xl font-bold text-black p-2">
          SpaceX Launch Programs
        </h1>
      </div>
      <div className="p-2 flex">
        <Filter />
        <div className="flex-grow">
          <Launches />
        </div>
      </div>
    </div>
  );
};

export default Home;
