import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import styles from './CardForm.module.scss';
import { BsChevronRight, BsExclamationTriangle } from 'react-icons/bs';
import Modal from '~/components/Modal/Modal';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import Card from '../Card/Card';
import Dropdown from '~/components/Dropdown/Dropdown';
import { useCallback } from 'react';

const cx = classNames.bind(styles);

function CardForm({ show, setShowCardFormModal, selectedCard = {}, setSelectedCard = () => {} }) {
    const [cardData, setCardData] = useState(selectedCard);
    const [showMonthDropdown, setShowMonthDropdown] = useState(false);
    const [showYearDropdown, setShowYearDropdown] = useState(false);
    const [monthValue, setMonthValue] = useState(selectedCard?.cardMonth ? selectedCard.cardMonth : 'MM');
    const [yearValue, setYearValue] = useState(selectedCard?.cardYear ? selectedCard.cardYear : 'YY');
    const [monthError, setMonthError] = useState(false);
    const [yearError, setYearError] = useState(false);
    console.log(cardData);

    const monthOptions = Array.from({ length: 12 }, (x, i) => {
        const month = i + 1;
        return month <= 9 ? '0' + month : month;
    });

    const currentYear = new Date().getFullYear();
    const yearOptions = Array.from({ length: 9 }, (_x, i) => currentYear + i);

    const numberRegExp =
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

    const formSchema = yup.object().shape({
        cardNumber: yup
            .string()
            .required('Card number is required.')
            .length(16, 'Card number should be 16 digits')
            .matches(numberRegExp, 'Card number is not valid.')
            .test('Card number without spaces.', (value) => !/\s+/.test(value)),
        cardHolder: yup.string().required('Card holder is required.').max(19, 'Please enter at most 19 characters.'),
        bankName: yup.string().required('Bank name is required.').max(18, 'Please enter at most 18 characters.'),
    });

    const {
        register,
        reset,
        formState: { errors, isSubmitting },
        handleSubmit,
    } = useForm({
        mode: 'onBlur',
        resolver: yupResolver(formSchema),
    });

    const handleInputChange = useCallback(
        (e) => {
            const keyName = e.target.name;
            const value = e.target.value.trim();
            setCardData({
                ...cardData,
                [keyName]: value || '',
            });
        },
        [cardData],
    );

    const handleToggleMonthDropdown = () => {
        setShowMonthDropdown((prevState) => !prevState);
    };

    const handleToggleYearDropdown = () => {
        setShowYearDropdown((prevState) => !prevState);
    };

    const handleSelectOption = (option) => {
        if (option.toString().length === 2) {
            setMonthValue(option.toString());
            setMonthError(false);
            setCardData({ ...cardData, cardMonth: option.toString() });
        }

        if (option.toString().length === 4) {
            setYearValue(option.toString());
            setYearError(false);
            setCardData({ ...cardData, cardYear: option.toString() });
        }
    };

    const handleCloseModal = () => {
        reset();
        setMonthValue('MM');
        setYearValue('YY');
        setCardData({});
        setSelectedCard({});
        setShowCardFormModal(false);
    };

    const handleOnClickRemove = () => {
        console.log('remove');
    };

    const onSubmit = async (data) => {
        if (monthValue === 'MM') return setMonthError(true);
        if (yearValue === 'YY') return setYearError(true);

        const newData = { ...cardData, ...data, cardMonth: monthValue, cardYear: yearValue };
        console.log(newData);
        handleCloseModal();
    };

    if (show) {
        return (
            <Modal>
                <AnimatePresence>
                    <motion.div
                        initial={{ x: '-50%', y: '-50%', scale: 0 }}
                        animate={{ scale: 1 }}
                        className={cx('wrapper')}
                    >
                        <header className={cx('header')}>
                            <Card data={cardData} />
                        </header>
                        <form className={cx('form')} onSubmit={handleSubmit(onSubmit)}>
                            <div className={cx('card-number')}>
                                <div className={cx('card-number-field', errors.cardNumber && 'error-ipt')}>
                                    <label className={cx('label')}>Card Number</label>
                                    <input
                                        type="text"
                                        className={cx('input')}
                                        defaultValue={cardData?.cardNumber}
                                        placeholder="Enter card number..."
                                        {...register('cardNumber', { onChange: (e) => handleInputChange(e) })}
                                    />
                                </div>
                                {errors.cardNumber?.message && (
                                    <span className={cx('error')}>
                                        <BsExclamationTriangle className={cx('icon-warning')} />
                                        {errors.cardNumber?.message}
                                    </span>
                                )}
                            </div>

                            <div className={cx('card-holder-name')}>
                                <div className={cx('card-holder-name-field', errors.cardHolder && 'error-ipt')}>
                                    <label className={cx('label')}>Card Holder Name</label>
                                    <input
                                        type="text"
                                        className={cx('input')}
                                        defaultValue={cardData?.cardHolder}
                                        placeholder="Enter card holder name..."
                                        {...register('cardHolder', { onChange: (e) => handleInputChange(e) })}
                                    />
                                </div>
                                {errors.cardHolder?.message && (
                                    <span className={cx('error')}>
                                        <BsExclamationTriangle className={cx('icon-warning')} />
                                        {errors.cardHolder?.message}
                                    </span>
                                )}
                            </div>

                            <div className={cx('expiration-and-bank')}>
                                <span className={cx('expiration-label')}>Expiration Date</span>
                                <div className={cx('container')}>
                                    <div className={cx('month-and-year')}>
                                        <div className={cx('month')}>
                                            <div className={cx('month-field', monthError && 'error-ipt')}>
                                                <span
                                                    className={cx(
                                                        'month-option',
                                                        showMonthDropdown && 'toggle-dropdown',
                                                    )}
                                                    onClick={handleToggleMonthDropdown}
                                                >
                                                    {monthValue}
                                                    <span className={cx('icon-dropdown')}>
                                                        <BsChevronRight />
                                                    </span>
                                                </span>
                                                <Dropdown
                                                    isShowDropdown={showMonthDropdown}
                                                    setShowDropdown={setShowMonthDropdown}
                                                    options={monthOptions}
                                                    onChange={handleSelectOption}
                                                    wrapperClass={cx('wrapper-option')}
                                                />
                                            </div>
                                            {monthError && (
                                                <span className={cx('error')}>
                                                    <BsExclamationTriangle className={cx('icon-warning')} />
                                                    Please select month.
                                                </span>
                                            )}
                                        </div>
                                        <div className={cx('year')}>
                                            <div className={cx('year-field', yearError && 'error-ipt')}>
                                                <span
                                                    className={cx('year-option', showYearDropdown && 'toggle-dropdown')}
                                                    onClick={handleToggleYearDropdown}
                                                >
                                                    {yearValue}
                                                    <span className={cx('icon-dropdown')}>
                                                        <BsChevronRight />
                                                    </span>
                                                </span>
                                                <Dropdown
                                                    isShowDropdown={showYearDropdown}
                                                    setShowDropdown={setShowYearDropdown}
                                                    options={yearOptions}
                                                    onChange={handleSelectOption}
                                                    wrapperClass={cx('wrapper-option')}
                                                />
                                            </div>
                                            {yearError && (
                                                <span className={cx('error')}>
                                                    <BsExclamationTriangle className={cx('icon-warning')} />
                                                    Please select year.
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <div className={cx('bank-name')}>
                                        <div className={cx('bank-name-field', errors.bankName && 'error-ipt')}>
                                            <label className={cx('label')}>Bank Name</label>
                                            <input
                                                type="text"
                                                className={cx('input')}
                                                defaultValue={cardData?.bankName}
                                                placeholder="Enter bank name..."
                                                {...register('bankName', { onChange: (e) => handleInputChange(e) })}
                                            />
                                        </div>
                                        {errors.bankName?.message && (
                                            <span className={cx('error')}>
                                                <BsExclamationTriangle className={cx('icon-warning')} />
                                                {errors.bankName?.message}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className={cx('action-btn')}>
                                <button type="button" className={cx('cancel-btn')} onClick={handleCloseModal}>
                                    Cancel
                                </button>
                                {selectedCard?.id && (
                                    <button type="button" className={cx('remove-btn')} onClick={handleOnClickRemove}>
                                        Remove
                                    </button>
                                )}
                                <button type="submit" className={cx('submit-btn')}>
                                    Confirm
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </AnimatePresence>
            </Modal>
        );
    }
}

export default CardForm;
