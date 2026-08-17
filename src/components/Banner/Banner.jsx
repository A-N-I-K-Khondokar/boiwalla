// import React from 'react';
import bannerBook from "../../assets/bannerBook.png";

const Banner = () => {
    return (
         <div className="max-w-312.5 mx-auto mt-4 flex justify-around items-center bg-[rgba(243, 243, 243, 1)] ">
              <div className="w-1/2">
                <p className="text-6xl">Books to freshen Up your bookselfs</p>
                <button className="btn btn-success mt-7 text-2xl p-8">
                  View The List
                </button>
              </div>
              <div className="">
                <img src={bannerBook} alt="" />
              </div>
            </div>
    );
};

export default Banner;