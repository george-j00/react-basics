import axios from "axios";
import React, { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";
import { useFetch } from "../customhooks/useFetch";

const EnhancedCounter = () => {
  const [count, setcount] = useState(0);
  const [apiUrl, setApiUrl] = useState(
    "https://jsonplaceholder.typicode.com/users/1"
  );
    
  const [data, error, isLoading] = useFetch(apiUrl);

  useEffect(() => {
    if (count > 0 && count <= 10) {
      setApiUrl(`https://jsonplaceholder.typicode.com/users/${count}`);
    }
  }, [count]);

  return (
    <>
      <div className="h-screen">
        <h1 className="flex py-5 text-5xl font-bold text-blue-900 items-center justify-center">
          Counter Application 2
        </h1>

        <div className="flex flex-col justify-center items-center ">
          <div className="flex flex-col mt-5">
            <h1 className="flex justify-center text-7xl py-5">{count}</h1>
            <div className="flex gap-5 py-5">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => setcount((prevCount) => prevCount - 1)}
              >
                -
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => setcount((prevCount) => prevCount + 1)}
              >
                +
              </button>
            </div>
          </div>

          {isLoading ? (
            <p> Loading .... </p>
          ) : error ? (
            <p> {error} </p>
          ) : (
            <ProfileCard addressData={data} />
          )}
          
        </div>
      </div>
    </>
  );
};

export default EnhancedCounter;
