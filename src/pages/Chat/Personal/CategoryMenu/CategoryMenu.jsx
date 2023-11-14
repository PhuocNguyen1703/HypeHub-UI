import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';

import styles from './CategoryMenu.module.scss';
import Header from '~/components/Popper/Menu/Header';
import MenuItem from '~/components/Popper/Menu/MenuItem';

const cx = classNames.bind(styles);

const CategoryMenu = ({ children, items = [], onChange }) => {
  const [history, setHistory] = useState([{ data: items }]);
  const currentMenu = history[history.length - 1];
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  const toggleShowMenu = () => {
    setShowMenu((prevState) => !prevState);
    handleResetMenu();
  };

  //handleClick out side
  useEffect(() => {
    document.addEventListener('click', hideOnClickOutside, true);
  }, [showMenu]);

  // Hide on outside click
  const hideOnClickOutside = (e) => {
    if (showMenu) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowMenu(false);
        handleResetMenu();
      }
    }
  };

  const handleBack = () => {
    setHistory((prev) => prev.slice(0, prev.length - 1));
  };

  const renderItems = () => {
    return currentMenu.data.map((item, idx) => {
      const isParent = !!item.children;

      const handleClick = () => {
        if (isParent) {
          setHistory((prev) => [...prev, item.children]);
        } else {
          onChange(item.title);
          setShowMenu(false);
        }
      };
      return <MenuItem key={idx} className={cx('menu-item')} data={item} onClick={handleClick} />;
    });
  };

  const handleResetMenu = () => {
    setHistory((prev) => prev.slice(0, 1));
  };

  return (
    <div ref={menuRef} className={cx('wrapper')}>
      <div className={cx('label')} onClick={toggleShowMenu}>
        {children}
      </div>
      {showMenu && (
        <div className={cx('dropdown-menu')} tabIndex="-1">
          {history.length > 1 && <Header title={currentMenu.title} onBack={handleBack} />}
          {renderItems()}
        </div>
      )}
    </div>
  );
};

export default CategoryMenu;
