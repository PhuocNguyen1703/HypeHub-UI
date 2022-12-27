import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './UserMenu.module.scss';
import Header from '../Popper/Menu/Header';
import ViewProfile from '../Popper/Menu/ViewProfile';
import MenuItem from '../Popper/Menu/MenuItem';

const cx = classNames.bind(styles);

function UserMenu({ children, items = [], onChange, viewProfile = false }) {
    const [history, setHistory] = useState([{ data: items }]);
    const currentMenu = history[history.length - 1];
    const [showMenu, setShowMenu] = useState(false);
    const menuRef = useRef(null);

    const toggleShowUserMenu = () => {
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
                    onChange(item);
                }
            };
            return <MenuItem key={idx} data={item} onClick={handleClick} />;
        });
    };

    const handleResetMenu = () => {
        setHistory((prev) => prev.slice(0, 1));
    };

    return (
        <div ref={menuRef} className={cx('wrapper')}>
            <div className={cx('avatar')} onClick={toggleShowUserMenu}>
                {children}
            </div>
            {showMenu && (
                <div className={cx('dropdown-menu')} tabIndex="-1">
                    {viewProfile &&
                        (history.length > 1 ? (
                            <Header title={currentMenu.title} onBack={handleBack} />
                        ) : (
                            <ViewProfile />
                        ))}
                    {renderItems()}
                </div>
            )}
        </div>
    );
}

export default UserMenu;
