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
                src={data.ava}
                alt="avatar"
            />
            <div className={cx('info')}>
                <h4 className={cx('username')}>Nguyen Van A</h4>
                <span className={cx('position')}> Developer</span>
            </div>
        </div>
    );
}

export default AccountItem;
