import classNames from 'classnames/bind';
import { useState } from 'react';

import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { BsArrowsAngleContract, BsDash, BsTrash, BsX } from 'react-icons/bs';
import { IoResizeSharp } from 'react-icons/io5';
import { RiLoader4Fill } from 'react-icons/ri';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useDispatch, useSelector } from 'react-redux';
import { createEmail } from '~/services/emailApi';
import Modal from '../Modal';
import styles from './ComposeEmail.module.scss';

const cx = classNames.bind(styles);

function ComposeEmail({ show, setShowComposeEmailModal }) {
    const { _id, email } = useSelector((state) => state.auth.login.currentUser);
    const [isMinimize, setMinimize] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const dispatch = useDispatch();

    const {
        register,
        formState: { errors, isSubmitting },
        handleSubmit,
        setValue,
        reset,
    } = useForm({});

    const handleMinimize = () => {
        setMinimize((prevState) => !prevState);
    };

    const handleFullscreen = () => {
        setMinimize(false);
        setIsFullscreen((prevState) => !prevState);
    };

    const handleClose = () => {
        reset();
        setMinimize(false);
        setIsFullscreen(false);
        setShowComposeEmailModal(false);
    };

    const getFullscreenClass = () => {
        if (isFullscreen) {
            return 'fullscreen-compose-modal';
        }
    };

    const getMinimizeClass = () => {
        if (isMinimize) {
            return 'minimize-compose-modal';
        }
    };

    const onEditorStateChange = (editorState) => {
        setValue('content', editorState);
    };

    // const editorContent = watch('content');

    const onSubmit = async (data) => {
        const formData = { ...data, sender: email };
        await createEmail(formData);
        console.log(formData);
        handleClose();
    };

    if (show) {
        return (
            <Modal>
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
                                    <input type="text" name="receiver" {...register('receiver')} />
                                </label>
                                <div className={cx('input-btn')}>
                                    <button className={cx('cc-btn')}>Cc</button>
                                    <button className={cx('bcc-btn')}>Bcc</button>
                                </div>
                            </div>
                            <input
                                className={cx('subject')}
                                placeholder="Subject"
                                name="subject"
                                {...register('subject')}
                            />
                        </div>
                        <div className={cx('content')}>
                            <ReactQuill onChange={onEditorStateChange} />
                        </div>
                        <div className={cx('footer')}>
                            <button disabled={isSubmitting} type="submit" className={cx('send-btn')}>
                                {isSubmitting ? <RiLoader4Fill className={cx('icon-loading')} /> : 'Send email'}
                            </button>
                            <button disabled={isSubmitting} className={cx('delete-btn')}>
                                <BsTrash />
                            </button>
                        </div>
                    </form>
                </motion.div>
            </Modal>
        );
    }
}

export default ComposeEmail;
