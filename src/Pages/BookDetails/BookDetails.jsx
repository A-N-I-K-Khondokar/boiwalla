// import React from 'react';
import { useLoaderData, useParams } from "react-router";
import { addToStoredDB } from "../../utilities/addToDB";
import { addWishToStoredDB } from "../../utilities/addToWishList";

const BookDetails = () => {
  const { id } = useParams();
  const bookID = parseInt(id);

  const data = useLoaderData();

  const singleBooks = data.find((sBookID) => sBookID.bookId === bookID);
  //Destructuring the single book keys
  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = singleBooks;

  const handleReadList = (id) => {
    addToStoredDB(id);
  };
  const handleWishList = (id) => {
    addWishToStoredDB(id);
  };

  return (
    <div>
      <div className="max-w-312.5 mx-auto flex justify-between gap-9 mt-15">
        <div className="w-1/2">
          <img src={image} alt="" />
        </div>
        <div className="w-1/2">
          <p className="text-4xl my-2">{bookName}</p>
          <p>By : {author}</p>
          <div className="divider divider-success mb-2"></div>
          <p>{category}</p>
          <div className="divider divider-success mb-4"></div>
          <p>
            <span className="font-bold mb-3">Review</span> :{review}
          </p>

          <p>
            <span className="font-bold">Tag </span>
            {tags.map((i) => (
              <button className="p-2 ">#{i}</button>
            ))}
          </p>

          <div className="mt-6 font-bold">
            <p>Number of pages : {totalPages}</p>
            <p>Publisher : {publisher}</p>
            <p>Year of Publishing: {yearOfPublishing}</p>
            <p>Ratting : {rating}</p>
          </div>

          <div className=" flex gap-4 mt-4">
            <button onClick={()=>handleReadList(id)} className="btn btn-primary p-6 px-10 ">Read</button>
            <button onClick={()=>handleWishList(id)} className="btn btn-info p-6 px-10 text-white">
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
