import React from "react";
import Bookshow from "./bookshow";
export default function Booklist({ books, onDelete }) {
  const show = books.map((books) => {
    return <Bookshow books={books} id={books.id} onDelete={onDelete} />;
  });

  return <div>{show}</div>;
}
