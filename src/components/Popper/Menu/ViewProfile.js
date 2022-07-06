import React from 'react';
import classNames from 'classnames/bind';

import Image from '~/components/Image';
import styles from './Menu.module.scss';
import Button from '~/components/Button';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function ViewProfile() {
    return (
        <div className={cx('wrapper')}>
            <Link to={'/profile'} className={cx('view-profile')}>
                <Image
                    className={cx('avatar')}
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    alt="Nguyen  van A"
                />
                <div className={cx('info')}>
                    <span className={cx('name')}>Nguyen Van A</span>
                    <span className={cx('position')}>Dev</span>
                </div>
            </Link>
            <Button className={cx('menu-item')} to={'/profile'}>
                View profile
            </Button>
        </div>
    );
}

export default ViewProfile;
