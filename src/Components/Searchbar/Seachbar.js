import React, { useState } from "react";
import "./../../Assets/Css/Searchbar.css";
const Seachbar = ({ handleSearch }) => {
  const [selectedOption, setSelectedOption] = useState("sd_id");
  const [searchedString, setSearchedString] = useState("");
  return (
    <div className="col-md-8 searchbar">
    <form onSubmit={e => e.preventDefault()}>
    <div className="form-group search-form-group">
        <select
          className="form-select col-2"
          defaultValue={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
        >
          <option value="sd_id">SD ID</option>
          <option value="name">Name</option>
          <option value="email">Email</option>
        </select>
        <input
          defaultValue={searchedString}
          onChange={(e) => setSearchedString(e.target.value)}
          type="text"
          className="form-control col-8"
          placeholder="Search your Query"
        />
        <button
          className="btn btn-primary col-2 text-center"
          type="submit"
          onClick={() => handleSearch(selectedOption, searchedString)}
        >
          <i className="fa fa-search d-lg-block d-none mr-3" aria-hidden="true"></i>{" "}
          <span>Search</span>
        </button>
      </div>
    </form>
    </div>
  );
};

export default Seachbar;
