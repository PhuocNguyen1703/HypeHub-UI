import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import { motion } from 'framer-motion';

import styles from './CreateTask.module.scss';
import Tippy from '@tippyjs/react';
import { BsJustifyLeft, BsTags, BsXLg } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { setCreateTaskModalIsOpen } from '~/redux/Slice/modalSlice';
import { AnimatePresence } from 'framer-motion';
import DatePicker from '~/components/DatePicker';
import { FaChevronDown, FaTimes } from 'react-icons/fa';

const cx = classNames.bind(styles);

function CreateTask() {
    const [isOpenOption, setIsOpenOption] = useState(false);
    const [tagOptions, setTagOptions] = useState(['Team', 'Low', 'Medium', 'Hight']);
    const [tags, setTags] = useState([]);
    const dispatch = useDispatch();
    const optionRef = useRef(null);

    useEffect(() => {
        document.addEventListener('click', hideOnClickOutside, true);
    }, []);

    // Hide on outside click
    const hideOnClickOutside = (e) => {
        if (optionRef.current && !optionRef.current.contains(e.target)) {
            setIsOpenOption(false);
        }
    };

    const handleCloseModal = () => {
        dispatch(setCreateTaskModalIsOpen(false));
    };

    const handleShowOption = () => {
        setIsOpenOption((prevState) => !prevState);
    };

    const getBackgroundColor = (tag) => {
        if (tag === 'Team') return '#349eff';
        if (tag === 'Low') return 'forestgreen';
        if (tag === 'Medium') return 'orange';
        return 'red';
    };

    const handleRemoveTag = (tag, idx) => {
        setTags(tags.filter((tag, i) => i !== idx));
        setTagOptions([...tagOptions, tag]);
    };

    const handleSelectTag = (option) => {
        setTags([...tags, option]);
        setTagOptions(tagOptions.filter((opt) => opt !== option));
    };

    const handleCancel = () => {
        dispatch(setCreateTaskModalIsOpen(false));
    };

    return (
        <AnimatePresence>
            <motion.div initial={{ x: '-50%', y: '-50%', scale: 0 }} animate={{ scale: 1 }} className={cx('wrapper')}>
                <header className={cx('header')}>
                    <div>
                        <Tippy delay={[0, 50]} interactive content="Close">
                            <button className={cx('close-btn')} onClick={handleCloseModal}>
                                <BsXLg />
                            </button>
                        </Tippy>
                    </div>
                </header>
                <div className={cx('container')}>
                    <div className={cx('title')}>
                        <input className={cx('title-ipt')} type="text" name="title" required autoFocus />
                        <span className={cx('underline-title-ipt')}></span>
                        <label className={cx('label')}>Title</label>
                    </div>
                    <div className={cx('calendar')}>
                        <DatePicker />
                    </div>
                    <div className={cx('desc')}>
                        <span className={cx('icon')}>
                            <BsJustifyLeft />
                        </span>
                        <div className={cx('desc-ipt')}>
                            <textarea className={cx('textarea')} placeholder="Add description"></textarea>
                            <span className={cx('underline-desc')}></span>
                        </div>
                    </div>
                    <div className={cx('tag')}>
                        <span className={cx('icon')}>
                            <BsTags />
                        </span>
                        <div ref={optionRef} className={cx('tag-container')} onClick={handleShowOption}>
                            {tags.map((tag, idx) => (
                                <div
                                    key={idx}
                                    className={cx('tag-selected')}
                                    style={{ backgroundColor: getBackgroundColor(tag) }}
                                >
                                    <p>{tag}</p>
                                    <span className={cx('close-icon')} onClick={() => handleRemoveTag(tag, idx)}>
                                        <FaTimes />
                                    </span>
                                </div>
                            ))}
                            {tags.length < 1 && (
                                <input className={cx('tag-input')} placeholder="Select tag..." readOnly />
                            )}
                            <span className={cx('down-icon')}>
                                <FaChevronDown />
                            </span>
                            {isOpenOption && (
                                <div className={cx('tag-dropdown')}>
                                    {tagOptions.map((option, idx) => (
                                        <span key={idx} onClick={() => handleSelectTag(option)}>
                                            {option}
                                        </span>
                                    ))}
                                    {tags.length >= 4 && <span className={cx('no-options')}>No options</span>}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <footer className={cx('action-btn')}>
                    <button className={cx('cancel-btn')} type="button" onClick={handleCancel}>
                        Cancel
                    </button>
                    <button className={cx('save-btn')} type="submit">
                        Save
                    </button>
                </footer>
            </motion.div>
        </AnimatePresence>
    );
}

export default CreateTask;
