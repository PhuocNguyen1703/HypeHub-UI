import React from 'react';
import classNames from 'classnames/bind';

import styles from './Loading.module.scss';
import { images } from '~/assets/images';

const cx = classNames.bind(styles);

function Loading() {
    return (
        <div className={cx('loading')}>
            <img src={images.logo} alt="loading" className={cx('img')} />
        </div>
    );
}

export default Loading;
