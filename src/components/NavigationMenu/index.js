import React from 'react';
import { Menu } from 'antd';
import { useDispatch } from 'react-redux';
import { selectСoord } from '../../redux/navigationSlice';
import { useSelector } from 'react-redux';


function getItem(
  label,
  key,
  icon,
  children,
  type,
) {
  return {
    key,
    icon,
    children,
    label,
    type,
  } 
}

const items = [
  getItem('Group', 'grp', null, [getItem('Маршрут 1', 0), getItem('Маршрут 2', 1), getItem('Маршрут 3', 2)], 'group'),
];

const NavigationMenu = () => {
    const dispatch = useDispatch()
    const val = useSelector((state) => state.navigation.value)

  const onClick= (e) => {
    dispatch(selectСoord(e.keyPath))
    console.log(val);
  };

  return (
    <Menu
      onClick={onClick}
      style={{ width: 256 }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
  );
};

export default NavigationMenu;