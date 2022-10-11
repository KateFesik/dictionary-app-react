import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleKeyWordChange(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }
  function handleResponse(response) {
    console.log(response.data[0]);
  }

  return (
    <div className="col-8 card card-main-dictionary mt-5 mb-5">
      <p className="m-4">What word do you want to look up?</p>
      <form onSubmit={search}>
        <input
          className="input-keyword"
          type="search"
          autoFocus="on"
          placeholder="Search for a word"
          onChange={handleKeyWordChange}
        />
      </form>
    </div>
  );
}
