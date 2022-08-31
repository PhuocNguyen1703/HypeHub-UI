import React from 'react';
import { BsX } from 'react-icons/bs';
import classNames from 'classnames/bind';

import styles from './EventCalendar.module.scss';

const cx = classNames.bind(styles);

function EventCalendar({ closeModal }) {
    return (
        <div className={cx('wrapper')}>
            <header>
                <span>Event</span>
                <button onClick={closeModal}>
                    <BsX />
                </button>
            </header>
            <form>
                <label htmlFor="title">
                    Title
                    <input type="text" name="title" placeholder="Add title" />
                </label>
            </form>
        </div>
    );
}

export default EventCalendar;
