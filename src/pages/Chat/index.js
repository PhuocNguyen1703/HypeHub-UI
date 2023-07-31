import React, { useRef, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Chat.module.scss';
import Image from '~/components/Image';
import { useSelector } from 'react-redux';
import images from '~/assets/images';
import { FaPlus } from 'react-icons/fa';
import Search from '~/components/Search/Message/Message';
import { BsPeople, BsPlus, BsRecord2Fill } from 'react-icons/bs';
import Friends from './components/Friends/Friends';
import CreateMessageForm from './components/CreateMessage/CreateMessageForm';
import GroupChatBox from './components/GroupChatBox';
import PrivateChatBox from './components/PrivateChatBox/PrivateChatBox';
import CreateRoomModal from './components/Modal/CreateRoomModal';

const cx = classNames.bind(styles);

function Chat() {
    const { currentUser } = useSelector((state) => state.auth.login);
    const [showCreateRoomModal, setShowCreateRoomModal] = useState(false);
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
            name: 'Tony',
        },
        {
            id: 2,
            avatar: 'https://images.unsplash.com/photo-1640960543409-dbe56ccc30e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
            name: 'Alex Nguyen',
        },
        {
            id: 3,
            avatar: 'https://images.unsplash.com/photo-1640951613773-54706e06851d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
            name: 'Thomson',
        },
        {
            id: 4,
            avatar: 'https://images.unsplash.com/photo-1608889175123-8ee362201f81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
            name: 'Yamamoto Yuki',
        },
        {
            id: 5,
            avatar: 'https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
            name: 'Brian Nguyen',
        },
        {
            id: 6,
            avatar: 'https://plus.unsplash.com/premium_photo-1688891564708-9b2247085923?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
            name: 'Victoria',
        },
    ];

    const handleToggleCreateRoomModal = () => {
        setShowCreateRoomModal(true);
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

    const handleOnCreateMessage = () => {
        setShowCreateMessage(true);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('room-list')}>
                <div className={cx('private-chat-room')}>
                    <Image className={cx('logo')} src={images.logo} alt="logo" />
                </div>
                <button className={cx('create-room-btn')} onClick={handleToggleCreateRoomModal}>
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
                                <div className={cx('avatar')}>
                                    <Image className={cx('photo')} src={user.avatar} alt="avatar" />
                                    <span className={cx('icon-dot')}>
                                        <BsRecord2Fill />
                                    </span>
                                </div>
                                <div className={cx('user-name')}>
                                    <span className={cx('name')}>{user.name}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className={cx('container')}>
                <Friends />
                {/* <GroupChatBox /> */}
                {/* <PrivateChatBox /> */}
            </div>

            {showCreateRoomModal && <CreateRoomModal isOpen={showCreateRoomModal} isHide={setShowCreateRoomModal} />}
        </div>
    );
}

export default Chat;
