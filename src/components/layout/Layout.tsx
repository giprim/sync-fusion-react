import React, { useEffect, useState } from 'react';
import styles from './layout.module.css';
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
          ? styles.layout + ' ' + styles.showSideNav
          : styles.layout + ' ' + styles.hideSideNav
      }>
      <div className={styles.topNav}>
        <button onClick={toggleSideNav} className='btn btn-primary'>
          menu
        </button>
      </div>
      <aside className={styles.sideNav}></aside>
      <div className={styles.content}></div>
    </div>
  );
};

export default Layout;
