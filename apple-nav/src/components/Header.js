import React from 'react'

import HeaderContainer from './HeaderStyles'
import MainNavigation from './MainNavigation'
import MobileNavigation from './MobileNavigation'

const Header = props => {
  const { data } = props
  return (
    <HeaderContainer>
      <MainNavigation data={data}/>
      <MobileNavigation data={data} />
    </HeaderContainer>
  )
}

export default Header