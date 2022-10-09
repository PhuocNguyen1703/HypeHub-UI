import React from 'react';
import classNames from 'classnames/bind';

import styles from './Confirm.module.scss';
import Card from '../Card';

const cx = classNames.bind(styles);

function Directory() {
    return (
        <div className={cx('wrapper')}>
            <Card />
        </div>
    );
}

export default Directory;
