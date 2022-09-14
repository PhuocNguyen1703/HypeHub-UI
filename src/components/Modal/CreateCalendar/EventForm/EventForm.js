import React, { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './EventForm.module.scss';
import { BsClock, BsFillRecordFill, BsJustifyLeft, BsTags } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';
import { setDaySelected, setSelectedEvent } from '~/redux/Slice/calendarSlice';
import { setCalendarEventModalIsOpen } from '~/redux/Slice/modalSlice';

const cx = classNames.bind(styles);

function TaskForm() {
    const { daySelected, smallCalendarSelectedDay, selectedEvent } = useSelector((state) => state.calendar);
    const [showTime, setShowTime] = useState(false);
    const [desc] = useState(selectedEvent ? selectedEvent.description : '');
    const dispatch = useDispatch();

    const handleShowPickerCalendar = () => {
        console.log('calendar');
    };

    const handleAddTime = () => {
        setShowTime(true);
    };

    const handleAllTime = () => {
        setShowTime(false);
    };

    const getTime = () => {
        if (daySelected !== dayjs().format('MMM DD, YYYY')) {
            return daySelected;
        }

        if (smallCalendarSelectedDay !== dayjs().format('MMM DD, YYYY')) {
            return smallCalendarSelectedDay;
        }

        return dayjs().format('MMM DD, YYYY');
    };

    const handleCancel = () => {
        dispatch(setDaySelected(dayjs().format('MMM DD, YYYY')));
        dispatch(setCalendarEventModalIsOpen(false));
        dispatch(setSelectedEvent(null));
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
                    value={getTime()}
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
            </div>
            <div className={cx('note')}>
                <span className={cx('icon')}>
                    <BsJustifyLeft />
                </span>
                <div className={cx('desc')}>
                    <textarea className={cx('textarea')} placeholder="Add description" defaultValue={desc}></textarea>
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
                <button className={cx('cancel-btn')} type="button" onClick={handleCancel}>
                    Cancel
                </button>
                <button className={cx('save-btn')} type="submit">
                    Save
                </button>
            </footer>
        </form>
    );
}

export default TaskForm;
