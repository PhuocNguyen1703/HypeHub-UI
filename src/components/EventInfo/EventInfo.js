import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import dayjs from 'dayjs';
import { BsClock, BsJustifyLeft, BsPencil, BsTrash, BsXLg } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { setDaySelected, setSelectedEvent } from '~/redux/Slice/calendarSlice';
import { setCalendarEventModalIsOpen } from '~/redux/Slice/modalSlice';

import styles from './EventInfo.module.scss';

const cx = classNames.bind(styles);

function EventInfo() {
    const { selectedEvent } = useSelector((state) => state.calendar);
    const dispatch = useDispatch();

    const closeModal = () => {
        dispatch(setDaySelected(dayjs().format('MMM DD, YYYY')));
        dispatch(setCalendarEventModalIsOpen(false));
        dispatch(setSelectedEvent(null));
    };

    const getCompletedClass = () => {
        if (!selectedEvent.completed) return 'uncompleted';
    };

    const handleCompleted = () => {};

    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <Tippy delay={[0, 50]} interactive content="Edit">
                    <button className={cx('edit-btn')}>
                        <BsPencil />
                    </button>
                </Tippy>
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
            </header>
            <div className={cx('body')}>
                <p className={cx('title')}>{selectedEvent.title}</p>
                <div className={cx('calendar')}>
                    <span className={cx('icon')}>
                        <BsClock />
                    </span>
                    <span>{selectedEvent.calendar}</span>
                </div>
                <div className={cx('note')}>
                    <span className={cx('icon')}>
                        <BsJustifyLeft />
                    </span>
                    <span>{selectedEvent.description}</span>
                </div>
            </div>
            <footer className={cx('footer')}>
                <button className={cx('mark-btn', getCompletedClass())} onClick={handleCompleted}>
                    Mark completed
                </button>
            </footer>
        </div>
    );
}

export default EventInfo;
