import React, { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Profile.module.scss';
import 'react-circular-progressbar/dist/styles.css';
import {
    BsPencil,
    BsTelephone,
    BsGenderAmbiguous,
    BsGeoAlt,
    BsBriefcase,
    BsEnvelope,
    BsCalendarEvent,
    BsPerson,
    BsHash,
    BsCamera,
    BsLock,
    BsClipboardCheck,
    BsCreditCard2Back,
} from 'react-icons/bs';
import Image from '~/components/Image';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '~/services/userApi';
import { createAxios } from '~/services/axiosClient';
import { updateSuccess } from '~/redux/Slice/authSlice';
import { uploadImages } from '~/services/uploadImagesApi';
import EditProfile from '~/components/Modal/EditProfile';
import images from '~/assets/images';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { FaFacebookSquare, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { NavLink, Route, Routes } from 'react-router-dom';
import routes from '~/config/routes';
import PersonalInfo from '~/components/PersonalInfo/PersonalInfo';
import Payment from '~/components/Payment/Payment';
import ChangePassword from '~/components/ChangePassword/ChangePassword';
import TimeSheets from '~/components/TimeSheets/TimeSheets';

const cx = classNames.bind(styles);

function Profile() {
    const { currentUser } = useSelector((state) => state.auth.login);
    const { _id, accessToken, email, fullName, streetAddress, birth, gender, hashtag, position, phone } = currentUser;
    const { editProfileModalIsOpen } = useSelector((state) => state.modal);
    const [showEditProfileModal, setShowEditProfileModal] = useState(false);
    const [previewSourceAvatar, setPreviewSourceAvatar] = useState('');
    const [selectedFileAvatar, setSelectedFileAvatar] = useState();

    const dispatch = useDispatch();
    let axiosJWT = createAxios(currentUser, dispatch, updateSuccess);

    const percentage = 15;

    const sidebar = [
        { path: '', icon: <BsPerson />, title: 'Information' },
        { path: routes.profile.payment, icon: <BsCreditCard2Back />, title: 'Payment' },
        { path: routes.profile.change_password, icon: <BsLock />, title: 'Change Password' },
        { path: routes.profile.time_sheets, icon: <BsClipboardCheck />, title: 'Time Sheets' },
    ];

    const iconProfile = [
        { id: 'Email', icon: <BsEnvelope />, desc: email },
        { id: 'FullName', icon: <BsPerson />, desc: fullName },
        { id: 'Address', icon: <BsGeoAlt />, desc: streetAddress },
        { id: 'Birth', icon: <BsCalendarEvent />, desc: birth },
        { id: 'Gender', icon: <BsGenderAmbiguous />, desc: gender },
        { id: 'HashTag', icon: <BsHash />, desc: hashtag },
        { id: 'Work', icon: <BsBriefcase />, desc: position },
        { id: 'Phone', icon: <BsTelephone />, desc: phone },
    ];

    const handleFileAvatarInputChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        previewFileAvatar(file);
        setSelectedFileAvatar(file);
    };

    const previewFileAvatar = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewSourceAvatar(reader.result);
        };
        reader.onerror = () => {
            console.error('something went wrong!');
        };
    };

    const handleCancelAvatar = () => {
        setPreviewSourceAvatar('');
    };

    const handleSubmitAvatar = (e) => {
        e.preventDefault();

        if (!previewSourceAvatar) return;
        const reader = new FileReader();
        reader.readAsDataURL(selectedFileAvatar);
        reader.onloadend = () => {
            uploadImageAvatar(reader.result);
        };
        reader.onerror = () => {
            console.error('something went wrong!');
        };
    };

    const uploadImageAvatar = async (base64EncodedImage) => {
        const imgUrl = await uploadImages(base64EncodedImage);
        await updateUser({ avatar: imgUrl }, _id, dispatch, accessToken, axiosJWT);

        setPreviewSourceAvatar('');
    };

    const handleEditProfileBtn = () => {
        // dispatch(setEditProfileModalIsOpen(true));
        setShowEditProfileModal(true);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className={cx('header-left')}>
                    <div className={cx('progress')}>
                        <CircularProgressbar
                            minValue={0}
                            maxValue={100}
                            value={percentage}
                            text={`${percentage}%`}
                            styles={buildStyles({
                                rotation: 1,
                                strokeLinecap: 'round',
                                textSize: '2rem',

                                // Colors
                                textColor: 'var(--text-color)',
                                pathColor: `var(--blue)`,
                                trailColor: 'var(--gray-alpha-40)',
                            })}
                        />
                    </div>
                    <div className={cx('heading')}>
                        <span className={cx('title')}>Personal Information</span>
                        <span className={cx('sub-title')}>Complete your profile.</span>
                    </div>
                </div>
                <div className={cx('header-right')}>
                    <button className={cx('edit-btn')}>
                        <BsPencil /> Edit profile
                    </button>
                </div>
            </div>

            <div className={cx('container')}>
                <div className={cx('user-info')}>
                    <div className={cx('avatar')}>
                        <Image
                            className={cx('user-avatar')}
                            src={previewSourceAvatar || currentUser?.avatar || images.coverAvatar}
                            alt="avatar"
                        />
                        <label htmlFor="upload-avatar" className={cx('icon-camera')}>
                            <BsCamera />
                        </label>
                        <input
                            id="upload-avatar"
                            type="file"
                            className={cx('upload-avatar')}
                            onChange={handleFileAvatarInputChange}
                            hidden
                        />
                    </div>
                    <div className={cx('info')}>
                        <span className={cx('username')}>{currentUser?.fullName}</span>
                        <span className={cx('position')}>{currentUser?.position}</span>
                        <span className={cx('hashtag')}>{currentUser?.hashtag ? `#${currentUser.hashtag}` : ''}</span>
                        <div className={cx('social')}>
                            <span className={cx('facebook-icon')}>
                                <FaFacebookSquare />
                            </span>
                            <span className={cx('instagram-icon')}>
                                <FaInstagram />
                            </span>
                            <span className={cx('twitter-icon')}>
                                <FaTwitter />
                            </span>
                            <span className={cx('linkedin-icon')}>
                                <FaLinkedin />
                            </span>
                        </div>
                    </div>
                    {previewSourceAvatar && (
                        <div className={cx('avatar-btn')}>
                            <button className={cx('cancel-btn')} onClick={handleCancelAvatar}>
                                Cancel
                            </button>
                            <button type="button" className={cx('save-btn')} onClick={handleSubmitAvatar}>
                                Save
                            </button>
                        </div>
                    )}
                    <div className={cx('menu')}>
                        {sidebar.map((item, idx) => (
                            <NavLink
                                key={idx}
                                to={item.path}
                                className={(nav) => cx('menu-item', { active: nav.isActive })}
                                end
                            >
                                <span className={cx('icon')}>{item.icon}</span>
                                <span className={cx('title')}>{item.title}</span>
                            </NavLink>
                        ))}
                    </div>
                </div>

                <Routes>
                    <Route index element={<PersonalInfo />} />
                    <Route path={routes.profile.payment} element={<Payment />} />
                    <Route path={routes.profile.change_password} element={<ChangePassword />} />
                    <Route path={routes.profile.time_sheets} element={<TimeSheets />} />
                </Routes>
            </div>

            <EditProfile show={showEditProfileModal} setShowEditProfileModal={setShowEditProfileModal} />
        </div>
    );
}

export default Profile;
