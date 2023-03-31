import React from "react";
import styled from "styled-components";

const SearchBarWrapper = styled.div`
  width: 100%;
  margin: 0 auto; 
  border-bottom: 1px solid black;
  margin-top:10px;
  margin-bottom:10px;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 12px;
  border: none; 
  outline: none;
`;

const SearchBar = () => {
  return (
    <SearchBarWrapper>
      <SearchInput type="text" placeholder="SEARCH FOR AN ITEM, COLOR, COLLECTION..." />
    </SearchBarWrapper>
  );
};

export default SearchBar;
