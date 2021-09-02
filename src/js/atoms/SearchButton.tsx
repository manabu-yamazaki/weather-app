import React from 'react';

const SearchButton: React.FunctionComponent = () => {
  return (
    <button onClick={() => console.log("searchButton.click")}>検索</button>
  );
}

export default SearchButton;