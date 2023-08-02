import React, { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Profile.module.scss';
import { BsPerson, BsCamera, BsLock, BsClipboardCheck, BsCreditCard2Back, BsLink } from 'react-icons/bs';
import Image from '~/components/Image';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '~/services/userApi';
import { createAxios } from '~/services/axiosClient';
import { updateSuccess } from '~/redux/Slice/authSlice';
import { uploadImages } from '~/services/uploadImagesApi';
import { images } from '~/assets/images';
import { FaFacebookSquare, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import routes from '~/config/routes';

const cx = classNames.bind(styles);

function Profile() {
    const { currentUser } = useSelector((state) => state.auth.login);
    const { _id, accessToken, email, fullName, streetAddress, birth, gender, hashtag, position, phone } = currentUser;
    const [previewSourceAvatar, setPreviewSourceAvatar] = useState('');
    const [selectedFileAvatar, setSelectedFileAvatar] = useState();

    const dispatch = useDispatch();
    let axiosJWT = createAxios(currentUser, dispatch, updateSuccess);

    const sidebar = [
        { path: '', icon: <BsPerson />, title: 'Information' },
        { path: routes.profile.children.wallet_path, icon: <BsCreditCard2Back />, title: 'Wallet' },
        { path: routes.profile.children.change_password_path, icon: <BsLock />, title: 'Change Password' },
        { path: routes.profile.children.social_link_path, icon: <BsLink />, title: 'Social Link' },
        { path: routes.profile.children.time_sheets_path, icon: <BsClipboardCheck />, title: 'Time Sheets' },
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

    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('left-container')}>
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

                <div className={cx('right-container')}>
                    <Outlet />
                </div>
            </div>
        </>
    );
}

export default Profile;
