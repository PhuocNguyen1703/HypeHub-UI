import React from 'react';
import classNames from 'classnames/bind';

import styles from './UserManagement.module.scss';
import { NavLink, Route, Routes } from 'react-router-dom';
import routes from '~/config/routes';
import UserTable from './Table/UserTable';
import UserSearch from './UserSearch';
import TimeSheets from '../TimeSheets';

const cx = classNames.bind(styles);

function UserManagement() {
    const navList = [
        { path: routes.user_management.default, title: 'Table' },
        { path: routes.user_management.search, title: 'Search' },
        { path: routes.user_management.time_sheets, title: 'Time Sheets' },
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
            <Routes>
                <Route index element={<UserTable />} />
                <Route path={routes.user_management.search} element={<UserSearch />} />
                <Route path={routes.user_management.time_sheets} element={<TimeSheets />} />
            </Routes>
        </div>
    );
}

export default UserManagement;
