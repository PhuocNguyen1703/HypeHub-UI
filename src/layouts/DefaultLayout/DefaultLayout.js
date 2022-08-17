import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Header from '~/layouts/components/Header';
import Sidebar from '~/layouts/components/Sidebar';
import styles from './DefaultLayout.module.scss';
import { useCallback, useState } from 'react';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    const [showSidebar, setShowSidebar] = useState(true);
    return (
        <>
            <div className={cx('wrapper')}>
                <Header setShowSidebar={setShowSidebar} />
                <div className={cx('container')}>
                    <Sidebar showSidebar={showSidebar} />
                    <div className={cx('content')}>{children}</div>
                </div>
            </div>
        </>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
