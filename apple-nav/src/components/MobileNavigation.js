import React from 'react'
import { NavLink } from 'react-router-dom'

import { MobileNavigationContainer, ProductMenuMobile } from './NavigationStyles'
// import Logo from './StyleComponents/Logo'
// import SearchIcon from './StyleComponents/SearchIcon'
// import ShopIcon from './StyleComponents/ShopIcon'

const MobileNavigation = props => {
  const { data } = props
  return (
    <MobileNavigationContainer>
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