import React from "react";
import "./Results.css";

export default function Definition(props) {
  return (
    <div>
      {props.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            {definition.definition ? <div>{definition.definition}</div> : null}
          </div>
        );
      })}
    </div>
  );
}
