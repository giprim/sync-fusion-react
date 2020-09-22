import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './layout.module.css';
import SideNavItem, { ISideNavItem } from './SideNavItem';

const data: ISideNavItem[] = [
  {
    icon: 'fas fa-home',
    name: 'Home',
    url: '/home',
  },
  {
    icon: 'fas fa-border-none',
    name: 'Administration',
    url: '/admin',
    sublink: [
      {
        icon: 'fas fa-people-arrows',
        name: 'Loan',
        url: '/loan',
      },
      {
        icon: 'fas fa-cart-arrow-down',
        name: 'Linkages',
        url: '/linkage',
      },
    ],
  },
  {
    icon: 'far fa-money-bill-alt',
    name: 'AGSMEIS Loan',
    url: '/loan',
  },
  {
    icon: 'fas fa-sign-in-alt',
    name: 'Business Linkage',
    url: '/business',
    sublink: [
      {
        icon: 'fas fa-people-arrows',
        name: 'arrow',
        url: '/loan',
      },
      {
        icon: 'fas fa-cart-arrow-down',
        name: 'ages',
        url: '/linkage',
      },
    ],
  },
];

const Layout = () => {
  const [toggle, setToggle] = useState(true);
  useEffect(() => {
    window.innerWidth <= 768 ? setToggle(false) : setToggle(true);
  }, []);

  window.addEventListener('resize', () => {
    window.innerWidth <= 768 ? setToggle(false) : setToggle(true);
  });
  const toggleSideNav = () => {
    setToggle(!toggle);
  };
  return (
    <div
      className={
        toggle
          ? `${styles.layout} ${styles.showSideNav}`
          : `${styles.layout} ${styles.hideSideNav}`
      }>
      {/* ============ TOP BAR ========= */}
      <div className={styles.topNav}>
        <div className={styles.logo}>
          <div>
            <button onClick={toggleSideNav} className={styles.menu}>
              <i className='fas fa-bars'></i>
            </button>
            <NavLink to='/'>NIRSAL MFB</NavLink>
          </div>

          <div className={styles.notifications_logo}>
            <div>
              <span>
                <i className='far fa-bell'></i>
              </span>
              <span>
                <i className='far fa-user'></i>
              </span>
            </div>
          </div>
        </div>
        <div className={styles.notifications}>
          <label className={styles.search}>
            <i className='fas fa-search'></i>
            <input placeholder='search' className={styles.search} />
          </label>

          <div>
            <span>
              <i className='far fa-bell'></i>
            </span>
            <span>
              <i className='far fa-user'></i>
            </span>
          </div>
        </div>
      </div>
      {/* ========= SIDE BAR ============= */}
      <aside
        className={
          !toggle ? `${styles.sideNav} ${styles.hide}` : styles.sideNav
        }>
        {data.map((link) => (
          <SideNavItem
            name={link.name}
            icon={link.icon}
            url={link.url}
            sublink={link.sublink}
          />
        ))}
      </aside>
      {/* ========= CONTENT =========== */}
      <div className={styles.content}>
        <div className={styles.inside}></div>
      </div>
    </div>
  );
};

export default Layout;
