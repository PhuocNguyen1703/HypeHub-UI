import React, { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './EventForm.module.scss';
import { BsClock, BsFillRecordFill, BsJustifyLeft, BsTags } from 'react-icons/bs';
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);

function TaskForm() {
    const [showTime, setShowTime] = useState(false);
    const { daySelected } = useSelector((state) => state.calendar);

    const handleShowPickerCalendar = () => {
        console.log('ok');
    };

    const handleAddTime = () => {
        setShowTime(true);
    };

    const handleAllTime = () => {
        setShowTime(false);
    };

    const onSubmit = () => {};

    return (
        <form className={cx('wrapper')} onSubmit={onSubmit}>
            <div className={cx('calendar')}>
                <span className={cx('icon')}>
                    <BsClock />
                </span>
                <input
                    className={cx('calendar-time')}
                    type="text"
                    value={daySelected}
                    readOnly={true}
                    onClick={handleShowPickerCalendar}
                />
                {showTime && <input className={cx('time')} type="text" value="12:00am" readOnly={true} />}
                {!showTime ? (
                    <button type="button" className={cx('add-time-btn')} onClick={handleAddTime}>
                        Add time
                    </button>
                ) : (
                    <button type="button" className={cx('add-time-btn')} onClick={handleAllTime}>
                        All time
                    </button>
                )}
                <div className={cx('picker-calendar')}></div>
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
    );
}

export default TaskForm;
