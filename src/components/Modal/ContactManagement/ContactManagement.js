import React, { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './ContactManagement.module.scss';
import { BsXLg } from 'react-icons/bs';
import Contact from '~/components/Contact';
import Account from '~/components/Search/Account';
import Directory from '~/components/Directory';

const cx = classNames.bind(styles);

function ContactManagement() {
    const [isSearchContact, setIsSearchContact] = useState(true);
    const [isDirectory, setIsDirectory] = useState(false);
    const [isConfirm, setIsConfirm] = useState(false);
    const [isRequest, setIsRequest] = useState(false);

    const handleCloseModal = () => {};

    const handleOnSearchContact = () => {
        setIsSearchContact(true);
        setIsDirectory(false);
        setIsConfirm(false);
        setIsRequest(false);
    };

    const handleOnDirectory = () => {
        setIsSearchContact(false);
        setIsDirectory(true);
        setIsConfirm(false);
        setIsRequest(false);
    };

    const handleOnConfirm = () => {
        setIsSearchContact(false);
        setIsDirectory(false);
        setIsConfirm(true);
        setIsRequest(false);
    };

    const handleOnRequest = () => {
        setIsSearchContact(false);
        setIsDirectory(false);
        setIsConfirm(false);
        setIsRequest(true);
    };

    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <span className={cx('title')}>Contact management</span>
                <button className={cx('close-btn')} onClick={handleCloseModal}>
                    <BsXLg />
                </button>
            </header>
            <div className={cx('container')}>
                <div className={cx('navbar')}>
                    <div className={cx('action-btn')}>
                        <span
                            className={cx('search-contact', isSearchContact && 'active')}
                            onClick={handleOnSearchContact}
                        >
                            Search contact
                        </span>
                        <span className={cx('directory', isDirectory && 'active')} onClick={handleOnDirectory}>
                            Directory
                        </span>
                        <span className={cx('request', isRequest && 'active')} onClick={handleOnRequest}>
                            Friend request
                        </span>
                        <span className={cx('confirm', isConfirm && 'active')} onClick={handleOnConfirm}>
                            Confirm
                        </span>
                    </div>
                    {isSearchContact && (
                        <div className={cx('search')}>
                            <Account />
                        </div>
                    )}
                </div>
                <div className={cx('content')}>
                    {isSearchContact && <Contact />}
                    {isDirectory && <Directory />}
                </div>
            </div>
        </div>
    );
}

export default ContactManagement;
