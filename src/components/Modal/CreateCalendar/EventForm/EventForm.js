import React, { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './EventForm.module.scss';
import { BsClipboard, BsClock, BsFillRecordFill, BsJustifyLeft, BsTags } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';
import { setDaySelected, setSelectedEvent } from '~/redux/Slice/calendarSlice';
import { setCalendarEventModalIsOpen } from '~/redux/Slice/modalSlice';
import { MdTag } from 'react-icons/md';

const cx = classNames.bind(styles);

function TaskForm() {
    const { daySelected, smallCalendarSelectedDay, selectedEvent } = useSelector((state) => state.calendar);
    const [showTime, setShowTime] = useState(false);
    const [startTime, setStartTime] = useState('Start Time');
    const [endTime, setEndTime] = useState('End Time');
    const [desc] = useState(selectedEvent ? selectedEvent.description : '');
    const [type, setType] = useState(selectedEvent ? selectedEvent.type : 'Event');
    const [tagName, setTagName] = useState('Select Tag');
    const dispatch = useDispatch();

    const timeList = [
        '12:00am',
        '12:15am',
        '12:30am',
        '12:45am',
        '1:00am',
        '1:15am',
        '1:30am',
        '1:45am',
        '2:00am',
        '2:15am',
        '2:30am',
        '2:45am',
        '3:00am',
        '3:15am',
        '3:30am',
        '3:45am',
        '4:00am',
        '4:15am',
        '4:30am',
        '4:45am',
        '5:00am',
        '5:15am',
        '5:30am',
        '5:45am',
        '6:00am',
        '6:15am',
        '6:30am',
        '6:45am',
        '7:00am',
        '7:15am',
        '7:30am',
        '7:45am',
        '8:00am',
        '8:15am',
        '8:30am',
        '8:45am',
        '9:00am',
        '9:15am',
        '9:30am',
        '9:45am',
        '10:00am',
        '10:15am',
        '10:30am',
        '10:45am',
        '11:00am',
        '11:15am',
        '11:30am',
        '11:45am',
        '12:00pm',
        '12:15pm',
        '12:30pm',
        '12:45pm',
        '1:00pm',
        '1:15pm',
        '1:30pm',
        '1:45pm',
        '2:00pm',
        '2:15pm',
        '2:30pm',
        '2:45pm',
        '3:00pm',
        '3:15pm',
        '3:30pm',
        '3:45pm',
        '4:00pm',
        '4:15pm',
        '4:30pm',
        '4:45pm',
        '5:00pm',
        '5:15pm',
        '5:30pm',
        '5:45pm',
        '6:00pm',
        '6:15pm',
        '6:30pm',
        '6:45pm',
        '7:00pm',
        '7:15pm',
        '7:30pm',
        '7:45pm',
        '8:00pm',
        '8:15pm',
        '8:30pm',
        '8:45pm',
        '9:00pm',
        '9:15pm',
        '9:30pm',
        '9:45pm',
        '10:00pm',
        '10:15pm',
        '10:30pm',
        '10:45pm',
        '11:00pm',
        '11:15pm',
        '11:30pm',
        '11:45pm',
    ];

    const tagList = [
        { name: 'Radicchio', color: 'radicchio' },
        { name: 'Tangerine', color: 'tangerine' },
        { name: 'Citron', color: 'citron' },
        { name: 'Basil', color: 'basil' },
        { name: 'BlueBerry', color: 'blueBerry' },
        { name: 'Grape', color: 'grape' },
        { name: 'CherryBlossom', color: 'cherryBlossom' },
        { name: 'Pumpkin', color: 'pumpkin' },
        { name: 'Avocado', color: 'avocado' },
        { name: 'Eucalyptus', color: 'eucalyptus' },
        { name: 'Lavender', color: 'lavender' },
        { name: 'Cocoa', color: 'cocoa' },
        { name: 'Tomato', color: 'tomato' },
        { name: 'Mango', color: 'mango' },
        { name: 'Pistachio', color: 'pistachio' },
        { name: 'Peacock', color: 'peacock' },
        { name: 'Wisteria', color: 'wisteria' },
        { name: 'Graphite', color: 'graphite' },
        { name: 'Flamingo', color: 'flamingo' },
        { name: 'Banana', color: 'banana' },
        { name: 'Sage', color: 'sage' },
        { name: 'Cobalt', color: 'cobalt' },
        { name: 'Amethyst', color: 'amethyst' },
        { name: 'Birch', color: 'birch' },
    ];

    const handleCategory = () => {
        setType(type === 'Event' ? 'Task' : 'Event');
    };

    const handleShowPickerCalendar = () => {
        console.log('calendar');
    };

    const handleAddTime = () => {
        setShowTime(true);
    };

    const handleAllTime = () => {
        setShowTime(false);
    };

    const handleStartTime = (time) => {
        setStartTime(time);
    };

    const handleEndTime = (time) => {
        setEndTime(time);
    };

    const getTime = () => {
        if (daySelected !== dayjs().format('MMM DD, YYYY')) {
            return daySelected;
        }

        if (smallCalendarSelectedDay !== dayjs().format('MMM DD, YYYY')) {
            return smallCalendarSelectedDay;
        }

        return dayjs().format('MMM DD, YYYY');
    };

    const handleSelectTag = (tag) => {
        setTagName(tag);
    };

    const handleCancel = () => {
        dispatch(setDaySelected(dayjs().format('MMM DD, YYYY')));
        dispatch(setCalendarEventModalIsOpen(false));
        dispatch(setSelectedEvent(null));
    };

    const onSubmit = () => {};

    return (
        <form className={cx('wrapper')} onSubmit={onSubmit}>
            <div className={cx('category')}>
                <span className={cx('icon')}>
                    <BsClipboard />
                </span>
                <button type="button" className={cx('type-btn')} onClick={handleCategory}>
                    {type}
                </button>
            </div>
            <div className={cx('calendar-container')}>
                <div className={cx('calendar')}>
                    <span className={cx('icon')}>
                        <BsClock />
                    </span>
                    <input
                        className={cx('calendar-time')}
                        type="text"
                        value={getTime()}
                        readOnly={true}
                        onClick={handleShowPickerCalendar}
                    />
                </div>
                {showTime && (
                    <>
                        <div className={cx('time')}>
                            <div className={cx('time-select')}>
                                <span>{startTime}</span>
                            </div>
                            <div className={cx('time-list')}>
                                {timeList.map((time, idx) => (
                                    <div
                                        key={idx}
                                        value={time}
                                        className={cx('time-item')}
                                        onClick={() => handleStartTime(time)}
                                    >
                                        {time}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <span className={cx('separate')}>-</span>
                        <div className={cx('time')}>
                            <div className={cx('time-select')}>
                                <span>{endTime}</span>
                            </div>
                            <div className={cx('time-list')}>
                                {timeList.map((time, idx) => (
                                    <div
                                        key={idx}
                                        value={time}
                                        className={cx('time-item')}
                                        onClick={() => handleEndTime(time)}
                                    >
                                        {time}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                )}
                {!showTime ? (
                    <button type="button" className={cx('add-time-btn')} onClick={handleAddTime}>
                        Add time
                    </button>
                ) : (
                    <button type="button" className={cx('add-time-btn')} onClick={handleAllTime}>
                        All time
                    </button>
                )}
            </div>
            <div className={cx('note')}>
                <span className={cx('icon')}>
                    <BsJustifyLeft />
                </span>
                <div className={cx('desc')}>
                    <textarea className={cx('textarea')} placeholder="Add description" defaultValue={desc}></textarea>
                    <span className={cx('underline-desc')}></span>
                </div>
            </div>
            <div className={cx('tag-container')}>
                <span className={cx('icon')}>
                    <BsTags />
                </span>
                <div className={cx('tag')}>
                    <span className={cx('tag-select')}>
                        <BsFillRecordFill
                            style={
                                tagName === 'Select Tag' ? '' : { color: `rgb(var(--${tagName.toLowerCase()}-rgb))` }
                            }
                        />
                        {tagName}
                    </span>
                    <div className={cx('tag-list')}>
                        {tagList.map((tag, idx) => (
                            <span key={idx} className={cx('tag-item')}>
                                <BsFillRecordFill
                                    style={{ color: `rgb(var(--${tag.color}-rgb))` }}
                                    onClick={() => handleSelectTag(tag.name)}
                                />
                            </span>
                        ))}
                    </div>
                </div>
            </div>
            <footer className={cx('action-btn')}>
                <button className={cx('cancel-btn')} type="button" onClick={handleCancel}>
                    Cancel
                </button>
                <button className={cx('save-btn')} type="submit">
                    Save
                </button>
            </footer>
        </form>
    );
}

export default TaskForm;
