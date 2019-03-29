import React from 'react'
import { NavLink } from 'react-router-dom'

import NavigationContainer from './NavigationStyles'
import Logo from './StyleComponents/Logo'
import Icon from './StyleComponents/Icon'

const MainNavigation = props => {
  const { data } = props
  return (
    <NavigationContainer>
      <Logo>
        <NavLink to="/"> 
          <img src="https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/apple/image_large.svg" alt="Apple Logo" />
        </NavLink>
      </Logo>
      {data.map(category => (
        <NavLink 
          key={category.name} 
          to={category.path}
          activeClassName="activeSelection"
        >
          {category.name}
        </NavLink>
      ))}
      <Icon>
        <NavLink to="/search">
          <img src="https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/search/image_large.svg" alt="" />
        </NavLink>
      </Icon>
      <Icon>
        <NavLink to="/shop">
          <img src="https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/bag/image_large.svg" alt="" />
        </NavLink>
      </Icon>
    </NavigationContainer>
  )
}

export default MainNavigation