import React from 'react';
import classNames from 'classnames/bind';

import styles from './PersonalInfo.module.scss';
import { useSelector } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { BsExclamationTriangle } from 'react-icons/bs';

const cx = classNames.bind(styles);

function PersonalInfo() {
    const { currentUser } = useSelector((state) => state.auth.login);

    const phoneRegExp =
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

    const formSchema = yup.object().shape({
        firstName: yup.string().required('First Name is required.').max(50, 'Please enter at most 50 characters.'),
        lastName: yup.string().required('Last Name is required.').max(50, 'Please enter at most 50 characters.'),
        phoneNumber: yup
            .string()
            .max(20, 'Phone number is not valid.')
            .matches(phoneRegExp, 'Phone number is not valid.'),
        hashtag: yup.string().max(50, 'Please enter at most 50 characters.'),
        address01: yup.string().max(120, 'Please enter at most 120 characters.'),
        address02: yup.string().max(120, 'Please enter at most 120 characters.'),
        country: yup.string().max(60, 'Please enter at most 60 characters.'),
        city: yup.string().max(30, 'Please enter at most 30 characters.'),
        note: yup.string().max(500, 'Please enter at most 500 characters.'),
    });

    const {
        register,
        formState: { errors, isSubmitting },
        handleSubmit,
    } = useForm({
        mode: 'onBlur',
        resolver: yupResolver(formSchema),
    });

    const onSubmit = async (data) => {
        console.log(data);
    };

    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <span>Personal Information</span>
                <span className={cx('identify')}>No: MNT#123456789</span>
            </header>
            <form className={cx('form')} onSubmit={handleSubmit(onSubmit)}>
                <div className={cx('full-name')}>
                    <label className={cx('label')}>
                        First Name
                        <input
                            type="text"
                            className={cx('input', errors.firstName && 'error-ipt')}
                            placeholder="First Name"
                            {...register('firstName')}
                        />
                        {errors.firstName?.message && (
                            <span className={cx('error')}>
                                <BsExclamationTriangle className={cx('icon-warning')} />
                                {errors.firstName?.message}
                            </span>
                        )}
                    </label>
                    <label className={cx('label')}>
                        Last Name
                        <input
                            type="text"
                            className={cx('input', errors.lastName && 'error-ipt')}
                            placeholder="Last Name"
                            {...register('lastName')}
                        />
                        {errors.lastName?.message && (
                            <span className={cx('error')}>
                                <BsExclamationTriangle className={cx('icon-warning')} />
                                {errors.lastName?.message}
                            </span>
                        )}
                    </label>
                </div>
                <div className={cx('email-and-birth')}>
                    <label className={cx('label')}>
                        Email Address
                        <input type="text" className={cx('input')} value="Admin@gmail.com" disabled />
                    </label>
                    <label className={cx('label')}>
                        Date of Birth
                        <input type="text" className={cx('input')} placeholder="Date of Birth" {...register('birth')} />
                    </label>
                </div>
                <div className={cx('phone-and-position')}>
                    <label className={cx('label')}>
                        Phone Number
                        <input
                            type="text"
                            className={cx('input', errors.phoneNumber && 'error-ipt')}
                            placeholder="Phone Number"
                            {...register('phoneNumber')}
                        />
                        {errors.phoneNumber?.message && (
                            <span className={cx('error')}>
                                <BsExclamationTriangle className={cx('icon-warning')} />
                                {errors.phoneNumber?.message}
                            </span>
                        )}
                    </label>
                    <label className={cx('label')}>
                        Position
                        <input type="text" className={cx('input')} value="Software Engineer" disabled />
                    </label>
                </div>
                <div className={cx('hashtag-and-gender')}>
                    <label className={cx('label')}>
                        Hashtag
                        <input
                            type="text"
                            className={cx('input', errors.hashtag && 'error-ipt')}
                            placeholder="Hashtag"
                            {...register('hashtag')}
                        />
                        {errors.hashtag?.message && (
                            <span className={cx('error')}>
                                <BsExclamationTriangle className={cx('icon-warning')} />
                                {errors.hashtag?.message}
                            </span>
                        )}
                    </label>
                    <label className={cx('label')}>
                        Gender
                        <input type="text" className={cx('input')} placeholder="Gender" {...register('gender')} />
                    </label>
                </div>
                <span className={cx('address-label')}>Address</span>
                <div className={cx('address')}>
                    <label className={cx('label')}>
                        Address 01
                        <textarea
                            type="text"
                            className={cx('textarea', errors.address01 && 'error-ipt')}
                            placeholder="Address 01"
                            {...register('address01')}
                        />
                        {errors.address01?.message && (
                            <span className={cx('error')}>
                                <BsExclamationTriangle className={cx('icon-warning')} />
                                {errors.address01?.message}
                            </span>
                        )}
                    </label>
                    <label className={cx('label')}>
                        Address 02
                        <textarea
                            type="text"
                            className={cx('textarea', errors.address02 && 'error-ipt')}
                            placeholder="Address 02"
                            {...register('address02')}
                        />
                        {errors.address02?.message && (
                            <span className={cx('error')}>
                                <BsExclamationTriangle className={cx('icon-warning')} />
                                {errors.address02?.message}
                            </span>
                        )}
                    </label>
                </div>
                <div className={cx('country-and-city')}>
                    <label className={cx('label')}>
                        Country
                        <input
                            type="text"
                            className={cx('input', errors.country && 'error-ipt')}
                            placeholder="Country"
                            {...register('country')}
                        />
                        {errors.country?.message && (
                            <span className={cx('error')}>
                                <BsExclamationTriangle className={cx('icon-warning')} />
                                {errors.country?.message}
                            </span>
                        )}
                    </label>
                    <label className={cx('label')}>
                        City
                        <input
                            type="text"
                            className={cx('input', errors.city && 'error-ipt')}
                            placeholder="City"
                            {...register('city')}
                        />
                        {errors.city?.message && (
                            <span className={cx('error')}>
                                <BsExclamationTriangle className={cx('icon-warning')} />
                                {errors.city?.message}
                            </span>
                        )}
                    </label>
                </div>
                <span className={cx('note-label')}>Note</span>
                <textarea
                    type="text"
                    className={cx('textarea-note', errors.note && 'error-ipt')}
                    placeholder="Write something..."
                    {...register('note')}
                />
                {errors.note?.message && (
                    <span className={cx('error')}>
                        <BsExclamationTriangle className={cx('icon-warning')} />
                        {errors.note?.message}
                    </span>
                )}
                <div className={cx('action-btn')}>
                    <button className={cx('cancel-btn')} type="button">
                        Cancel
                    </button>
                    <button className={cx('save-btn')} type="submit">
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
}

export default PersonalInfo;
