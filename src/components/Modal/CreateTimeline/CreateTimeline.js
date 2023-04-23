import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import DatePicker from 'react-datepicker';

import styles from './CreateTimeline.module.scss';
import {
    BsAlarm,
    BsApple,
    BsFillCaretDownFill,
    BsXLg,
    BsArchive,
    BsAward,
    BsBagCheck,
    BsBank,
    BsBell,
    BsBookmarkCheck,
    BsBriefcase,
    BsCalendarCheck,
    BsCardImage,
    BsCpu,
    BsCoin,
    BsCalendar,
} from 'react-icons/bs';
import CircleHeader from '~/components/CircleHeader/CircleHeader';
import { AnimatePresence } from 'framer-motion';
import Modal from '../Modal';
import { motion } from 'framer-motion';

const cx = classNames.bind(styles);

function CreateTimeline({ show, setShowCreateTimelineModal }) {
    const [startDate, setStartDate] = useState(new Date());
    const [isOpenOption, setIsOpenOption] = useState(false);
    const optionRef = useRef(null);

    useEffect(() => {
        document.addEventListener('click', hideOnClickOutside, true);
    }, []);

    // Hide on outside click
    const hideOnClickOutside = (e) => {
        setIsOpenOption(false);
    };

    const handleToggleOption = () => {
        setIsOpenOption(true);
    };

    const iconList = [
        { icon: <BsAlarm /> },
        { icon: <BsApple /> },
        { icon: <BsArchive /> },
        { icon: <BsBagCheck /> },
        { icon: <BsAward /> },
        { icon: <BsBank /> },
        { icon: <BsBell /> },
        { icon: <BsBookmarkCheck /> },
        { icon: <BsCalendarCheck /> },
        { icon: <BsBriefcase /> },
        { icon: <BsCardImage /> },
        { icon: <BsCpu /> },
        { icon: <BsCoin /> },
    ];

    const handleCloseModal = () => {
        setShowCreateTimelineModal(false);
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
                            <CircleHeader wrapperClassName={cx('wrapperClassName')} />
                            <button className={cx('close-btn')} onClick={handleCloseModal}>
                                <BsXLg />
                            </button>
                        </header>
                        <form className={cx('form')}>
                            <div className={cx('title')}>
                                <input className={cx('title-ipt')} type="text" name="title" required autoFocus />
                                <span className={cx('underline-title-ipt')}></span>
                                <label className={cx('label')}>Title</label>
                            </div>
                            <div className={cx('info-group')}>
                                <div ref={optionRef} className={cx('icon-container')}>
                                    <span className={cx('select-icon')} onClick={handleToggleOption}>
                                        Select Icon
                                        <BsFillCaretDownFill className={cx('icon-down')} />
                                    </span>
                                    {isOpenOption && (
                                        <ul className={cx('icon-list')}>
                                            {iconList.map((item, idx) => (
                                                <li key={idx} className={cx('item-icon')}>
                                                    {item.icon}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                                <div className={cx('time-select')}>
                                    <BsCalendar className={cx('calendar-icon')} />
                                    <DatePicker
                                        selected={startDate}
                                        onChange={(date) => setStartDate(date)}
                                        showTimeSelect
                                        timeFormat="HH:mm"
                                        timeIntervals={15}
                                        timeCaption="time"
                                        dateFormat="MMMM d, yyyy h:mm aa"
                                    />
                                </div>
                                <div className={cx('create-by')}>
                                    <input type="text" placeholder="Enter create by..." />
                                </div>
                            </div>
                            <textarea type="text" className={cx('textarea-note')} placeholder="Write something..." />
                            <div className={cx('action-btn')}>
                                <button className={cx('cancel-btn')} type="button" onClick={handleCloseModal}>
                                    Cancel
                                </button>
                                <button className={cx('save-btn')} type="submit">
                                    Save
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </Modal>
            </AnimatePresence>
        );
    }
}

export default CreateTimeline;
