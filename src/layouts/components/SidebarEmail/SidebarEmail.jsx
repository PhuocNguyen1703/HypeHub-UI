import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';

import { AnimatePresence, motion } from 'framer-motion';
import { BsPlus } from 'react-icons/bs';
import styles from './SidebarEmail.module.scss';

const cx = classNames.bind(styles);

function SidebarEmail({ menu, show, setToggleSidebar, onclick }) {
    const handleComposeEmail = () => {
        onclick();
    };

    const showAnimation = {
        hidden: {
            width: 0,
            opacity: 0,
            transition: {
                duration: 0.5,
            },
        },
        show: {
            width: '200px',
            opacity: 1,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <AnimatePresence>
            {!show && (
                <motion.div
                    variants={showAnimation}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className={cx('wrapper')}
                >
                    <button className={cx('create-email')} onClick={handleComposeEmail}>
                        <BsPlus />
                        Compose
                    </button>
                    <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className={cx('menu')}
                    >
                        {menu.map((item, idx) => (
                            <NavLink
                                key={idx}
                                className={(nav) => cx('item-link', { active: nav.isActive })}
                                to={item.path}
                                end
                            >
                                <span className={cx('icon')}> {item?.icon}</span>
                                <span className={cx('title')}>{item.title}</span>
                            </NavLink>
                        ))}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default SidebarEmail;
