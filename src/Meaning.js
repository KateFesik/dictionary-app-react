import React from "react";
import "./Results.css";
import Synonyms from "./Synonyms";
import Definitions from "./Definitions";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>

      <Synonyms synonyms={props.meaning.synonyms} />

      <Definitions definitions={props.meaning.definitions} />
      <br />
    </div>
  );
}
