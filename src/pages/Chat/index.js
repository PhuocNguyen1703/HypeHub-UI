import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { io } from 'socket.io-client';

import config from '~/config';
import images from '~/assets/images';
import styles from './Chat.module.scss';
import { SearchIcon } from '~/components/Icons';
import { userChats } from '~/api/chatApi';
import ChatBox from '~/layouts/components/ChatBox/ChatBox';
import Conversation from '~/layouts/components/Conversation/Conversation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { getAllUser } from '~/api/userApi';
import Calendar from '~/components/Calendar/Calendar';

const cx = classNames.bind(styles);

function Chat() {
    const currentUser = useSelector((state) => state.auth.login.currentUser);
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
                const { data } = await userChats(currentUser._id);
                setChats(data);
            } catch (error) {
                console.log(error);
            }
        };
        getChats();
    }, [currentUser._id]);

    // Get all users in DB
    useEffect(() => {
        const getAllUsers = async () => {
            try {
                const { data } = await getAllUser();
                const users = data.filter((user) => user._id !== currentUser._id);
                setAllUsers(users);
            } catch (error) {
                console.log(error);
            }
        };
        getAllUsers();
    }, []);

    //Connect socket
    // useEffect(() => {
    //     socket.current = io('http://localhost:8800');
    //     socket.current.emit('new-user-add', currentUser._id);
    //     socket.current.on('get-users', (users) => {
    //         setOnlineUsers(users);
    //     });
    // }, [currentUser]);

    // Send Message to socket server
    useEffect(() => {
        if (sendMessage !== null) {
            socket.current.emit('send-message', sendMessage);
        }
    }, [sendMessage]);

    //Receive message from socket server
    // useEffect(() => {
    //     socket.current.on('receive-message', (data) => {
    //         setReceiveMessage(data);
    //     });
    // }, []);

    const checkOnlineStatus = (chat) => {
        const chatMember = chat.members.find((member) => member !== currentUser._id);
        const online = onlineUsers.find((user) => user.userId === chatMember);
        return online ? true : false;
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('left-side-chat')}>
                <span className={cx('title')}>
                    Messages
                    <FontAwesomeIcon icon={faAngleDown} style={{ fontSize: 16 }} />
                </span>
                <div className={cx('chat-list')}>
                    <div className={cx('search-item')}>
                        <SearchIcon />
                        <input placeholder="search item" />
                    </div>
                    <div className={cx('item-list')}>
                        {chats.map((chat) => (
                            <div
                                key={chat._id}
                                className={cx('item')}
                                onClick={() => {
                                    setCurrentChat(chat);
                                }}
                            >
                                <Conversation
                                    data={chat}
                                    currentUserId={currentUser._id}
                                    online={checkOnlineStatus(chat)}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <ChatBox
                chat={currentChat}
                currentUserId={currentUser._id}
                setSendMessage={setSendMessage}
                receiveMessage={receiveMessage}
            />

            <div className={cx('right-side-chat')}>
                <Calendar />
                <span className={cx('title')}>
                    Accounts
                    <FontAwesomeIcon icon={faAngleDown} style={{ fontSize: 16 }} />
                </span>
                <div className={cx('account-list')}>
                    {allUsers.map((user) => (
                        <div key={user._id} className={cx('account-item')}>
                            <div className={cx('item-avatar')}>
                                <img src={user?.avatar} alt="avatar" />
                            </div>
                            <div className={cx('item-info')}>
                                <h2>{user?.fullName}</h2>
                                <span>{user?.position}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Chat;
