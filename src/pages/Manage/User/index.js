import React from 'react';
import classNames from 'classnames/bind';

import styles from './Manage.module.scss';
import { NavLink, Outlet } from 'react-router-dom';

const cx = classNames.bind(styles);

function ManageUser() {
    const navList = [
        { path: 'table', title: 'Table' },
        { path: 'search', title: 'Search' },
    ];

    return (
        <div className={cx('wrapper')}>
            <nav className={cx('nav')}>
                {navList.map((item, idx) => (
                    <NavLink key={idx} to={item.path} className={(nav) => cx('link', { active: nav.isActive })} end>
                        {item.title}
                    </NavLink>
                ))}
            </nav>
            <Outlet />
        </div>
    );
}

export default ManageUser;
