import React from 'react';
import classNames from 'classnames/bind';

import styles from './Auth.module.scss';
import logo from '~/assets/images/logo.svg';

const cx = classNames.bind(styles);

function Auth() {
    return (
        <div className={cx('auth')}>
            <div className={cx('wrapper-left')}>
                <img className={cx('logo')} src={logo} alt="logo" />
                <div className={cx('title')}>
                    <h1>Logistics</h1>
                    <h6>Do it your way!</h6>
                </div>
            </div>

            <div className={cx('wrapper-right')}>
                <form className={cx('login-form')}>
                    <h3>Log In</h3>

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
