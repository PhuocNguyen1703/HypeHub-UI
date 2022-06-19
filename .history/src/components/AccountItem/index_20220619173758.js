import React from 'react';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import Image from '../Image';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src={data.avatar}
                alt={data.avatar}
            />
            <div className={cx('info')}>
                <h4 className={cx('username')}>{data.avatar}</h4>
                <span className={cx('position')}> {data.avatar}</span>
            </div>
        </div>
    );
}

export default AccountItem;
