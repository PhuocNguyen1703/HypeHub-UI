import 'react-18-image-lightbox/style.css';
import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';

import styles from './ChatBox.module.scss';
import { getUser } from '~/api/userApi';
import { addMessage, getMessages } from '~/api/messageApi';
import images from '~/assets/images';
import Image from '~/components/Image';
import { BsCardImage, BsCursor, BsEmojiSmile } from 'react-icons/bs';
import Lightbox from 'react-18-image-lightbox';
// import 'react-image-lightbox/style.css';

const cx = classNames.bind(styles);
dayjs.extend(relativeTime);

function ChatBox({ chat, currentUserId, setSendMessage, receiveMessage }) {
    const [userData, setUserData] = useState(null);
    const [showEmojis, setShowEmojis] = useState(false);
    const [previewImg, setPreviewImg] = useState(null);
    const [isOpenLightBox, setIsOpenLightBox] = useState(false);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const scroll = useRef();
    const imageRef = useRef();

    //Fetching data for header
    useEffect(() => {
        const userId = chat?.members?.find((id) => id !== currentUserId);

        const getUserData = async () => {
            try {
                const { data } = await getUser(userId);
                setUserData(data);
            } catch (error) {
                console.log(error);
            }
        };
        if (chat !== null) getUserData();
    }, [chat, currentUserId]);

    //Fetching data for messages
    useEffect(() => {
        const MessagesData = async () => {
            try {
                const { data } = await getMessages(chat._id);
                setMessages(data);
            } catch (error) {
                console.log(error);
            }
        };
        if (chat !== null) MessagesData();
    }, [chat]);

    const handleChange = (e) => {
        setNewMessage(e.target.value);
    };

    //Send message
    const handleSend = async (e) => {
        e.preventDefault();
        const message = {
            senderId: currentUserId,
            content: newMessage,
            chatId: chat._id,
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

    //Receive message from parent component
    useEffect(() => {
        if (receiveMessage !== null && receiveMessage.chatId === chat._id) {
            setMessages([...messages, receiveMessage]);
        }
    }, [receiveMessage]);

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

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div>
                    <span className={cx('to')}>To:</span>
                    <span className={cx('name')}>Me Me</span>
                </div>
                <div>
                    <div></div>
                </div>
            </div>

            <div className={cx('container')}>
                <div className={cx('content')}>
                    {/* {messages.map((message) => (
                        <div
                            key={message._id}
                            ref={scroll}
                            className={cx(message.senderId === currentUserId ? 'message-own' : 'message')}
                        >
                            <span>{message.content}</span>
                            <span className={cx('chat-time')}>{dayjs(message.createdAt).fromNow()}</span>
                        </div>
                    ))} */}
                    <div className={cx('message', 'owner')}>
                        <Image
                            className={cx('avatar')}
                            src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                            alt="avatar"
                        />
                        <div className={cx('message-content')}>
                            <p>
                                helloooas asd asd asd asd asd ad asd ad asd as dasd asd asd asd asd asd as das das as
                                dsdas dasd as dasdasd s dasdasdasdas asd asd sad asd asd asd asd asd asd asd asd
                            </p>
                            <span className={cx('chat-time')}>2022-12</span>
                        </div>
                    </div>
                    <div className={cx('message')}>
                        <Image
                            className={cx('avatar')}
                            src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                            alt="avatar"
                        />
                        <div className={cx('message-content')}>
                            <p>
                                helloooas asd asd asd asd asd ad asd ad asd as dasd asd asd asd asd asd as das das as
                                dsdas dasd as dasdasd s dasdasdasdas asd asd sad asd asd asd asd asd asd asd asd
                            </p>
                            <span className={cx('chat-time')}>2022-12</span>
                        </div>
                    </div>
                    <div className={cx('message', 'owner')}>
                        <Image
                            className={cx('avatar')}
                            src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                            alt="avatar"
                        />
                        <div className={cx('message-content')}>
                            <p>
                                helloooas asd asd asd asd asd ad asd ad asd as dasd asd asd asd asd asd as das das as
                                dsdas dasd as dasdasd s dasdasdasdas asd asd sad asd asd asd asd asd asd asd asd
                            </p>
                            <span className={cx('chat-time')}>2022-12</span>
                        </div>
                    </div>
                    <div className={cx('message')}>
                        <Image
                            className={cx('avatar')}
                            src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                            alt="avatar"
                        />
                        <div className={cx('message-content')}>
                            <p>helloooas asd asd</p>
                            <span className={cx('chat-time')}>2022-12</span>
                        </div>
                    </div>
                    <div className={cx('message')}>
                        <Image
                            className={cx('avatar')}
                            src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                            alt="avatar"
                        />
                        <div className={cx('message-content')}>
                            <p>
                                helloooas asd asd asd asd asd ad asd ad asd as dasd asd asd asd asd asd as das das as
                                dsdas dasd as dasdasd s dasdasdasdas asd asd sad asd asd asd asd asd asd asd asd
                            </p>
                            <span className={cx('chat-time')}>2022-12</span>
                        </div>
                    </div>
                    <div className={cx('message')}>
                        <Image
                            className={cx('avatar')}
                            src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                            alt="avatar"
                        />
                        <div className={cx('message-content')}>
                            <p>
                                helloooas asd asd asd asd asd ad asd ad asd as dasd asd asd asd asd asd as das das as
                                dsdas dasd as dasdasd s dasdasdasdas asd asd sad asd asd asd asd asd asd asd asd
                            </p>
                            <img
                                className={cx('image')}
                                src="https://images.unsplash.com/photo-1665510394335-a6453ce125c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                                alt="img"
                                onClick={handleClickImage}
                            />
                            <span className={cx('chat-time')}>2022-12</span>
                        </div>
                    </div>
                    <div className={cx('message', 'owner')}>
                        <Image
                            className={cx('avatar')}
                            src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                            alt="avatar"
                        />
                        <div className={cx('message-content')}>
                            <p>
                                helloooas asd asd asd asd asd ad asd ad asd as dasd asd asd asd asd asd as das das as
                                dsdas dasd as dasdasd s dasdasdasdas asd asd sad asd asd asd asd asd asd asd asd
                            </p>
                            <span className={cx('chat-time')}>2022-12</span>
                        </div>
                    </div>
                    <div className={cx('message')}>
                        <Image
                            className={cx('avatar')}
                            src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                            alt="avatar"
                        />
                        <div className={cx('message-content')}>
                            <p>helloooas asd asd asd asd</p>
                            <img
                                className={cx('image')}
                                src="https://images.unsplash.com/photo-1664574654578-d5a6a4f447bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                                alt="img"
                                onClick={handleClickImage}
                            />
                            <span className={cx('chat-time')}>2022-12</span>
                        </div>
                    </div>
                    <div className={cx('message', 'owner')}>
                        <Image
                            className={cx('avatar')}
                            src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                            alt="avatar"
                        />
                        <div className={cx('message-content')}>
                            <p>
                                helloooas asd asd asd asd asd ad asd ad asd as dasd asd asd asd asd asd as das das as
                                dsdas dasd as dasdasd s dasdasdasdas asd asd sad asd asd asd asd asd asd asd asd
                            </p>
                            <span className={cx('chat-time')}>2022-12</span>
                        </div>
                    </div>
                </div>

                <div className={cx('footer')}>
                    <label className={cx('icon-image')} onClick={() => imageRef.current.click()}>
                        <BsCardImage />
                    </label>
                    <input id="send-file" type="file" ref={imageRef} hidden />
                    <input
                        className={cx('input-message')}
                        type="text"
                        placeholder="emoji picker demo"
                        value={newMessage}
                        onChange={handleChange}
                    />
                    <div className={cx('emoji')}>
                        <button className={cx('emoji-icon')} onClick={handleShowEmojis}>
                            <BsEmojiSmile />
                        </button>
                        {showEmojis && (
                            <div className={cx('picker-emoji')}>
                                <Picker data={data} onEmojiSelect={console.log} previewPosition="none" theme="light" />
                            </div>
                        )}
                    </div>
                    <div className={cx('icon-send')}>
                        <BsCursor onClick={handleSend} />
                    </div>
                </div>
            </div>
            {isOpenLightBox && (
                <div className={cx('light-box')}>
                    <Lightbox mainSrc={previewImg} onCloseRequest={() => setIsOpenLightBox(false)} />
                </div>
            )}
        </div>
    );
}

export default ChatBox;
