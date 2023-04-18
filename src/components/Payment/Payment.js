import React, { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Payment.module.scss';
import { BsPlus, BsTrash } from 'react-icons/bs';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Payment() {
    const [showAddNewCardModal, setShowAddNewCardModal] = useState(false);

    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <span className={cx('title')}>Payment</span>
                <button className={cx('add-card-btn')}>
                    <BsPlus />
                    Add New Card
                </button>
            </header>
            <form className={cx('form')}>
                <div className={cx('name-and-card_number')}>
                    <label className={cx('label')}>
                        Name on Card
                        <input type="text" className={cx('input')} placeholder="Name on Card" />
                    </label>
                    <label className={cx('label')}>
                        Card Number
                        <input type="text" className={cx('input')} placeholder="Card Number" />
                    </label>
                </div>
                <div className={cx('account_number-and-expiry_date-and-bank_name')}>
                    <label className={cx('label')}>
                        Account Number
                        <input type="text" className={cx('input')} placeholder="Account Number" />
                    </label>
                    <label className={cx('label')}>
                        Bank Name
                        <input type="text" className={cx('input')} placeholder="Bank Name" />
                    </label>
                    <label className={cx('label', 'exp-date')}>
                        Expiry Date
                        <input type="text" className={cx('input')} placeholder="Date" />
                    </label>
                </div>
                <div className={cx('action-btn')}>
                    <button className={cx('cancel-btn')} type="button">
                        Cancel
                    </button>
                    <button className={cx('save-btn')} type="submit">
                        Save
                    </button>
                </div>
            </form>
            <div className={cx('card')}>
                <span className={cx('bank-name')}>Bank Name</span>
                <img className={cx('map-img')} src={images.map} alt="map" />
                <img className={cx('chip-img')} src={images.chip} alt="chip" />
                <div className={cx('card-number')}>
                    <span>1234</span>
                    <span>5678</span>
                    <span>1345</span>
                    <span>7653</span>
                </div>
                <span className={cx('card-holder')}>NGUYEN QUOC PHUOC</span>
                <span className={cx('exp')}>03/27</span>
                <div className={cx('action-btn')}>
                    <span className={cx('remove-btn')}>
                        <BsTrash />
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Payment;
