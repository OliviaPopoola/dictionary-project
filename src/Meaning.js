import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <div>
        <p>
          <strong>Definition: </strong>
          {props.meaning.definition}
          <br />
          <span className="example">
            <strong>Example: </strong>
            <em>{props.meaning.example}</em>
          </span>
          <br />
          <div className="synonyms">
            <strong>Synonyms: </strong>
            <Synonyms synonyms={props.meaning.synonyms} />
          </div>
        </p>
      </div>
    </div>
  );
}
