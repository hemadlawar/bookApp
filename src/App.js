import "./App.css";
import Createbook from "./components/createbook";
import { useState } from "react";
import Booklist from "./components/booklist";
function App() {
  const [books, setBooks] = useState([]);
  const handle_form = (data) => {
    const updatedBooks = [...books, { id: Math.random() * 999, title: data }];
    setBooks(updatedBooks);
  };
  const deletComponents = (idd) => {
    const deleteBookByIndex = books.filter((book) => {
      return book.id !== idd; // this method doesn't create a new array instead it cerate a new array so we
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
