import React from 'react';
import { BsX } from 'react-icons/bs';
import classNames from 'classnames/bind';

import styles from './EventCalendar.module.scss';
import { useDispatch } from 'react-redux';
import { setCalendarEventModalIsOpen } from '~/redux/Slice/modalSlice';

const cx = classNames.bind(styles);

function EventCalendar() {
    const dispatch = useDispatch();

    const closeModal = () => {
        dispatch(setCalendarEventModalIsOpen(false));
    };

    return (
        <div className={cx('wrapper')}>
            <header>
                <span>Event</span>
                <button onClick={closeModal}>
                    <BsX />
                </button>
            </header>
            <form>
                <label htmlFor="title">
                    Title
                    <input type="text" name="title" placeholder="Add title" />
                </label>
            </form>
        </div>
    );
}

export default EventCalendar;
