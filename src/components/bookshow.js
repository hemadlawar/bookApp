import React from "react";
import EditBook from "./editbook";
import { useState } from "react";
export default function Bookshow({ books, id, onDelete }) {
  const [bEditt, setEdit] = useState(false);

  const Deletee = () => {
    onDelete(id);
  };
  const Editform = () => {
    setEdit(!bEditt);
  };
  if (bEditt) {
    {
      books.title = (
        <div>
          <EditBook />
        </div>
      );
    }
  }

  return (
    <div>
      <button onClick={Deletee}>delete</button>
      {books.title}
      <button onClick={Editform}>Edit book</button>
    </div>
  );
}
