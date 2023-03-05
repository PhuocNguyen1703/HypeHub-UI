import React from 'react';
import classNames from 'classnames/bind';
import { motion } from 'framer-motion';

import styles from './AddChannelModal.module.scss';
import { AnimatePresence } from 'framer-motion';
import { BsXLg } from 'react-icons/bs';
import Modal from '../Modal';

const cx = classNames.bind(styles);

function AddChannelModal({ show, setShowAddChannelModal }) {
    const handleCloseModal = () => {
        setShowAddChannelModal(false);
    };

    const handleCancel = () => {
        handleCloseModal(false);
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
                            <span className={cx('title')}>Add new channel</span>
                            <span className={cx('close-btn')} onClick={handleCloseModal}>
                                <BsXLg />
                            </span>
                        </header>
                        <form className={cx('form')}>
                            <div className={cx('input')}>
                                <span>Title:</span>
                                <input className={cx('ipt-title')} type="text" placeholder="Enter channel title" />
                            </div>
                            <div className={cx('input')}>
                                <span>Description:</span>
                                <textarea className={cx('ipt-description')} placeholder="Enter description" />
                            </div>
                            <footer className={cx('action-btn')}>
                                <button type="button" className={cx('cancel-btn')} onClick={handleCancel}>
                                    Cancel
                                </button>
                                <button type="submit" className={cx('save-btn')}>
                                    Save
                                </button>
                            </footer>
                        </form>
                    </motion.div>
                </AnimatePresence>
            </Modal>
        );
    }
}

export default AddChannelModal;
