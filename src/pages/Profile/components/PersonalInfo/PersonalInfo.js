import React, { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './PersonalInfo.module.scss';
import { useSelector } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import {
    BsBriefcase,
    BsCalendarEvent,
    BsEnvelope,
    BsExclamationTriangle,
    BsGenderAmbiguous,
    BsHash,
    BsPencil,
    BsPerson,
    BsTelephone,
} from 'react-icons/bs';
import { motion } from 'framer-motion';
import { IoEarthOutline } from 'react-icons/io5';

const cx = classNames.bind(styles);

function PersonalInfo() {
    const { currentUser } = useSelector((state) => state.auth.login);
    const [isEditProfile, setIsEditProfile] = useState(false);

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
        reset,
        handleSubmit,
    } = useForm({
        mode: 'onBlur',
        resolver: yupResolver(formSchema),
    });

    const handleEditProfile = () => {
        setIsEditProfile(true);
    };

    const handleCancelEditProfile = () => {
        reset();
        setIsEditProfile(false);
    };

    const onSubmit = async (data) => {
        console.log(data);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.2 } }}
            className={cx('wrapper')}
        >
            <header className={cx('header')}>
                <div className={cx('header-left')}>
                    <span className={cx('title')}>Personal Information</span>
                    <span className={cx('identify')}>No: MNT#123456789</span>
                </div>
                <button className={cx('edit-btn')} onClick={handleEditProfile}>
                    <BsPencil />
                    Edit Profile
                </button>
            </header>
            <form className={cx('form')} onSubmit={handleSubmit(onSubmit)}>
                <div className={cx('full-name')}>
                    <label className={cx('label')}>
                        First Name
                        <div className={cx('first-name-field')}>
                            <input
                                type="text"
                                className={cx('input', errors.firstName && 'error-ipt')}
                                placeholder="First Name"
                                disabled={!isEditProfile}
                                {...register('firstName')}
                            />
                            <span className={cx('icon-person', errors.firstName && 'error-color')}>
                                <BsPerson />
                            </span>
                        </div>
                        {errors.firstName?.message && (
                            <span className={cx('error')}>
                                <BsExclamationTriangle className={cx('icon-warning')} />
                                {errors.firstName?.message}
                            </span>
                        )}
                    </label>
                    <label className={cx('label')}>
                        Last Name
                        <div className={cx('last-name-field')}>
                            <input
                                type="text"
                                className={cx('input', errors.lastName && 'error-ipt')}
                                placeholder="Last Name"
                                disabled={!isEditProfile}
                                {...register('lastName')}
                            />
                            <span className={cx('icon-person', errors.firstName && 'error-color')}>
                                <BsPerson />
                            </span>
                        </div>
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
                        <div className={cx('email-field')}>
                            <input type="text" className={cx('input')} value="Admin@gmail.com" disabled />
                            <span className={cx('icon-email')}>
                                <BsEnvelope />
                            </span>
                        </div>
                    </label>
                    <label className={cx('label')}>
                        Date of Birth
                        <div className={cx('birth-field')}>
                            <input
                                type="text"
                                className={cx('input')}
                                placeholder="Date of Birth"
                                disabled={!isEditProfile}
                                {...register('birth')}
                            />
                            <span className={cx('icon-birth')}>
                                <BsCalendarEvent />
                            </span>
                        </div>
                    </label>
                </div>
                <div className={cx('phone-and-position')}>
                    <label className={cx('label')}>
                        Phone Number
                        <div className={cx('phone-field')}>
                            <input
                                type="text"
                                className={cx('input', errors.phoneNumber && 'error-ipt')}
                                placeholder="Phone Number"
                                disabled={!isEditProfile}
                                {...register('phoneNumber')}
                            />
                            <span className={cx('icon-phone', errors.phoneNumber && 'error-color')}>
                                <BsTelephone />
                            </span>
                        </div>
                        {errors.phoneNumber?.message && (
                            <span className={cx('error')}>
                                <BsExclamationTriangle className={cx('icon-warning')} />
                                {errors.phoneNumber?.message}
                            </span>
                        )}
                    </label>
                    <label className={cx('label')}>
                        Position
                        <div className={cx('position-field')}>
                            <input type="text" className={cx('input')} value="Software Engineer" disabled />
                            <span className={cx('icon-position')}>
                                <BsBriefcase />
                            </span>
                        </div>
                    </label>
                </div>
                <div className={cx('hashtag-and-gender')}>
                    <label className={cx('label')}>
                        Hashtag
                        <div className={cx('hashtag-field')}>
                            <input
                                type="text"
                                className={cx('input', errors.hashtag && 'error-ipt')}
                                placeholder="Hashtag"
                                disabled={!isEditProfile}
                                {...register('hashtag')}
                            />
                            <span className={cx('icon-hashtag', errors.hashtag && 'error-color')}>
                                <BsHash />
                            </span>
                        </div>
                        {errors.hashtag?.message && (
                            <span className={cx('error')}>
                                <BsExclamationTriangle className={cx('icon-warning')} />
                                {errors.hashtag?.message}
                            </span>
                        )}
                    </label>
                    <label className={cx('label')}>
                        Gender
                        <div className={cx('gender-field')}>
                            <input
                                type="text"
                                className={cx('input')}
                                placeholder="Gender"
                                disabled={!isEditProfile}
                                {...register('gender')}
                            />
                            <span className={cx('icon-gender')}>
                                <BsGenderAmbiguous />
                            </span>
                        </div>
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
                            disabled={!isEditProfile}
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
                            disabled={!isEditProfile}
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
                        <div className={cx('country-field')}>
                            <input
                                type="text"
                                className={cx('input', errors.country && 'error-ipt')}
                                placeholder="Country"
                                disabled={!isEditProfile}
                                {...register('country')}
                            />
                            <span className={cx('icon-country', errors.country && 'error-color')}>
                                <IoEarthOutline />
                            </span>
                        </div>
                        {errors.country?.message && (
                            <span className={cx('error')}>
                                <BsExclamationTriangle className={cx('icon-warning')} />
                                {errors.country?.message}
                            </span>
                        )}
                    </label>
                    <label className={cx('label')}>
                        City
                        <div className={cx('city-field')}>
                            <input
                                type="text"
                                className={cx('input', errors.city && 'error-ipt')}
                                placeholder="City"
                                disabled={!isEditProfile}
                                {...register('city')}
                            />
                            <span className={cx('icon-country', errors.city && 'error-color')}>
                                <IoEarthOutline />
                            </span>
                        </div>
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
                    disabled={!isEditProfile}
                    {...register('note')}
                />
                {errors.note?.message && (
                    <span className={cx('error')}>
                        <BsExclamationTriangle className={cx('icon-warning')} />
                        {errors.note?.message}
                    </span>
                )}
                {isEditProfile && (
                    <div className={cx('action-btn')}>
                        <button className={cx('cancel-btn')} type="button" onClick={handleCancelEditProfile}>
                            Cancel
                        </button>
                        <button className={cx('save-btn')} type="submit">
                            Save
                        </button>
                    </div>
                )}
            </form>
        </motion.div>
    );
}

export default PersonalInfo;
