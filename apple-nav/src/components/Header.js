import React from 'react'

import HeaderContainer from './HeaderStyles'
import MainNavigation from './MainNavigation'
import MobileNavigation from './MobileNavigation'

const Header = props => {
  return (
    <HeaderContainer>
      <MainNavigation {...props}
      />
      <MobileNavigation 
      {...props}
      />
    </HeaderContainer>
  )
}

export default Header