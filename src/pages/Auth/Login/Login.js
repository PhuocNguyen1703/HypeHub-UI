import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import styles from './Login.module.scss';
import logo from '~/assets/images/logo.svg';
import { loginUser } from '~/api/authApi';
import { useSelector } from 'react-redux';
import { BsExclamationTriangle, BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const cx = classNames.bind(styles);

function Login() {
    const [errorMessage, setErrorMessage] = useState();
    const [showPassword, setShowPassword] = useState(false);
    const [showIcon, setShowIcon] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const formSchema = yup.object().shape({
        email: yup.string().required('Please enter your email.').email('Please enter a valid email address.'),
        password: yup.string().required('Please enter your password.'),
    });

    const {
        register,
        formState: { errors, isSubmitting },
        handleSubmit,
    } = useForm({
        mode: 'onBlur',
        resolver: yupResolver(formSchema),
    });

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
        const result = await loginUser(data, dispatch, navigate);

        if (result?.errors) {
            setErrorMessage(result.errors);
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
                <h3>Welcome back</h3>
                <form className={cx('form')} onSubmit={handleSubmit(onSubmit)}>
                    <div className={cx('email')}>
                        <input
                            className={cx('email-ipt', errors.email ? 'error-ipt' : null)}
                            type="text"
                            placeholder=" "
                            name="email"
                            {...register('email')}
                        />
                        <label>User email</label>
                    </div>
                    <span className={cx('error')}>
                        {errors.email && (
                            <>
                                <span className={cx('icon-warning')}>
                                    <BsExclamationTriangle />
                                </span>
                                {errors.email.message}
                            </>
                        )}
                    </span>

                    <div className={cx('password')}>
                        <input
                            className={cx('password-ipt', errors.password ? 'error-ipt' : null)}
                            id="password"
                            type="password"
                            placeholder=" "
                            name="password"
                            {...register('password')}
                            onChange={handleChange}
                        />
                        <label>Password</label>
                        {showIcon && (
                            <div className={cx('icon')} onClick={handleShowPassword}>
                                {showPassword ? <BsEyeFill /> : <BsEyeSlashFill />}
                            </div>
                        )}
                    </div>
                    <span className={cx('error')}>
                        {errors.password && (
                            <>
                                <span className={cx('icon-warning')}>
                                    <BsExclamationTriangle />
                                </span>
                                {errors.password?.message}
                            </>
                        )}
                    </span>
                    <span className={cx('error')}>
                        {errorMessage && (
                            <>
                                <span className={cx('icon-warning')}>
                                    <BsExclamationTriangle />
                                </span>
                                {errorMessage}
                            </>
                        )}
                    </span>

                    <button className={cx('login-btn')} type="submit">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;
