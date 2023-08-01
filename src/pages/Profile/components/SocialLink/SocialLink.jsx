import React from 'react';
import classNames from 'classnames/bind';

import styles from './SocialLink.module.scss';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { BsExclamationTriangle } from 'react-icons/bs';
import { FaFacebookSquare, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const cx = classNames.bind(styles);

function SocialLink() {
    const urlRegExp =
        /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?\/[a-zA-Z0-9]{2,}|((https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?)|(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?/g;

    const formSchema = yup.object().shape({
        fbLink: yup.string().matches(urlRegExp, { message: 'Please enter correct url.', excludeEmptyString: true }),
        igLink: yup.string().matches(urlRegExp, { message: 'Please enter correct url.', excludeEmptyString: true }),
        twLink: yup.string().matches(urlRegExp, { message: 'Please enter correct url.', excludeEmptyString: true }),
        liLink: yup.string().matches(urlRegExp, { message: 'Please enter correct url.', excludeEmptyString: true }),
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

    const onSubmit = async (data) => {
        console.log(data);
    };

    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <span className={cx('title')}>Social Link</span>
            </header>
            <form className={cx('form')} onSubmit={handleSubmit(onSubmit)}>
                <div className={cx('facebook')}>
                    <div className={cx('facebook-field', errors.fbLink && 'error-ipt')}>
                        <label className={cx('label')}>Facebook</label>
                        <span className={cx('icon-fb')}>
                            <FaFacebookSquare />
                        </span>
                        <input
                            type="text"
                            className={cx('input')}
                            placeholder="Enter facebook link..."
                            {...register('fbLink')}
                        />
                    </div>
                    {errors.fbLink?.message && (
                        <span className={cx('error')}>
                            <BsExclamationTriangle className={cx('icon-warning')} />
                            {errors.fbLink?.message}
                        </span>
                    )}
                </div>
                <div className={cx('instagram')}>
                    <div className={cx('instagram-field', errors.igLink && 'error-ipt')}>
                        <label className={cx('label')}>Instagram</label>
                        <span className={cx('icon-ig')}>
                            <FaInstagram />
                        </span>
                        <input
                            type="text"
                            className={cx('input')}
                            placeholder="Enter instagram link..."
                            {...register('igLink')}
                        />
                    </div>
                    {errors.igLink?.message && (
                        <span className={cx('error')}>
                            <BsExclamationTriangle className={cx('icon-warning')} />
                            {errors.igLink?.message}
                        </span>
                    )}
                </div>
                <div className={cx('twitter')}>
                    <div className={cx('twitter-field', errors.twLink && 'error-ipt')}>
                        <label className={cx('label')}>Twitter</label>
                        <span className={cx('icon-tw')}>
                            <FaTwitter />
                        </span>
                        <input
                            type="text"
                            className={cx('input')}
                            placeholder="Enter twitter link..."
                            {...register('twLink')}
                        />
                    </div>
                    {errors.twLink?.message && (
                        <span className={cx('error')}>
                            <BsExclamationTriangle className={cx('icon-warning')} />
                            {errors.twLink?.message}
                        </span>
                    )}
                </div>
                <div className={cx('linkedin')}>
                    <div className={cx('linkedin-field', errors.liLink && 'error-ipt')}>
                        <label className={cx('label')}>LinkedIn</label>
                        <span className={cx('icon-li')}>
                            <FaLinkedin />
                        </span>
                        <input
                            type="text"
                            className={cx('input')}
                            placeholder="Enter linked in link..."
                            {...register('liLink')}
                        />
                    </div>
                    {errors.liLink?.message && (
                        <span className={cx('error')}>
                            <BsExclamationTriangle className={cx('icon-warning')} />
                            {errors.liLink?.message}
                        </span>
                    )}
                </div>

                <button className={cx('confirm-btn')} type="submit">
                    Confirm
                </button>
            </form>
        </div>
    );
}

export default SocialLink;
