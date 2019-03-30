import React from 'react';
import { NavLink } from 'react-router-dom'

const Shop = props => {
  const { category } = props
  return (
    <>
      {category.subMenu.map(item => (
        <NavLink key={item.name} to={item.path}>
          {item.name}
        </NavLink>
      ))}
    </>
  )
}

export default Shop