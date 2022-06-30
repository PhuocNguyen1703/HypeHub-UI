import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import styles from './Register.module.scss';
import logo from '~/assets/images/logo.svg';
import { registerUser } from '~/api/userApi';

const cx = classNames.bind(styles);

function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const [showIcon, setShowIcon] = useState(false);
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const passwordValue = e.target.value;
        if (!!passwordValue) {
            setShowIcon(true);
        } else {
            setShowIcon(false);
        }
    };

    const handleShowPassword = () => {
        const inputEl = document.getElementById('password');

        if (inputEl.type === 'password') {
            inputEl.type = 'text';
            setShowPassword(true);
        } else {
            inputEl.type = 'password';
            setShowPassword(false);
        }
    };

    const onSubmit = (data) => {
        registerUser(data, dispatch);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('register-form')}>
                <div className={cx('header')}>
                    <img className={cx('logo')} src={logo} alt="logo" />
                    <h1>Logistics</h1>
                </div>
                <h6>Do it your way!</h6>
                <form className={cx('form')} onSubmit={handleSubmit(onSubmit)}>
                    <h3>Create new account</h3>

                    <div className={cx('username')}>
                        <div className={cx('firstname')}>
                            <input
                                type="text"
                                placeholder="First name"
                                name="firstname"
                                {...register('firstName', { required: true })}
                            />
                        </div>
                        <div className={cx('lastname')}>
                            <input type="text" placeholder="Last name" name="lastname" {...register('lastName')} />
                        </div>
                    </div>
                    <div className={cx('email')}>
                        <input
                            type="text"
                            placeholder="Email"
                            name="email"
                            {...register('email', { required: true })}
                        />
                    </div>
                    <div className={cx('password')}>
                        <input
                            id="password"
                            type="password"
                            placeholder="Password"
                            name="password"
                            onChange={handleChange}
                            {...register('password', { required: true })}
                        />
                        <div className={cx('icon')} onClick={handleShowPassword}>
                            {showIcon &&
                                (showPassword ? (
                                    <FontAwesomeIcon icon={faEye} />
                                ) : (
                                    <FontAwesomeIcon icon={faEyeSlash} />
                                ))}
                        </div>
                    </div>
                    <button type="submit" className={cx('register-btn')}>
                        Create account
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Register;
