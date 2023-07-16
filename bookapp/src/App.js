import "./App.css";
import Createbook from "./components/createbook";
import { useState } from "react";
function App() {
  const [books, setBooks] = useState([]);
  const handle_form = (data) => {
    const updatedBooks = [...books, { id: Math.random() * 999, title: data }];
    setBooks(updatedBooks);
    console.log(books.length);
  };
  return (
    <div>
      <Createbook prop={handle_form} />
    </div>
  );
}

export default App;
