import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary() {
  const [keyword, setKeyword] = useState();
  const [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data);

    // console.log(response.data.meanings[0].partOfSpeech);
    // console.log(response.data.meanings[0].definition);
    // console.log(response.data.meanings[0].example);
    // console.log(response.data.meanings[0].synonyms);
  }

  function search(event) {
    event.preventDefault();

    let apiKey = `64f17b5a3404993ab8co5054f3c7bt29`;
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" autoFocus={true} onChange={handleKeywordChange} />
      </form>
      <Results results={results} />
    </div>
  );
}
