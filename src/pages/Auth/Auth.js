import React from 'react';
import classNames from 'classnames/bind';

import styles from './Auth.module.scss';
import logo from '~/assets/images/logo.svg';

const cx = classNames.bind(styles);

function Auth() {
    return (
        <div className={cx('auth')}>
            <div className={cx('login-form')}>
                <div className={cx('header')}>
                    <img className={cx('logo')} src={logo} alt="logo" />
                    <h1>Logistics</h1>
                </div>
                <h6>Do it your way!</h6>
                <form className={cx('form')}>
                    <h3>Welcome back</h3>

                    <div>
                        <input className={cx('input')} type="text" placeholder="Username" name="username" />
                    </div>

                    <div>
                        <input className={cx('input')} type="password" placeholder="Password" name="password" />
                    </div>

                    <button className={cx('login-btn')}>Login</button>
                </form>
            </div>
        </div>
    );
}

export default Auth;
