import React, { useState, useEffect } from "react";
import axios from "axios";

export default function SearchForm() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  function handleChange(e) {
    e.preventDefault();
    setSearch(e.target.value);
    console.log(e.target.value);
  }


  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(res => {
        console.log(res.data.results);
        let characters = res.data.results.filter(char => char.name.toLowerCase().includes(search.toLowerCase())
        );
        setResults(characters);
        console.log(results);
      })
      .catch(err => console.log(err));

  }, [search])


  return (
    <section className="search-form">
      <form>
        <label htmlFor="search">
          Search Characters
        </label>
        <input
          className="search-bar"
          name="search"
          type="text"
          id="search"
          placeholder="Search Characters"
          value={search}
          onChange={handleChange}
          autoComplete="off" />
        <button type="submit">Submit</button>
      </form>
      <div>
        {results.map(result => {
          return <div>
            <img src={result.image}></img>
            <h1>{result.name}</h1>
            <h2>Gender: {result.gender}</h2>
            <h3>Species: {result.species}</h3>
          </div>;
        })}
      </div>

    </section>
  );
}

