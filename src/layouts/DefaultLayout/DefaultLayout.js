import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Header from '~/layouts/components/Header';
import Sidebar from '~/layouts/components/Sidebar';
import styles from './DefaultLayout.module.scss';
import { useState } from 'react';
import { motion } from 'framer-motion';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    const [showSidebar, setShowSidebar] = useState(true);

    const handleShowSidebar = () => {
        setShowSidebar((prevState) => !prevState);
    };

    return (
        <div className={cx('wrapper')}>
            <Header setShowSidebar={handleShowSidebar} />
            <div className={cx('container')}>
                <Sidebar showSidebar={showSidebar} />
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
