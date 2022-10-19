import React from "react";
import "./Results.css";

export default function Definition(props) {
  return (
    <div className="Definition">
      {props.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            {definition.definition ? (
              <div>
                {definition.definition}
                <div className="Example">{definition.example}</div>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
