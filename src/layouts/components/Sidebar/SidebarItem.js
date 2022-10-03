import React, { useEffect, useState } from 'react';
import { MdNavigateNext } from 'react-icons/md';
import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss';
import { NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { setSidebarCollapsed } from '~/redux/Slice/layoutSlice';
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);

function SidebarItem({ item, className = '' }) {
    const { sidebarCollapsed } = useSelector((state) => state.layout);
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        if (sidebarCollapsed) {
            setIsOpen(false);
        }
    }, [sidebarCollapsed]);

    const handleItemList = () => {
        dispatch(setSidebarCollapsed(false));
        setIsOpen((prevState) => !prevState);
    };

    if (item.children) {
        return (
            <div className={cx('item', isOpen && 'open')}>
                <div className={cx('item-title')} onClick={handleItemList}>
                    <span>
                        {item?.icon}
                        {item.title}
                    </span>
                    <MdNavigateNext className={cx('toggle-btn')} />
                </div>
                <AnimatePresence>
                    <motion.div
                        animate={{ height: isOpen ? 'auto' : '0', transition: { duration: 0.4 } }}
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
                </AnimatePresence>
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
