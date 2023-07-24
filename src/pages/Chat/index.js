import React, { useRef, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Chat.module.scss';
import Image from '~/components/Image';
import { useSelector } from 'react-redux';
import images from '~/assets/images';
import { FaPlus } from 'react-icons/fa';
import Search from '~/components/Search/Message/Message';
import { BsPeople, BsPlus } from 'react-icons/bs';
import Friends from './components/Friends/Friends';
import CreateMessageForm from './components/CreateMessage/CreateMessageForm';

const cx = classNames.bind(styles);

function Chat() {
    const { currentUser } = useSelector((state) => state.auth.login);
    const [allUsers, setAllUsers] = useState([]);
    const [chats, setChats] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const [sendMessage, setSendMessage] = useState(null);
    const [receiveMessage, setReceiveMessage] = useState(null);
    const [showCreateMessage, setShowCreateMessage] = useState(false);
    const socket = useRef();

    const memberList = [
        {
            id: 1,
            avatar: 'https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            name: 'Victoria',
        },
        {
            id: 2,
            avatar: 'https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            name: 'Victoria',
        },
        {
            id: 3,
            avatar: 'https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            name: 'Victoria',
        },
        {
            id: 4,
            avatar: 'https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            name: 'Victoria',
        },
        {
            id: 5,
            avatar: 'https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            name: 'Victoria',
        },
        {
            id: 6,
            avatar: 'https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            name: 'Victoria',
        },
    ];

    // Get the chat in chat section
    // useEffect(() => {
    //     const getChats = async () => {
    //         try {
    //             const { data } = await userChats(currentUser?._id);
    //             setChats(data);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     };
    //     getChats();
    // }, [currentUser?._id]);

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

    const handleOnCreateMessage = () => {
        setShowCreateMessage(true);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('room-list')}>
                <div className={cx('private-chat-room')}>
                    <Image className={cx('logo')} src={images.logo} alt="logo" />
                </div>
                <button className={cx('create-room-btn')}>
                    <FaPlus />
                </button>
            </div>
            <div className={cx('sidebar')}>
                <div className={cx('search')}>
                    <Search />
                </div>
                <button className={cx('friends')}>
                    <span className={cx('icon-friend')}>
                        <BsPeople />
                    </span>
                    Friends
                </button>
                <div className={cx('direct-messages')}>
                    <span className={cx('title')}>DIRECT MESSAGES</span>
                    <button className={cx('create-message-btn')} onClick={handleOnCreateMessage}>
                        <BsPlus />
                    </button>
                    {showCreateMessage && (
                        <CreateMessageForm isOpen={showCreateMessage} isHide={setShowCreateMessage} />
                    )}
                </div>

                <div className={cx('message-list')}>
                    {memberList.map((user, idx) => (
                        <div key={user.id} className={cx('user')}>
                            <div className={cx('info')}>
                                <Image className={cx('avatar')} src={user.avatar} alt="avatar" />
                            </div>
                            <span className={cx('name')}>{user.name}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className={cx('container')}>
                <Friends />
            </div>
        </div>
    );
}

export default Chat;
