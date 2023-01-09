import React, { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Profile.module.scss';
import {
    BsCameraFill,
    BsPersonCircle,
    BsPencil,
    BsTelephone,
    BsGenderAmbiguous,
    BsGeoAlt,
    BsBriefcase,
    BsEnvelope,
    BsCalendarEvent,
    BsPerson,
    BsHash,
} from 'react-icons/bs';
import Image from '~/components/Image';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '~/api/userApi';
import { createAxios } from '~/api/axiosClient';
import { updateSuccess } from '~/redux/Slice/authSlice';
import { uploadImages } from '~/api/uploadImagesApi';
import { setEditProfileModalIsOpen } from '~/redux/Slice/modalSlice';
import Modal from '~/components/Modal';
import EditProfile from '~/components/Modal/EditProfile';
import images from '~/assets/images';

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
            <div className={cx('user-info')}>
                <div className={cx('avatar')}>
                    <Image
                        className={cx('user-avatar')}
                        src={previewSourceAvatar || currentUser?.avatar || images.coverAvatar}
                        alt="avatar"
                    />
                    <label htmlFor="upload-avatar" className={cx('icon-camera')}>
                        <BsCameraFill />
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
                    <span className={cx('hashtag')}>{currentUser?.hashtag ? `#${hashtag}` : ''}</span>
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
            </div>

            <div className={cx('about')}>
                <div className={cx('about-header')}>
                    <div className={cx('heading')}>
                        <span className={cx('icon-person')}>
                            <BsPersonCircle />
                        </span>
                        <div className={cx('title')}>
                            <h6>About</h6>
                            <p>{currentUser?.hashtag ? `#${hashtag}` : ''}</p>
                        </div>
                    </div>
                    <button className={cx('edit-profile-btn')} onClick={handleEditProfileBtn}>
                        <BsPencil />
                        Edit Profile
                    </button>
                </div>
                <div className={cx('about-content')}>
                    {iconProfile.map((item, idx) => (
                        <div className={cx('about-item')} key={idx}>
                            <span className={cx('icon')}>{item.icon}</span>
                            <div>
                                <span className={cx('label')}>{item.id}</span>
                                <p className={cx('desc')}>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <EditProfile show={showEditProfileModal} setShowEditProfileModal={setShowEditProfileModal} />
        </div>
    );
}

export default Profile;
