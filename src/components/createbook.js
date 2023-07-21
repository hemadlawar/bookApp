import React from "react";
import { useState } from "react";
export default function Createbook({ prop }) {
  const [title, setTitle] = useState("");
  const formSubmit = (event) => {
    event.preventDefault();
    prop(title);
  };
  const inputChange = (event) => {
    setTitle(event.target.value);
  };
  return (
    <div className="book-create">
      <form onSubmit={formSubmit}>
        <input onChange={inputChange} className="input" />
        <button className="button">Create!</button>
      </form>
    </div>
  );
}
