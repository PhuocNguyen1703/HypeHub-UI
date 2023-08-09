import classNames from 'classnames/bind';
import { useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { BsCameraFill, BsChevronRight, BsXLg } from 'react-icons/bs';
import CircleHeader from '~/components/CircleHeader/CircleHeader';
import Modal from '~/components/Modal/Modal';
import styles from './CreateRoomModal.module.scss';

const cx = classNames.bind(styles);

function CreateRoomModal({ isOpen, isHide }) {
    const [isCreateRoomForm, setIsCreateRoomForm] = useState(true);

    const handleCloseModal = () => {
        isHide(!isOpen);
    };

    const handleOnNextForm = () => {
        setIsCreateRoomForm(false);
    };

    const handleOnBack = () => {
        setIsCreateRoomForm(true);
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
                        {isCreateRoomForm ? (
                            <form className={cx('create-room-form')}>
                                <span className={cx('title')}>Create a room</span>
                                <span className={cx('desc')}>
                                    Your room is where you and your friends hang out. Make yours and start talking.
                                </span>
                                <button className={cx('private-btn')} onClick={handleOnNextForm}>
                                    <div className={cx('img')}></div>
                                    Private Room
                                    <span className={cx('icon-next')}>
                                        <BsChevronRight />
                                    </span>
                                </button>
                                <button className={cx('public-btn')} onClick={handleOnNextForm}>
                                    <div className={cx('img')}></div>
                                    Public Room
                                    <span className={cx('icon-next')}>
                                        <BsChevronRight />
                                    </span>
                                </button>
                            </form>
                        ) : (
                            <form className={cx('customize-room-form')}>
                                <span className={cx('title')}>Customize your room</span>
                                <span className={cx('desc')}>
                                    Give your new room a personality with a name and an icon. You can always change it
                                    later.
                                </span>
                                <label htmlFor="choose-img" className={cx('choose-img-btn')}>
                                    <span className={cx('icon-camera')}>
                                        <BsCameraFill />
                                    </span>
                                    Upload
                                    <input id="choose-img" type="file" hidden />
                                </label>
                                <label className={cx('room-name')}>
                                    Room name
                                    <input className={cx('input')} defaultValue="User's room" />
                                </label>
                                <div className={cx('action-btn')}>
                                    <button type="button" className={cx('back-btn')} onClick={handleOnBack}>
                                        Back
                                    </button>
                                    <button type="submit" className={cx('create-btn')}>
                                        Create
                                    </button>
                                </div>
                            </form>
                        )}
                    </motion.div>
                </Modal>
            </AnimatePresence>
        );
    }
}

export default CreateRoomModal;
