import { BsX } from 'react-icons/bs';
import classNames from 'classnames/bind';

import styles from './CreateCalendar.module.scss';
import { useDispatch } from 'react-redux';
import { setCalendarEventModalIsOpen } from '~/redux/Slice/modalSlice';
import TaskForm from './TaskForm';
import EventForm from './EventForm';

const cx = classNames.bind(styles);

function TaskCalendar() {
    const dispatch = useDispatch();

    const closeModal = () => {
        dispatch(setCalendarEventModalIsOpen(false));
    };

    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <span className={cx('type')}>Event</span>
                <button className={cx('close-btn')} onClick={closeModal}>
                    <BsX />
                </button>
            </header>
            <div className={cx('body')}>
                <div className={cx('title')}>
                    <input className={cx('title-ipt')} type="text" name="title" required />
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

export default TaskCalendar;
