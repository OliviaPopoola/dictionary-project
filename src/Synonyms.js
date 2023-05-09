import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        {props.synonyms[0]}
        {","} {props.synonyms[1]}
      </div>
    );
  } else {
    return null;
  }
}
