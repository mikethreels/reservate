import React from 'react';
import PropTypes from 'prop-types';
import MenuItems from './menuitems';
import menuStyles from './styles/menu.module.css';

const Menu = props => {
  const { meal } = props;

  return (
    <div className={menuStyles.mealContainer}>
      <title className={menuStyles.mealTitle}>{meal[0]}</title>
      <div>
        {meal[1].map(mealItem => <MenuItems key={Math.random()} items={mealItem} />)}
      </div>
    </div>
  );
};

Menu.propTypes = { meal: PropTypes.objectOf(PropTypes.string) };

Menu.defaultProps = {
  meal: {},
};

export default Menu;
