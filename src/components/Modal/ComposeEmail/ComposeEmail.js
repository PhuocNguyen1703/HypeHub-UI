import React, { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './ComposeEmail.module.scss';
import { BsArrowsAngleContract, BsDash, BsTrash, BsX } from 'react-icons/bs';
import { IoResizeSharp } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { setComposeEmailModalIsOpen } from '~/redux/Slice/modalSlice';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);

function ComposeEmail() {
    const currentUser = useSelector((state) => state.auth.login);
    const [isMinimize, setMinimize] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [content, setContent] = useState();
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm({
        defaultValues: {
            senderId: currentUser._id,
            receiverId: '',
            subject: '',
            content: content,
        },
    });

    const handleMinimize = () => {
        setMinimize((prevState) => !prevState);
    };

    const handleFullscreen = () => {
        setMinimize(false);
        setIsFullscreen((prevState) => !prevState);
    };

    const handleClose = () => {
        dispatch(setComposeEmailModalIsOpen(false));
    };

    const getFullscreenClass = () => {
        if (isFullscreen) {
            return 'fullscreen-compose-modal';
        } else {
            return '';
        }
    };

    const getMinimizeClass = () => {
        if (isMinimize) {
            return 'minimize-compose-modal';
        } else {
            return '';
        }
    };

    const onEditorStateChange = (editorState) => {
        setContent(editorState);
    };

    const onSubmit = (data) => {
        
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={cx('wrapper', getFullscreenClass(), getMinimizeClass())}
            id="compose-email-modal"
        >
            <header className={cx('header')}>
                <span className={cx('title')} onClick={handleMinimize}>
                    New Message
                </span>
                <div className={cx('action-btn')}>
                    <button className={cx('minimize-btn')} onClick={handleMinimize}>
                        <BsDash />
                    </button>
                    <button className={cx('fullscreen-btn')} onClick={handleFullscreen}>
                        {isFullscreen ? <BsArrowsAngleContract /> : <IoResizeSharp />}
                    </button>
                    <button className={cx('close-btn')} onClick={handleClose}>
                        <BsX />
                    </button>
                </div>
            </header>
            <form className={cx('container')} onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <div className={cx('input-group')}>
                        <label className={cx('to-ipt')}>
                            To :
                            <input type="text" name="receiverId" {...register('receiverId')} />
                        </label>
                        <div className={cx('input-btn')}>
                            <button className={cx('cc-btn')}>Cc</button>
                            <button className={cx('bcc-btn')}>Bcc</button>
                        </div>
                    </div>
                    <input className={cx('subject')} placeholder="Subject" name="subject" {...register('subject')} />
                </div>
                <div className={cx('content')}>
                    <ReactQuill onChange={onEditorStateChange} />
                </div>
                <div className={cx('footer')}>
                    <div>
                        <button type="submit" className={cx('send-btn')}>
                            Send
                        </button>
                    </div>
                    <button className={cx('delete-btn')}>
                        <BsTrash />
                    </button>
                </div>
            </form>
        </motion.div>
    );
}

export default ComposeEmail;
