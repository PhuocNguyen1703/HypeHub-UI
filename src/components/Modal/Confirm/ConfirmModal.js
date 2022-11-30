import React from 'react';
import classNames from 'classnames/bind';
import { motion } from 'framer-motion';

import styles from './ConfirmModal.module.scss';
import { BsXLg } from 'react-icons/bs';

const cx = classNames.bind(styles);

function ConfirmModal() {
    return (
        <motion.div initial={{ x: '-50%', y: '-50%', scale: 0 }} animate={{ scale: 1 }} className={cx('wrapper')}>
            <header className={cx('header')}>
                <span className={cx('title')}>title</span>
                <span className={cx('close-btn')}>
                    <BsXLg />
                </span>
            </header>
            <div className={cx('body')}>
                <p className={cx('content')}>delete columns</p>
                <div className={cx('action-btn')}>
                    <button className={cx('cancel-btn')}>Cancel</button>
                    <button className={cx('save-btn')}>Save Changes</button>
                </div>
            </div>
        </motion.div>
    );
}

export default ConfirmModal;
