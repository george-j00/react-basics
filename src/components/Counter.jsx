import React, { useState } from "react";

const Counter = () => {
  const [count, setcount] = useState(0);

  return (
    <>
     <div className="flex flex-col justify-center items-center h-screen">
     <h1 className="text-5xl font-bold text-blue-900">
        Counter Application
      </h1>
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
     </div>
    </>
  );
};

export default Counter;
