import classNames from 'classnames/bind';

import { NavLink, Outlet } from 'react-router-dom';
import styles from './Manage.module.scss';

const cx = classNames.bind(styles);

function ManageUser() {
    const navList = [
        { path: '', title: 'Table' },
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
