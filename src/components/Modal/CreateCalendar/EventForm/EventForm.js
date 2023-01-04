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
    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);
    const [desc] = useState(selectedEvent ? selectedEvent?.content : '');
    const [type, setType] = useState(selectedEvent ? selectedEvent?.calendarType : 'Event');
    const [tagName, setTagName] = useState('Select Tag');
    const [tagColor, setTagColor] = useState(selectedEvent ? selectedEvent?.theme : 'default-color');
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();

    const timeList = [
        '00:00 am',
        '00:15 am',
        '00:30 am',
        '00:45 am',
        '1:00 am',
        '1:15 am',
        '1:30 am',
        '1:45 am',
        '2:00 am',
        '2:15 am',
        '2:30 am',
        '2:45 am',
        '3:00 am',
        '3:15 am',
        '3:30 am',
        '3:45 am',
        '4:00 am',
        '4:15 am',
        '4:30 am',
        '4:45 am',
        '5:00 am',
        '5:15 am',
        '5:30 am',
        '5:45 am',
        '6:00 am',
        '6:15 am',
        '6:30 am',
        '6:45 am',
        '7:00 am',
        '7:15 am',
        '7:30 am',
        '7:45 am',
        '8:00 am',
        '8:15 am',
        '8:30 am',
        '8:45 am',
        '9:00 am',
        '9:15 am',
        '9:30 am',
        '9:45 am',
        '10:00 am',
        '10:15 am',
        '10:30 am',
        '10:45 am',
        '11:00 am',
        '11:15 am',
        '11:30 am',
        '11:45 am',
        '12:00 pm',
        '12:15 pm',
        '12:30 pm',
        '12:45 pm',
        '1:00 pm',
        '1:15 pm',
        '1:30 pm',
        '1:45 pm',
        '2:00 pm',
        '2:15 pm',
        '2:30 pm',
        '2:45 pm',
        '3:00 pm',
        '3:15 pm',
        '3:30 pm',
        '3:45 pm',
        '4:00 pm',
        '4:15 pm',
        '4:30 pm',
        '4:45 pm',
        '5:00 pm',
        '5:15 pm',
        '5:30 pm',
        '5:45 pm',
        '6:00 pm',
        '6:15 pm',
        '6:30 pm',
        '6:45 pm',
        '7:00 pm',
        '7:15 pm',
        '7:30 pm',
        '7:45 pm',
        '8:00 pm',
        '8:15 pm',
        '8:30 pm',
        '8:45 pm',
        '9:00 pm',
        '9:15 pm',
        '9:30 pm',
        '9:45 pm',
        '10:00 pm',
        '10:15 pm',
        '10:30 pm',
        '10:45 pm',
        '11:00 pm',
        '11:15 pm',
        '11:30 pm',
        '11:45 pm',
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
        setStartTime(null);
        setEndTime(null);
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
                                <span>{startTime ? startTime : 'Start time'}</span>
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
                                <span>{endTime ? endTime : 'End time'}</span>
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
