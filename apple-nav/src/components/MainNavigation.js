import React from 'react'
import { NavLink } from 'react-router-dom'

import NavigationContainer from './NavigationStyles'
// import SubNavigation from './NavigationStyles'

const MainNavigation = props => {
  const { data } = props
  return (
    <NavigationContainer>
      {data.map(category => (
        <NavLink 
          key={category.name} 
          to={category.path}
          activeClassName="activeSelection"
        >
          {category.name}
        </NavLink>
      ))}
    </NavigationContainer>
  )
}

export default MainNavigation