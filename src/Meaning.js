import React from "react";
import Synonyms from "./Synonyms";
import { Capitalise } from "./Utils";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <div>
        <div className="definition">
          {Capitalise(props.meaning.definition)}{" "}
        </div>

        <div className="example">
          <em>
            {props.meaning.example ? Capitalise(props.meaning.example) : null}
          </em>
        </div>
        <div className="synonyms pt-3">
          <strong>Synonyms: </strong>
          <Synonyms synonyms={props.meaning.synonyms} />
        </div>
      </div>
    </div>
  );
}
