/* Primary Navigation Menu */
import React from 'react'
import { NavLink } from 'react-router-dom'

import { NavigationContainer, ProductMenu }from './NavigationStyles'
import Logo from './StyleComponents/Logo'
import { SearchIcon } from './SearchComponents/SearchStyles'
import SearchBar from './SearchComponents/SearchBar'
import { ShopIcon } from './ShopComponents/ShopComponentStyles'
import MobileMenuIcon from './StyleComponents/MobileMenuIcon'

import CloseIcon from './StyleComponents/CloseIcon'
import CloseIconMobile from './StyleComponents/CloseIconMobile'

const MainNavigation = props => {
  const { data, toggleDisplay, toggleModal, toggleShopModal } = props

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
        onClick={toggleModal}
      >
        
        <img src="https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/search/image_large.svg" alt="" />
        
      </SearchIcon>
      
      <ShopIcon {...props} onClick={toggleShopModal}>
        <img src="https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/bag/image_large.svg" alt="" />
      </ShopIcon>

      <CloseIcon 
        {...props}
        onClick={toggleModal} 
      >
        <i className="fa fa-times" aria-hidden="true"></i>
      </CloseIcon>
    </NavigationContainer>
  )
}

export default MainNavigation
