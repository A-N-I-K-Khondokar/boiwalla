// import React from 'react';
import bannerBook from "../../assets/bannerBook.png";

const Banner = () => {
    return (
         <div className="max-w-312.5 mx-auto flex justify-around py-14 items-center bg-pink-100 p-9 rounded-2xl mt-15">
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