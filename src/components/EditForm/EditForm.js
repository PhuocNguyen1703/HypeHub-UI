import React from 'react';
import classNames from 'classnames/bind';

import styles from './EditForm.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setDaySelected, setSelectedEvent } from '~/redux/Slice/calendarSlice';
import dayjs from 'dayjs';
import { setCalendarEventModalIsOpen } from '~/redux/Slice/modalSlice';
import { BsTrash, BsXLg } from 'react-icons/bs';
import EventForm from '../Modal/CreateCalendar/EventForm';
import Tippy from '@tippyjs/react';

const cx = classNames.bind(styles);

function EditForm() {
    const { selectedEvent } = useSelector((state) => state.calendar);
    const dispatch = useDispatch();

    const closeModal = () => {
        dispatch(setDaySelected(dayjs().format('MMM DD, YYYY')));
        dispatch(setCalendarEventModalIsOpen(false));
        dispatch(setSelectedEvent(null));
    };

    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <span className={cx('type')}>{selectedEvent.type}</span>
                <div className={cx('header-action-btn')}>
                    <Tippy delay={[0, 50]} interactive content="Delete">
                        <button className={cx('delete-btn')}>
                            <BsTrash />
                        </button>
                    </Tippy>
                    <Tippy delay={[0, 50]} interactive content="Close">
                        <button className={cx('close-btn')} onClick={closeModal}>
                            <BsXLg />
                        </button>
                    </Tippy>
                </div>
            </header>
            <div className={cx('body')}>
                <div className={cx('title')}>
                    <input
                        className={cx('title-ipt')}
                        type="text"
                        name="title"
                        defaultValue={selectedEvent.title}
                        required
                        autoFocus
                    />
                    <span className={cx('underline-title-ipt')}></span>
                    <label className={cx('label')}>Title</label>
                </div>
                {/* <TaskForm /> */}
                <EventForm />
            </div>
        </div>
    );
}

export default EditForm;
