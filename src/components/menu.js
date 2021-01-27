import React from 'react'
import MenuItems from './menuitems'
import menuStyles from './styles/menu.module.css';

const Menu = props => {
  const { meal } = props;
  console.log(meal)

  return (
    <div className={menuStyles.mealContainer}>
      <title className={menuStyles.mealTitle}>{meal[0]}</title>
      <div>
        {meal[1].map(mealItem => <MenuItems key={Math.random()} items={mealItem} />)}
      </div>
    </div>
  )
}

export default Menu
