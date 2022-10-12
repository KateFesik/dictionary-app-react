import React, { useState, useEffect } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [resultsState, setResultsState] = useState({ ready: false });

  useEffect(() => {
    setResultsState((existingValues) => ({
      ...existingValues,
      ready: false,
    }));
  }, [keyword]);

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    let apiRes = null;
    (async () => {
      try {
        apiRes = await axios.get(apiUrl).then(handleResponse);
      } catch (err) {
        apiRes = err.response;
      } finally {
        console.log(apiRes);
      }
    })();
  }

  function handleKeyWordChange(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }
  function handleResponse(response) {
    if ((response) => response.text()) {
      setResultsState({
        ready: true,
        results: response.data[0],
      });
      console.log(response.data[0]);
    }
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

        {resultsState.ready ? (
          <Results results={resultsState.results} />
        ) : (
          console.log("ready is false")
        )}
      </form>
    </div>
  );
}
