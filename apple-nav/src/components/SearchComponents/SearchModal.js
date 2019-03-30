import React from 'react'
import { NavLink } from 'react-router-dom'

import { SearchModalContainer } from '../StyleComponents/SearchStyles'

const SearchModal = props => {
  const { searchData } = props
  return (
    <SearchModalContainer>
      <h2>Quick Links</h2>
      <ul>
        {searchData[0].subMenu.map(item => (
          <li key={item.name}>
            <NavLink to={item.path}>
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </SearchModalContainer>
  )
}

export default SearchModal