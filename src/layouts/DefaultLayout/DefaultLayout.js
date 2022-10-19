import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Header from '~/layouts/components/Header';
import Sidebar from '~/layouts/components/Sidebar';
import styles from './DefaultLayout.module.scss';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    const { sidebarCollapsed } = useSelector((state) => state.layout);
    const { themeMode, sidebarColor } = useSelector((state) => state.theme);

    return (
        <div className={cx('wrapper', themeMode)}>
            <Header />
            <div className={cx('container')}>
                <motion.div
                    className={cx('sidebar', sidebarColor)}
                    initial={{ width: '49px' }}
                    animate={{
                        width: sidebarCollapsed ? '49px' : '190px',
                        transition: {
                            // duration: 0.5,
                            type: 'spring',
                            damping: 15,
                        },
                    }}
                >
                    <Sidebar />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.15 } }}
                    className={cx('content')}
                >
                    {children}
                </motion.div>
            </div>
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
