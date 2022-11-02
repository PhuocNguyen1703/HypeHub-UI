import React from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames/bind';
import { AnimatePresence, motion } from 'framer-motion';

import styles from './CreateKanbanItem.module.scss';
import { BsXLg } from 'react-icons/bs';
import { setCreateKanbanItemModalIsOpen } from '~/redux/Slice/modalSlice';

const cx = classNames.bind(styles);

function CreateKanbanItem() {
    const { createKanbanItemModalIsOpen } = useSelector((state) => state.modal);

    const handleCloseModal = () => {
        setCreateKanbanItemModalIsOpen(false);
    };

    return (
        <AnimatePresence>
            <motion.div animate={{ width: createKanbanItemModalIsOpen ? '400px' : '0' }} className={cx('wrapper')}>
                <header className={cx('header')}>
                    <span className={cx('heading')}>
                        Theme Customizer
                        <button className={cx('close-btn')} onClick={handleCloseModal}>
                            <BsXLg />
                        </button>
                    </span>
                    <p className={cx('desc')}>Add item to the board</p>
                </header>
            </motion.div>
        </AnimatePresence>
    );
}

export default CreateKanbanItem;
