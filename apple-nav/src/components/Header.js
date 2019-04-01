import React from 'react'

import HeaderContainer from './HeaderStyles'
import MainNavigation from './MainNavigation'
import MobileNavigation from './MobileNavigation'
import SearchModal from './SearchComponents/SearchModal'
import ShopModal from './ShopComponents/ShopModal'

const Header = props => {
  return (
    <HeaderContainer>
      <MainNavigation {...props}
      />
      
      <MobileNavigation 
      {...props}
      />
      <SearchModal {...props} />
      <ShopModal {...props} />
    </HeaderContainer>
  )
}

export default Header