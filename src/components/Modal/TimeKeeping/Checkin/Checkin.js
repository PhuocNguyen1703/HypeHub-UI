import React from 'react';
import classNames from 'classnames/bind';
import { motion } from 'framer-motion';

import styles from './Checkin.module.scss';
import Tippy from '@tippyjs/react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setCheckinModalIsOpen } from '~/redux/Slice/modalSlice';
import { BsXLg } from 'react-icons/bs';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Checkin() {
    // const { selectedEvent } = useSelector((state) => state.modal);
    const dispatch = useDispatch();

    const closeModal = () => {
        dispatch(setCheckinModalIsOpen(false));
    };
    return (
        <motion.div initial={{ x: '-50%', y: '-50%', scale: 0 }} animate={{ scale: 1 }} className={cx('wrapper')}>
            <header className={cx('header')}>
                <span className={cx('title')}>Check in</span>
                <div>
                    <Tippy delay={[0, 50]} interactive content="Close">
                        <button className={cx('close-btn')} onClick={closeModal}>
                            <BsXLg />
                        </button>
                    </Tippy>
                </div>
            </header>
            <div className={cx('container')}>
                <div className={cx('content')}>
                    <img src={images.faceRecognition} alt="faceRecognition" />
                </div>
                <button className={cx('checkin-btn')}>Face Recognition</button>
            </div>
        </motion.div>
    );
}

export default Checkin;
