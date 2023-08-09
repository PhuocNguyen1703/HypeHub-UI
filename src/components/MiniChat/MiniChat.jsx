import classNames from 'classnames/bind';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import Lightbox from 'react-18-image-lightbox';
import { BsCardImage, BsCursor, BsDash, BsEmojiSmile, BsX } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { addMessage } from '~/services/messageApi';
import { uploadImages } from '~/services/uploadImagesApi';
import Image from '../Image/Image';
import Modal from '../Modal/Modal';
import styles from './MiniChat.module.scss';

const cx = classNames.bind(styles);

function MiniChat({ setShowMiniChatModal, message }) {
    const { themeMode } = useSelector((state) => state.theme);
    const [isMinimize, setMinimize] = useState(false);
    const [showEmojis, setShowEmojis] = useState(false);
    const [previewImg, setPreviewImg] = useState(null);
    const [isOpenLightBox, setIsOpenLightBox] = useState(false);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [uploadImg, setUploadImg] = useState();
    const scroll = useRef(null);
    const imageRef = useRef(null);
    const emojiRef = useRef(null);

    const handleMinimize = () => {
        setMinimize((prevState) => !prevState);
    };

    const handleClose = () => {
        setMinimize(false);
        setShowMiniChatModal(false);
    };

    const getMinimizeClass = () => {
        if (isMinimize) {
            return 'minimize-compose-modal';
        }
    };

    const handleUploadImg = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setUploadImg(reader.result);
        };
        reader.onerror = () => {
            console.error('something went wrong!');
        };
    };

    const handleChange = (e) => {
        e.preventDefault();
        setNewMessage(e.target.value);
    };

    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    };

    //Send message
    const handleSend = async (e) => {
        let url = '';
        if (uploadImg) {
            url = await uploadImages(uploadImg);
        }

        const message = {
            // createdAt: Date.now(),
        };
        //Send message to socket server
        // const receiverId = chat.members.find((id) => id !== currentUserId);
        // setSendMessage({ ...message, receiverId });

        //Send message to DB
        try {
            const { data } = await addMessage(message);
            setMessages([...messages, data]);
            setNewMessage('');
        } catch (error) {
            console.log(error);
        }
    };

    //Always scroll to last message
    useEffect(() => {
        scroll.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleShowEmojis = () => {
        setShowEmojis((prevState) => !prevState);
    };

    const handleClickImage = (e) => {
        setPreviewImg(e.target.src);
        setIsOpenLightBox(true);
    };

    const handleSelectEmoji = (e) => {
        let sym = e.unified.split('-');
        let codesArray = [];
        sym.forEach((el) => codesArray.push('0x' + el));
        let emoji = String.fromCodePoint(...codesArray);
        setNewMessage(newMessage + emoji);
    };

    useEffect(() => {
        document.addEventListener('click', hideOnClickOutside, true);
    }, []);

    // Hide on outside click
    const hideOnClickOutside = (e) => {
        if (emojiRef.current && !emojiRef.current.contains(e.target)) {
            setShowEmojis(false);
        }
    };

    return (
        <AnimatePresence>
            <Modal overlay={false}>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className={cx('wrapper', getMinimizeClass())}
                >
                    <header className={cx('header')}>
                        <div className={cx('user-info')} onClick={handleMinimize}>
                            <Image className={cx('avatar')} src={message?.avatar} alt="avatar" />
                            <span className={cx('name')}>{message?.name}</span>
                        </div>
                        <div className={cx('action-btn')}>
                            <button className={cx('minimize-btn')} onClick={handleMinimize}>
                                <BsDash />
                            </button>
                            <button className={cx('close-btn')} onClick={handleClose}>
                                <BsX />
                            </button>
                        </div>
                    </header>
                    <div className={cx('chat-box')}></div>
                    <div className={cx('footer')}>
                        <label className={cx('icon-image')} onClick={() => imageRef.current.click()}>
                            <BsCardImage />
                        </label>
                        <input id="send-file" type="file" ref={imageRef} hidden onChange={handleUploadImg} />
                        <input
                            className={cx('input-message')}
                            type="text"
                            placeholder="Enter message..."
                            value={newMessage}
                            onChange={handleChange}
                            onKeyDown={handleEnter}
                        />
                        <div className={cx('emoji')}>
                            <button className={cx('emoji-icon')} onClick={handleShowEmojis}>
                                <BsEmojiSmile />
                            </button>
                            {showEmojis && (
                                <div ref={emojiRef} className={cx('picker-emoji')}>
                                    <Picker
                                        data={data}
                                        onEmojiSelect={handleSelectEmoji}
                                        previewPosition="none"
                                        theme={themeMode === 'theme-mode-dark' ? 'dark' : 'light'}
                                    />
                                </div>
                            )}
                        </div>
                        <div className={cx('icon-send')}>
                            <BsCursor onClick={handleSend} />
                        </div>
                    </div>
                    {isOpenLightBox && (
                        <div className={cx('light-box')}>
                            <Lightbox mainSrc={previewImg} onCloseRequest={() => setIsOpenLightBox(false)} />
                        </div>
                    )}
                </motion.div>
            </Modal>
        </AnimatePresence>
    );
}

export default MiniChat;
