import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavItem.module.css';

export interface INavItem {
  icon: string;
  name: string;
  url: string;
}
export interface ISideNavItem {
  icon: string;
  name: string;
  url: string;
  sublink?: ISideNavItem[];
}

const NavItem: React.FC<INavItem> = ({ icon, name, url }) => {
  return (
    <NavLink to={url} className={styles.navItem}>
      <div>
        <span className={styles.icon}>
          <i className={icon}></i>
        </span>
        <span>{name}</span>
      </div>
      <span></span>
    </NavLink>
  );
};

const trimSpace = (text: string) => {
  return text.split(' ').join('');
};

const NavItems: React.FC<ISideNavItem> = ({ icon, name, url, sublink }) => {
  let trimmedName = trimSpace(name);
  if (sublink?.length)
    return (
      <div id={`${trimmedName}_parent`}>
        <a
          // to={url}
          className={`${styles.navItem} accordion`}
          data-toggle='collapse'
          data-target={`#${trimmedName}_child`}
          aria-expanded='true'
          aria-controls='collapseOne'>
          <div>
            <span className={styles.icon}>
              <i className={icon}></i>
            </span>
            <span>{name}</span>
          </div>
          <i className='fas fa-chevron-right'></i>
        </a>
        <div
          className='collapse'
          id={`${trimmedName}_child`}
          data-parent={`#${trimmedName}_parent`}>
          <div className={styles.navBox}>
            {sublink.map((link) => (
              <NavItem icon={link.icon} name={link.name} url={link.url} />
            ))}
          </div>
        </div>
      </div>
    );
  return <NavItem icon={icon} name={name} url={url} />;
};

const SideNavItem: React.FC<ISideNavItem> = ({ icon, name, url, sublink }) => {
  if (sublink?.length)
    return <NavItems icon={icon} name={name} url={url} sublink={sublink} />;

  return <NavItem icon={icon} name={name} url={url} />;
};

export default SideNavItem;
