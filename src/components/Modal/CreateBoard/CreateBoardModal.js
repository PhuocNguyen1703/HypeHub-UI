import React from 'react';
import classNames from 'classnames/bind';

import styles from './CreateBoardModal.module.scss';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import Modal from '../Modal';
import { BsXLg } from 'react-icons/bs';
import Tippy from '@tippyjs/react';
import { MODAL_ACTION_CLOSE } from '~/utils/constants';
import { useForm } from 'react-hook-form';

const cx = classNames.bind(styles);

function CreateBoardModal({ show, onAction }) {
    const { register, handleSubmit, reset } = useForm();

    const handleCloseModal = () => {
        reset();
        onAction(MODAL_ACTION_CLOSE);
    };

    const handleCancel = () => {
        reset();
        onAction(MODAL_ACTION_CLOSE);
    };

    const onSubmit = (data) => {};

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
                            <div>
                                <Tippy delay={[0, 50]} interactive content="Close">
                                    <button className={cx('close-btn')} onClick={handleCloseModal}>
                                        <BsXLg />
                                    </button>
                                </Tippy>
                            </div>
                        </header>
                        <form className={cx('form')} onSubmit={handleSubmit(onSubmit)}>
                            <div className={cx('title')}>
                                <input
                                    className={cx('title-ipt')}
                                    type="text"
                                    name="title"
                                    required
                                    autoFocus
                                    {...register('title')}
                                />
                                <span className={cx('underline-title-ipt')}></span>
                                <label className={cx('label')}>Title</label>
                            </div>
                            <footer className={cx('action-btn')}>
                                <button className={cx('cancel-btn')} type="button" onClick={handleCancel}>
                                    Cancel
                                </button>
                                <button className={cx('save-btn')} type="submit">
                                    Save
                                </button>
                            </footer>
                        </form>
                    </motion.div>
                </Modal>
            </AnimatePresence>
        );
    }
}

export default CreateBoardModal;
