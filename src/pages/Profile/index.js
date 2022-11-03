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
import { useForm } from 'react-hook-form';
import { updateUser } from '~/api/userApi';
import { createAxios } from '~/api/axiosClient';
import { updateSuccess } from '~/redux/Slice/authSlice';
import { uploadImages } from '~/api/uploadImagesApi';
import { setEditProfileModalIsOpen } from '~/redux/Slice/modalSlice';
import Modal from '~/components/Modal';
import EditProfile from '~/components/Modal/EditProfile';

const cx = classNames.bind(styles);

function Profile() {
    const { currentUser } = useSelector((state) => state.auth.login);
    const { _id, accessToken, email, fullName, livesIn, streetAddress, birth, gender, hashtag, position, phone } =
        currentUser;
    const { editProfileModalIsOpen } = useSelector((state) => state.modal);

    const [disabledBannerInput, setDisabledBannerInput] = useState(false);
    const [disabledAvatarInput, setDisabledAvatarInput] = useState(false);
    const [previewSourceBanner, setPreviewSourceBanner] = useState('');
    const [selectedFileBanner, setSelectedFileBanner] = useState();
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

    const { register, handleSubmit, reset } = useForm({
        defaultValues: {
            email: email,
            fullName: fullName,
            livesIn: livesIn,
            streetAddress: streetAddress,
            birth: birth,
            gender: gender,
            hashtag: hashtag,
            position: position,
            phone: phone,
        },
    });

    const handleFileBannerInputChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        setDisabledAvatarInput(true);
        previewFileBanner(file);
        setSelectedFileBanner(file);
    };

    const previewFileBanner = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewSourceBanner(reader.result);
        };
        reader.onerror = () => {
            console.error('something went wrong!');
        };
    };

    const handleCancelBanner = () => {
        setPreviewSourceBanner('');
        setDisabledAvatarInput(false);
    };

    const handleSubmitBanner = (e) => {
        e.preventDefault();
        setDisabledAvatarInput(false);
        if (!previewSourceBanner) return;
        const reader = new FileReader();
        reader.readAsDataURL(selectedFileBanner);
        reader.onloadend = () => {
            uploadImageBanner(reader.result);
        };
        reader.onerror = () => {
            console.error('something went wrong!');
        };
    };

    const uploadImageBanner = async (base64EncodedImage) => {
        const imgUrl = await uploadImages(base64EncodedImage);
        await updateUser({ banner: imgUrl }, _id, dispatch, accessToken, axiosJWT);
        setPreviewSourceBanner('');
        setDisabledAvatarInput(false);
    };

    const handleFileAvatarInputChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setDisabledBannerInput(true);
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
        setDisabledBannerInput(false);
    };

    const handleSubmitAvatar = (e) => {
        e.preventDefault();
        setDisabledBannerInput(false);
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
        setDisabledBannerInput(false);
    };

    const handleEditProfileBtn = () => {
        dispatch(setEditProfileModalIsOpen(true));
    };

    const handleCancel = () => {
        reset({
            fullName: fullName,
            livesIn: livesIn,
            streetAddress: streetAddress,
            birth: birth,
            gender: gender,
            hashtag: hashtag,
            position: position,
            phone: phone,
        });
    };

    const onSubmit = (formData) => {
        updateUser(formData, _id, dispatch, accessToken, axiosJWT);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('banner')}>
                {/* {currentUser?.banner && (
                    <Image className={cx('banner-img')} src={`${currentUser?.banner}`} alt="banner" />
                )} */}
                {previewSourceBanner ? (
                    <Image className={cx('banner-img')} src={previewSourceBanner} alt="banner" />
                ) : (
                    <Image className={cx('banner-img')} src={`${currentUser?.banner}`} alt="banner" />
                )}
                <form className={cx('add-banner-btn')} onSubmit={handleSubmitBanner}>
                    {!previewSourceBanner && (
                        <label htmlFor="upload-banner">
                            <BsCameraFill className={cx('icon-change-banner')} />
                            Add Cover Photo
                        </label>
                    )}
                    <input
                        id="upload-banner"
                        type="file"
                        className={cx('upload-banner')}
                        onChange={handleFileBannerInputChange}
                        hidden
                        disabled={disabledBannerInput}
                    />
                    {previewSourceBanner && (
                        <div className={cx('banner-btn')}>
                            <button className={cx('cancel-btn')} onClick={handleCancelBanner}>
                                Cancel
                            </button>
                            <button type="submit" className={cx('save-btn')}>
                                Save
                            </button>
                        </div>
                    )}
                </form>
            </div>
            <div className={cx('header')}>
                <div className={cx('avatar')}>
                    <Image className={cx('user-avatar')} src={`${currentUser?.avatar}`} alt="Nguyen  van A" />
                    {previewSourceAvatar && (
                        <Image className={cx('user-avatar')} src={`${previewSourceAvatar}`} alt="Nguyen  van A" />
                    )}
                    <form onSubmit={handleSubmitAvatar}>
                        <label htmlFor="upload-avatar" className={cx('icon-camera')}>
                            <BsCameraFill />
                        </label>
                        <input
                            id="upload-avatar"
                            type="file"
                            className={cx('upload-avatar')}
                            onChange={handleFileAvatarInputChange}
                            hidden
                            disabled={disabledAvatarInput}
                        />
                        {previewSourceAvatar && (
                            <div className={cx('avatar-btn')}>
                                <button className={cx('cancel-btn')} onClick={handleCancelAvatar}>
                                    Cancel
                                </button>
                                <button type="submit" className={cx('save-btn')}>
                                    Save
                                </button>
                            </div>
                        )}
                    </form>
                </div>
                <div className={cx('info')}>
                    <span className={cx('username')}>{fullName}</span>
                    <span className={cx('position')}>{position}</span>
                    <span className={cx('hashtag')}>{hashtag && `#${hashtag}`}</span>
                </div>
            </div>

            <div className={cx('about')}>
                <div className={cx('about-header')}>
                    <div className={cx('heading')}>
                        <span className={cx('icon-person')}>
                            <BsPersonCircle />
                        </span>
                        <div className={cx('title')}>
                            <h6>About</h6>
                            <p>{hashtag && `#${hashtag}`}</p>
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

            {editProfileModalIsOpen && (
                <Modal>
                    <EditProfile />
                </Modal>
            )}
        </div>
    );
}

export default Profile;
