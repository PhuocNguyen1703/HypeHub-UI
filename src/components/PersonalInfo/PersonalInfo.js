import React from 'react';
import classNames from 'classnames/bind';

import styles from './PersonalInfo.module.scss';
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);

function PersonalInfo() {
    const { currentUser } = useSelector((state) => state.auth.login);

    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <span>Personal Information</span>
                <span className={cx('identify')}>No: MNT#123456789</span>
            </header>
            <form className={cx('form')}>
                <div className={cx('full-name')}>
                    <label className={cx('label')}>
                        First Name
                        <input type="text" className={cx('input')} placeholder="First Name" />
                    </label>
                    <label className={cx('label')}>
                        Last Name
                        <input type="text" className={cx('input')} placeholder="Last Name" />
                    </label>
                </div>
                <div className={cx('email-and-birth')}>
                    <label className={cx('label')}>
                        Email Address
                        <input type="text" className={cx('input')} placeholder="Email Address" />
                    </label>
                    <label className={cx('label')}>
                        Date of Birth
                        <input type="text" className={cx('input')} placeholder="Date of Birth" />
                    </label>
                </div>
                <div className={cx('phone-and-position')}>
                    <label className={cx('label')}>
                        Phone Number
                        <input type="text" className={cx('input')} placeholder="Phone Number" />
                    </label>
                    <label className={cx('label')}>
                        Position
                        <input type="text" className={cx('input')} placeholder="Position" />
                    </label>
                </div>
                <div className={cx('hashtag-and-gender')}>
                    <label className={cx('label')}>
                        Hashtag
                        <input type="text" className={cx('input')} placeholder="Hashtag" />
                    </label>
                    <label className={cx('label')}>
                        Gender
                        <input type="text" className={cx('input')} placeholder="Gender" />
                    </label>
                </div>
                <span className={cx('address-label')}>Address</span>
                <div className={cx('address')}>
                    <label className={cx('label')}>
                        Address 01
                        <textarea type="text" className={cx('textarea')} placeholder="Address 01" />
                    </label>
                    <label className={cx('label')}>
                        Address 02
                        <textarea type="text" className={cx('textarea')} placeholder="Address 02" />
                    </label>
                </div>
                <div className={cx('country-and-city')}>
                    <label className={cx('label')}>
                        Country
                        <input type="text" className={cx('input')} placeholder="Country" />
                    </label>
                    <label className={cx('label')}>
                        City
                        <input type="text" className={cx('input')} placeholder="City" />
                    </label>
                </div>
                <span className={cx('note-label')}>Note</span>
                <textarea type="text" className={cx('textarea-note')} placeholder="Address 02" />
                <div className={cx('action-btn')}>
                    <button className={cx('cancel-btn')} type="button">
                        Cancel
                    </button>
                    <button className={cx('save-btn')} type="submit">
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
}

export default PersonalInfo;
