import 'react-18-image-lightbox/style.css';
import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';

import styles from './GroupChatBox.module.scss';
import { getUser } from '~/services/userApi';
import { addMessage, getMessages } from '~/services/messageApi';
import Image from '~/components/Image';
import { BsCardImage, BsCursor, BsEmojiSmile, BsStack } from 'react-icons/bs';
import Lightbox from 'react-18-image-lightbox';
import { useSelector } from 'react-redux';
import { uploadImages } from '~/services/uploadImagesApi';

const cx = classNames.bind(styles);
dayjs.extend(utc);
// dayjs.extend(timezone);
// dayjs.tz.setDefault('Asia/Tokyo');

function GroupChatBox({ chat, currentUserId, setSendMessage, receiveMessage }) {
    const { currentUser } = useSelector((state) => state.auth.login);
    const { themeMode } = useSelector((state) => state.theme);
    const [userData, setUserData] = useState(null);
    const [showEmojis, setShowEmojis] = useState(false);
    const [previewImg, setPreviewImg] = useState(null);
    const [isOpenLightBox, setIsOpenLightBox] = useState(false);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [uploadImg, setUploadImg] = useState();
    const scroll = useRef(null);
    const imageRef = useRef(null);
    const emojiRef = useRef(null);

    const messageList = [
        {
            id: 1,
            avatar: 'https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            name: 'Victoria',
            content: 'hello',
            date: '07/03/2023 22:00',
        },
        {
            id: 2,
            avatar: 'https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            name: 'Victoria',
            content: 'hello',
            date: '07/03/2023 22:00',
        },
        {
            id: 3,
            avatar: 'https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            name: 'Victoria',
            content: 'hello',
            date: '07/03/2023 22:00',
        },
        {
            id: 4,
            avatar: 'https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            name: 'Victoria',
            content: 'hello',
            date: '07/03/2023 22:00',
        },
        {
            id: 5,
            avatar: 'https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            name: 'Victoria',
            content: 'hello',
            date: '07/03/2023 22:00',
        },
        {
            id: 6,
            avatar: 'https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            name: 'Victoria',
            content: 'hello',
            date: '07/03/2023 22:00',
        },
        {
            id: 7,
            avatar: 'https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            name: 'Victoria',
            content: 'hello',
            date: '07/03/2023 22:00',
        },
        {
            id: 8,
            avatar: 'https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            name: 'Victoria',
            content: 'hello',
            date: '07/03/2023 22:00',
        },
        {
            id: 9,
            avatar: 'https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            name: 'Victoria',
            content: 'hello',
            date: '07/03/2023 22:00',
        },
        {
            id: 10,
            avatar: 'https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            name: 'Victoria',
            content: 'hello',
            date: '07/03/2023 22:00',
        },
        {
            id: 11,
            avatar: 'https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            name: 'Victoria',
            content: 'hello',
            date: '07/03/2023 22:00',
        },
        {
            id: 12,
            avatar: 'https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            name: 'Victoria',
            content: 'hello',
            date: '07/03/2023 22:00',
        },
    ];

    //Fetching data for header
    // useEffect(() => {
    //     const userId = chat?.members?.find((id) => id !== currentUserId);

    //     const getUserData = async () => {
    //         try {
    //             const { data } = await getUser(userId);
    //             setUserData(data);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     };
    //     if (chat !== null) getUserData();
    // }, [chat, currentUserId]);

    //Fetching data for messages
    // useEffect(() => {
    //     const MessagesData = async () => {
    //         try {
    //             const { data } = await getMessages(chat._id);
    //             setMessages(data);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     };
    //     if (chat !== null) MessagesData();
    // }, [chat]);

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
            senderId: currentUserId,
            content: newMessage,
            chatId: chat._id,
            fileUrl: url,
            // createdAt: Date.now(),
        };
        // Send message to socket server
        const receiverId = chat.members.find((id) => id !== currentUserId);
        setSendMessage({ ...message, receiverId });

        // Send message to DB
        try {
            const { data } = await addMessage(message);
            setMessages([...messages, data]);
            setNewMessage('');
        } catch (error) {
            console.log(error);
        }
    };

    //Receive message from parent component
    // useEffect(() => {
    //     if (receiveMessage !== null && receiveMessage.chatId === chat._id) {
    //         setMessages([...messages, receiveMessage]);
    //     }
    // }, [receiveMessage]);

    //Always scroll to last message
    // useEffect(() => {
    //     scroll.current?.scrollIntoView({ behavior: 'smooth' });
    // }, [messages]);

    const handleShowEmojis = () => {
        setShowEmojis((prevState) => !prevState);
    };

    // const handleClickImage = (e) => {
    //     setPreviewImg(e.target.src);
    //     setIsOpenLightBox(true);
    // };

    const handleSelectEmoji = (e) => {
        let sym = e.unified.split('-');
        let codesArray = [];
        sym.forEach((el) => codesArray.push('0x' + el));
        let emoji = String.fromCodePoint(...codesArray);
        setNewMessage(newMessage + emoji);
    };

    // useEffect(() => {
    //     document.addEventListener('click', hideOnClickOutside, true);
    // }, []);

    // Hide on outside click
    // const hideOnClickOutside = (e) => {
    //     if (emojiRef.current && !emojiRef.current.contains(e.target)) {
    //         setShowEmojis(false);
    //     }
    // };

    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <div className={cx('header-left')}>
                    <span className={cx('title')}>
                        <BsStack />
                        Channel 1
                    </span>
                    <p className={cx('desc')}>What are you doing</p>
                </div>
                <div className={cx('header-right')}></div>
            </header>

            <div className={cx('container')}>
                <div className={cx('content')}>
                    {messageList.map((message) => (
                        <div key={message.id} ref={scroll} className={cx('message')}>
                            <Image
                                className={cx('avatar')}
                                // src={message.senderId === currentUserId ? currentUser?.avatar : userData?.avatar}
                                src={message.avatar}
                                alt="avatar"
                            />
                            <div className={cx('message-content')}>
                                <div className={cx('user-info')}>
                                    <span className={cx('name')}>{message.name}</span>
                                    <span className={cx('chat-time')}>{message.date}</span>
                                </div>
                                <p>{message.content}</p>
                                {/* {message.fileUrl ? (
                                    <img
                                        className={cx('image')}
                                        src={message?.fileUrl}
                                        alt="img"
                                        onClick={handleClickImage}
                                    />
                                ) : null} */}
                                {/* <span className={cx('chat-time')}>{dayjs(message.createdAt).fromNow()}</span> */}
                                {/* <span className={cx('chat-time')}>{dayjs(message.createdAt).fromNow()}</span> */}
                            </div>
                        </div>
                    ))}
                </div>

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
            </div>
            {/* {isOpenLightBox && (
                <div className={cx('light-box')}>
                    <Lightbox mainSrc={previewImg} onCloseRequest={() => setIsOpenLightBox(false)} />
                </div>
            )} */}
        </div>
    );
}

export default GroupChatBox;
