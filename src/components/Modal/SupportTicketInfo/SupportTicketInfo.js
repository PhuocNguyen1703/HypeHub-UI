import React from 'react';
import classNames from 'classnames/bind';

import styles from './SupportTicketInfo.module.scss';
import Modal from '../Modal';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import { BsXLg } from 'react-icons/bs';

const cx = classNames.bind(styles);

function SupportTicketInfo({ show, setShowSupportTicketInfoModal, ticket }) {
    const handleCloseModal = () => {
        setShowSupportTicketInfoModal(false);
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
                            <div className={cx('header-left')}>
                                <span className={cx('title')}>Support Ticket</span>
                                <span className={cx('status')}>{ticket.status}</span>
                            </div>
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
                                <div className={cx('form-footer')}>
                                    <label className={cx('label')}>
                                        {ticket.comment && 'Comment :'}
                                        <p className={cx('comment')}>{ticket.comment}</p>
                                    </label>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </Modal>
            </AnimatePresence>
        );
    }
}

export default SupportTicketInfo;
