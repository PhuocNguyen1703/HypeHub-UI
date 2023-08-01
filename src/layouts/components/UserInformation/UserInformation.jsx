import React, { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './UserInformation.module.scss';
import { useForm } from 'react-hook-form';
import Image from '~/components/Image';
import {
    BsBriefcase,
    BsCalendarEvent,
    BsGenderAmbiguous,
    BsGeoAlt,
    BsHash,
    BsPerson,
    BsTelephone,
} from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { images } from '~/assets/images';

const cx = classNames.bind(styles);

function UserInformation() {
    const { currentUser } = useSelector((state) => state.auth.login);
    const [previewSourceAvatar, setPreviewSourceAvatar] = useState('');
    const { register, reset, handleSubmit } = useForm();

    const handleFileAvatarInputChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        previewFileAvatar(file);
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

    const onSubmit = async (data) => {
        console.log(data);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('profile')}>
                <header>
                    <div className={cx('header')}>
                        <img className={cx('logo')} src={images.logo} alt="logo" />
                        <h3>Minato</h3>
                    </div>
                    <h1 className={cx('title')}>Profile</h1>
                    <h3 className={cx('desc')}>You can update the details.</h3>
                </header>
                <form className={cx('form')} onSubmit={handleSubmit(onSubmit)}>
                    <div className={cx('avatar')}>
                        <Image
                            className={cx('user-avatar')}
                            src={previewSourceAvatar || currentUser?.avatar || images.coverAvatar}
                            alt="avatar"
                        />

                        <label htmlFor="profile" className={cx('upload-avatar')}></label>

                        <input type="file" id="profile" name="profile" onChange={handleFileAvatarInputChange} hidden />
                    </div>

                    <div className={cx('information')}>
                        <div className={cx('username')}>
                            <div className={cx('firstname')}>
                                <span className={cx('icon-person')}>
                                    <BsPerson />
                                </span>
                                <input
                                    className={cx('firstname-ipt')}
                                    type="text"
                                    name="firstname"
                                    placeholder=" "
                                    {...register('firstName')}
                                />
                                <label>First Name</label>
                            </div>
                            <div className={cx('lastname')}>
                                <span className={cx('icon-person')}>
                                    <BsPerson />
                                </span>
                                <input
                                    className={cx('lastname-ipt')}
                                    type="text"
                                    name="lastname"
                                    placeholder=" "
                                    {...register('lastName')}
                                />
                                <label>Last Name</label>
                            </div>
                        </div>
                        <div className={cx('address')}>
                            <span className={cx('icon-address')}>
                                <BsGeoAlt />
                            </span>
                            <input
                                className={cx('address-ipt')}
                                type="text"
                                name="address"
                                placeholder=" "
                                {...register('streetAddress')}
                            />
                            <label>Address</label>
                        </div>
                        <div className={cx('hashtag')}>
                            <span className={cx('icon-hashtag')}>
                                <BsHash />
                            </span>
                            <input
                                className={cx('hashtag-ipt')}
                                type="text"
                                name="hashtag"
                                placeholder=" "
                                {...register('hashtag')}
                            />
                            <label>Hashtag</label>
                        </div>
                        <div className={cx('birth-and-gender')}>
                            <div className={cx('birth')}>
                                <span className={cx('icon-calendar')}>
                                    <BsCalendarEvent />
                                </span>
                                <input
                                    className={cx('birth-ipt')}
                                    type="text"
                                    name="birth"
                                    placeholder=" "
                                    {...register('birth')}
                                />
                                <label>Birth</label>
                            </div>
                            <div className={cx('gender')}>
                                <span className={cx('icon-gender')}>
                                    <BsGenderAmbiguous />
                                </span>
                                <input
                                    className={cx('gender-ipt')}
                                    type="text"
                                    name="gender"
                                    placeholder=" "
                                    {...register('gender')}
                                />
                                <label>Gender</label>
                            </div>
                        </div>
                        <div className={cx('work-and-phone')}>
                            <div className={cx('work')}>
                                <span className={cx('icon-work')}>
                                    <BsBriefcase />
                                </span>
                                <input
                                    className={cx('work-ipt')}
                                    type="text"
                                    name="work"
                                    placeholder=" "
                                    {...register('position')}
                                />
                                <label>Work</label>
                            </div>
                            <div className={cx('phone')}>
                                <span className={cx('icon-phone')}>
                                    <BsTelephone />
                                </span>
                                <input
                                    className={cx('phone-ipt')}
                                    type="text"
                                    name="phone"
                                    placeholder=" "
                                    {...register('phone')}
                                />
                                <label>Phone</label>
                            </div>
                        </div>
                    </div>
                    <div className={cx('footer')}>
                        <button type="submit" className={cx('update-btn')}>
                            Update
                        </button>
                        <div className={cx('action-btn')}>
                            <span className={cx('comeback-later-btn')}>Come back later?</span>
                            <span className={cx('logout-btn')}>logout</span>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default UserInformation;
