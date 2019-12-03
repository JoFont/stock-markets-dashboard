import React, { useState } from 'react'
import _ from 'lodash';
import { searchMarkets } from "../services/iexAPI";
import { Search } from 'semantic-ui-react'



const initSearchResults = { isLoading: false, results: [] };


function SearchBar(props) {
  const [searchResults, setSearchResults] = useState(initSearchResults);
  const [inputValue, setInputValue] = useState("");

  const handleResultSelect = (e, { result }) => {
    // this.setResults({ value: result.title })
  }

  const handleSearchChange = (e, { value }) => {
    setSearchResults({ isLoading: true, results: [] });
    setInputValue(value);

    if(value !== "") {
      searchMarkets(value).then(data => {
        let symbols = [];
  
        data.forEach(sym => {
          symbols.push({
            title: sym.symbol,
            description: sym.securityName,
            price: sym.exchange
          })
        });
  
        setSearchResults({
          isLoading: false,
          results: symbols,
        });
      })
    } else {
      setSearchResults(initSearchResults);
    }
  }

  return (
    <div>
      <Search
        fluid
        loading={searchResults.isLoading}
        onResultSelect={handleResultSelect}
        onSearchChange={_.debounce(handleSearchChange, 500, {
          leading: true,
        })}
        results={searchResults.results}
        value={inputValue}
        {...props}
        />
    </div>
  )
}

export default SearchBar;
