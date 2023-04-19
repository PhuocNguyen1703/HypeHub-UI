import React, { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Payment.module.scss';
import { BsExclamationTriangle, BsPlus, BsTrash } from 'react-icons/bs';
import images from '~/assets/images';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const cx = classNames.bind(styles);

function Payment() {
    const numberRegExp =
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

    const formSchema = yup.object().shape({
        nameOnCard: yup.string().required('Name on card is required.').max(50, 'Please enter at most 50 characters.'),
        cardNumber: yup
            .string()
            .required('Card number is required.')
            .max(16, 'Card number is not valid.')
            .matches(numberRegExp, 'Card number is not valid.'),
        accountNumber: yup
            .string()
            .required('Account number is required.')
            .max(16, 'Account number is not valid.')
            .matches(numberRegExp, 'Account number is not valid.'),
        bankName: yup.string().required('Bank name is required.').max(20, 'Bank name is not valid.'),
    });

    const {
        register,
        formState: { errors, isSubmitting },
        handleSubmit,
    } = useForm({
        mode: 'onBlur',
        resolver: yupResolver(formSchema),
    });

    const onSubmit = async (data) => {
        console.log(data);
    };

    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <span className={cx('title')}>Payment</span>
                <button className={cx('add-card-btn')}>
                    <BsPlus />
                    Add New Card
                </button>
            </header>
            <form className={cx('form')} onSubmit={handleSubmit(onSubmit)}>
                <div className={cx('name-and-card_number')}>
                    <label className={cx('label')}>
                        Name on Card
                        <input
                            type="text"
                            className={cx('input', errors.nameOnCard && 'error-ipt')}
                            placeholder="Name on Card"
                            {...register('nameOnCard')}
                        />
                        {errors.nameOnCard?.message && (
                            <span className={cx('error')}>
                                <BsExclamationTriangle className={cx('icon-warning')} />
                                {errors.nameOnCard?.message}
                            </span>
                        )}
                    </label>
                    <label className={cx('label')}>
                        Card Number
                        <input
                            type="text"
                            className={cx('input', errors.cardNumber && 'error-ipt')}
                            placeholder="Card Number"
                            {...register('cardNumber')}
                        />
                        {errors.cardNumber?.message && (
                            <span className={cx('error')}>
                                <BsExclamationTriangle className={cx('icon-warning')} />
                                {errors.cardNumber?.message}
                            </span>
                        )}
                    </label>
                </div>
                <div className={cx('account_number-and-expiry_date-and-bank_name')}>
                    <label className={cx('label')}>
                        Account Number
                        <input
                            type="text"
                            className={cx('input', errors.accountNumber && 'error-ipt')}
                            placeholder="Account Number"
                            {...register('accountNumber')}
                        />
                        {errors.accountNumber?.message && (
                            <span className={cx('error')}>
                                <BsExclamationTriangle className={cx('icon-warning')} />
                                {errors.accountNumber?.message}
                            </span>
                        )}
                    </label>
                    <label className={cx('label')}>
                        Bank Name
                        <input
                            type="text"
                            className={cx('input', errors.bankName && 'error-ipt')}
                            placeholder="Bank Name"
                            {...register('bankName')}
                        />
                        {errors.bankName?.message && (
                            <span className={cx('error')}>
                                <BsExclamationTriangle className={cx('icon-warning')} />
                                {errors.bankName?.message}
                            </span>
                        )}
                    </label>
                    <label className={cx('label', 'exp-date')}>
                        Expiry Date
                        <input type="text" className={cx('input')} placeholder="Date" {...register('expDate')} />
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
