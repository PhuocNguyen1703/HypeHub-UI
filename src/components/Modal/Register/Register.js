import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { AnimatePresence, motion } from 'framer-motion';

import styles from './Register.module.scss';
import logo from '~/assets/images/logo.svg';
import { registerUser } from '~/api/authApi';
import { BsEyeFill, BsEyeSlashFill, BsXLg } from 'react-icons/bs';
import { setCreateUserModalIsOpen } from '~/redux/Slice/modalSlice';

const cx = classNames.bind(styles);

function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [showIconPassword, setShowIconPassword] = useState(false);
    const [showIconConfirm, setShowIconConfirm] = useState(false);
    const { register, handleSubmit } = useForm({});
    const dispatch = useDispatch();

    const handleCloseModal = () => {
        dispatch(setCreateUserModalIsOpen(false));
    };

    const handleChangePassword = (e) => {
        const passwordValue = e.target.value;
        if (!!passwordValue) {
            setShowIconPassword(true);
        } else {
            setShowIconPassword(false);
        }
    };

    const handleChangeConfirmPassword = (e) => {
        const confirmPasswordValue = e.target.value;
        if (!!confirmPasswordValue) {
            setShowIconConfirm(true);
        } else {
            setShowIconConfirm(false);
        }
    };

    const handleShowPassword = () => {
        const inputPassword = document.getElementById('password');

        if (inputPassword.type === 'password') {
            inputPassword.type = 'text';
            setShowPassword(true);
        } else {
            inputPassword.type = 'password';
            setShowPassword(false);
        }
    };

    const handleShowConfirmPassword = () => {
        const inputConfirm = document.getElementById('confirm-password');

        if (inputConfirm.type === 'password') {
            inputConfirm.type = 'text';
            setShowConfirmPassword(true);
        } else {
            inputConfirm.type = 'password';
            setShowConfirmPassword(false);
        }
    };

    const onSubmit = (data) => {
        registerUser(data, dispatch);
    };

    return (
        <AnimatePresence>
            <motion.div initial={{ x: '-50%', y: '-50%', scale: 0 }} animate={{ scale: 1 }} className={cx('wrapper')}>
                <div className={cx('register-form')}>
                    <div className={cx('header')}>
                        <img className={cx('logo')} src={logo} alt="logo" />
                        <h1>Minato</h1>
                        <button className={cx('close-btn')} onClick={handleCloseModal}>
                            <BsXLg />
                        </button>
                    </div>
                    <h6>Do it your way!</h6>
                    <h3>Create new account</h3>
                    <form className={cx('form')} onSubmit={handleSubmit(onSubmit)}>
                        <div className={cx('username')}>
                            <div className={cx('firstname')}>
                                <input
                                    className={cx('firstname-ipt')}
                                    type="text"
                                    name="firstname"
                                    placeholder=" "
                                    {...register('firstName')}
                                    required
                                />
                                <label>First Name</label>
                            </div>
                            <div className={cx('lastname')}>
                                <input
                                    className={cx('lastname-ipt')}
                                    type="text"
                                    name="lastname"
                                    placeholder=" "
                                    {...register('lastName')}
                                    required
                                />
                                <label>Last Name</label>
                            </div>
                        </div>

                        <div className={cx('email')}>
                            <input
                                className={cx('email-ipt')}
                                type="text"
                                name="email"
                                {...register('email')}
                                required
                            />
                            <label>Email address</label>
                        </div>
                        {/* <span className={cx('error')}>* It should be a valid email address !</span> */}

                        <div className={cx('password')}>
                            <input
                                className={cx('password-ipt')}
                                id="password"
                                type="password"
                                name="password"
                                {...register('password')}
                                onChange={handleChangePassword}
                                required
                            />
                            <label>Password</label>
                            {showIconPassword && (
                                <div className={cx('icon')} onClick={handleShowPassword}>
                                    {showPassword ? <BsEyeFill /> : <BsEyeSlashFill />}
                                </div>
                            )}
                        </div>
                        {/* <span className={cx('error')}>
                            * Password should be 8-16 characters and include at least 1 letter, 1 number and special
                            character !
                        </span> */}
                        <div className={cx('password')}>
                            <input
                                id="confirm-password"
                                className={cx('password-ipt')}
                                type="password"
                                name="confirm-password"
                                {...register('confirmPassword')}
                                onChange={handleChangeConfirmPassword}
                                required
                            />
                            <label>Confirm Password</label>

                            {showIconConfirm && (
                                <div className={cx('icon')} onClick={handleShowConfirmPassword}>
                                    {showConfirmPassword ? <BsEyeFill /> : <BsEyeSlashFill />}
                                </div>
                            )}
                        </div>
                        <button type="submit" className={cx('register-btn')}>
                            Create account
                        </button>
                    </form>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}

export default Register;
