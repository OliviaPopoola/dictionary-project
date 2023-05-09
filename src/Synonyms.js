import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return <div>{props.synonyms[0]}</div>;
  } else {
    return null;
  }
}
