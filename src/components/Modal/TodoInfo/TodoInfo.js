import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { AnimatePresence, motion } from 'framer-motion';

import styles from './TodoInfo.module.scss';
import { BsTrash, BsXLg } from 'react-icons/bs';
import Tippy from '@tippyjs/react';
import { useDispatch } from 'react-redux';
import { setTodoInfoModalIsOpen } from '~/redux/Slice/modalSlice';
import { useSelector } from 'react-redux';
import { setSelectedTodoItem } from '~/redux/Slice/todoSlice';

const cx = classNames.bind(styles);

function TodoInfo() {
    const { selectedTodoItem } = useSelector((state) => state.todo);
    const [isCompleted, setIsCompleted] = useState(selectedTodoItem.completed);
    const dispatch = useDispatch();

    const getBackgroundColor = (status) => {
        if (status === 'team') return '#349eff';
        if (status === 'low') return 'forestgreen';
        if (status === 'medium') return 'orange';
        return 'red';
    };

    const handleCloseModal = () => {
        dispatch(setSelectedTodoItem(null));
        dispatch(setTodoInfoModalIsOpen(false));
    };

    const handleCompleted = () => {
        setIsCompleted((prevState) => !prevState);
    };

    const getStyleClass = () => {
        if (isCompleted) return 'completed';
        return 'uncompleted';
    };

    return (
        <AnimatePresence>
            <motion.div initial={{ x: '-50%', y: '-50%', scale: 0 }} animate={{ scale: 1 }} className={cx('wrapper')}>
                <header className={cx('header')}>
                    <div className={cx('header-left')}>
                        {selectedTodoItem.status?.map((status, idx) => (
                            <span
                                key={idx}
                                style={{ backgroundColor: getBackgroundColor(status) }}
                                className={cx('status')}
                            >
                                {status.charAt(0).toUpperCase() + status.slice(1)}
                            </span>
                        ))}
                    </div>
                    <div className={cx('action-btn')}>
                        <span className={cx('createdAt')}>{selectedTodoItem.createdAt}</span>
                        <span className={cx('delete-btn')}>
                            <BsTrash />
                        </span>
                        <Tippy delay={[0, 50]} interactive content="Close">
                            <button className={cx('close-btn')} onClick={handleCloseModal}>
                                <BsXLg />
                            </button>
                        </Tippy>
                    </div>
                </header>
                <div className={cx('container')}>
                    <p className={cx('title')}>{selectedTodoItem.title}</p>
                    <p className={cx('content')}>{selectedTodoItem.content}</p>
                </div>
                <div className={cx('footer')}>
                    <button className={cx('mark-btn', getStyleClass())} onClick={handleCompleted}>
                        {isCompleted ? 'Mark completed' : 'Mark uncompleted'}
                    </button>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}

export default TodoInfo;
