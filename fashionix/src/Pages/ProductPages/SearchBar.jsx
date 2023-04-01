import React from "react";
import styled from "styled-components";

const SearchBarWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  border-bottom: 1px solid black;
  margin-top: 20px;
  margin-bottom: 30px;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 12px;
  border: none;
  outline: none;
`;

const FilterButton = styled.button`
  width: 80px;
  height: 20px;
  border: 1px solid gray;
  background-color: white;
  margin-top: 40px;
  margin-right:20px;
  font-size:12px;
`;

const DIV = styled.div`
display:flex;
justify-content:space-between;
`

const SearchBar = () => {
  return (
    <DIV className="searchFilterBox">
      <SearchBarWrapper>
        <SearchInput
          type="text"
          placeholder="SEARCH FOR AN ITEM, COLOR, COLLECTION..."
        />
      </SearchBarWrapper>
      <FilterButton>FILTERS</FilterButton>
    </DIV>
  );
};

export default SearchBar;
