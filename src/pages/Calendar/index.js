import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Calendar.module.scss';
import { getMonth } from '~/utils/day';
import dayjs from 'dayjs';
import { BsCheck2, BsChevronLeft, BsChevronRight, BsExclamationLg, BsJournal, BsPlus, BsTrash } from 'react-icons/bs';
import EventCalendar from '~/components/Modal/EventCalendar';
import SidebarItem from '~/layouts/components/Sidebar/SidebarItem';
import Modal from '~/components/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { setMonthIndex } from '~/redux/Slice/calendarSlice';

const cx = classNames.bind(styles);

function Calendar() {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [currentMonth, setCurrentMonth] = useState(getMonth());
    const monthIndex = useSelector((state) => state.calendar.monthIndex);
    const dispatch = useDispatch();

    const menu = [
        { icon: <BsJournal />, title: 'My Tasks', path: '/calendar' },
        { icon: <BsExclamationLg />, title: 'Important', path: '/sent' },
        { icon: <BsCheck2 />, title: 'Completed', path: '/title' },
        { icon: <BsTrash />, title: 'Deleted', path: '/calendar' },
    ];

    useEffect(() => {
        setCurrentMonth(getMonth(monthIndex));
    }, [monthIndex]);

    const getCurrentDayClass = (day) => {
        return day.format('DD-MM-YYYY') === dayjs().format('DD-MM-YYYY') && 'today';
    };

    const handleReset = () => {
        dispatch(setMonthIndex(dayjs().month()));
    };

    const handlePrevMonth = () => {
        dispatch(setMonthIndex(monthIndex - 1));
    };

    const handleNextMonth = () => {
        dispatch(setMonthIndex(monthIndex + 1));
    };

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <div className={cx('header-left')}>
                    <h1>Calendar</h1>
                    <button className={cx('today-btn')} onClick={handleReset}>
                        Today
                    </button>
                </div>
                <div className={cx('header-center')}>
                    <button className={cx('icon-prev')} onClick={handlePrevMonth}>
                        <BsChevronLeft />
                    </button>
                    <h3>{dayjs(new Date(dayjs().year(), monthIndex)).format('MMMM YYYY')}</h3>
                    <button className={cx('icon-next')} onClick={handleNextMonth}>
                        <BsChevronRight />
                    </button>
                </div>
                <p className={cx('header-right')}></p>
            </header>
            <div className={cx('container')}>
                <div className={cx('sidebar')}>
                    <button className={cx('create-calendar')} onClick={openModal}>
                        <BsPlus />
                        Create Calendar
                    </button>
                    {menu.map((item, index) => (
                        <SidebarItem key={index} item={item} className={'menu-item'} />
                    ))}
                </div>
                <div className={cx('content')}>
                    {currentMonth.map((row, idx) => (
                        <React.Fragment key={idx}>
                            {row.map((day, i) => (
                                <div key={i} className={cx('row-day')}>
                                    <header className={cx('day-box')}>
                                        {idx === 0 && (
                                            <p
                                                className={cx('day')}
                                                style={{ color: `${(i === 0 && 'red') || (i === 6 && 'blue')}` }}
                                            >
                                                {day.format('ddd')}
                                            </p>
                                        )}
                                        <p
                                            className={cx('date', getCurrentDayClass(day))}
                                            style={{ color: `${(i === 0 && 'red') || (i === 6 && 'blue')}` }}
                                        >
                                            {day.format('DD')}
                                        </p>
                                    </header>
                                </div>
                            ))}
                        </React.Fragment>
                    ))}
                </div>
            </div>

            <Modal isOpen={modalIsOpen}>
                <EventCalendar closeModal={closeModal} />
            </Modal>
        </div>
    );
}

export default Calendar;
