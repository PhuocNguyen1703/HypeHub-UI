import React, { useEffect, useState } from 'react';

import classNames from 'classnames/bind';
import styles from './TaskDetail.module.scss';
import { convertToRaw, EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import { AnimatePresence } from 'framer-motion';
import Modal from '../Modal';
import { motion } from 'framer-motion';
import { BsPerson, BsXLg } from 'react-icons/bs';
import { RiLoader4Fill } from 'react-icons/ri';
import { useForm } from 'react-hook-form';
import { HiOutlineUserGroup } from 'react-icons/hi';
import CircleHeader from '~/components/CircleHeader/CircleHeader';

const cx = classNames.bind(styles);

function TaskDetail({ show, setShowTaskDetailModal, item = {} }) {
    const {
        register,
        formState: { errors, isSubmitting },
        handleSubmit,
        reset,
    } = useForm();

    const handleCloseModal = () => {
        setShowTaskDetailModal(false);
    };

    const onSubmit = async (data) => {};

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
                            <CircleHeader />
                            <button className={cx('close-btn')} onClick={handleCloseModal}>
                                <BsXLg />
                            </button>
                        </header>
                        <form className={cx('form')} onSubmit={handleSubmit(onSubmit)}>
                            <div className={cx('title')}>
                                <input
                                    className={cx('title-ipt')}
                                    type="text"
                                    name="title"
                                    defaultValue={item.title}
                                    required
                                    autoFocus
                                    // {...register('title')}
                                />
                                <span className={cx('underline-title-ipt')}></span>
                                <label className={cx('label')}>Title</label>
                            </div>
                            <div className={cx('category')}>
                                <label className={cx('label-category')}>Category</label>
                                <div className={cx('type')}>
                                    <span className={cx('personal', item.category === 'Personal' && 'active')}>
                                        <BsPerson /> Personal
                                    </span>
                                    <span className={cx('team', item.category === 'Team' && 'active')}>
                                        <HiOutlineUserGroup /> Team
                                    </span>
                                </div>
                            </div>
                            <label className={cx('description-container')}>
                                Description
                                <textarea
                                    className={cx('description')}
                                    placeholder="Write description..."
                                    defaultValue={item.desc}
                                ></textarea>
                            </label>
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

export default TaskDetail;
