import React from "react";
import Bookshow from "./bookshow";
export default function Booklist({ books, onDelete, onUpdate }) {
  const show = books.map((books) => {
    return (
      <Bookshow
        books={books}
        id={books.id}
        onDelete={onDelete}
        onUpdate={onUpdate}
      />
    );
  });

  return <div className="book-list">{show}</div>;
}
