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
        bio: yup.string().max(500, 'Please enter at most 500 characters.'),
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
                    <div className={cx('first-name')}>
                        <div className={cx('first-name-field')}>
                            <label className={cx('label', errors.firstName && 'error-color')}>
                                <span className={cx('icon-person')}>
                                    <BsPerson />
                                </span>
                                First Name
                            </label>
                            <input
                                type="text"
                                className={cx('input', errors.firstName && 'error-ipt')}
                                placeholder="First Name"
                                disabled={!isEditProfile}
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
                        <div className={cx('last-name-field')}>
                            <label className={cx('label', errors.lastName && 'error-color')}>
                                <span className={cx('icon-person')}>
                                    <BsPerson />
                                </span>
                                Last Name
                            </label>
                            <input
                                type="text"
                                className={cx('input', errors.lastName && 'error-ipt')}
                                placeholder="Last Name"
                                disabled={!isEditProfile}
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
                <div className={cx('email-and-birth')}>
                    <div className={cx('email')}>
                        <div className={cx('email-field')}>
                            <label className={cx('label')}>
                                <span className={cx('icon-email')}>
                                    <BsEnvelope />
                                </span>
                                Email
                            </label>
                            <input type="text" className={cx('input')} value="Admin@gmail.com" disabled />
                        </div>
                    </div>

                    <div className={cx('birth')}>
                        <div className={cx('birth-field')}>
                            <label className={cx('label')}>
                                <span className={cx('icon-birth')}>
                                    <BsCalendarEvent />
                                </span>
                                Birth
                            </label>
                            <input
                                type="text"
                                className={cx('input')}
                                placeholder="Date of Birth"
                                disabled={!isEditProfile}
                                {...register('birth')}
                            />
                        </div>
                    </div>
                </div>
                <div className={cx('phone-and-position')}>
                    <div className={cx('phone')}>
                        <div className={cx('phone-field')}>
                            <label className={cx('label', errors.phoneNumber && 'error-color')}>
                                <span className={cx('icon-phone')}>
                                    <BsTelephone />
                                </span>
                                Phone
                            </label>
                            <input
                                type="text"
                                className={cx('input', errors.phoneNumber && 'error-ipt')}
                                placeholder="Phone Number"
                                disabled={!isEditProfile}
                                {...register('phoneNumber')}
                            />
                        </div>
                        {errors.phoneNumber?.message && (
                            <span className={cx('error')}>
                                <BsExclamationTriangle className={cx('icon-warning')} />
                                {errors.phoneNumber?.message}
                            </span>
                        )}
                    </div>

                    <div className={cx('position')}>
                        <div className={cx('position-field')}>
                            <label className={cx('label')}>
                                <span className={cx('icon-position')}>
                                    <BsBriefcase />
                                </span>
                                Position
                            </label>
                            <input type="text" className={cx('input')} value="Software Engineer" disabled />
                        </div>
                    </div>
                </div>
                <div className={cx('hashtag-and-gender')}>
                    <div className={cx('hashtag')}>
                        <div className={cx('hashtag-field')}>
                            <label className={cx('label', errors.hashtag && 'error-color')}>
                                <span className={cx('icon-hashtag')}>
                                    <BsHash />
                                </span>
                                Hashtag
                            </label>
                            <input
                                type="text"
                                className={cx('input', errors.hashtag && 'error-ipt')}
                                placeholder="Hashtag"
                                disabled={!isEditProfile}
                                {...register('hashtag')}
                            />
                        </div>
                        {errors.hashtag?.message && (
                            <span className={cx('error')}>
                                <BsExclamationTriangle className={cx('icon-warning')} />
                                {errors.hashtag?.message}
                            </span>
                        )}
                    </div>

                    <div className={cx('gender')}>
                        <div className={cx('gender-field')}>
                            <label className={cx('label')}>
                                <span className={cx('icon-gender')}>
                                    <BsGenderAmbiguous />
                                </span>
                                Gender
                            </label>
                            <input
                                type="text"
                                className={cx('input')}
                                placeholder="Gender"
                                disabled={!isEditProfile}
                                {...register('gender')}
                            />
                        </div>
                    </div>
                </div>
                <span className={cx('address-label')}>Address</span>
                <div className={cx('country-and-city')}>
                    <div className={cx('country')}>
                        <div className={cx('country-field')}>
                            <label className={cx('label', errors.country && 'error-color')}>
                                <span className={cx('icon-country')}>
                                    <IoEarthOutline />
                                </span>
                                Country
                            </label>
                            <input
                                type="text"
                                className={cx('input', errors.country && 'error-ipt')}
                                placeholder="Country"
                                disabled={!isEditProfile}
                                {...register('country')}
                            />
                        </div>

                        {errors.country?.message && (
                            <span className={cx('error')}>
                                <BsExclamationTriangle className={cx('icon-warning')} />
                                {errors.country?.message}
                            </span>
                        )}
                    </div>

                    <div className={cx('city')}>
                        <div className={cx('city-field')}>
                            <label className={cx('label', errors.city && 'error-color')}>
                                <span className={cx('icon-country')}>
                                    <IoEarthOutline />
                                </span>
                                City
                            </label>
                            <input
                                type="text"
                                className={cx('input', errors.city && 'error-ipt')}
                                placeholder="City"
                                disabled={!isEditProfile}
                                {...register('city')}
                            />
                        </div>

                        {errors.city?.message && (
                            <span className={cx('error')}>
                                <BsExclamationTriangle className={cx('icon-warning')} />
                                {errors.city?.message}
                            </span>
                        )}
                    </div>
                </div>
                <div className={cx('address-container')}>
                    <div className={cx('address-01')}>
                        <div className={cx('address-field')}>
                            <label className={cx('label', errors.address01 && 'error-color')}>Address 01</label>
                            <textarea
                                type="text"
                                className={cx('textarea', errors.address01 && 'error-ipt')}
                                placeholder="Address 01"
                                disabled={!isEditProfile}
                                {...register('address01')}
                            />
                        </div>
                        {errors.address01?.message && (
                            <span className={cx('error')}>
                                <BsExclamationTriangle className={cx('icon-warning')} />
                                {errors.address01?.message}
                            </span>
                        )}
                    </div>
                    <div className={cx('address-02')}>
                        <div className={cx('address-field')}>
                            <label className={cx('label', errors.address02 && 'error-color')}>Address 02</label>
                            <textarea
                                type="text"
                                className={cx('textarea', errors.address02 && 'error-ipt')}
                                placeholder="Address 02"
                                disabled={!isEditProfile}
                                {...register('address02')}
                            />
                        </div>
                        {errors.address02?.message && (
                            <span className={cx('error')}>
                                <BsExclamationTriangle className={cx('icon-warning')} />
                                {errors.address02?.message}
                            </span>
                        )}
                    </div>
                </div>
                <span className={cx('bio-label')}>Bio</span>
                <textarea
                    type="text"
                    className={cx('textarea-bio', errors.bio && 'error-ipt')}
                    placeholder="Write something..."
                    disabled={!isEditProfile}
                    {...register('bio')}
                />
                {errors.bio?.message && (
                    <span className={cx('error')}>
                        <BsExclamationTriangle className={cx('icon-warning')} />
                        {errors.bio?.message}
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
