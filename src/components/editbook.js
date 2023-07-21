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
      <form onSubmit={handlesubmit}>
        <input onChange={handlechnage} />
      </form>
    </div>
  );
}
