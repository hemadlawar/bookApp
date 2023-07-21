import React from "react";
import { useState } from "react";
export default function EditBook({ books, onUpdate, onSuubmit }) {
  const [update, setUpdate] = useState(books.title);

  const handlesubmit = (event) => {
    event.preventDefault();

    onUpdate(books.id, update);
    onSuubmit();
  };

  const handlechnage = (event) => {
    setUpdate(event.target.value);
  };
  return (
    <div>
      <form onSubmit={handlesubmit} className="book-edit">
        <input className="input" onChange={handlechnage} />
        <button className="button is-primary">Save</button>
      </form>
    </div>
  );
}
