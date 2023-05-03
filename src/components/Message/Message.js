import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { AnimatePresence, motion } from 'framer-motion';

import styles from './Message.module.scss';
import Modal from '../Modal/Modal';
import { BsXLg } from 'react-icons/bs';
import Search from '../Search/Message/Message';
import Image from '../Image/Image';
import MiniChat from '../MiniChat/MiniChat';

const cx = classNames.bind(styles);

function Message({ show, setShowMessageModal }) {
    const [showMiniChatModal, setShowMiniChatModal] = useState(false);
    const [selectedMessage, setSelectedMessage] = useState({});

    const handleCloseModal = () => {
        setShowMessageModal(false);
    };

    const handleToggleMiniChat = (message) => {
        setShowMiniChatModal(true);
        setSelectedMessage(message);
        handleCloseModal();
    };

    const messageList = [
        { id: 1, avatar: '', name: 'Yuri', lastMessage: 'You are ok' },
        { id: 2, avatar: '', name: 'Yokohama', lastMessage: 'You are ok' },
        { id: 3, avatar: '', name: 'John week', lastMessage: 'You are ok' },
        {
            id: 4,
            avatar: '',
            name: 'Nguyen Quoc Phuoc',
            lastMessage: 'You are ok',
        },
        { id: 5, avatar: '', name: 'Victoria', lastMessage: 'You are ok' },
        { id: 6, avatar: '', name: 'Yama', lastMessage: 'You are ok' },
        { id: 7, avatar: '', name: 'Yamaha', lastMessage: 'You are ok' },
        { id: 8, avatar: '', name: 'Honda', lastMessage: 'You are ok' },
        { id: 9, avatar: '', name: 'Brian', lastMessage: 'You are ok' },
        { id: 10, avatar: '', name: 'Adam Store', lastMessage: 'You are ok' },
        { id: 11, avatar: '', name: 'Justin', lastMessage: 'You are ok' },
        { id: 12, avatar: '', name: 'Hell', lastMessage: 'You are ok' },
        { id: 13, avatar: '', name: 'Mount', lastMessage: 'You are ok' },
    ];

    if (show) {
        return (
            <AnimatePresence>
                <Modal>
                    <motion.div animate={{ width: show ? '360px' : '0' }} className={cx('wrapper')}>
                        <header className={cx('header')}>
                            <div className={cx('title')}>Messages</div>
                            <button className={cx('close-btn')} onClick={handleCloseModal}>
                                <BsXLg />
                            </button>
                        </header>
                        <div className={cx('search')}>
                            <Search />
                        </div>
                        <div className={cx('message-list')}>
                            {messageList.map((message, idx) => (
                                <div
                                    className={cx('message-item')}
                                    key={idx}
                                    onClick={() => handleToggleMiniChat(message)}
                                >
                                    <Image className={cx('avatar')} src={message.avatar} alt="avatar" />
                                    <div className={cx('info')}>
                                        <span className={cx('user-name')}>{message.name}</span>
                                        <span className={cx('last-message')}>{message.lastMessage}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className={cx('footer')}>
                            <span className={cx('see-all')}>See all in Messages</span>
                        </div>
                    </motion.div>
                </Modal>
            </AnimatePresence>
        );
    }

    if (showMiniChatModal) return <MiniChat setShowMiniChatModal={setShowMiniChatModal} message={selectedMessage} />;
}

export default Message;
