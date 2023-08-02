import classNames from 'classnames/bind';

import Header from '~/layouts/components/Header';
import Sidebar from '~/layouts/components/Sidebar';
import styles from './DefaultLayout.module.scss';
import { AnimatePresence, motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

const cx = classNames.bind(styles);

function DefaultLayout() {
    const { sidebarCollapsed } = useSelector((state) => state.layout);
    const { themeMode, sidebarColor, navbarColor } = useSelector((state) => state.theme);

    return (
        <AnimatePresence>
            <div className={cx('wrapper', themeMode)}>
                <motion.div
                    className={cx('sidebar', sidebarColor)}
                    animate={{
                        width: sidebarCollapsed ? '60px' : '200px',
                        transition: {
                            type: 'spring',
                            damping: 16,
                            duration: 1,
                        },
                    }}
                >
                    <Sidebar />
                </motion.div>
                <div className={cx('container')}>
                    <div className={cx('header', navbarColor)}>
                        <Header />
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 0.15 } }}
                        className={cx('content')}
                    >
                        <Outlet />
                    </motion.div>
                </div>
            </div>
        </AnimatePresence>
    );
}

export default DefaultLayout;
