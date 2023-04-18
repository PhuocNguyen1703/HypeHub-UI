import React, { useRef, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './GroupChat.module.scss';
import Image from '~/components/Image';
import ChatBox from '~/layouts/components/ChatBox/ChatBox';
import { useSelector } from 'react-redux';
import { io } from 'socket.io-client';
import { getAllUser } from '~/api/userApi';
import { userChats } from '~/api/chatApi';
import Conversation from '~/layouts/components/Conversation/Conversation';
import Message from '~/components/Search/Message';
import { BsFunnel, BsPatchPlus, BsStack } from 'react-icons/bs';
import NotFound from '~/layouts/components/ChatBox/NotFound';
import AddChannelModal from '~/components/Modal/AddChannel/AddChannelModal';
import GroupChatBox from './GroupChatBox';

const cx = classNames.bind(styles);

function GroupChat() {
    const [showAddChannelModal, setShowAddChannelModal] = useState(false);

    const { currentUser } = useSelector((state) => state.auth.login);
    const [allUsers, setAllUsers] = useState([]);
    const [chats, setChats] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const [sendMessage, setSendMessage] = useState(null);
    const [receiveMessage, setReceiveMessage] = useState(null);
    const socket = useRef();

    const channels = [
        { id: 1, title: 'channel 1 ', description: 'room marketing' },
        { id: 2, title: 'channel 2 ', description: 'room marketing' },
        { id: 3, title: 'channel 3 ', description: 'room marketing' },
        { id: 4, title: 'channel 4 ', description: 'room marketing' },
        { id: 5, title: 'channel 5 ', description: 'room marketing' },
    ];

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

    const handleToggleAddChannelModal = () => {
        setShowAddChannelModal(true);
    };

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

    return (
        <div className={cx('wrapper')}>
            <div className={cx('sidebar')}>
                <div className={cx('header')}>
                    <h5 className={cx('label')}>Channels</h5>
                    <span className={cx('add-channel-btn')} onClick={handleToggleAddChannelModal}>
                        <BsPatchPlus />
                    </span>
                </div>
                <div className={cx('search')}>
                    <Message />
                </div>
                <div className={cx('channel-list')}>
                    {channels.map((item) => (
                        <div
                            className={cx('item')}
                            key={item.id}
                            onClick={() => {
                                setCurrentChat(item);
                            }}
                        >
                            <span className={cx('title')}>{item.title}</span>
                            <span className={cx('desc')}>{item.description}</span>
                        </div>
                    ))}
                </div>
            </div>
            <GroupChatBox />
            <div className={cx('member-list')}>
                <span className={cx('label')}>Members</span>
                {memberList.map((item) => (
                    <div key={item.id} className={cx('member')}>
                        <Image className={cx('avatar')} src={item.avatar} />
                        <span className={cx('name')}>{item.name}</span>
                    </div>
                ))}
            </div>

            <AddChannelModal show={showAddChannelModal} setShowAddChannelModal={setShowAddChannelModal} />
        </div>
    );
}

export default GroupChat;
