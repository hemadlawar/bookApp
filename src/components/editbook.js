import React from "react";

export default function EditBook() {
  const handleinput = (event) => {
    event.preventDefault();

    console.log("hhhh");
  };
  return (
    <div>
      <form onSubmit={handleinput}>
        <input />
      </form>
    </div>
  );
}
