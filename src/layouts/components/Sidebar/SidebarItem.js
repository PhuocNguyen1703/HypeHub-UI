import React, { useState } from 'react';
import { MdNavigateNext } from 'react-icons/md';
import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const cx = classNames.bind(styles);

function SidebarItem({ item, className = '' }) {
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
                <motion.div
                    animate={{ height: open ? 'auto' : '0', transition: { duration: 0.4 } }}
                    className={cx('child-list')}
                >
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
                </motion.div>
            </div>
        );
    } else {
        return (
            <NavLink className={(nav) => cx('item', `${className}`, { active: nav.isActive })} to={item.path}>
                <span>
                    <span style={{ color: `${item?.color}` }}>{item?.icon}</span>
                    {item.title}
                </span>
            </NavLink>
        );
    }
}

export default SidebarItem;
