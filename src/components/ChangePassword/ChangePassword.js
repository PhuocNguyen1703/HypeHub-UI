import React, { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './ChangePassword.module.scss';
import { BsExclamationTriangle, BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';

const cx = classNames.bind(styles);

function ChangePassword() {
    const [showOldPassword, setShowOldPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleToggleShowOldPassword = () => {
        const inputEl = document.getElementById('old-password');
        setShowOldPassword((prevState) => !prevState);

        if (inputEl.type === 'password') return (inputEl.type = 'text');
        if (inputEl.type === 'text') return (inputEl.type = 'password');
    };

    const handleToggleShowNewPassword = () => {
        const inputEl = document.getElementById('new-password');
        setShowNewPassword((prevState) => !prevState);

        if (inputEl.type === 'password') return (inputEl.type = 'text');
        if (inputEl.type === 'text') return (inputEl.type = 'password');
    };

    const handleToggleShowConfirmPassword = () => {
        const inputEl = document.getElementById('confirm-password');
        setShowConfirmPassword((prevState) => !prevState);

        if (inputEl.type === 'password') return (inputEl.type = 'text');
        if (inputEl.type === 'text') return (inputEl.type = 'password');
    };

    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <span className={cx('title')}>Change Password</span>
            </header>
            <form className={cx('form')}>
                <div className={cx('form-left')}>
                    <label className={cx('label')}>
                        Old Password
                        <input id="old-password" type="password" className={cx('input')} placeholder="Password" />
                        <span className={cx('icon-eye')} onClick={handleToggleShowOldPassword}>
                            {showOldPassword ? <BsEyeFill /> : <BsEyeSlashFill />}
                        </span>
                    </label>
                    <label className={cx('label')}>
                        New Password
                        <input id="new-password" type="password" className={cx('input')} placeholder="Password" />
                        <span className={cx('icon-eye')} onClick={handleToggleShowNewPassword}>
                            {showNewPassword ? <BsEyeFill /> : <BsEyeSlashFill />}
                        </span>
                    </label>
                    <label className={cx('label')}>
                        Confirm Password
                        <input id="confirm-password" type="password" className={cx('input')} placeholder="Password" />
                        <span className={cx('icon-eye')} onClick={handleToggleShowConfirmPassword}>
                            {showConfirmPassword ? <BsEyeFill /> : <BsEyeSlashFill />}
                        </span>
                    </label>
                    <div className={cx('action-btn')}>
                        <button className={cx('cancel-btn')} type="button">
                            Cancel
                        </button>
                        <button className={cx('save-btn')} type="submit">
                            Save
                        </button>
                    </div>
                </div>
                <div className={cx('form-right')}>
                    <h3>New password must contain:</h3>
                    <span>
                        <BsExclamationTriangle className={cx('icon')} />
                        At least 8 characters
                    </span>
                    <span>
                        <BsExclamationTriangle className={cx('icon')} />
                        At least 1 lower letter (a-z)
                    </span>
                    <span>
                        <BsExclamationTriangle className={cx('icon')} />
                        At least 1 uppercase letter (A-Z)
                    </span>
                    <span>
                        <BsExclamationTriangle className={cx('icon')} />
                        At least 1 number (0-9)
                    </span>
                    <span>
                        <BsExclamationTriangle className={cx('icon')} />
                        At least 1 special characters
                    </span>
                </div>
            </form>
        </div>
    );
}

export default ChangePassword;
