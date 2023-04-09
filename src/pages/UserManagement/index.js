import React from 'react';
import classNames from 'classnames/bind';

import styles from './UserManagement.module.scss';
import { NavLink, Route, Routes } from 'react-router-dom';
import routes from '~/config/routes';
import UserTable from './Table/UserTable';

const cx = classNames.bind(styles);

function UserManagement() {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <span className={cx('heading')}>User Management</span>
            </header>
            <nav className={cx('nav')}>
                <NavLink
                    to={routes.user_management.default}
                    className={(nav) => cx('item', { active: nav.isActive })}
                    end
                >
                    Table
                </NavLink>
                <NavLink
                    to={routes.user_management.table}
                    className={(nav) => cx('item', { active: nav.isActive })}
                    end
                >
                    Search User
                </NavLink>
            </nav>
            <Routes>
                <Route index element={<UserTable />} />
                <Route path="table" element={<h1>hello</h1>} />
            </Routes>
        </div>
    );
}

export default UserManagement;
