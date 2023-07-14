import React from "react";

export default function Createbook({ prop }) {
  let data = "";
  const formSubmit = (event) => {
    event.preventDefault();
    prop(data);
  };
  const inputChange = (event) => {
    data = event.target.value;
  };
  return (
    <div>
      <form onSubmit={formSubmit}>
        <input onChange={inputChange} />
      </form>
    </div>
  );
}
