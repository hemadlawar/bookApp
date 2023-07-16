import React from "react";

export default function Bookshow({ books, id, onDelete }) {
  const Deletee = () => {
    onDelete(id);
  };
  return (
    <div>
      <div>{books.title}</div>
      <button onClick={Deletee}>delete</button>
    </div>
  );
}
