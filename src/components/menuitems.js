import React from 'react'
import menuStyles from './styles/menu.module.css';

const MenuItems = props=> {
  const { items } = props
  return (
    <div className={menuStyles.mealItemContainer}>
      <p className={menuStyles.mealItemName}>{items[0]}</p>
      <p className={menuStyles.mealItemPrice}>{items[1]}</p>
    </div>
  )
}

export default MenuItems
