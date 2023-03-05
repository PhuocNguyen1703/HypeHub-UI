import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './PrivateChat.module.scss';
import Image from '~/components/Image';
import ChatBox from '~/layouts/components/ChatBox/ChatBox';
import { useSelector } from 'react-redux';
import { io } from 'socket.io-client';
import { getAllUser } from '~/api/userApi';
import { userChats } from '~/api/chatApi';
import Conversation from '~/layouts/components/Conversation/Conversation';
import Message from '~/components/Search/Message';
import { BsFunnel } from 'react-icons/bs';
import NotFound from '~/layouts/components/ChatBox/NotFound';

const cx = classNames.bind(styles);

function PrivateChat() {
    const { currentUser } = useSelector((state) => state.auth.login);
    const [allUsers, setAllUsers] = useState([]);
    const [chats, setChats] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const [sendMessage, setSendMessage] = useState(null);
    const [receiveMessage, setReceiveMessage] = useState(null);
    const socket = useRef();

    // Get the chat in chat section
    useEffect(() => {
        const getChats = async () => {
            try {
                const { data } = await userChats(currentUser?._id);
                setChats(data);
            } catch (error) {
                console.log(error);
            }
        };
        getChats();
    }, [currentUser?._id]);

    // Get all users in DB
    // useEffect(() => {
    //     const getAllUsers = async () => {
    //         try {
    //             const { data } = await getAllUser();
    //             const users = data.filter((user) => user._id !== currentUser._id);
    //             setAllUsers(users);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     };
    //     getAllUsers();
    // }, []);

    //Connect socket
    // useEffect(() => {
    //     socket.current = io('http://localhost:8800');
    //     socket.current.emit('new-user-add', currentUser._id);
    //     socket.current.on('get-users', (users) => {
    //         setOnlineUsers(users);
    //     });
    // }, [currentUser]);

    // Send Message to socket server
    // useEffect(() => {
    //     if (sendMessage !== null) {
    //         socket.current.emit('send-message', sendMessage);
    //     }
    // }, [sendMessage]);

    //Receive message from socket server
    // useEffect(() => {
    //     socket.current.on('receive-message', (data) => {
    //         setReceiveMessage(data);
    //     });
    // }, []);

    // const checkOnlineStatus = (chat) => {
    //     const chatMember = chat.members.find((member) => member !== currentUser._id);
    //     const online = onlineUsers.find((user) => user.userId === chatMember);
    //     return online ? true : false;
    // };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('sidebar')}>
                <div className={cx('search')}>
                    <Message />
                </div>
                <div className={cx('title')}>
                    <h5 className={cx('label')}>Messages</h5>
                </div>
                <div className={cx('message-list')}>
                    {chats.map((item) => (
                        <div
                            className={cx('item')}
                            key={item._id}
                            onClick={() => {
                                setCurrentChat(item);
                            }}
                        >
                            <Conversation
                                data={item}
                                currentUserId={currentUser?._id}
                                chatId={item._id}
                                // online={checkOnlineStatus(item)}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {currentChat ? (
                <ChatBox
                    chat={currentChat}
                    currentUserId={currentUser?._id}
                    setSendMessage={setSendMessage}
                    receiveMessage={receiveMessage}
                />
            ) : (
                <NotFound />
            )}
        </div>
    );
}

export default PrivateChat;
