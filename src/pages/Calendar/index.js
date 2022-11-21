import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Calendar.module.scss';
import { getMonth } from '~/utils/day';
import dayjs from 'dayjs';
import {
    BsCheck2,
    BsChevronLeft,
    BsChevronRight,
    BsExclamationLg,
    BsFillCaretDownFill,
    BsJournal,
    BsPlus,
    BsTrash,
} from 'react-icons/bs';
import CreateCalendar from '~/components/Modal/CreateCalendar';
import SidebarItem from '~/layouts/components/Sidebar/SidebarItem';
import Modal from '~/components/Modal';
import { useDispatch, useSelector } from 'react-redux';
import {
    setDaySelected,
    setMonthIndex,
    setSelectedEvent,
    setSmallCalendarSelectedDay,
} from '~/redux/Slice/calendarSlice';
import { setCalendarEventModalIsOpen } from '~/redux/Slice/modalSlice';
import PickerCalendar from '~/components/PickerCalendar';
import Menu from '~/components/Popper/Menu';

const cx = classNames.bind(styles);

function Calendar() {
    const [buttonTitle, setButtonTitle] = useState('Month');
    const [currentMonth, setCurrentMonth] = useState(getMonth());
    const { monthIndex } = useSelector((state) => state.calendar);
    const { calendarEventModalIsOpen } = useSelector((state) => state.modal);
    const dispatch = useDispatch();

    const menu = [
        { icon: <BsJournal />, title: 'My Calendar', path: '/calendar' },
        { icon: <BsExclamationLg />, title: 'Important', path: '/calendar/important' },
        { icon: <BsCheck2 />, title: 'Completed', path: '/calendar/completed' },
        { icon: <BsTrash />, title: 'Deleted', path: '/calendar/deleted' },
    ];

    const events = [
        {
            type: 'Event',
            title: 'How are you ?',
            calendar: 'Aug 05, 2022',
            description: 'how are you ?',
            theme: 'default-color',
            completed: true,
        },
        {
            type: 'Task',
            title: 'What your name ?',
            calendar: 'Aug 06, 2022',
            description: 'how are you ?',
            theme: 'radicchio-color',
            completed: false,
        },
        {
            type: 'Event',
            title: 'Wedding',
            calendar: 'Sep 07, 2022',
            description: 'how are you ?',
            theme: 'citron-color',
            completed: false,
        },
        {
            type: 'Task',
            title: 'Birthday',
            calendar: 'Aug 08, 2022',
            description: 'What are you ?',
            theme: 'basil-color',
            completed: true,
        },
        {
            type: 'Event',
            title: 'Wedding',
            calendar: 'Sep 09, 2022',
            description: 'how are you ?',
            theme: 'blueBerry-color',
            completed: false,
        },
        {
            type: 'Task',
            title: 'Wedding',
            calendar: 'Sep 10, 2022',
            description: 'how are you ?',
            theme: 'grape-color',
            completed: false,
        },
        {
            type: 'Event',
            title: 'Wedding',
            calendar: 'Sep 11, 2022',
            description: 'how are you ?',
            theme: 'avocado-color',
            completed: true,
        },
        {
            type: 'Event',
            title: 'Wedding',
            calendar: 'Sep 12, 2022',
            description: 'how are you ?',
            theme: 'eucalyptus-color',
            completed: false,
        },
        {
            type: 'Task',
            title: 'Wedding',
            calendar: 'Sep 13, 2022',
            description: 'How are you ?',
            theme: 'lavender-color',
            completed: false,
        },
        {
            type: 'Event',
            title: 'Wedding',
            calendar: 'Sep 14, 2022',
            description: 'Where are you ?',
            theme: 'cocoa-color',
            completed: false,
        },
        {
            type: 'Event',
            title: 'Wedding',
            calendar: 'Sep 15, 2022',
            description: 'how are you ?',
            theme: 'mango-color',
            completed: true,
        },
        {
            type: 'Task',
            title: 'Wedding',
            calendar: 'Sep 16, 2022',
            description: 'how are you ?',
            theme: 'pistachio-color',
            completed: true,
        },
        {
            type: 'Event',
            title: 'Wedding',
            calendar: 'Sep 17, 2022',
            description: 'Who are you ?',
            theme: 'peacock-color',
            completed: true,
        },
        {
            type: 'Task',
            title: 'Wedding',
            calendar: 'Sep 18, 2022',
            description: 'how are you ?',
            theme: 'wisteria-color',
            completed: false,
        },
        {
            type: 'Event',
            title: 'Wedding',
            calendar: 'Sep 19, 2022',
            description: 'What are you ?',
            theme: 'graphite-color',
            completed: true,
        },
        {
            type: 'Task',
            title: 'Wedding Wedding Wedding Wedding Wedding Wedding Wedding Wedding Wedding Wedding v Wedding Wedding Wedding Wedding Wedding Wedding Wedding Wedding Wedding Wedding Wedding Wedding Wedding Wedding Wedding v ',
            calendar: 'Sep 20, 2022',
            description:
                'how are you ? how are you ? how are you ? how are you ?how are you ?how are you ? how are you ?how are you ? how are you ?vv how are you ? how are you ? v vv how are you ? how are you ? how are you ? v how are you ? vv how are you ? how are you ? how are you ? how are you ? how are you ? how are you ? how are you ? how are you ?',
            theme: 'flamingo-color',
            completed: false,
        },
        {
            type: 'Task',
            title: 'Wedding',
            calendar: 'Sep 30, 2022',
            description: 'how are you ?',
            theme: 'banana-color',
            completed: true,
        },
        {
            type: 'Event',
            title: 'Wedding',
            calendar: 'Sep 22, 2022',
            description: 'how are you ?',
            theme: 'sage-color',
            completed: false,
        },
        {
            type: 'Event',
            title: 'Wedding',
            calendar: 'Sep 23, 2022',
            description: 'how are you ?',
            theme: 'cobalt-color',
            completed: false,
        },
        {
            type: 'Event',
            title: 'Wedding',
            calendar: 'Sep 30, 2022',
            description: 'how are you ?',
            theme: 'amethyst-color',
            completed: false,
        },
        {
            type: 'Event',
            title: 'Wedding',
            calendar: 'Sep 25, 2022',
            description: 'how are you ?',
            theme: 'birch-color',
            completed: false,
        },
        {
            type: 'Event',
            title: 'Wedding',
            calendar: 'Sep 26, 2022',
            description: 'how are you ?',
            theme: 'cyan-color',
            completed: false,
        },
        {
            type: 'Event',
            title: 'Wedding',
            calendar: 'Sep 30, 2022',
            description: 'how are you ?',
            theme: 'orange-color',
            completed: false,
        },
        {
            type: 'Event',
            title: 'Wedding',
            calendar: 'Sep 28, 2022',
            description: 'how are you ?',
            theme: 'lemon-color',
            completed: false,
        },
        {
            type: 'Event',
            title: 'Wedding',
            calendar: 'Sep 29, 2022',
            description: 'how are you ?',
            theme: 'lime-color',
            completed: false,
        },
        {
            type: 'Event',
            title: 'Wedding',
            calendar: 'Sep 30, 2022',
            description: 'how are you ?',
            theme: 'seafoam-color',
            completed: false,
        },
        {
            type: 'Event',
            title: 'Wedding',
            calendar: 'Oct 01, 2022',
            description: 'how are you ?',
            theme: 'teal-color',
            completed: false,
        },
        {
            type: 'Event',
            title: 'Wedding',
            calendar: 'Oct 01, 2022',
            description: 'how are you ?',
            theme: 'default-color',
            completed: false,
        },
    ];

    const viewMenu = [
        { title: 'Day' },
        { title: 'Week' },
        { title: 'Month' },
        { title: 'Year' },
        { title: 'Schedule' },
        { title: '4 days' },
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

    const handleChangeLayout = (menuItem) => {
        switch (menuItem.title) {
            case 'Day':
                setButtonTitle('Day');
                break;
            case 'Week':
                setButtonTitle('Week');
                break;
            case 'Month':
                setButtonTitle('Month');
                break;
            case 'Year':
                setButtonTitle('Year');
                break;
            case 'Schedule':
                setButtonTitle('Schedule');
                break;
            case '4 days':
                setButtonTitle('4 days');
                break;
            default:
                break;
        }
    };

    const handleCreateCalendar = () => {
        dispatch(setDaySelected(dayjs().format('MMM DD, YYYY')));
        dispatch(setCalendarEventModalIsOpen(true));
    };

    const handleSelectedDay = (day) => {
        dispatch(setDaySelected(day.format('MMM DD, YYYY')));
        dispatch(setCalendarEventModalIsOpen(true));
    };

    const handleClickEvent = (evt) => {
        dispatch(setSelectedEvent(evt));
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
                <Menu items={viewMenu} onChange={handleChangeLayout}>
                    <button className={cx('calendar-view-btn')}>
                        {buttonTitle}
                        <BsFillCaretDownFill className={cx('icon-down')} />
                    </button>
                </Menu>
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
                                                    <React.Fragment key={idx}>
                                                        <div
                                                            className={cx('event')}
                                                            onClick={() => handleClickEvent(evt)}
                                                        >
                                                            <span className={cx('tag', evt.theme)}></span>
                                                            <p>{evt.title}</p>
                                                        </div>
                                                    </React.Fragment>
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
