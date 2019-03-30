/* Search bar component */
import React from 'react';

// Styled components
import { SearchIconOff, SearchFieldContainer } from './SearchStyles'

const SearchBar = (props) => {
  return (
    <SearchFieldContainer {...props}>
      <SearchIconOff>
        <img src="https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/search/image_large.svg" alt="" />
      </SearchIconOff>
      <input
        type="search"
        className="search fas"
        placeholder="Search apple.com"
      />
    </SearchFieldContainer>
  )
}

export default SearchBar
