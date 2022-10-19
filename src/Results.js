import React from "react";
import "./Results.css";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

export default function Results(props) {
  // console.log(props.results);

  return (
    <div className="Results m-2">
      <h2>{props.results.word}</h2>

      {props.results.phonetics.map(function (phonetic, index) {
        return (
          <div key={index}>
            <Phonetic phonetic={phonetic} />
          </div>
        );
      })}
      {props.results.meanings.map(function (meaning, index) {
        return (
          <div key={index}>
            <Meaning meaning={meaning} />
          </div>
        );
      })}
    </div>
  );
}
