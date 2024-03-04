import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchProducts } from "../../redux/slices/productSlice";
import "./SearchBar.css";
import { fetchProducts } from "../../redux/slices/productSlice";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === "") {
      dispatch(fetchProducts()); // Fetch all products if the search query is empty
    } else {
      dispatch(searchProducts(query));
    }
  };

  const resetSearch = () => {
    setQuery("");
    dispatch(fetchProducts());
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={query}
        onChange={onChange}
        placeholder="Search for products..."
        className="search-input" 
      />
      <button type="submit" className="search-button">
        Search
      </button>
      <button type="button" onClick={resetSearch} className="reset-button">
        Reset
      </button>
    </form>
  );
};

export default SearchBar;
