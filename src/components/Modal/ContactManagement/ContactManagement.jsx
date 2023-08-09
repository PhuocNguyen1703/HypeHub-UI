import classNames from 'classnames/bind';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

import { BsXLg } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import Confirm from '~/components/Confirm/Confirm';
import Contact from '~/components/Contact/Contact';
import Directory from '~/components/Directory/Directory';
import FriendRequest from '~/components/FriendRequest/FriendRequest';
import Account from '~/components/Search/Account/Account';
import Modal from '../Modal';
import styles from './ContactManagement.module.scss';

const cx = classNames.bind(styles);

function ContactManagement({ show, setShowContactModal }) {
    const [isSearchContact, setIsSearchContact] = useState(true);
    const [isDirectory, setIsDirectory] = useState(false);
    const [isConfirm, setIsConfirm] = useState(false);
    const [isRequest, setIsRequest] = useState(false);
    const dispatch = useDispatch();

    const handleCloseModal = () => {
        // dispatch(setContactManagementModalIsOpen(false));
        setShowContactModal(false);
    };

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
                                    <span
                                        className={cx('directory', isDirectory && 'active')}
                                        onClick={handleOnDirectory}
                                    >
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
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0, transition: { duration: 0.15 } }}
                                className={cx('content')}
                            >
                                {isSearchContact && <Contact />}
                                {isDirectory && <Directory />}
                                {isRequest && <FriendRequest />}
                                {isConfirm && <Confirm />}
                            </motion.div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </Modal>
        );
    }
}

export default ContactManagement;
