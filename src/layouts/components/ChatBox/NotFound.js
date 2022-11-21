import React from 'react';
import classNames from 'classnames/bind';

import styles from './NotFound.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function NotFound() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('logo')} src={images.logo} alt="logo" />
            <span className={cx('title')}>Welcome Message......</span>
        </div>
    );
}

export default NotFound;
