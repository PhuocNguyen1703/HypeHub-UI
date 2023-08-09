import classNames from 'classnames/bind';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

import { AnimatePresence } from 'framer-motion';
import { BsFillCaretDownFill, BsXLg } from 'react-icons/bs';
import Modal from '../Modal';
import styles from './ConfirmSupportTicket.module.scss';

const cx = classNames.bind(styles);

function ConfirmSupportTicket({ show, setShowConfirmTicketModal, ticket }) {
    const [isOpenOption, setIsOpenOption] = useState(false);
    const optionRef = useRef(null);

    const handleCloseModal = () => {
        setShowConfirmTicketModal(false);
    };

    useEffect(() => {
        document.addEventListener('click', hideOnClickOutside, true);
    }, []);

    // Hide on outside click
    const hideOnClickOutside = (e) => {
        // if (optionRef.current && !optionRef.current.contains(e.target)) {
        //     setIsOpenOption(false);
        // }
        setIsOpenOption(false);
    };

    const handleToggleOption = () => {
        setIsOpenOption(true);
    };

    if (show) {
        return (
            <AnimatePresence>
                <Modal>
                    <motion.div
                        initial={{ x: '-50%', y: '-50%', scale: 0 }}
                        animate={{ scale: 1 }}
                        className={cx('wrapper')}
                    >
                        <header className={cx('header')}>
                            <span className={cx('title')}>Support Ticket</span>
                            <button className={cx('close-btn')} onClick={handleCloseModal}>
                                <BsXLg />
                            </button>
                        </header>
                        <div className={cx('container')}>
                            <form className={cx('form')}>
                                <div className={cx('form-container')}>
                                    <div className={cx('form-left')}>
                                        <span className={cx('ticket-id')}>{ticket.id}</span>
                                        <label className={cx('label')}>
                                            Subject :<span className={cx('subject')}>{ticket.subject}</span>
                                        </label>
                                        <div className={cx('image')}>
                                            <span className={cx('text')}>No image</span>
                                        </div>
                                    </div>
                                    <div className={cx('form-right')}>
                                        <div className={cx('form-right-header')}>
                                            Content :
                                            <span className={cx('date')}>
                                                {ticket.date}
                                                <span className={cx('time')}>{ticket.time}</span>
                                            </span>
                                        </div>
                                        <textarea
                                            className={cx('ticket-content')}
                                            defaultValue={ticket.content}
                                            readOnly
                                        />
                                    </div>
                                </div>
                                <div className={cx('comment')}>
                                    <label className={cx('label')}>
                                        Comment :
                                        <textarea className={cx('comment-text')} defaultValue={ticket?.comment} />
                                    </label>
                                </div>
                                <div className={cx('status')}>
                                    <span className={cx('selected-type')} onClick={handleToggleOption}>
                                        {ticket.status}
                                        <span className={cx('dropdown-icon')}>
                                            <BsFillCaretDownFill />
                                        </span>
                                    </span>
                                    {isOpenOption && (
                                        <ul ref={optionRef} className={cx('option')}>
                                            <li className={cx('select-option')}>In process</li>
                                            <li className={cx('select-option')}>Done</li>
                                            <li className={cx('select-option')}>Cancel</li>
                                        </ul>
                                    )}
                                </div>
                                <div className={cx('action-btn')}>
                                    <button className={cx('cancel-btn')}>Cancel</button>
                                    <button className={cx('save-btn')} type="submit">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </Modal>
            </AnimatePresence>
        );
    }
}

export default ConfirmSupportTicket;
