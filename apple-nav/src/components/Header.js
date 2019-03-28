import React from 'react'

import HeaderContainer from './HeaderStyles'
import MainNavigation from './MainNavigation'

const Header = props => {
  const { data } = props
  return (
    <HeaderContainer>
      <MainNavigation data={data}/>
    </HeaderContainer>
  )
}

export default Header
