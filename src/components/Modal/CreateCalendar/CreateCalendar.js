import { BsXLg } from 'react-icons/bs';
import classNames from 'classnames/bind';

import styles from './CreateCalendar.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setCalendarEventModalIsOpen } from '~/redux/Slice/modalSlice';
import EventForm from './EventForm';
import { setDaySelected, setSelectedEvent } from '~/redux/Slice/calendarSlice';
import dayjs from 'dayjs';
import Tippy from '@tippyjs/react';
import EventInfo from '~/components/EventInfo';

const cx = classNames.bind(styles);

function CreateCalendar() {
    const { selectedEvent } = useSelector((state) => state.calendar);
    const dispatch = useDispatch();

    const closeModal = () => {
        dispatch(setDaySelected(dayjs().format('MMM DD, YYYY')));
        dispatch(setCalendarEventModalIsOpen(false));
        dispatch(setSelectedEvent(null));
    };

    if (selectedEvent) {
        return (
            <div className={cx('wrapper')}>
                <EventInfo />
            </div>
        );
    }

    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <div>
                    <Tippy delay={[0, 50]} interactive content="Close">
                        <button className={cx('close-btn')} onClick={closeModal}>
                            <BsXLg />
                        </button>
                    </Tippy>
                </div>
            </header>
            <div className={cx('body')}>
                <div className={cx('title')}>
                    <input className={cx('title-ipt')} type="text" name="title" required autoFocus />
                    <span className={cx('underline-title-ipt')}></span>
                    <label className={cx('label')}>Title</label>
                </div>
                {/* <TaskForm /> */}
                <EventForm />
            </div>
        </div>
    );
}

export default CreateCalendar;