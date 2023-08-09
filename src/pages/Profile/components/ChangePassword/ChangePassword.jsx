import classNames from 'classnames/bind';
import { useState } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { BsExclamationTriangle, BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import { HiCheck } from 'react-icons/hi';
import * as yup from 'yup';
import styles from './ChangePassword.module.scss';

const cx = classNames.bind(styles);

function ChangePassword() {
    const [showOldPassword, setShowOldPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [lengthValidated, setLengthValidated] = useState(false);
    const [lowerValidated, setLowerValidated] = useState(false);
    const [upperValidated, setUpperValidated] = useState(false);
    const [numberValidated, setNumberValidated] = useState(false);
    const [specialValidated, setSpecialValidated] = useState(false);

    const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

    const formSchema = yup.object().shape({
        oldPassword: yup
            .string()
            .required('Please enter old password.')
            .min(8, 'Please enter at least 8 characters.')
            .matches(passwordRegExp, 'Password incorrect.')
            .test('Password has spaces', 'Password without spaces.', (value) => !/\s+/.test(value)),
        newPassword: yup
            .string()
            .required('Please enter new password.')
            .min(8, 'New password does not match condition.')
            .matches(passwordRegExp, 'New password does not match condition.')
            .test('Password has spaces', 'Password without spaces.', (value) => !/\s+/.test(value)),
        confirmPassword: yup
            .string()
            .required('Please enter confirm password')
            .oneOf([yup.ref('newPassword')], 'Confirm password does not match.'),
    });

    const {
        register,
        formState: { errors, isSubmitting },
        reset,
        handleSubmit,
    } = useForm({
        mode: 'onBlur',
        resolver: yupResolver(formSchema),
    });

    const handleToggleShowOldPassword = () => {
        const inputEl = document.getElementById('old-password');
        setShowOldPassword((prevState) => !prevState);
        checkTypeInputEl(inputEl);
    };

    const handleToggleShowNewPassword = () => {
        const inputEl = document.getElementById('new-password');
        setShowNewPassword((prevState) => !prevState);
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

    const handleCheckNewPassword = (value) => {
        const length = new RegExp('(?=.{8,})');
        const lower = new RegExp('(?=.*[a-z])');
        const upper = new RegExp('(?=.*[A-Z])');
        const number = new RegExp('(?=.*[0-9])');
        const special = new RegExp('(?=.*[!@#$%^&*])');

        setLengthValidated(length.test(value) ? true : false);
        setLowerValidated(lower.test(value) ? true : false);
        setUpperValidated(upper.test(value) ? true : false);
        setNumberValidated(number.test(value) ? true : false);
        setSpecialValidated(special.test(value) ? true : false);
    };

    const onSubmit = async (data) => {
        console.log(data);
    };

    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <span className={cx('title')}>Change Password</span>
            </header>
            <div className={cx('container')}>
                <form className={cx('form')} onSubmit={handleSubmit(onSubmit)}>
                    <div className={cx('old-password')}>
                        <div className={cx('old-password-field', errors.oldPassword && 'error-ipt')}>
                            <label className={cx('label')}>Old password</label>
                            <input
                                id="old-password"
                                type="password"
                                className={cx('input')}
                                placeholder="Enter old password..."
                                {...register('oldPassword')}
                            />
                            <span className={cx('icon-eye')} onClick={handleToggleShowOldPassword}>
                                {showOldPassword ? <BsEyeFill /> : <BsEyeSlashFill />}
                            </span>
                        </div>
                        {errors.oldPassword?.message && (
                            <span className={cx('error')}>
                                <BsExclamationTriangle className={cx('icon-warning')} />
                                {errors.oldPassword?.message}
                            </span>
                        )}
                    </div>

                    <div className={cx('new-password')}>
                        <div className={cx('new-password-field', errors.newPassword && 'error-ipt')}>
                            <label className={cx('label')}>New password</label>
                            <input
                                id="new-password"
                                type="password"
                                className={cx('input')}
                                placeholder="Enter new password..."
                                {...register('newPassword', {
                                    onChange: (e) => handleCheckNewPassword(e.target.value),
                                })}
                            />
                            <span className={cx('icon-eye')} onClick={handleToggleShowNewPassword}>
                                {showNewPassword ? <BsEyeFill /> : <BsEyeSlashFill />}
                            </span>
                        </div>
                        {errors.newPassword?.message && (
                            <span className={cx('error')}>
                                <BsExclamationTriangle className={cx('icon-warning')} />
                                {errors.newPassword?.message}
                            </span>
                        )}
                    </div>

                    <div className={cx('confirm-password')}>
                        <div className={cx('confirm-password-field', errors.confirmPassword && 'error-ipt')}>
                            <label className={cx('label')}>Confirm password</label>
                            <input
                                id="confirm-password"
                                type="password"
                                className={cx('input')}
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

                    <button className={cx('change-password-btn')} type="submit">
                        Change Password
                    </button>
                </form>
                <div className={cx('validate-condition')}>
                    <h3>New password must contain:</h3>
                    <span className={cx('condition', lengthValidated && 'validated')}>
                        <span className={cx('icon')}>{lengthValidated ? <HiCheck /> : <BsExclamationTriangle />}</span>
                        At least 8 characters.
                    </span>
                    <span className={cx('condition', lowerValidated && 'validated')}>
                        <span className={cx('icon')}>{lowerValidated ? <HiCheck /> : <BsExclamationTriangle />}</span>
                        At least 1 lower letter. (a-z)
                    </span>
                    <span className={cx('condition', upperValidated && 'validated')}>
                        <span className={cx('icon')}>{upperValidated ? <HiCheck /> : <BsExclamationTriangle />}</span>
                        At least 1 uppercase letter. (A-Z)
                    </span>
                    <span className={cx('condition', numberValidated && 'validated')}>
                        <span className={cx('icon')}>{numberValidated ? <HiCheck /> : <BsExclamationTriangle />}</span>
                        At least 1 number. (0-9)
                    </span>
                    <span className={cx('condition', specialValidated && 'validated')}>
                        <span className={cx('icon')}>{specialValidated ? <HiCheck /> : <BsExclamationTriangle />}</span>
                        At least 1 special character.
                    </span>
                </div>
            </div>
        </div>
    );
}

export default ChangePassword;
