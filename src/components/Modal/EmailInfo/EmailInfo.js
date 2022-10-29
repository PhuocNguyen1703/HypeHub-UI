import React from 'react';
import classNames from 'classnames/bind';

import styles from './EmailInfo.module.scss';

const cx = classNames.bind(styles);

function EmailInfo() {
    return <div className={cx('wrapper')}>EmailInfo</div>;
}

export default EmailInfo;
