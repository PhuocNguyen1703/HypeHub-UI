import classNames from 'classnames/bind';
import { useState } from 'react';

import dayjs from 'dayjs';
import { BsChevronLeft, BsChevronRight, BsPlus } from 'react-icons/bs';
import { FaAngleRight } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Dropdown from '~/components/Dropdown/Dropdown';
import CreateCalendar from '~/components/Modal/CreateCalendar/CreateCalendar';
import PickerCalendar from '~/components/PickerCalendar/PickerCalendar';
import {
    setDaySelected,
    setMonthIndex,
    setSelectedEvent,
    setSmallCalendarSelectedDay,
} from '~/redux/Slice/calendarSlice';
import { getMonth } from '~/utils/day';
import styles from './Calendar.module.scss';

const cx = classNames.bind(styles);

function Calendar() {
    const { currentUser } = useSelector((state) => state.auth.login);
    const { monthIndex } = useSelector((state) => state.calendar);
    const [showCreateCalendarModal, setShowCreateCalendarModal] = useState(false);
    const { calendarEventModalIsOpen } = useSelector((state) => state.modal);
    const [buttonTitle, setButtonTitle] = useState('Month');
    const [currentMonth, setCurrentMonth] = useState(getMonth());
    const [calendars, setCalendars] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const [layout, setLayout] = useState('Month');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const layoutOptions = ['Day', 'Month', 'Year', 'Schedule'];

    // useEffect(() => {
    //     const getCalendars = async () => {
    //         try {
    //             const result = await getAllCalendar(currentUser?._id);
    //             setCalendars(result.data);
    //             console.log(result.data);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     };
    //     getCalendars();
    // }, []);

    // useEffect(() => {
    //     setCurrentMonth(getMonth(monthIndex));
    // }, [monthIndex]);

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

    const handleToggleDropdown = () => {
        setShowDropdown((prevState) => !prevState);
    };

    const handleSelectOption = (option) => {
        setLayout(option);
        navigate(`${option.toLowerCase()}`);
        setShowDropdown(false);
    };

    const handleCreateCalendar = () => {
        dispatch(setDaySelected(dayjs().format('MMM DD, YYYY')));
        setShowCreateCalendarModal(true);
    };

    const handleSelectedDay = (day) => {
        dispatch(setDaySelected(day.format('MMM DD, YYYY')));
        setShowCreateCalendarModal(true);
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
                <div className={cx('header-right')}>
                    <span
                        className={cx('calendar-option', showDropdown && 'toggle-dropdown')}
                        onClick={handleToggleDropdown}
                    >
                        {layout}
                        <span className={cx('icon-dropdown')}>
                            <FaAngleRight />
                        </span>
                    </span>
                    <Dropdown
                        isShowDropdown={showDropdown}
                        setShowDropdown={setShowDropdown}
                        options={layoutOptions}
                        onChange={handleSelectOption}
                    />
                </div>
            </header>
            <div className={cx('container')}>
                <div className={cx('sidebar')}>
                    <button className={cx('create-calendar')} onClick={handleCreateCalendar}>
                        <BsPlus />
                        Create Calendar
                    </button>
                    <PickerCalendar />
                </div>
                <div className={cx('layout')}>
                    <Outlet />
                </div>
            </div>

            <CreateCalendar show={showCreateCalendarModal} setShowCreateCalendarModal={setShowCreateCalendarModal} />
        </div>
    );
}

export default Calendar;
