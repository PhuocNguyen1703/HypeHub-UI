import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { MdNavigateNext } from 'react-icons/md';

import { AnimatePresence, motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { setSidebarCollapsed } from '~/redux/Slice/layoutSlice';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

function SidebarItem({ item, className = '' }) {
    const { sidebarCollapsed } = useSelector((state) => state.layout);
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();

    const showAnimation = {
        hidden: {
            width: 0,
            opacity: 0,
            transition: {
                duration: 0.2,
            },
        },
        show: {
            width: '100%',
            opacity: 1,
            transition: {
                duration: 0.7,
            },
        },
    };

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
            <AnimatePresence>
                <div className={cx('item', isOpen && 'open')} onClick={handleItemList}>
                    <div className={cx('item-title')}>
                        <span className={cx('icon')}>{item?.icon}</span>
                        {!sidebarCollapsed && (
                            <motion.span
                                variants={showAnimation}
                                initial="hidden"
                                animate="show"
                                exit="hidden"
                                className={cx('title')}
                            >
                                {item.title}
                                <MdNavigateNext className={cx('toggle-btn')} />
                            </motion.span>
                        )}
                    </div>
                    <motion.div
                        animate={{
                            height: isOpen ? 'auto' : '0',
                            transition: { duration: 0.4 },
                        }}
                        className={cx('child-list')}
                    >
                        {item.children.map((child, index) => (
                            <NavLink
                                to={child.path}
                                key={index}
                                className={(nav) => cx('child-item', { active: nav.isActive })}
                            >
                                <span className={cx('icon')}>{child?.icon}</span>
                                <span className={cx('title')}>{child.title}</span>
                            </NavLink>
                        ))}
                    </motion.div>
                </div>
            </AnimatePresence>
        );
    } else {
        return (
            <NavLink className={(nav) => cx('item', `${className}`, { active: nav.isActive })} to={item.path}>
                <div className={cx('item-title')}>
                    <span className={cx('icon')}> {item?.icon}</span>
                    <AnimatePresence>
                        {!sidebarCollapsed && (
                            <motion.span
                                variants={showAnimation}
                                initial="hidden"
                                animate="show"
                                exit="hidden"
                                className={cx('title')}
                            >
                                {item.title}
                            </motion.span>
                        )}
                    </AnimatePresence>
                </div>
            </NavLink>
        );
    }
}

export default SidebarItem;
