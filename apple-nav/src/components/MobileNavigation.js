import React from 'react'
import { NavLink } from 'react-router-dom'

import { MobileNavigationContainer, ProductMenuMobile } from './NavigationStyles'
import SearchBar from './StyleComponents/SearchBar'

const MobileNavigation = props => {
  const { data } = props
  return (
    <MobileNavigationContainer>
      <SearchBar show />
      <ProductMenuMobile>
        {data.map(category => (
          <NavLink
            key={category.name}
            to={category.path}
            activeClassName="activeSelection"
          >
            {category.name}
          </NavLink>
        ))}
      </ProductMenuMobile>
    </MobileNavigationContainer>
  )
}

export default MobileNavigation