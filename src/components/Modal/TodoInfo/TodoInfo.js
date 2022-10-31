import React from 'react';
import classNames from 'classnames/bind';
import { AnimatePresence, motion } from 'framer-motion';

import styles from './TodoInfo.module.scss';
import { BsTrash, BsXLg } from 'react-icons/bs';
import Tippy from '@tippyjs/react';
import { useDispatch } from 'react-redux';
import { setTodoInfoModalIsOpen } from '~/redux/Slice/modalSlice';

const cx = classNames.bind(styles);

function TodoInfo() {
    const dispatch = useDispatch();

    const handleCloseModal = () => {
        // dispatch(setSelectedItem(null));
        dispatch(setTodoInfoModalIsOpen(false));
    };

    return (
        <AnimatePresence>
            <motion.div initial={{ x: '-50%', y: '-50%', scale: 0 }} animate={{ scale: 1 }} className={cx('wrapper')}>
                <header className={cx('header')}>
                    <div className={cx('header-left')}>
                        {/* {selectedItem.type?.map((type, idx) => (
                            <span
                                key={idx}
                                style={{ backgroundColor: getBackgroundColor(type) }}
                                className={cx('type')}
                            >
                                {type.charAt(0).toUpperCase() + type.slice(1)}
                            </span>
                        ))} */}
                    </div>
                    <div className={cx('action-btn')}>
                        <span className={cx('createdAt')}></span>
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
            </motion.div>
        </AnimatePresence>
    );
}

export default TodoInfo;
