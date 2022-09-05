import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Calendar.module.scss';
import { getMonth } from '~/utils/day';
import dayjs from 'dayjs';
import { BsCheck2, BsChevronLeft, BsChevronRight, BsExclamationLg, BsJournal, BsPlus, BsTrash } from 'react-icons/bs';
import CreateCalendar from '~/components/Modal/CreateCalendar';
import SidebarItem from '~/layouts/components/Sidebar/SidebarItem';
import Modal from '~/components/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { setDaySelected, setMonthIndex, setSmallCalendarSelectedDay } from '~/redux/Slice/calendarSlice';
import { setCalendarEventModalIsOpen } from '~/redux/Slice/modalSlice';
import PickerCalendar from '~/components/PickerCalendar';

const cx = classNames.bind(styles);

function Calendar() {
    const [currentMonth, setCurrentMonth] = useState(getMonth());
    const { monthIndex } = useSelector((state) => state.calendar);
    const { calendarEventModalIsOpen } = useSelector((state) => state.modal);
    const dispatch = useDispatch();

    const menu = [
        { icon: <BsJournal />, title: 'My Tasks', path: '/calendar' },
        { icon: <BsExclamationLg />, title: 'Important', path: '/sent' },
        { icon: <BsCheck2 />, title: 'Completed', path: '/title' },
        { icon: <BsTrash />, title: 'Deleted', path: '/calendar' },
    ];

    const events = [
        { title: 'How are you ?', calendar: 'Aug 29, 2022', description: 'how are you ?', theme: 'grape' },
        { title: 'What your name ?', calendar: 'Aug 25, 2022', description: 'how are you ?', theme: 'radicchio' },
        { title: 'Wedding', calendar: 'Sep 10, 2022', description: 'how are you ?', theme: 'tangerine' },
        { title: 'Birthday', calendar: 'Aug 15, 2022', description: 'how are you ?', theme: 'citron' },
        { title: 'Wedding', calendar: 'Sep 10, 2022', description: 'how are you ?', theme: 'basil' },
        { title: 'Wedding', calendar: 'Sep 20, 2022', description: 'how are you ?', theme: 'blueBerry' },
        { title: 'Wedding', calendar: 'Sep 15, 2022', description: 'how are you ?', theme: 'cherryBlossom' },
        { title: 'Wedding', calendar: 'Sep 15, 2022', description: 'how are you ?', theme: 'pumpkin' },
        { title: 'Wedding', calendar: 'Sep 15, 2022', description: 'how are you ?', theme: 'avocado' },
        { title: 'Wedding', calendar: 'Sep 15, 2022', description: 'how are you ?', theme: 'eucalyptus' },
        { title: 'Wedding', calendar: 'Sep 21, 2022', description: 'how are you ?', theme: 'lavender' },
        { title: 'Wedding', calendar: 'Sep 12, 2022', description: 'how are you ?', theme: 'cocoa' },
        { title: 'Wedding', calendar: 'Sep 18, 2022', description: 'how are you ?', theme: 'tomato' },
        { title: 'Wedding', calendar: 'Sep 25, 2022', description: 'how are you ?', theme: 'banana' },
    ];

    useEffect(() => {
        setCurrentMonth(getMonth(monthIndex));
    }, [monthIndex]);

    const getWeekendClass = (day) => {
        if (day.format('dddd') === 'Sunday') return 'sunday';
        if (day.format('dddd') === 'Saturday') return 'saturday';
    };

    const getDayOfCurrentMonthClass = (day) => {
        if (day.format('DD-MM-YYYY') === dayjs().format('DD-MM-YYYY')) {
            return 'today';
        }

        if (day.format('MMM') === dayjs().month(monthIndex).format('MMM')) {
            return 'day-of-current-month';
        }
    };

    const handleReset = () => {
        dispatch(setMonthIndex(dayjs().month()));
        dispatch(setSmallCalendarSelectedDay(dayjs().format('MMM DD, YYYY')));
    };

    const handlePrevMonth = () => {
        dispatch(setMonthIndex(monthIndex - 1));
    };

    const handleNextMonth = () => {
        dispatch(setMonthIndex(monthIndex + 1));
    };

    const handleCreateCalendar = () => {
        dispatch(setDaySelected(dayjs().format('MMM DD, YYYY')));
        dispatch(setCalendarEventModalIsOpen(true));
    };

    const handleSelectedDay = (day) => {
        dispatch(setDaySelected(day.format('MMM DD, YYYY')));
        dispatch(setCalendarEventModalIsOpen(true));
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
                    <button className={cx('create-calendar')} onClick={handleCreateCalendar}>
                        <BsPlus />
                        Create Calendar
                    </button>
                    <PickerCalendar />
                    {menu.map((item, index) => (
                        <SidebarItem key={index} item={item} className={'menu-item'} />
                    ))}
                </div>
                <div className={cx('content')}>
                    {currentMonth.map((row, idx) => (
                        <React.Fragment key={idx}>
                            {row.map((day, i) => (
                                <div key={i} className={cx('row-day')} onClick={() => handleSelectedDay(day)}>
                                    <header className={cx('day-box')}>
                                        {idx === 0 && (
                                            <p className={cx('day', getWeekendClass(day))}>{day.format('ddd')}</p>
                                        )}
                                        <p className={cx('date', getDayOfCurrentMonthClass(day), getWeekendClass(day))}>
                                            {day.format('DD')}
                                        </p>
                                    </header>
                                    <div className={cx('note-schedule')}>
                                        {events.map(
                                            (evt, idx) =>
                                                evt.calendar === day.format('MMM DD, YYYY') && (
                                                    <div
                                                        key={idx}
                                                        className={cx('event')}
                                                        style={{
                                                            backgroundColor: `rgba(var(--${evt?.theme}-rgb),0.3)`,
                                                        }}
                                                    >
                                                        <span
                                                            className={cx('tag')}
                                                            style={{
                                                                backgroundColor: `rgb(var(--${evt?.theme}-rgb))`,
                                                            }}
                                                        ></span>
                                                        {evt.title}
                                                    </div>
                                                ),
                                        )}
                                    </div>
                                </div>
                            ))}
                        </React.Fragment>
                    ))}
                </div>
            </div>

            {calendarEventModalIsOpen && (
                <Modal>
                    <CreateCalendar />
                </Modal>
            )}
        </div>
    );
}

export default Calendar;
