import React from "react";
import EditBook from "./editbook";
import { useState } from "react";
export default function Bookshow({ books, id, onDelete, onUpdate }) {
  const [showEdit, setEdit] = useState(false);

  const Deletee = () => {
    onDelete(id);
  };
  const turn = () => {
    setEdit(!showEdit);
  };

  const onSuubmit = () => {
    setEdit(false);
  };
  let content = <h3>{books.title}</h3>;
  if (showEdit) {
    content = (
      <EditBook onUpdate={onUpdate} books={books} onSuubmit={onSuubmit} />
    );
  }

  return (
    <div>
      <button onClick={Deletee}>delete</button>
      {content}
      <button onClick={turn}>editbook</button>
    </div>
  );
}
