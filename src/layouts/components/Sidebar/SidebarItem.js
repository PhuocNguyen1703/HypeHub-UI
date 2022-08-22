import React, { useState } from 'react';
import { MdNavigateNext } from 'react-icons/md';
import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);

function SidebarItem({ item }) {
    const [open, setOpen] = useState(false);

    if (item.children) {
        return (
            <div className={cx('item', open && 'open')}>
                <div className={cx('item-title')} onClick={() => setOpen(!open)}>
                    <span>
                        {item?.icon}
                        {item.title}
                    </span>
                    <MdNavigateNext className={cx('toggle-btn')} />
                </div>
                <div className={cx('child-list')}>
                    {item.children.map((child, index) => (
                        <NavLink
                            to={child.path}
                            key={index}
                            className={(nav) => cx('child-item', { active: nav.isActive })}
                        >
                            <span>
                                {child?.icon}
                                {child.title}
                            </span>
                        </NavLink>
                    ))}
                </div>
            </div>
        );
    } else {
        return (
            <NavLink className={(nav) => cx('item', { active: nav.isActive })} to={item.path}>
                <span>
                    {item?.icon}
                    {item.title}
                </span>
            </NavLink>
        );
    }
}

export default SidebarItem;
