// import React from 'react';
import { GiStarFormation } from "react-icons/gi";


const Book = ({ data }) => {
  return (
    <div className="max-w-312.5 mx-auto card bg-pink-100 w-96 shadow-sm bg-base-50 h-full flex flex-col">
      <figure className="px-10 pt-10">
        <img src={data.image} alt={data.bookName} className="rounded-xl" />
      </figure>
      
      {/* 1. Added flex flex-col flex-grow to make this text container stretch */}
      <div className="flex flex-col grow">
        <h2 className="text-center mt-2 text-2xl">{data.bookName}</h2>
        <p className="text-center">{data.author}</p>
        
        <div className="flex justify-between mx-9 mt-4">
          <p>{data.category}</p>
          <div className="flex items-center gap-2">
            <p>{data.rating}</p>
            <p><GiStarFormation></GiStarFormation></p>
          </div>
        </div>
        
        {/* 2. Moved mt-auto here to push the entire button container to the bottom */}
        <div className="text-center mt-auto pt-4 mb-6">
          <button className="btn btn-primary p-6 px-9 hover:text-green-600">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Book;
