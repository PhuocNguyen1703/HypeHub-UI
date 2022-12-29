import React, { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './EventForm.module.scss';
import { BsClipboard, BsClock, BsJustifyLeft, BsTags } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';
import { setDaySelected, setSelectedEvent } from '~/redux/Slice/calendarSlice';
import { setCalendarEventModalIsOpen } from '~/redux/Slice/modalSlice';
import { useForm } from 'react-hook-form';
import { createCalendar } from '~/api/calendarApi';

const cx = classNames.bind(styles);

function EventForm() {
    const { daySelected, smallCalendarSelectedDay, selectedEvent } = useSelector((state) => state.calendar);
    const { currentUser } = useSelector((state) => state.auth.login);
    const [showTime, setShowTime] = useState(false);
    const [startTime, setStartTime] = useState('Start Time');
    const [endTime, setEndTime] = useState('End Time');
    const [desc] = useState(selectedEvent ? selectedEvent?.content : '');
    const [type, setType] = useState(selectedEvent ? selectedEvent?.calendarType : 'Event');
    const [tagName, setTagName] = useState('Select Tag');
    const [tagColor, setTagColor] = useState(selectedEvent ? selectedEvent?.theme : 'default-color');
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();

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

    const colorData = [
        { id: 'default', background: 'default-color', class: 'theme-color-default' },
        { id: 'radicchio', background: 'radicchio-color', class: 'theme-color-radicchio' },
        { id: 'citron', background: 'citron-color', class: 'theme-color-citron' },
        { id: 'basil', background: 'basil-color', class: 'theme-color-basil' },
        { id: 'blueBerry', background: 'blueBerry-color', class: 'theme-color-blueBerry' },
        { id: 'grape', background: 'grape-color', class: 'theme-color-grape' },
        { id: 'avocado', background: 'avocado-color', class: 'theme-color-avocado' },
        { id: 'eucalyptus', background: 'eucalyptus-color', class: 'theme-color-eucalyptus' },
        { id: 'lavender', background: 'lavender-color', class: 'theme-color-lavender' },
        { id: 'cocoa', background: 'cocoa-color', class: 'theme-color-cocoa' },
        { id: 'mango', background: 'mango-color', class: 'theme-color-mango' },
        { id: 'pistachio', background: 'pistachio-color', class: 'theme-color-pistachio' },
        { id: 'peacock', background: 'peacock-color', class: 'theme-color-peacock' },
        { id: 'wisteria', background: 'wisteria-color', class: 'theme-color-wisteria' },
        { id: 'graphite', background: 'graphite-color', class: 'theme-color-graphite' },
        { id: 'flamingo', background: 'flamingo-color', class: 'theme-color-flamingo' },
        { id: 'banana', background: 'banana-color', class: 'theme-color-banana' },
        { id: 'sage', background: 'sage-color', class: 'theme-color-sage' },
        { id: 'cobalt', background: 'cobalt-color', class: 'theme-color-cobalt' },
        { id: 'amethyst', background: 'amethyst-color', class: 'theme-color-amethyst' },
        { id: 'birch', background: 'birch-color', class: 'theme-color-birch' },
        { id: 'cyan', background: 'cyan-color', class: 'theme-color-cyan' },
        { id: 'orange', background: 'orange-color', class: 'theme-color-orange' },
        { id: 'lemon', background: 'lemon-color', class: 'theme-color-lemon' },
        { id: 'lime', background: 'lime-color', class: 'theme-color-lime' },
        { id: 'seafoam', background: 'seafoam-color', class: 'theme-color-seafoam' },
        { id: 'teal', background: 'teal-color', class: 'theme-color-teal' },
    ];

    const handleCategory = () => {
        setType(type === 'Event' ? 'Task' : 'Event');
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

    const handleSelectTag = (item) => {
        setTagName(item.id);
        setTagColor(item.background);
    };

    const handleCancel = () => {
        dispatch(setDaySelected(dayjs().format('MMM DD, YYYY')));
        dispatch(setCalendarEventModalIsOpen(false));
        dispatch(setSelectedEvent(null));
    };

    const onSubmit = async (data) => {
        const formData = {
            ...data,
            userId: currentUser._id,
            startTime: startTime,
            endTime: endTime,
            theme: tagColor,
            calendarType: type,
            completed: false,
        };
        console.log(formData);
        // await createCalendar(formData);
        // handleCancel();
    };

    return (
        <form className={cx('wrapper')} onSubmit={handleSubmit(onSubmit)}>
            <div className={cx('title')}>
                <input
                    className={cx('title-ipt')}
                    type="text"
                    name="title"
                    required
                    autoFocus
                    defaultValue={selectedEvent?.title}
                    {...register('title')}
                />
                <span className={cx('underline-title-ipt')}></span>
                <label className={cx('label')}>Title</label>
            </div>
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
                        {...register('date')}
                    />
                </div>

                {!showTime ? (
                    <button type="button" className={cx('add-time-btn')} onClick={handleAddTime}>
                        Add time
                    </button>
                ) : (
                    <button type="button" className={cx('add-time-btn')} onClick={handleAllTime}>
                        All time
                    </button>
                )}

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
            </div>
            <div className={cx('note')}>
                <span className={cx('icon')}>
                    <BsJustifyLeft />
                </span>
                <div className={cx('desc')}>
                    <textarea
                        className={cx('textarea')}
                        placeholder="Add description"
                        defaultValue={desc}
                        name="content"
                        {...register('content')}
                    ></textarea>
                    <span className={cx('underline-desc')}></span>
                </div>
            </div>
            <div className={cx('tag-container')}>
                <span className={cx('icon')}>
                    <BsTags />
                </span>
                <div className={cx('tag')}>
                    <div className={cx('tag-select')}>
                        <span className={cx('tag-color', tagColor)}></span>
                        {tagName}
                    </div>
                    <ul className={cx('tag-list')}>
                        {colorData.map((item, idx) => (
                            <li
                                key={idx}
                                className={cx('tag-item', `${item.background}`)}
                                onClick={() => handleSelectTag(item)}
                            ></li>
                        ))}
                    </ul>
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

export default EventForm;
