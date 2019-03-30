import React from 'react'
import { NavLink } from 'react-router-dom'

import { ShopModalContainer } from './ShopComponentStyles'

const ShopModal = props => {
  const { shopData } = props
  return (
    <ShopModalContainer {...props}>
      <ul>
        {shopData[0].subMenu.map(item => (
          <li key={item.name}>
            <NavLink to={item.path}>
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </ShopModalContainer>
  )
}

export default ShopModal