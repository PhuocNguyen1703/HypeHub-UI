import React from 'react';
import classNames from 'classnames/bind';
import { AnimatePresence, motion } from 'framer-motion';

import styles from './AddFriendModal.module.scss';
import { BsXLg } from 'react-icons/bs';
import CircleHeader from '~/components/CircleHeader/CircleHeader';
import Modal from '~/components/Modal/Modal';

const cx = classNames.bind(styles);

function AddFriendModal({ isOpen, isHide }) {
    const handleCloseModal = () => {
        isHide(!isOpen);
    };

    if (isOpen) {
        return (
            <AnimatePresence>
                <Modal>
                    <motion.div
                        initial={{ x: '-50%', y: '-50%', scale: 0 }}
                        animate={{ scale: 1 }}
                        className={cx('wrapper')}
                    >
                        <header className={cx('header')}>
                            <CircleHeader wrapperClassName={cx('wrapperClassName')} />
                            <button className={cx('close-btn')} onClick={handleCloseModal}>
                                <BsXLg />
                            </button>
                        </header>
                        <form className={cx('form')}>
                            <label className={cx('label')}>Add Friend</label>
                            <span className={cx('desc')}>You can add friends with their email.</span>
                            <div className={cx('input-group')}>
                                <input
                                    type="text"
                                    className={cx('input')}
                                    placeholder="You can add friends with their email."
                                />
                                <button type="submit" className={cx('submit-btn')}>
                                    Send Request
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </Modal>
            </AnimatePresence>
        );
    }
}

export default AddFriendModal;
