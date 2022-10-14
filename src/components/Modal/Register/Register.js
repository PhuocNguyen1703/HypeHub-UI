import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import styles from './Register.module.scss';
import logo from '~/assets/images/logo.svg';
import { registerUser } from '~/api/authApi';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';
import { BsEyeFill, BsEyeSlashFill, BsXLg } from 'react-icons/bs';
import { setCreateUserModalIsOpen } from '~/redux/Slice/modalSlice';

const cx = classNames.bind(styles);

function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const [showIcon, setShowIcon] = useState(false);
    const { register, handleSubmit } = useForm({
        defaultValues: {
            profile: {
                fullName: '',
                livesIn: '',
                streetAddress: '',
                email: '',
                birth: '',
                gender: '',
                hashtag: '',
                position: '',
                phone: '',
            },
        },
    });
    const dispatch = useDispatch();

    const handleCloseModal = () => {
        dispatch(setCreateUserModalIsOpen(false));
    };

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
                    <h1>Minato</h1>
                    <button className={cx('close-btn')} onClick={handleCloseModal}>
                        <BsXLg />
                    </button>
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
                        <input type="text" placeholder="Email" name="email" {...register('email')} />
                    </div>
                    <div className={cx('password')}>
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
                    <button type="submit" className={cx('register-btn')}>
                        Create account
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Register;
