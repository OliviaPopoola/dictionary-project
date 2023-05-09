import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <span className="Synonyms">
        {props.synonyms[0]}
        {","} {props.synonyms[1]}
      </span>
    );
  } else {
    return null;
  }
}
