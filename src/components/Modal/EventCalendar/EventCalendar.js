import React, { useEffect, useState } from 'react';
import { BsClock, BsFillRecordFill, BsJustifyLeft, BsTags, BsX } from 'react-icons/bs';
import classNames from 'classnames/bind';

import styles from './EventCalendar.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setCalendarEventModalIsOpen } from '~/redux/Slice/modalSlice';

const cx = classNames.bind(styles);

function EventCalendar() {
    const [showTime, setShowTime] = useState(false);
    const { daySelected } = useSelector((state) => state.calendar);
    const dispatch = useDispatch();

    const closeModal = () => {
        dispatch(setCalendarEventModalIsOpen(false));
    };

    const handleAddTime = () => {
        setShowTime(true);
    };

    const onSubmit = () => {};

    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <span className={cx('type')}>Event</span>
                <button className={cx('close-btn')} onClick={closeModal}>
                    <BsX />
                </button>
            </header>
            <form className={cx('form')} onSubmit={onSubmit}>
                <div className={cx('title')}>
                    <input className={cx('title-ipt')} type="text" name="title" required />
                    <span className={cx('underline-title-ipt')}></span>
                    <label className={cx('label')}>Title</label>
                </div>
                <div className={cx('type-btn')}>
                    <button className={cx('event-btn', 'active')}>Event</button>
                    <button className={cx('task-btn')}>Task</button>
                </div>
                <div className={cx('calendar')}>
                    <span className={cx('icon')}>
                        <BsClock />
                    </span>
                    <input className={cx('calendar-time')} type="text" value={daySelected} readOnly={true} />
                    {showTime && <input className={cx('time')} type="text" value="12:00am" readOnly={true} />}
                    <button type="button" className={cx('add-time-btn')} onClick={handleAddTime}>
                        Add time
                    </button>
                </div>
                <div className={cx('note')}>
                    <span className={cx('icon')}>
                        <BsJustifyLeft />
                    </span>
                    <div className={cx('desc')}>
                        <textarea className={cx('textarea')} placeholder="Add description"></textarea>
                        <span className={cx('underline-desc')}></span>
                    </div>
                </div>
                <div className={cx('tag')}>
                    <span className={cx('icon')}>
                        <BsTags />
                    </span>
                    <span className={cx('tag-option')}>
                        <BsFillRecordFill />
                        Busy
                    </span>
                </div>
                <footer className={cx('action-btn')}>
                    <button className={cx('save-btn')} type="submit">
                        Save
                    </button>
                </footer>
            </form>
        </div>
    );
}

export default EventCalendar;
