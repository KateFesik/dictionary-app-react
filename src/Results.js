import React from "react";

export default function Results(props) {
  console.log(props.results);

  return (
    <div className="Results">
      {props.results.meanings[0].definitions[0].definition}
    </div>
  );
}
