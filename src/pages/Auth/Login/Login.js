import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import styles from './Login.module.scss';
import { loginUser } from '~/services/authApi';
import { BsExclamationTriangle, BsEyeFill, BsEyeSlashFill, BsFillLockFill, BsFillPersonFill } from 'react-icons/bs';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { RiLoader4Fill } from 'react-icons/ri';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Login() {
    const [errorMessage, setErrorMessage] = useState();
    const [showPassword, setShowPassword] = useState(false);
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

    const handleToggleShowPassword = () => {
        const inputEl = document.getElementById('password');
        setShowPassword((prevState) => !prevState);

        if (inputEl.type === 'password') return (inputEl.type = 'text');
        if (inputEl.type === 'text') return (inputEl.type = 'password');
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
                    <img className={cx('logo')} src={images.logo} alt="logo" />
                    <div>
                        <h1>HypeHub</h1>
                        <h6>Do it your way!</h6>
                    </div>
                </div>
                <h3>Welcome back</h3>
                <form className={cx('form')} onSubmit={handleSubmit(onSubmit)}>
                    <div className={cx('email', errors.email && 'error-ipt')}>
                        <span className={cx('icon-person')}>
                            <BsFillPersonFill />
                        </span>
                        <input
                            className={cx('email-ipt')}
                            type="text"
                            placeholder="User email"
                            name="email"
                            {...register('email')}
                        />
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

                    <div className={cx('password', errors.password && 'error-ipt')}>
                        <span className={cx('icon-lock')}>
                            <BsFillLockFill />
                        </span>
                        <input
                            className={cx('password-ipt')}
                            id="password"
                            type="password"
                            placeholder="Password"
                            name="password"
                            {...register('password')}
                        />
                        <div className={cx('icon-eye')} onClick={handleToggleShowPassword}>
                            {showPassword ? <BsEyeFill /> : <BsEyeSlashFill />}
                        </div>
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

                    <button disabled={isSubmitting} className={cx('login-btn')} type="submit">
                        {isSubmitting ? <RiLoader4Fill className={cx('icon-loading')} /> : 'Login'}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;
