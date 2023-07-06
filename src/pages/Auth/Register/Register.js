import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { AnimatePresence, motion } from 'framer-motion';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import styles from './Register.module.scss';
import {
    BsChevronRight,
    BsEnvelope,
    BsExclamationTriangle,
    BsEyeFill,
    BsEyeSlashFill,
    BsLock,
    BsPerson,
    BsXLg,
} from 'react-icons/bs';
import { RiLoader4Fill } from 'react-icons/ri';
import { createAxios } from '~/services/axiosClient';
import { useSelector } from 'react-redux';
import { registerSuccess } from '~/redux/Slice/authSlice';
import Modal from '../../../components/Modal/Modal';
import images from '~/assets/images';
import Dropdown from '~/components/Dropdown/Dropdown';

const cx = classNames.bind(styles);

function Register({ show, setShowRegisterModal }) {
    const { currentUser } = useSelector((state) => state.auth.login);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [showPositionDropdown, setShowPositionDropdown] = useState(false);
    const [showDayDropdown, setShowDayDropdown] = useState(false);
    const [showMonthDropdown, setShowMonthDropdown] = useState(false);
    const [showYearDropdown, setShowYearDropdown] = useState(false);
    const [dayOptions, setDayOptions] = useState([]);
    const [positionValue, setPositionValue] = useState('Select option');
    const [dayValue, setDayValue] = useState('DD');
    const [monthValue, setMonthValue] = useState('MM');
    const [yearValue, setYearValue] = useState('YYYY');
    const [positionError, setPositionError] = useState(false);
    const [dayError, setDayError] = useState(false);
    const [monthError, setMonthError] = useState(false);
    const [yearError, setYearError] = useState(false);
    const dispatch = useDispatch();
    let axiosJWT = createAxios(currentUser, dispatch, registerSuccess);

    const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

    const positionOptions = ['Developer', 'Boss', 'Admin', 'Sale', 'Marketing', 'Fresher', 'Other'];
    const monthOptions = Array.from({ length: 12 }, (x, i) => {
        const month = i + 1;
        return month <= 9 ? '0' + month : month;
    });

    const currentYear = new Date().getFullYear();
    const yearOptions = Array.from({ length: 70 }, (x, i) => currentYear - i);

    useEffect(() => {
        if (monthValue !== 'MM' && yearValue !== 'YYYY') {
            const daysInMonth = new Date(Number(yearValue), Number(monthValue), 0).getDate();
            const dayArr = Array.from({ length: daysInMonth }, (x, i) => {
                const day = i + 1;
                return day <= 9 ? '0' + day : day;
            });
            setDayOptions(dayArr);
        }
    }, [monthValue, yearValue]);

    const formSchema = yup.object().shape({
        firstName: yup.string().required('First Name is required.').max(20, 'Please enter at most 20 characters.'),
        lastName: yup.string().required('Last Name is required.').max(20, 'Please enter at most 20 characters.'),
        email: yup.string().required('Please enter email.').email('Please enter a valid email.'),
        password: yup
            .string()
            .required('Please enter password.')
            .min(8, 'Please enter at least 8 characters.')
            .max(20, 'Please enter at most 20 characters.')
            .matches(
                passwordRegExp,
                'Password should be at least 8 characters and include at least 1 lowercase, 1 uppercase, 1 number and special character.',
            )
            .test('Password has spaces', 'Password without spaces.', (value) => !/\s+/.test(value)),
        confirmPassword: yup
            .string()
            .required('Please enter confirm password')
            .max(20, 'Please enter at most 20 characters.')
            .oneOf([yup.ref('password')], 'Confirm password does not match.'),
    });
    const {
        register,
        formState: { errors, isSubmitting },
        handleSubmit,
        reset,
    } = useForm({
        mode: 'onBlur',
        resolver: yupResolver(formSchema),
    });

    const handleCloseModal = () => {
        reset();
        setPositionValue('Select option');
        setDayOptions([]);
        setDayValue('DD');
        setMonthValue('MM');
        setYearValue('YYYY');
        setShowRegisterModal(false);
    };

    const handleToggleShowPassword = () => {
        const inputEl = document.getElementById('password');
        setShowPassword((prevState) => !prevState);
        checkTypeInputEl(inputEl);
    };

    const handleToggleShowConfirmPassword = () => {
        const inputEl = document.getElementById('confirm-password');
        setShowConfirmPassword((prevState) => !prevState);
        checkTypeInputEl(inputEl);
    };

    const checkTypeInputEl = (inputEl) => {
        if (inputEl.type === 'password') return (inputEl.type = 'text');
        return (inputEl.type = 'password');
    };

    const handleToggleDropdown = (e) => {
        const targetEl = e.target.dataset.field;

        if (targetEl === 'position-options') return setShowPositionDropdown(true);
        if (targetEl === 'day-options') return setShowDayDropdown(true);
        if (targetEl === 'month-options') return setShowMonthDropdown(true);
        if (targetEl === 'year-options') return setShowYearDropdown(true);
    };

    const handleSelectOption = (option) => {
        if (showPositionDropdown) {
            setPositionValue(option);
            setPositionError(false);
            setShowPositionDropdown(false);
        }
        if (showDayDropdown) {
            setDayValue(option);
            setDayError(false);
            setShowDayDropdown(false);
        }
        if (showMonthDropdown) {
            setMonthValue(option);
            setDayValue('DD');
            setMonthError(false);
            setShowMonthDropdown(false);
        }
        if (showYearDropdown) {
            setYearValue(option);
            setDayValue('DD');
            setYearError(false);
            setShowYearDropdown(false);
        }
    };

    const onSubmit = async (data) => {
        if (positionValue === 'Select option') return setPositionError(true);
        if (monthValue === 'MM') return setMonthError(true);
        if (yearValue === 'YYYY') return setYearError(true);
        if (dayValue === 'DD') return setDayError(true);
        console.log(data);
        // const { confirmPassword, ...otherData } = data;

        // const result = await registerUser(otherData, dispatch, currentUser?.accessToken, axiosJWT);
        // console.log(otherData);
        // if (result?.errors) {
        //     console.log(result.errors);
        // }
    };
    if (show) {
        return (
            <AnimatePresence>
                <Modal>
                    <motion.div
                        initial={{ x: '-50%', y: '-50%', scale: 0 }}
                        animate={{ scale: 1 }}
                        className={cx('wrapper')}
                    >
                        <header className={cx('header')}>
                            <div className={cx('logo')}>
                                <img className={cx('logo-image')} src={images.logo} alt="logo" />
                                <span className={cx('logo-text')}>
                                    <h1>HypeHub</h1>
                                    <h6>Do it your way!</h6>
                                </span>
                            </div>
                            <h3>Create new account</h3>
                            <button className={cx('close-btn')} onClick={handleCloseModal}>
                                <BsXLg />
                            </button>
                        </header>
                        <form className={cx('form')} onSubmit={handleSubmit(onSubmit)}>
                            <div className={cx('full-name')}>
                                <div className={cx('first-name')}>
                                    <div className={cx('first-name-field', errors.firstName && 'error-ipt')}>
                                        <label className={cx('label')}>First Name</label>
                                        <span className={cx('icon-person')}>
                                            <BsPerson />
                                        </span>
                                        <input
                                            type="text"
                                            className={cx('input')}
                                            placeholder="Enter first name..."
                                            {...register('firstName')}
                                        />
                                    </div>
                                    {errors.firstName?.message && (
                                        <span className={cx('error')}>
                                            <BsExclamationTriangle className={cx('icon-warning')} />
                                            {errors.firstName?.message}
                                        </span>
                                    )}
                                </div>

                                <div className={cx('last-name')}>
                                    <div className={cx('last-name-field', errors.lastName && 'error-ipt')}>
                                        <label className={cx('label')}>Last Name</label>
                                        <span className={cx('icon-person')}>
                                            <BsPerson />
                                        </span>
                                        <input
                                            type="text"
                                            className={cx('input')}
                                            placeholder="Enter last name..."
                                            {...register('lastName')}
                                        />
                                    </div>
                                    {errors.lastName?.message && (
                                        <span className={cx('error')}>
                                            <BsExclamationTriangle className={cx('icon-warning')} />
                                            {errors.lastName?.message}
                                        </span>
                                    )}
                                </div>
                            </div>

                            <div className={cx('email')}>
                                <div className={cx('email-field', errors.email && 'error-ipt')}>
                                    <label className={cx('label')}>Email</label>
                                    <span className={cx('icon-email')}>
                                        <BsEnvelope />
                                    </span>
                                    <input
                                        type="text"
                                        className={cx('input')}
                                        placeholder="Enter email..."
                                        {...register('email')}
                                    />
                                </div>
                                {errors.email?.message && (
                                    <span className={cx('error')}>
                                        <BsExclamationTriangle className={cx('icon-warning')} />
                                        {errors.email?.message}
                                    </span>
                                )}
                            </div>

                            <div className={cx('password')}>
                                <div className={cx('password-field', errors.password && 'error-ipt')}>
                                    <label className={cx('label')}>Password</label>
                                    <span className={cx('icon-lock')}>
                                        <BsLock />
                                    </span>
                                    <input
                                        id="password"
                                        type="password"
                                        className={cx('input', 'password-ipt')}
                                        placeholder="Enter password..."
                                        {...register('password')}
                                    />
                                    <span className={cx('icon-eye')} onClick={handleToggleShowPassword}>
                                        {showPassword ? <BsEyeFill /> : <BsEyeSlashFill />}
                                    </span>
                                </div>
                                {errors.password?.message && (
                                    <span className={cx('error')}>
                                        <BsExclamationTriangle className={cx('icon-warning')} />
                                        {errors.password?.message}
                                    </span>
                                )}
                            </div>

                            <div className={cx('confirm-password')}>
                                <div className={cx('confirm-password-field', errors.confirmPassword && 'error-ipt')}>
                                    <label className={cx('label')}>Confirm Password</label>
                                    <span className={cx('icon-lock')}>
                                        <BsLock />
                                    </span>
                                    <input
                                        id="confirm-password"
                                        type="password"
                                        className={cx('input', 'password-ipt')}
                                        placeholder="Enter confirm password..."
                                        {...register('confirmPassword')}
                                    />
                                    <span className={cx('icon-eye')} onClick={handleToggleShowConfirmPassword}>
                                        {showConfirmPassword ? <BsEyeFill /> : <BsEyeSlashFill />}
                                    </span>
                                </div>
                                {errors.confirmPassword?.message && (
                                    <span className={cx('error')}>
                                        <BsExclamationTriangle className={cx('icon-warning')} />
                                        {errors.confirmPassword?.message}
                                    </span>
                                )}
                            </div>

                            <div className={cx('position-and-birth')}>
                                <div className={cx('position')}>
                                    <label className={cx('position-label')}>Position</label>
                                    <div className={cx('position-field', positionError && 'error-ipt')}>
                                        <span
                                            data-field="position-options"
                                            name="position-option"
                                            className={cx('position-option', showPositionDropdown && 'toggle-dropdown')}
                                            onClick={(e) => handleToggleDropdown(e)}
                                        >
                                            {positionValue}
                                            <span className={cx('icon-dropdown')}>
                                                <BsChevronRight />
                                            </span>
                                        </span>
                                        <Dropdown
                                            isShowDropdown={showPositionDropdown}
                                            setShowDropdown={setShowPositionDropdown}
                                            options={positionOptions}
                                            onChange={handleSelectOption}
                                            wrapperClass={cx('wrapper-option')}
                                        />
                                    </div>
                                    {positionError && (
                                        <span className={cx('error')}>
                                            <BsExclamationTriangle className={cx('icon-warning')} />
                                            Please select option.
                                        </span>
                                    )}
                                </div>
                                <div className={cx('birth')}>
                                    <label className={cx('birth-label')}>Birthday</label>
                                    <div className={cx('birth-container')}>
                                        <div className={cx('day-field', dayError && 'error-ipt')}>
                                            <label className={cx('label')}>Day</label>
                                            <span
                                                data-field="day-options"
                                                className={cx('day-option', showDayDropdown && 'toggle-dropdown')}
                                                onClick={(e) => handleToggleDropdown(e)}
                                            >
                                                {dayValue}
                                                <span className={cx('icon-dropdown')}>
                                                    <BsChevronRight />
                                                </span>
                                            </span>
                                            <Dropdown
                                                isShowDropdown={showDayDropdown}
                                                setShowDropdown={setShowDayDropdown}
                                                options={dayOptions}
                                                onChange={handleSelectOption}
                                                wrapperClass={cx('wrapper-option')}
                                            />
                                        </div>
                                        <div className={cx('month-field', monthError && 'error-ipt')}>
                                            <label className={cx('label')}>Month</label>
                                            <span
                                                data-field="month-options"
                                                className={cx('month-option', showMonthDropdown && 'toggle-dropdown')}
                                                onClick={(e) => handleToggleDropdown(e)}
                                            >
                                                {monthValue}
                                                <span className={cx('icon-dropdown')}>
                                                    <BsChevronRight />
                                                </span>
                                            </span>
                                            <Dropdown
                                                isShowDropdown={showMonthDropdown}
                                                setShowDropdown={setShowMonthDropdown}
                                                options={monthOptions}
                                                onChange={handleSelectOption}
                                                wrapperClass={cx('wrapper-option')}
                                            />
                                        </div>
                                        <div className={cx('year-field', yearError && 'error-ipt')}>
                                            <label className={cx('label')}>Year</label>
                                            <span
                                                data-field="year-options"
                                                className={cx('year-option', showYearDropdown && 'toggle-dropdown')}
                                                onClick={(e) => handleToggleDropdown(e)}
                                            >
                                                {yearValue}
                                                <span className={cx('icon-dropdown')}>
                                                    <BsChevronRight />
                                                </span>
                                            </span>
                                            <Dropdown
                                                isShowDropdown={showYearDropdown}
                                                setShowDropdown={setShowYearDropdown}
                                                options={yearOptions}
                                                onChange={handleSelectOption}
                                                wrapperClass={cx('wrapper-option')}
                                            />
                                        </div>
                                    </div>
                                    {dayError && (
                                        <span className={cx('error')}>
                                            <BsExclamationTriangle className={cx('icon-warning')} />
                                            Please select day.
                                        </span>
                                    )}
                                    {monthError && (
                                        <span className={cx('error')}>
                                            <BsExclamationTriangle className={cx('icon-warning')} />
                                            Please select month.
                                        </span>
                                    )}
                                    {yearError && (
                                        <span className={cx('error')}>
                                            <BsExclamationTriangle className={cx('icon-warning')} />
                                            Please select year.
                                        </span>
                                    )}
                                </div>
                            </div>

                            <button disabled={isSubmitting} type="submit" className={cx('register-btn')}>
                                {isSubmitting ? <RiLoader4Fill className={cx('icon-loading')} /> : 'Create account'}
                            </button>
                        </form>
                    </motion.div>
                </Modal>
            </AnimatePresence>
        );
    }
}

export default Register;
