import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  function search(event) {
    event.preventDefault();
    alert(`Search ${keyword}`);
  }
  function handleKeyWordChange(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }
  return (
    <div className="col-8 card card-main-dictionary mt-5 mb-5">
      <p className="m-4">What word do you want to look up?</p>
      <form onSubmit={search}>
        <input type="search" onChange={handleKeyWordChange} />
      </form>
    </div>
  );
}
