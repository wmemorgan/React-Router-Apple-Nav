/* Primary Navigation Menu */
import React from 'react'
import { NavLink } from 'react-router-dom'

import { NavigationContainer, ProductMenu }from './NavigationStyles'
import Logo from './StyleComponents/Logo'
import { SearchIcon } from './StyleComponents/SearchStyles'
import ShopIcon from './StyleComponents/ShopIcon'
import MobileMenuIcon from './StyleComponents/MobileMenuIcon'
import SearchBar from './StyleComponents/SearchBar'
import CloseIcon from './StyleComponents/CloseIcon'
import CloseIconMobile from './StyleComponents/CloseIconMobile'

const MainNavigation = props => {
  const { data, toggleDisplay } = props

  return (
    <NavigationContainer>
      <MobileMenuIcon
        {...props} 
        onClick={toggleDisplay}
      >
        <i className="fas fa-bars"></i>
      </MobileMenuIcon>
      <CloseIconMobile
        {...props}
        onClick={toggleDisplay}
      >
        <i className="fa fa-times" aria-hidden="true"></i>
      </CloseIconMobile>
      <Logo>
        {/* Deliberately used anchor tags to invoke a page reload */}
        <a href="/">
          <img src="https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/apple/image_large.svg" alt="Apple Logo" />
        </a>
      </Logo>

      {/* Map out navigation links to menu items */}
      <ProductMenu {...props}>
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

      <SearchBar {...props} />      
      <SearchIcon
        {...props}
        onClick={toggleDisplay}
      >
        <NavLink to="/search">
          <img src="https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/search/image_large.svg" alt="" />
        </NavLink>
      </SearchIcon>
      
      <ShopIcon {...props}>
        <NavLink to="/shop">
          <img src="https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/bag/image_large.svg" alt="" />
        </NavLink>
      </ShopIcon>

      <CloseIcon 
        {...props}
        onClick={toggleDisplay} 
      >
        <i className="fa fa-times" aria-hidden="true"></i>
      </CloseIcon>
    </NavigationContainer>
  )
}

export default MainNavigation
