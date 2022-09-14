import { BsX } from 'react-icons/bs';
import classNames from 'classnames/bind';

import styles from './CreateCalendar.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setCalendarEventModalIsOpen } from '~/redux/Slice/modalSlice';
import TaskForm from './TaskForm';
import EventForm from './EventForm';
import { setDaySelected, setSelectedEvent } from '~/redux/Slice/calendarSlice';
import dayjs from 'dayjs';
import { useState } from 'react';

const cx = classNames.bind(styles);

function CreateCalendar() {
    const { selectedEvent } = useSelector((state) => state.calendar);
    const [type] = useState(selectedEvent ? selectedEvent.type : 'Event');
    const [title] = useState(selectedEvent ? selectedEvent.title : '');
    const dispatch = useDispatch();

    const closeModal = () => {
        dispatch(setDaySelected(dayjs().format('MMM DD, YYYY')));
        // dispatch(setSmallCalendarSelectedDay(dayjs().format('MMM DD, YYYY')));
        dispatch(setCalendarEventModalIsOpen(false));
        dispatch(setSelectedEvent(null));
    };

    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <span className={cx('type')}>{type}</span>
                <button className={cx('close-btn')} onClick={closeModal}>
                    <BsX />
                </button>
            </header>
            <div className={cx('body')}>
                <div className={cx('title')}>
                    <input className={cx('title-ipt')} type="text" name="title" defaultValue={title} required />
                    <span className={cx('underline-title-ipt')}></span>
                    <label className={cx('label')}>Title</label>
                </div>
                <div className={cx('type-btn')}>
                    <button className={cx('event-btn', 'active')}>Event</button>
                    <button className={cx('task-btn')}>Task</button>
                </div>
                {/* <TaskForm /> */}
                <EventForm />
            </div>
        </div>
    );
}

export default CreateCalendar;
