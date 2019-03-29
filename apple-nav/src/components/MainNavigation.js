import React from 'react'
import { NavLink } from 'react-router-dom'

import { NavigationContainer, ProductMenu }from './NavigationStyles'
import Logo from './StyleComponents/Logo'
import SearchIcon from './StyleComponents/SearchIcon'
import ShopIcon from './StyleComponents/ShopIcon'
import MobileMenuIcon from './StyleComponents/MobileMenuIcon'

const MainNavigation = props => {
  const { data } = props
  return (
    <NavigationContainer>
      <MobileMenuIcon>
        <i className="fas fa-bars"></i>
      </MobileMenuIcon>
      <Logo>
        <NavLink to="/"> 
          <img src="https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/apple/image_large.svg" alt="Apple Logo" />
        </NavLink>
      </Logo>
      <ProductMenu>
        {data.map(category => (
          <NavLink 
            key={category.name} 
            to={category.path}
            activeClassName="activeSelection"
          >
            {category.name}
          </NavLink>
        ))}
      </ProductMenu>
      <SearchIcon>
        <NavLink to="/search">
          <img src="https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/search/image_large.svg" alt="" />
        </NavLink>
      </SearchIcon>
      <ShopIcon>
        <NavLink to="/shop">
          <img src="https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/bag/image_large.svg" alt="" />
        </NavLink>
      </ShopIcon>
    </NavigationContainer>
  )
}

export default MainNavigation