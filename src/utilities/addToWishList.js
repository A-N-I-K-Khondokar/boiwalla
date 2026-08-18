// What you write,                        What you get
// "localStorage.getItem(""ReadList"")",  The saved data (as a string)
// "The key itself (""ReadList"")",       Just the name you used to store it
// The actual array,                      Only after you do JSON.parse()

const getStoredBooks = () => {
  const storedBookSTR = localStorage.getItem("WishList");
  if (storedBookSTR) {
    return JSON.parse(storedBookSTR);
  } else return [];
};

const addWishToStoredDB = (id) => {
  const storedBookData = getStoredBooks();
  // it contains either empty array or an array of object

  // we are storing the value as ID so we are going to check first
  // if the id is already there or not
  // if there then push it as integer
  // then stringify it before store in the local storage

  if (storedBookData.includes(id)) {
    alert("Already Added TO WishLIST");
  } else {
    storedBookData.push(id);
    const data = JSON.stringify(storedBookData);
    localStorage.setItem("WishList", data);
    alert("Added To WishList Sucessfully!!")
  }
};

export { addWishToStoredDB };
