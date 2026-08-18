// import React from 'react';
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../utilities/addToDB";
import Book from "../../components/Book/Book";
import { getStoredBooks } from "../../utilities/addToWishList";

const ReadList = () => {
  const data = useLoaderData();

  const storedReadListData = getStoredBook();

  //converted every id as integer
  const storedReadListDataASinteger = storedReadListData.map((id) =>
    parseInt(id),
  );

  const readlist = data.filter((book) =>
    storedReadListDataASinteger.includes(book.bookId),
  );

  const storedWishListData = getStoredBooks();
  const sWishInteger = storedWishListData.map((i) => parseInt(i));
  const wishList = data.filter((book) => sWishInteger.includes(book.bookId));

  return (
    <div className="max-w-312.5 mx-auto">
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          {readlist.map((book) => (
            <Book key={book.bookId} data={book}></Book>
          ))}
        </TabPanel>

        <TabPanel>
          {wishList.map((book) => (
            <Book key={book.bookId} data={book}></Book>
          ))}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
