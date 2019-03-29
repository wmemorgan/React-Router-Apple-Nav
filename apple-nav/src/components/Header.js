import React from 'react'

import HeaderContainer from './HeaderStyles'
import MainNavigation from './MainNavigation'
import MobileNavigation from './MobileNavigation'

const Header = props => {
  const { data, toggleDisplay, toggle } = props
  return (
    <HeaderContainer>
      <MainNavigation 
        data={data} 
        toggleDisplay={toggleDisplay}
        toggle={toggle}
      />
      <MobileNavigation 
        data={data} 
        toggleDisplay={toggleDisplay}
        toggle={toggle}
      />
    </HeaderContainer>
  )
}

export default Header