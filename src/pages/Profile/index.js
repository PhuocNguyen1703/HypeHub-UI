import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Profile.module.scss';
import Sidebar from '~/layouts/components/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBriefcase,
    faCakeCandles,
    faCamera,
    faEnvelope,
    faHashtag,
    faHouseChimney,
    faMarsAndVenus,
    faPen,
    faPhone,
    faUserPen,
} from '@fortawesome/free-solid-svg-icons';
import Image from '~/components/Image';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { updateUser } from '~/api/userApi';
import { createAxios } from '~/api/axiosClient';
import { updateSuccess } from '~/redux/Slice/authSlice';
import { uploadImages } from '~/api/uploadImagesApi';

const cx = classNames.bind(styles);

function Profile() {
    const [disabled, setDisabled] = useState(true);
    const [disabledBannerInput, setDisabledBannerInput] = useState(false);
    const [disabledAvatarInput, setDisabledAvatarInput] = useState(false);
    const [previewSourceBanner, setPreviewSourceBanner] = useState('');
    const [selectedFileBanner, setSelectedFileBanner] = useState();
    const [previewSourceAvatar, setPreviewSourceAvatar] = useState('');
    const [selectedFileAvatar, setSelectedFileAvatar] = useState();

    const user = useSelector((state) => state.auth.login.currentUser);
    const { _id, accessToken, email, fullName, livesIn, streetAddress, birth, gender, hashtag, position, phone } = user;
    const dispatch = useDispatch();
    let axiosJWT = createAxios(user, dispatch, updateSuccess);

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
        console.log(file);
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
        setDisabled(false);
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
        setDisabled(true);
    };

    const onSubmit = (formData) => {
        setDisabled(true);
        updateUser(formData, _id, dispatch, accessToken, axiosJWT);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('side-bar')}>
                <Sidebar />
            </div>
            <div className={cx('container')}>
                <div className={cx('banner')}>
                    {user.banner && <Image className={cx('banner-img')} src={`${user.banner}`} alt="banner" />}
                    {previewSourceBanner && (
                        <Image className={cx('banner-img')} src={previewSourceBanner} alt="banner" />
                    )}
                    <form className={cx('add-banner-btn')} onSubmit={handleSubmitBanner}>
                        {!previewSourceBanner && (
                            <label htmlFor="upload-banner">
                                <FontAwesomeIcon icon={faCamera} />
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
                        <Image className={cx('user-avatar')} src={`${user.avatar}`} alt="Nguyen  van A" />
                        {previewSourceAvatar && (
                            <Image className={cx('user-avatar')} src={`${previewSourceAvatar}`} alt="Nguyen  van A" />
                        )}
                        <form onSubmit={handleSubmitAvatar}>
                            <label htmlFor="upload-avatar">
                                <FontAwesomeIcon className={cx('edit-avatar')} icon={faCamera} />
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
                    <button className={cx('edit-profile-btn')} onClick={handleEditProfileBtn}>
                        <FontAwesomeIcon icon={faPen} />
                        Edit profile
                    </button>
                </div>

                <div className={cx('content')}>
                    <form className={cx('form')} onSubmit={handleSubmit(onSubmit)}>
                        <div className={cx('full-name')}>
                            <label>Username</label>
                            <div>
                                <FontAwesomeIcon icon={faUserPen} />
                                <input disabled={disabled} {...register('fullName')} />
                            </div>
                        </div>
                        <div className={cx('live-in')}>
                            <label>Live in</label>
                            <div>
                                <FontAwesomeIcon icon={faHouseChimney} />
                                <input disabled={disabled} {...register('livesIn')} />
                            </div>
                        </div>
                        <div className={cx('street-address')}>
                            <label>Street address</label>
                            <div>
                                <FontAwesomeIcon icon={faHouseChimney} />
                                <input disabled={disabled} {...register('streetAddress')} />
                            </div>
                        </div>
                        <div className={cx('email-address')}>
                            <label>Email address</label>
                            <div>
                                <FontAwesomeIcon icon={faEnvelope} />
                                <input disabled {...register('email')} />
                            </div>
                        </div>
                        <div className={cx('birth')}>
                            <label>Date of Birth</label>
                            <div>
                                <FontAwesomeIcon icon={faCakeCandles} />
                                <input disabled={disabled} {...register('birth')} />
                            </div>
                        </div>
                        <div className={cx('gender')}>
                            <label>Gender</label>
                            <div>
                                <FontAwesomeIcon icon={faMarsAndVenus} />
                                <input disabled={disabled} {...register('gender')} />
                            </div>
                        </div>
                        <div className={cx('hashtag')}>
                            <label>Hashtag</label>
                            <div>
                                <FontAwesomeIcon icon={faHashtag} />
                                <input disabled={disabled} {...register('hashtag')} />
                            </div>
                        </div>
                        <div className={cx('user-position')}>
                            <label>Position</label>
                            <div>
                                <FontAwesomeIcon icon={faBriefcase} />
                                <input disabled={disabled} {...register('position')} />
                            </div>
                        </div>
                        <div className={cx('user-phone')}>
                            <label>Phone number</label>
                            <div>
                                <FontAwesomeIcon icon={faPhone} />
                                <input disabled={disabled} {...register('phone')} />
                            </div>
                        </div>

                        {!disabled && (
                            <div className={cx('form-btn')}>
                                <button className={cx('cancel-btn')} onClick={handleCancel}>
                                    Cancel
                                </button>
                                <button type="submit" className={cx('save-btn')}>
                                    Save
                                </button>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Profile;
