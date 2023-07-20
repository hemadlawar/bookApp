import "./App.css";
import Createbook from "./components/createbook";
import { useState } from "react";
import Booklist from "./components/booklist";
function App() {
  const [books, setBooks] = useState([]);

  // this method used to set the title and id for the book and this methd
  //sends to create book file as a parametar in there it will be filled an
  const handle_form = (data) => {
    const updatedBooks = [...books, { id: Math.random() * 999, title: data }];
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

  return (
    <div>
      <Createbook prop={handle_form} />
      <Booklist books={books} onDelete={deletComponents} />
    </div>
  );
}

export default App;
