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
    BsHeart,
} from 'react-icons/bs';
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

    const { currentUser } = useSelector((state) => state.auth.login);
    const { _id, accessToken, email, fullName, livesIn, streetAddress, birth, gender, hashtag, position, phone } =
        currentUser;
    const dispatch = useDispatch();
    let axiosJWT = createAxios(currentUser, dispatch, updateSuccess);

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
                        <label htmlFor="upload-avatar">
                            <BsCameraFill className={cx('icon-camera')} />
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
                    <button className={cx('edit-profile-btn')}>
                        <BsPencil />
                        Edit Profile
                    </button>
                </div>
                <div className={cx('about-content')}>
                    <div className={cx('about-item')}>
                        <span className={cx('icon')}>
                            <BsTelephone />
                        </span>
                        <div>
                            <span className={cx('label')}>Phone</span>
                            <p>+84349985272</p>
                        </div>
                    </div>

                    <div className={cx('about-item')}>
                        <span className={cx('icon')}>
                            <BsBriefcase />
                        </span>
                        <div>
                            <span className={cx('label')}>Working</span>
                            <p>Developer</p>
                        </div>
                    </div>

                    <div className={cx('about-item')}>
                        <span className={cx('icon')}>
                            <BsGenderAmbiguous />
                        </span>
                        <div>
                            <span className={cx('label')}>Gender</span>
                            <p>Male</p>
                        </div>
                    </div>

                    <div className={cx('about-item')}>
                        <span className={cx('icon')}>
                            <BsEnvelope />
                        </span>
                        <div>
                            <span className={cx('label')}>Email Address</span>
                            <p>information@maxartkiller.com</p>
                        </div>
                    </div>

                    <div className={cx('about-item')}>
                        <span className={cx('icon')}>
                            <BsCalendarEvent />
                        </span>
                        <div>
                            <span className={cx('label')}>Birthday</span>
                            <p>1 August 1992</p>
                        </div>
                    </div>

                    <div className={cx('about-item')}>
                        <span className={cx('icon')}>
                            <BsHeart />
                        </span>
                        <div>
                            <span className={cx('label')}>Social Status</span>
                            <p>Single</p>
                        </div>
                    </div>

                    <div className={cx('about-item')}>
                        <span className={cx('icon')}>
                            <BsGeoAlt />
                        </span>
                        <div>
                            <span className={cx('label')}>Address</span>
                            <p>Japan</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
