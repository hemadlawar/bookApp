import React from "react";

export default function EditBook() {
  const handleinput = () => {
    console.log("hhhh");
  };
  return (
    <div>
      <form>
        <input on onClick={handleinput} />
      </form>
    </div>
  );
}
