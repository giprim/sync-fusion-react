import React from 'react';
import { NavLink } from 'react-router-dom';

interface ISideNavItem {
  icon: React.ReactNode;
  name: string;
  url: string;
}

const sideNavItem: React.FC<ISideNavItem> = ({ icon, name, url }) => {
  return (
    <NavLink to={url}>
      {icon} <span>{name}</span>
    </NavLink>
  );
};

export default sideNavItem;
