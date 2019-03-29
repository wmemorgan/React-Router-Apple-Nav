/* Search bar component */
import React from 'react';
import { NavLink } from 'react-router-dom'

// Styled components
import { SearchIcon, SearchFieldContainer } from './SearchStyles'

const SearchBar = (props) => {
  console.log(props)
  // const { show } = props.show
  return (
    <SearchFieldContainer {...props}>
      <SearchIcon {...props}>
        <NavLink to="/search">
          <img src="https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/search/image_large.svg" alt="" />
        </NavLink>
      </SearchIcon>
      <input
        type="search"
        className="search fas"
        placeholder="Search apple.com"
      />
    </SearchFieldContainer>
  )
}

export default SearchBar
