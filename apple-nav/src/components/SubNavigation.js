/* Secondary Navigation Menu */
import React from 'react'
import { NavLink } from 'react-router-dom'

import { SubNavigationContainer, NewItem, MenuContainer, MenuOption, ImageContainer } from './NavigationStyles'

const SubNavigation = props => {
  const { category } = props
  return (
    <SubNavigationContainer {...props}>
      <MenuContainer>
        {category.subMenu.map(item => (
          <MenuOption key={item.name} {...props}>
            <NavLink to={item.path}>
              <ImageContainer>
                <img src={item.icon} alt="" />
              </ImageContainer>
              <div>{item.name}</div>
              {item.isNew && <NewItem>New</NewItem>}
            </NavLink>
          </MenuOption>  
          ))
        }
        </MenuContainer>
    </SubNavigationContainer>
  )
}

export default SubNavigation