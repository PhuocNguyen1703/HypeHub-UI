import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { AnimatePresence, motion } from 'framer-motion';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import styles from './Register.module.scss';
import logo from '~/assets/images/logo.svg';
import { registerUser } from '~/api/authApi';
import { BsExclamationTriangle, BsEyeFill, BsEyeSlashFill, BsXLg } from 'react-icons/bs';
import { setCreateUserModalIsOpen } from '~/redux/Slice/modalSlice';
import { RiLoader4Fill } from 'react-icons/ri';

const cx = classNames.bind(styles);

function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [showIconPassword, setShowIconPassword] = useState(false);
    const [showIconConfirm, setShowIconConfirm] = useState(false);
    const dispatch = useDispatch();

    const formSchema = yup.object().shape({
        firstName: yup.string().required('Please enter your first name.'),
        lastName: yup.string().required('Please enter your last name.'),
        email: yup.string().required('Please enter your email.').email('Please enter a valid email address.'),
        password: yup
            .string()
            .required('Please enter your password.')
            .min(6, 'Please enter at least 8 characters.')
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                'Password should be at least 8 characters and include at least 1 Lowercase, 1 Uppercase, 1 number and special character.',
            )
            .test('Password has spaces', 'Password without spaces.', (value) => !/\s+/.test(value)),
        confirmPassword: yup
            .string()
            .required('Please enter confirm password')
            .oneOf([yup.ref('password')], 'Password does not match.'),
    });
    const {
        register,
        formState: { errors, isSubmitting },
        handleSubmit,
    } = useForm({
        mode: 'onBlur',
        resolver: yupResolver(formSchema),
    });

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

    const onSubmit = async (data) => {
        const { confirmPassword, ...otherData } = data;
        await registerUser(data, dispatch);
        console.log(otherData);
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
                                    className={cx('firstname-ipt', errors.firstName ? 'error-ipt' : null)}
                                    type="text"
                                    name="firstname"
                                    placeholder=" "
                                    {...register('firstName')}
                                />
                                <label>First Name</label>
                            </div>
                            <div className={cx('lastname')}>
                                <input
                                    className={cx('lastname-ipt', errors.lastName ? 'error-ipt' : null)}
                                    type="text"
                                    name="lastname"
                                    placeholder=" "
                                    {...register('lastName')}
                                />
                                <label>Last Name</label>
                            </div>
                        </div>
                        <div className={cx('error')}>
                            {errors.firstName && (
                                <p>
                                    <span className={cx('icon-warning')}>
                                        <BsExclamationTriangle />
                                    </span>
                                    {errors.firstName?.message}
                                </p>
                            )}
                            {errors.lastName && (
                                <p>
                                    <span className={cx('icon-warning')}>
                                        <BsExclamationTriangle />
                                    </span>
                                    {errors.lastName?.message}
                                </p>
                            )}
                        </div>

                        <div className={cx('email')}>
                            <input
                                className={cx('email-ipt', errors.email ? 'error-ipt' : null)}
                                placeholder=" "
                                type="text"
                                name="email"
                                {...register('email')}
                            />
                            <label>Email address</label>
                        </div>
                        <span className={cx('error')}>
                            {errors.email && (
                                <>
                                    <span className={cx('icon-warning')}>
                                        <BsExclamationTriangle />
                                    </span>
                                    {errors.email?.message}
                                </>
                            )}
                        </span>

                        <div className={cx('password')}>
                            <input
                                className={cx('password-ipt', errors.password ? 'error-ipt' : null)}
                                id="password"
                                type="password"
                                name="password"
                                placeholder=" "
                                {...register('password')}
                                onChange={handleChangePassword}
                            />
                            <label>Password</label>
                            {showIconPassword && (
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

                        <div className={cx('password')}>
                            <input
                                id="confirm-password"
                                className={cx('password-ipt', errors.confirmPassword ? 'error-ipt' : null)}
                                type="password"
                                name="confirm-password"
                                placeholder=" "
                                {...register('confirmPassword')}
                                onChange={handleChangeConfirmPassword}
                            />
                            <label>Confirm Password</label>

                            {showIconConfirm && (
                                <div className={cx('icon')} onClick={handleShowConfirmPassword}>
                                    {showConfirmPassword ? <BsEyeFill /> : <BsEyeSlashFill />}
                                </div>
                            )}
                        </div>
                        <span className={cx('error')}>
                            {errors.confirmPassword && (
                                <>
                                    <span className={cx('icon-warning')}>
                                        <BsExclamationTriangle />
                                    </span>
                                    {errors.confirmPassword?.message}
                                </>
                            )}
                        </span>
                        <button disabled={isSubmitting} type="submit" className={cx('register-btn')}>
                            {isSubmitting ? <RiLoader4Fill className={cx('icon-loading')} /> : 'Create account'}
                        </button>
                    </form>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}

export default Register;
