import React from 'react'
import { NavLink } from 'react-router-dom'

import { SubNavigationContainer, MenuOption, ImageContainer } from './NavigationStyles'

const SubNavigation = props => {
  const { category } = props
  return (
    <SubNavigationContainer>
      {category.subMenu.map(item => (
        <MenuOption key={item.name}>
          <NavLink to={item.path}>
            <ImageContainer>
              <img src={item.icon} alt="" />
            </ImageContainer>
            <div>{item.name}</div>
          </NavLink>
        </MenuOption>  
        ))
      }
    </SubNavigationContainer>
  )
}

export default SubNavigation