// import React from 'react';

import { useEffect, useState } from "react";

const Books = () => {
    // fetching data form public by using useEffect()
    const [allBooks, setAllBooks]=useState([])
    
    useEffect(()=>{
        fetch('booksData.json').then(res=>res.json()).then(data=>
            console.log(data)
        )
    },[])

    return (
        <div className="max-w-312.5 mx-auto mt-4">
            <p>Form books</p>
        </div>
    );
};

export default Books;