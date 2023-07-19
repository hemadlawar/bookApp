import React from "react";
import EditBook from "./editbook";
import { useState } from "react";
export default function Bookshow({ books, id, onDelete }) {
  const [title, setTitle] = useState(books.title);
  let bookEdit = () => {
    setTitle(<EditBook />);
  };
  const Deletee = () => {
    onDelete(id);
  };
  return (
    <div>
      <div>{title}</div>
      <button onClick={Deletee}>delete</button>
      <button onClick={bookEdit}>Edit book</button>
    </div>
  );
}
