import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import styles from './Login.module.scss';
import logo from '~/assets/images/logo.svg';
import { loginUser } from '~/api/authApi';
import { useSelector } from 'react-redux';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';

const cx = classNames.bind(styles);

function Login() {
    const [error, setError] = useState(false);
    const [errText, setErrText] = useState('');
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

    const onSubmit = async (data) => {
        const errorStatus = await loginUser(data, dispatch, navigate);
        if (errorStatus) {
            setErrText(error);
            setError(true);
        }
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
                        {showIcon && (
                            <div className={cx('icon')} onClick={handleShowPassword}>
                                {showPassword ? <BsEyeFill /> : <BsEyeSlashFill />}
                            </div>
                        )}
                    </div>
                    {error && <span className={cx('error')}>* {errText}</span>}
                    <button className={cx('login-btn')} type="submit">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;
