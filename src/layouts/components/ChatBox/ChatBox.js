import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import InputEmoji from 'react-input-emoji';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import styles from './ChatBox.module.scss';
import { getUser } from '~/api/userApi';
import { addMessage, getMessages } from '~/api/messageApi';
import images from '~/assets/images';
import Image from '~/components/Image';
import { BsCardImage, BsCursor, BsPlus } from 'react-icons/bs';

const cx = classNames.bind(styles);
dayjs.extend(relativeTime);

function ChatBox({ chat, currentUserId, setSendMessage, receiveMessage }) {
    const [userData, setUserData] = useState(null);
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

    const handleChange = (newMessage) => {
        setNewMessage(newMessage);
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
                    {messages.map((message) => (
                        <div
                            key={message._id}
                            ref={scroll}
                            className={cx(message.senderId === currentUserId ? 'message-own' : 'message')}
                        >
                            <span>{message.content}</span>
                            <span className={cx('chat-time')}>{dayjs(message.createdAt).fromNow()}</span>
                        </div>
                    ))}
                </div>

                <div className={cx('footer')}>
                    <label className={cx('icon-image')} onClick={() => imageRef.current.click()}>
                        <BsCardImage />
                    </label>
                    <input id="send-file" type="file" ref={imageRef} hidden />

                    

                    <InputEmoji value={newMessage} onChange={handleChange} />
                    <BsCursor className={cx('icon-send')} onClick={handleSend} />
                </div>
            </div>
        </div>
    );
}

export default ChatBox;
