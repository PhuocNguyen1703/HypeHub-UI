import React from 'react';

import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import Image from '../Image';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    return (
        <div className={cx('wrapper')}>
            <Image className={cx('avatar')} src={data.avatar} alt={data.full_name} />
            <div className={cx('info')}>
                <h4 className={cx('username')}>{data.full_name}</h4>
                <span className={cx('position')}> {data.nickname}</span>
            </div>
        </div>
    );
}

export default AccountItem;
