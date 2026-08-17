// import React from 'react';

import { Suspense } from "react";
import Book from "../../components/Book/Book";

// import { useEffect, useState } from "react";

const Books = ({data}) => {
    // fetching data form public by using useEffect()
    // const [allBooks, setAllBooks]=useState([])
    
    // useEffect(()=>{
    //     fetch('booksData.json').then(res=>res.json()).then(data=>
    //         setAllBooks(data)
    //     )
    // },[])

    return (
        <div className="max-w-312.5 mx-auto mt-4">
            <p className="text-center text-4xl mt-20 mb-8">BOOKS</p>
            <Suspense fallback="loading">
                <div className="grid grid-cols-3 gap-6 ">
                    {
                        data.map(data=><Book key={data.bookId} data={data}></Book>)
                    }
                </div>
            </Suspense>
        </div>
    );
};

export default Books;