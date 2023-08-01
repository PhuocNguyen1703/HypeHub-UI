import React from 'react';
import classNames from 'classnames/bind';

import styles from './CircleHeader.module.scss';

const cx = classNames.bind(styles);

function CircleHeader({ wrapperClassName = '', circleClassName = '' }) {
    return (
        <div className={cx('wrapper', `${wrapperClassName}`)}>
            <span className={cx('circle-red', `${circleClassName}`)}></span>
            <span className={cx('circle-yellow', `${circleClassName}`)}></span>
            <span className={cx('circle-green', `${circleClassName}`)}></span>
        </div>
    );
}

export default CircleHeader;
