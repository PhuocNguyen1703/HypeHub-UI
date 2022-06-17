import React from 'react';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return <div className={cx('wrapper')}>
      <img className={cx('info')} src='' alt=''/>
    </div>;
}

export default AccountItem;
