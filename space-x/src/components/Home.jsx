import React, { useEffect, useState } from "react";
import axios from "axios";
import Launches from "./Launches";
import { useDispatch } from "react-redux";
import {
  WITH_ALL_FILTERS,
  WITH_LAUNCH_AND_LAND,
  WITH_LAUNCH_SUCCESS,
  WITHOUT_ANY_FILTERS,
} from "../utils/constants";
import { addAllData } from "../utils/slices/initialDataSlice";
import { addLaunches } from "../utils/slices/launchSlice";
import { addLaunchAndLand } from "../utils/slices/launchAndLandSlice";
import { addLaunchAndYear } from "../utils/slices/launchLandYearSlice";

const Home = () => {
  const dispatch = useDispatch();
  const [selectedYear, setSelectedYear] = useState(null);
  const [launchSuccess, setLaunchSuccess] = useState(null);
  const [landSuccess, setLandSuccess] = useState(null);

  const generate_years = () => {
    const arr = [];
    for (let i = 2006; i <= 2020; i++) {
      arr.push(i);
    }
    return arr;
  };

  const fetchAllData = async () => {
    try {
      const response = await axios.get(WITHOUT_ANY_FILTERS);
      dispatch(addAllData(response.data));
    } catch (error) {
      console.log(error.message);
    }
  };

  const fetchLaunchAndLand = async () => {
    try {
      const response = await axios.get(WITH_LAUNCH_AND_LAND);
      dispatch(addLaunchAndLand(response.data));
    } catch (error) {
      console.log(error.message);
    }
  };

  const fetchlaunchsuccess = async () => {
    try {
      const response = await axios.get(WITH_LAUNCH_SUCCESS);
      dispatch(addLaunches(response.data));
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchAllData();
    fetchLaunchAndLand();
    fetchlaunchsuccess();
  }, []);

  const handleYearFilter = (year) => {
    setSelectedYear(selectedYear === year ? null : year);
  };

  const handleLaunchSuccessFilter = (success) => {
    setLaunchSuccess(launchSuccess === success ? null : success);
  };

  const handleLandSuccessFilter = (success) => {
    setLandSuccess(landSuccess === success ? null : success);
  };

  return (
    <div className="min-h-screen w-full bg-gray-200 p-1">
      <div>
        <h1 className="text-4xl font-bold text-black p-2">
          SpaceX Launch Programs
        </h1>
      </div>
      <div className="p-2 flex">
        <div className="w-64 h-3/4 bg-white p-4 rounded-lg shadow-sm">
          <h1 className="font-bold text-2xl text-left mb-4">Filters</h1>
          <div className="mb-4">
            <h1 className="text-xl text-center mb-2 border-b">Launch Year</h1>
            <div className="grid grid-cols-2 gap-2">
              {generate_years().map((year) => (
                <button
                  key={year}
                  className={`py-2 px-4 rounded-sm text-sm 
                  cursor-pointer transition-colors duration-200 ${
                    selectedYear === year
                      ? "bg-green-500 text-white"
                      : "bg-green-200 hover:bg-green-300"
                  }`}
                  onClick={() => handleYearFilter(year)}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>
          <div className="mb-2 pt-2">
            <h1 className="text-xl text-center mb-4 border-b pb-2">
              Successful Launch
            </h1>
            <div className="grid grid-cols-2 gap-2">
              <button
                className={`rounded-sm py-2 px-4 text-sm 
                cursor-pointer transition-colors duration-200 ${
                  launchSuccess === true
                    ? "bg-green-500 text-white"
                    : "bg-green-200 hover:bg-green-300"
                }`}
                onClick={() => handleLaunchSuccessFilter(true)}
              >
                True
              </button>
              <button
                className={`rounded-sm py-2 px-4 text-sm 
                cursor-pointer transition-colors duration-200 ${
                  launchSuccess === false
                    ? "bg-green-500 text-white"
                    : "bg-green-200 hover:bg-green-300"
                }`}
                onClick={() => handleLaunchSuccessFilter(false)}
              >
                False
              </button>
            </div>
          </div>
          <div className="mb-2 pt-2">
            <h1 className="text-xl text-center mb-4 border-b pb-2">
              Successful Landing
            </h1>
            <div className="grid grid-cols-2 gap-2">
              <button
                className={`rounded-sm py-2 px-4 text-sm 
                cursor-pointer transition-colors duration-200 ${
                  landSuccess === true
                    ? "bg-green-500 text-white"
                    : "bg-green-200 hover:bg-green-300"
                }`}
                onClick={() => handleLandSuccessFilter(true)}
              >
                True
              </button>
              <button
                className={`rounded-sm py-2 px-4 text-sm 
                cursor-pointer transition-colors duration-200 ${
                  landSuccess === false
                    ? "bg-green-500 text-white"
                    : "bg-green-200 hover:bg-green-300"
                }`}
                onClick={() => handleLandSuccessFilter(false)}
              >
                False
              </button>
            </div>
          </div>
        </div>
        <div className="flex-grow ml-4">
          <div className="grid grid-cols-4 gap-6">
            <Launches
              year={selectedYear}
              launch={launchSuccess}
              land={landSuccess}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
