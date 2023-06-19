import React from 'react';
import classNames from 'classnames/bind';

import styles from './Manage.module.scss';
import { NavLink, Route, Routes } from 'react-router-dom';
import UserTable from './Table/UserTable';
import UserSearch from './UserSearch';
import TimeSheets from '../TimeSheets';

const cx = classNames.bind(styles);

function Manage() {
    const navList = [
        { path: '', title: 'Table' },
        { path: 'search', title: 'Search' },
        { path: 'timesheet', title: 'Time Sheets' },
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
                <Route path="search" element={<UserSearch />} />
                <Route path="timesheet" element={<TimeSheets />} />
                <Route path="*" element={<h1>Not Found</h1>} />
            </Routes>
        </div>
    );
}

export default Manage;
