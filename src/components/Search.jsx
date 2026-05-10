import React, {useRef, useEffect} from "react";

function Search() {

const searchRef = useRef("")

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(e) => console.log("Searching...")}
        ref={searchRef}
      />
    </div>
  );
}

export default Search;
