import React from "react";

const ProfileCard = ({ addressData }) => {
  return (
    <>
      <h1 className="text-5xl mt-12 font-bold  text-center text-blue-900">
        User Data
      </h1>
      <div className="flex justify-center">
        <div>
          {
            //   addressData.map((address , index) => (
            //       <div className='mt-5 bg-blue-300 text-center p-4'>
            //           <h1 className='font-bold text-white text-2xl'>{address.name}</h1>
            //           <p className='mt-4 text-lg w-96'>{address.email}</p>
            //       </div>
            //   ))

            //used in enhanced counter component
            <div className="mt-5 bg-blue-300 text-center p-4">
              <h1 className="font-bold text-white text-2xl">{addressData.name}</h1>
              <p className="mt-4 text-lg w-96">{addressData.email}</p>
            </div>
          }
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
