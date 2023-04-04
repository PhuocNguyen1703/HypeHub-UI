import React from 'react';
import classNames from 'classnames/bind';
import { AnimatePresence, motion } from 'framer-motion';

import styles from './UserDetail.module.scss';
import Modal from '../Modal';
import { BsXLg } from 'react-icons/bs';
import Image from '~/components/Image/Image';
import { FaFacebookSquare, FaInstagram, FaInstagramSquare, FaLine, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function UserDetail({ show, setShowUserDetailModal, user }) {
    const handleCloseModal = () => {
        setShowUserDetailModal(false);
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
                            <span className={cx('title')}>User detail</span>
                            <button className={cx('close-btn')} onClick={handleCloseModal}>
                                <BsXLg />
                            </button>
                        </header>
                        <div className={cx('container')}>
                            <div className={cx('left')}>
                                <Image className={cx('avatar')} src={user.avatar} alt="avatar" />
                                <span className={cx('full-name')}>{user.fullName}</span>
                                <span className={cx('position')}>{user.position}</span>
                                <div className={cx('social-link')}>
                                    <Link
                                        to={{ pathname: 'https://www.youtube.com/' }}
                                        target="_blank"
                                        className={cx('facebook-icon')}
                                    >
                                        <FaFacebookSquare />
                                    </Link>
                                    <span className={cx('instagram-icon')}>
                                        <FaInstagram />
                                    </span>
                                    <span className={cx('twitter-icon')}>
                                        <FaTwitter />
                                    </span>
                                    <span className={cx('line-icon')}>
                                        <FaLine />
                                    </span>
                                </div>
                            </div>
                            <div className={cx('right')}>
                                <label className={cx('label')}>
                                    ID :<span className={cx('identify')}>{user.id}</span>
                                </label>
                                <label className={cx('label')}>
                                    Email :<span className={cx('email')}>{user.email}</span>
                                </label>
                                <label className={cx('label')}>
                                    Birth :<span className={cx('birth')}>{user.birth}</span>
                                </label>
                                <label className={cx('label')}>
                                    Gender :<span className={cx('gender')}>{user.gender}</span>
                                </label>
                                <label className={cx('label')}>
                                    Address :<span className={cx('address')}>{user.streetAddress}</span>
                                </label>
                                <label className={cx('label')}>
                                    Phone :<span className={cx('phone')}>{user.phone}</span>
                                </label>
                                <label className={cx('label')}>
                                    FaceId :<span className={cx('face-id')}>{user.faceId}</span>
                                </label>
                                <label className={cx('label')}>
                                    CreatedAt :<span className={cx('created-at')}>{user.createdAt}</span>
                                </label>
                                <label className={cx('label')}>
                                    Hashtag :<span className={cx('hashtag')}>{user.hashtag}</span>
                                </label>
                            </div>
                        </div>
                    </motion.div>
                </Modal>
            </AnimatePresence>
        );
    }
}

export default UserDetail;
