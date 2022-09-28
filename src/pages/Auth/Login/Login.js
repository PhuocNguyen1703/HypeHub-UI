import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import styles from './Login.module.scss';
import logo from '~/assets/images/logo.svg';
import { loginUser } from '~/api/authApi';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);

function Login() {
    const { error } = useSelector((state) => state.auth.login);
    const [showPassword, setShowPassword] = useState(false);
    const [showIcon, setShowIcon] = useState(false);
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();

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
        loginUser(data, dispatch, navigate);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('login-form')}>
                <div className={cx('header')}>
                    <img className={cx('logo')} src={logo} alt="logo" />
                    <div>
                        <h1>Minato</h1>
                        <h6>Do it your way!</h6>
                    </div>
                </div>
                <form className={cx('form')} onSubmit={handleSubmit(onSubmit)}>
                    <h3>Welcome back</h3>

                    <div className={cx('input-email')}>
                        <input type="text" placeholder="UserEmail" name="email" {...register('email')} />
                    </div>

                    <div className={cx('input-password')}>
                        <input
                            id="password"
                            type="password"
                            placeholder="Password"
                            name="password"
                            {...register('password')}
                            onChange={handleChange}
                        />
                        <div className={cx('icon')} onClick={handleShowPassword}>
                            {showIcon && (showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />)}
                        </div>
                    </div>
                    {error && <span className={cx('error')}>* Incorrect email or password</span>}
                    <button className={cx('login-btn')} type="submit">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;
