import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { motion } from 'framer-motion';

import styles from './EmailInfo.module.scss';
import { useSelector } from 'react-redux';
import { AnimatePresence } from 'framer-motion';
import Tippy from '@tippyjs/react';
import {
    BsArrowBarLeft,
    BsArrowBarRight,
    BsFillCaretDownFill,
    BsFillShieldLockFill,
    BsFillStarFill,
    BsPatchExclamation,
    BsPrinter,
    BsTrash,
    BsXLg,
} from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { setSelectedItem } from '~/redux/Slice/emailSlice';
import { setEmailInfoModalIsOpen } from '~/redux/Slice/modalSlice';
import Image from '~/components/Image';
import Modal from '../Modal';

const cx = classNames.bind(styles);

function EmailInfo({ show, setShowEmailInfoModal }) {
    const { selectedItem } = useSelector((state) => state.email);
    const dispatch = useDispatch();

    const handleCloseModal = () => {
        setShowEmailInfoModal(false);
        dispatch(setSelectedItem(null));
        // dispatch(setEmailInfoModalIsOpen(false));
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
                            <div className={cx('action-btn')}>
                                <span className={cx('createdAt')}>{selectedItem.createdAt}</span>
                                <span className={cx('delete-btn')}>
                                    <BsTrash />
                                </span>
                                <span className={cx('print-btn')}>
                                    <BsPrinter />
                                </span>
                                <Tippy delay={[0, 50]} interactive content="Close">
                                    <button className={cx('close-btn')} onClick={handleCloseModal}>
                                        <BsXLg />
                                    </button>
                                </Tippy>
                            </div>
                        </header>
                        <div className={cx('container')}>
                            <div className={cx('container-header')}>
                                <div className={cx('sender')}>
                                    <Image
                                        src="https://images.unsplash.com/photo-1626586066636-a1523dd2141b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzB8fGF2YXRhciUyMGF2ZW50ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                                        alt="avatar"
                                        className={cx('avatar')}
                                    />
                                    <div className={cx('info')}>
                                        <p className={cx('sender-info')}>
                                            <strong>{selectedItem.sender}</strong> &#60;{selectedItem.email}&#62;
                                        </p>
                                        <div className={cx('info-wrapper')}>
                                            <span className={cx('to-me')}>
                                                to me <BsFillCaretDownFill />
                                            </span>
                                            <div className={cx('email-desc')}>
                                                <div className={cx('label')}>
                                                    <span>from:</span>
                                                    <span>to:</span>
                                                    <span>date:</span>
                                                    <span>security:</span>
                                                </div>
                                                <div className={cx('label-info')}>
                                                    <span>
                                                        <p className={cx('sender-info')}>
                                                            <strong>{selectedItem.sender}</strong> &#60;
                                                            {selectedItem.email}
                                                            &#62;
                                                        </p>
                                                    </span>
                                                    <span>{selectedItem.to}</span>
                                                    <span>{selectedItem.createdAt}</span>
                                                    <span>
                                                        <BsFillShieldLockFill /> Minato Corporation
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('action-group')}>
                                    {selectedItem.status.star && (
                                        <span className={cx('star-icon')}>
                                            <BsFillStarFill />
                                        </span>
                                    )}
                                    {selectedItem.status.spam && (
                                        <span className={cx('spam-icon')}>
                                            <BsPatchExclamation />
                                        </span>
                                    )}
                                    <button className={cx('reply-btn')}>
                                        <BsArrowBarLeft />
                                        Reply
                                    </button>
                                    <button className={cx('forward-btn')}>
                                        Forward
                                        <BsArrowBarRight />
                                    </button>
                                </div>
                            </div>
                            <p className={cx('subject')}>{selectedItem.subject}</p>
                            <p className={cx('content')}>{selectedItem.content}</p>
                        </div>
                    </motion.div>
                </Modal>
            </AnimatePresence>
        );
    }
}

export default EmailInfo;
