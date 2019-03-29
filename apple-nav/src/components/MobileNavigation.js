/* Mobile Navigation Menu */
import React from 'react'
import { NavLink } from 'react-router-dom'

import { MobileNavigationContainer, ProductMenuMobile } from './NavigationStyles'
import SearchBarMobile from './StyleComponents/SearchBarMobile'

const MobileNavigation = props => {
  const { data } = props
  return (
    <MobileNavigationContainer {...props}>
      <SearchBarMobile {...props} />
      <ProductMenuMobile {...props}>
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