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
    <div>
      <form onSubmit={formSubmit}>
        <input onChange={inputChange} />
      </form>
    </div>
  );
}
