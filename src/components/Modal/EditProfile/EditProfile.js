import React from 'react';
import classNames from 'classnames/bind';
import { AnimatePresence, motion } from 'framer-motion';

import styles from './EditProfile.module.scss';
import Tippy from '@tippyjs/react';
import {
    BsBriefcase,
    BsCalendarEvent,
    BsEnvelope,
    BsGenderAmbiguous,
    BsGeoAlt,
    BsHash,
    BsPerson,
    BsTelephone,
    BsXLg,
} from 'react-icons/bs';
import { setEditProfileModalIsOpen } from '~/redux/Slice/modalSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { updateUser } from '~/api/userApi';
import { createAxios } from '~/api/axiosClient';
import { updateSuccess } from '~/redux/Slice/authSlice';
import Modal from '../Modal';

const cx = classNames.bind(styles);

function EditProfile({ show, setShowEditProfileModal }) {
    const { currentUser } = useSelector((state) => state.auth.login);
    const dispatch = useDispatch();
    let axiosJWT = createAxios(currentUser, dispatch, updateSuccess);

    const { register, handleSubmit } = useForm({});

    const closeModal = () => {
        setShowEditProfileModal(false);
    };

    const handleCancel = () => {
        closeModal();
    };

    const onSubmit = (formData) => {
        updateUser(formData, currentUser._id, dispatch, currentUser.accessToken, axiosJWT);
        dispatch(setEditProfileModalIsOpen(false));
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
                            <span className={cx('title')}>Edit profile</span>
                            <div>
                                <Tippy delay={[0, 50]} interactive content="Close">
                                    <button className={cx('close-btn')} onClick={closeModal}>
                                        <BsXLg />
                                    </button>
                                </Tippy>
                            </div>
                        </header>
                        <form className={cx('container')} onSubmit={handleSubmit(onSubmit)}>
                            <label className={cx('label')}>
                                Email:
                                <div className={cx('input-container')}>
                                    <span className={cx('icon')}>
                                        <BsEnvelope />
                                    </span>
                                    <input
                                        type="text"
                                        placeholder={currentUser?.email}
                                        className={cx('input-field')}
                                        disabled
                                    />
                                </div>
                            </label>
                            <label className={cx('label')}>
                                FullName:
                                <div className={cx('input-container')}>
                                    <span className={cx('icon')}>
                                        <BsPerson />
                                    </span>
                                    <input
                                        type="text"
                                        placeholder={currentUser?.fullName}
                                        className={cx('input-field')}
                                        name="full-name"
                                        {...register('fullName')}
                                    />
                                </div>
                            </label>
                            <label className={cx('label')}>
                                Address:
                                <div className={cx('input-container')}>
                                    <span className={cx('icon')}>
                                        <BsGeoAlt />
                                    </span>
                                    <input
                                        type="text"
                                        placeholder={currentUser?.streetAddress}
                                        className={cx('input-field')}
                                        name="address"
                                        {...register('streetAddress')}
                                    />
                                </div>
                            </label>
                            <label className={cx('label')}>
                                Birth:
                                <div className={cx('input-container')}>
                                    <span className={cx('icon')}>
                                        <BsCalendarEvent />
                                    </span>
                                    <input
                                        type="text"
                                        placeholder={currentUser?.birth}
                                        className={cx('input-field')}
                                        name="birth"
                                        {...register('birth')}
                                    />
                                </div>
                            </label>
                            <label className={cx('label')}>
                                Gender:
                                <div className={cx('input-container')}>
                                    <span className={cx('icon')}>
                                        <BsGenderAmbiguous />
                                    </span>
                                    <input
                                        type="text"
                                        placeholder={currentUser?.gender}
                                        className={cx('input-field')}
                                        name="gender"
                                        {...register('gender')}
                                    />
                                </div>
                            </label>
                            <label className={cx('label')}>
                                HashTag:
                                <div className={cx('input-container')}>
                                    <span className={cx('icon')}>
                                        <BsHash />
                                    </span>
                                    <input
                                        type="text"
                                        placeholder={currentUser?.hashtag}
                                        className={cx('input-field')}
                                        name="hashtag"
                                        {...register('hashtag')}
                                    />
                                </div>
                            </label>
                            <label className={cx('label')}>
                                Work:
                                <div className={cx('input-container')}>
                                    <span className={cx('icon')}>
                                        <BsBriefcase />
                                    </span>
                                    <input
                                        type="text"
                                        placeholder={currentUser?.position}
                                        className={cx('input-field')}
                                        name="position"
                                        {...register('position')}
                                    />
                                </div>
                            </label>
                            <label className={cx('label')}>
                                Phone:
                                <div className={cx('input-container')}>
                                    <span className={cx('icon')}>
                                        <BsTelephone />
                                    </span>
                                    <input
                                        type="text"
                                        placeholder={currentUser?.phone}
                                        className={cx('input-field')}
                                        name="phone"
                                        {...register('phone')}
                                    />
                                </div>
                            </label>
                            <footer className={cx('action-btn')}>
                                <button type="button" className={cx('cancel-btn')} onClick={handleCancel}>
                                    Cancel
                                </button>
                                <button type="submit" className={cx('save-btn')}>
                                    Save
                                </button>
                            </footer>
                        </form>
                    </motion.div>
                </Modal>
            </AnimatePresence>
        );
    }
}

export default EditProfile;
