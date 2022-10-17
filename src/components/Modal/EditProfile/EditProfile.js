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

const cx = classNames.bind(styles);

function EditProfile() {
    const { currentUser } = useSelector((state) => state.auth.login);
    const dispatch = useDispatch();

    const iconProfile = [
        { id: 'Email', icon: <BsEnvelope />, desc: currentUser.email },
        { id: 'FullName', icon: <BsPerson />, desc: currentUser.fullName },
        { id: 'Address', icon: <BsGeoAlt />, desc: currentUser.streetAddress },
        { id: 'Birth', icon: <BsCalendarEvent />, desc: currentUser.birth },
        { id: 'Gender', icon: <BsGenderAmbiguous />, desc: currentUser.gender },
        { id: 'HashTag', icon: <BsHash />, desc: currentUser.hashtag },
        { id: 'Work', icon: <BsBriefcase />, desc: currentUser.position },
        { id: 'Phone', icon: <BsTelephone />, desc: currentUser.phone },
    ];

    const closeModal = () => {
        dispatch(setEditProfileModalIsOpen(false));
    };

    const handleCancel = () => {
        dispatch(setEditProfileModalIsOpen(false));
    };

    return (
        <AnimatePresence>
            <motion.div initial={{ x: '-50%', y: '-50%', scale: 0 }} animate={{ scale: 1 }} className={cx('wrapper')}>
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
                <div className={cx('container')}>
                    {iconProfile.map((item, idx) => (
                        <label className={cx('label')} key={idx}>
                            {item.id}:
                            <div className={cx('input-container')}>
                                <span className={cx('icon')}>{item.icon}</span>
                                <input type="text" placeholder={item.desc} className={cx('input-field')} />
                            </div>
                        </label>
                    ))}
                </div>
                <footer className={cx('action-btn')}>
                    <button className={cx('cancel-btn')} onClick={handleCancel}>
                        Cancel
                    </button>
                    <button className={cx('save-btn')}>Save</button>
                </footer>
            </motion.div>
        </AnimatePresence>
    );
}

export default EditProfile;
