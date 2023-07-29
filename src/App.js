import "./App.css";
import Createbook from "./components/createbook";
import { useState, useEffect } from "react";
import Booklist from "./components/booklist";
import axios from "axios";
function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");

    setBooks(response.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []); //we use effect method when the our project start it will  connect to the api

  // this method used to set the title and id for the book and this methd
  //sends to create book file as a parametar in there it will be filled an
  const handle_form = async (data) => {
    const response = await axios.post("http://localhost:3001/books", {
      title: data,
    });
    const updatedBooks = [...books, { title: response.data }];

    setBooks(updatedBooks);
  };
  // send this method to book list components
  const deletComponents = (idd) => {
    const deleteBookByIndex = books.filter((book) => {
      return book.id !== idd; // this  it cerate a new array so we
      // need assigne deleteBookByIndex in setBook() method!
    });
    setBooks(deleteBookByIndex);
  };
  // to update the title of the book
  const editComponent = (idd, update) => {
    const updatedBooks = books.map((book) => {
      if (book.id === idd) {
        return { ...book, title: update };
      }

      return book;
    });

    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <h2 className="hl">reading list</h2>

      <Createbook prop={handle_form} />
      <Booklist
        books={books}
        onDelete={deletComponents}
        onUpdate={editComponent}
      />
    </div>
  );
}

export default App;
