import React from 'react';
import classNames from 'classnames/bind';
import { motion } from 'framer-motion';

import styles from './CreateTask.module.scss';
import Tippy from '@tippyjs/react';
import { BsJustifyLeft, BsXLg } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { setCreateTaskModalIsOpen } from '~/redux/Slice/modalSlice';
import { AnimatePresence } from 'framer-motion';
import DatePicker from '~/components/DatePicker';

const cx = classNames.bind(styles);

function CreateTask() {
    const dispatch = useDispatch();

    const handleCloseModal = () => {
        dispatch(setCreateTaskModalIsOpen(false));
    };

    return (
        <AnimatePresence>
            <motion.div initial={{ x: '-50%', y: '-50%', scale: 0 }} animate={{ scale: 1 }} className={cx('wrapper')}>
                <header className={cx('header')}>
                    <div>
                        <Tippy delay={[0, 50]} interactive content="Close">
                            <button className={cx('close-btn')} onClick={handleCloseModal}>
                                <BsXLg />
                            </button>
                        </Tippy>
                    </div>
                </header>
                <div className={cx('container')}>
                    <div className={cx('title')}>
                        <input className={cx('title-ipt')} type="text" name="title" required autoFocus />
                        <span className={cx('underline-title-ipt')}></span>
                        <label className={cx('label')}>Title</label>
                    </div>
                    <div className={cx('calendar-tag')}>
                        <div className={cx('calendar')}>
                            <DatePicker />
                        </div>
                    </div>
                    <div className={cx('desc')}>
                        <span className={cx('icon')}>
                            <BsJustifyLeft />
                        </span>
                        <div className={cx('desc-ipt')}>
                            <textarea className={cx('textarea')} placeholder="Add description"></textarea>
                            <span className={cx('underline-desc')}></span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}

export default CreateTask;
