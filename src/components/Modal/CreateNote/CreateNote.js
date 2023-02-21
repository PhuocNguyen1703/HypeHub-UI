import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import { motion } from 'framer-motion';

import styles from './CreateNote.module.scss';
import Tippy from '@tippyjs/react';
import { BsJustifyLeft, BsTags, BsXLg } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { setCreateTaskModalIsOpen } from '~/redux/Slice/modalSlice';
import { AnimatePresence } from 'framer-motion';
import DatePicker from '~/components/DatePicker';
import { FaChevronDown, FaTimes } from 'react-icons/fa';
import Modal from '../Modal';
import { useForm } from 'react-hook-form';
import { createTodo } from '~/api/todoApi';
import { useSelector } from 'react-redux';
import { RiLoader4Fill } from 'react-icons/ri';

const cx = classNames.bind(styles);

function CreateNote({ show, setShowCreateNoteModal }) {
    const { _id } = useSelector((state) => state.auth.login.currentUser);
    const [isOpenOption, setIsOpenOption] = useState(false);
    const [tagOptions, setTagOptions] = useState(['Team', 'Low', 'Medium', 'Hight']);
    const [tags, setTags] = useState([]);
    const [time, setTime] = useState();
    const dispatch = useDispatch();
    const optionRef = useRef(null);
    const {
        register,
        formState: { errors, isSubmitting },
        handleSubmit,
        reset,
    } = useForm();

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
        reset();
        setShowCreateNoteModal(false);
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

    const transformTime = (time) => {
        const timeArray = time.split(' - ');
        return timeArray;
    };

    const onSubmit = async (data) => {
        const timeData = transformTime(time);
        const formData = { ...data, userId: _id, tag: tags, startDate: timeData[0], endDate: timeData[1] };
        await createTodo(formData);
        console.log(formData);
    };

    const handleCancel = () => {
        handleCloseModal();
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
                            <span className={cx('header-title')}>Create new note</span>
                            <div>
                                <Tippy delay={[0, 50]} interactive content="Close">
                                    <button className={cx('close-btn')} onClick={handleCloseModal}>
                                        <BsXLg />
                                    </button>
                                </Tippy>
                            </div>
                        </header>
                        <form className={cx('container')} onSubmit={handleSubmit(onSubmit)}>
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
                            <div className={cx('action-btn')}>
                                <button
                                    disabled={isSubmitting}
                                    className={cx('cancel-btn')}
                                    type="button"
                                    onClick={handleCancel}
                                >
                                    Cancel
                                </button>
                                <button disabled={isSubmitting} className={cx('save-btn')} type="submit">
                                    {isSubmitting ? <RiLoader4Fill className={cx('icon-loading')} /> : 'Save'}
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </Modal>
            </AnimatePresence>
        );
    }
}

export default CreateNote;
