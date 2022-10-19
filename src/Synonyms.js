import React from "react";
import "./Results.css";

export default function Synonyms(props) {
  if (props.synonyms.length !== 0) {
    return (
      <div>
        <div className="Synonyms row m-3">
          {props.synonyms.map(function (synonym, index) {
            return (
              <div className="col-lg-3 col-sm-5" key={index}>
                <li>{synonym}</li>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
