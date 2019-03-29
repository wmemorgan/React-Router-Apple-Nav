import React from 'react'
import { NavLink } from 'react-router-dom'

import { SubNavigationContainer, MenuContainer, MenuOption, ImageContainer } from './NavigationStyles'

const SubNavigation = props => {
  const { category } = props
  return (
    <SubNavigationContainer>
      <MenuContainer>
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
        </MenuContainer>
    </SubNavigationContainer>
  )
}

export default SubNavigation