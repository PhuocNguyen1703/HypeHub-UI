import React from 'react';
import classNames from 'classnames/bind';

import styles from './Loading.module.scss';
import Image from '../Image';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Loading() {
    return (
        <div className={cx('loading')}>
            <Image src={images.logo} alt="Loading..." className={cx('img')} />
        </div>
    );
}

export default Loading;
