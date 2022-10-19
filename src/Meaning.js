import React from "react";
import "./Results.css";
import Synonyms from "./Synonyms";
import Definitions from "./Definitions";

export default function Meaning(props) {
  return (
    <div className="Meaning mt-4">
      <div className="card-section pt-2 ps-3 pb-1 ">
        <h3 className="PartOfSpeech">{props.meaning.partOfSpeech}</h3>

        <Synonyms synonyms={props.meaning.synonyms} />
        <Definitions definitions={props.meaning.definitions} />
        <br />
      </div>
    </div>
  );
}
