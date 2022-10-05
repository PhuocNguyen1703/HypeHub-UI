import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Chat.module.scss';
import Image from '~/components/Image';
import ChatBox from '~/layouts/components/ChatBox/ChatBox';
import { useSelector } from 'react-redux';
import { io } from 'socket.io-client';
import { getAllUser } from '~/api/userApi';
import { userChats } from '~/api/chatApi';
import Conversation from '~/layouts/components/Conversation/Conversation';
import Message from '~/components/Search/Message';
import { BsFunnel } from 'react-icons/bs';

const cx = classNames.bind(styles);

function PrivateChat() {
    const currentUser = useSelector((state) => state.auth.login.currentUser);
    const [isOpenFilter, setIsOpenFilter] = useState(true);
    const [allUsers, setAllUsers] = useState([]);
    // const [chats, setChats] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const [sendMessage, setSendMessage] = useState(null);
    const [receiveMessage, setReceiveMessage] = useState(null);
    const socket = useRef();

    // Get the chat in chat section
    // useEffect(() => {
    //     const getChats = async () => {
    //         try {
    //             const { data } = await userChats(currentUser._id);
    //             setChats(data);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     };
    //     getChats();
    // }, [currentUser._id]);

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

    const chats = [
        {
            _id: 1,
            avatar: 'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            fullName: 'Vitoria Secret',
            message: 'How Are You??',
        },
        {
            _id: 2,
            avatar: 'https://images.unsplash.com/photo-1594616838951-c155f8d978a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            fullName: 'John Thomson',
            message: 'How Are You??How Are You??',
        },
        {
            _id: 3,
            avatar: 'https://images.unsplash.com/photo-1641894252843-9794796577be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            fullName: 'Yamamoto',
            message:
                'How Are You??How Are You??How Are You??How Are You??How Are You??How Are You??How Are You??How Are You??How Are You??',
        },
        {
            _id: 4,
            avatar: 'https://images.unsplash.com/photo-1544724107-6d5c4caaff30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            fullName: 'Yokohama',
            message: 'How Are You??',
        },
        {
            _id: 5,
            avatar: 'https://images.unsplash.com/photo-1630910561339-4e22c7150093?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTl8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            fullName: 'Hokkaido',
            message: 'How Are You??',
        },
        {
            _id: 6,
            avatar: 'https://images.unsplash.com/photo-1635930870702-aab3e1b19cb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njh8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            fullName: 'Nguyễn Văn An',
            message: 'How Are You??',
        },
        {
            _id: 7,
            avatar: 'https://images.unsplash.com/photo-1626586066636-a1523dd2141b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzB8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            fullName: 'Trần Thị Thu Thủy',
            message: 'How Are You??',
        },
        {
            _id: 8,
            avatar: 'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            fullName: 'Vitoria Secret',
            message: 'How Are You??',
        },
        {
            _id: 9,
            avatar: 'https://images.unsplash.com/photo-1594616838951-c155f8d978a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            fullName: 'John Thomson',
            message: 'How Are You??How Are You??',
        },
        {
            _id: 10,
            avatar: 'https://images.unsplash.com/photo-1641894252843-9794796577be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            fullName: 'Yamamoto',
            message:
                'How Are You??How Are You??How Are You??How Are You??How Are You??How Are You??How Are You??How Are You??How Are You??',
        },
        {
            _id: 11,
            avatar: 'https://images.unsplash.com/photo-1544724107-6d5c4caaff30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            fullName: 'Yokohama',
            message: 'How Are You??',
        },
        {
            _id: 12,
            avatar: 'https://images.unsplash.com/photo-1630910561339-4e22c7150093?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTl8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            fullName: 'Hokkaido',
            message: 'How Are You??',
        },
        {
            _id: 13,
            avatar: 'https://images.unsplash.com/photo-1635930870702-aab3e1b19cb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njh8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            fullName: 'Nguyễn Văn An',
            message: 'How Are You??',
        },
        {
            _id: 14,
            avatar: 'https://images.unsplash.com/photo-1626586066636-a1523dd2141b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzB8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            fullName: 'Trần Thị Thu Thủy',
            message: 'How Are You??',
        },
    ];

    const handleOnFilter = () => {
        setIsOpenFilter((prevState) => !prevState);
    };

    const getHiddenClass = () => {
        if (isOpenFilter) return 'hidden';
        return '';
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('sidebar')}>
                <div className={cx('search')}>
                    <Message />
                </div>
                <div className={cx('title')}>
                    <h5 className={cx('label')}>Messages</h5>
                    <div className={cx('filter')}>
                        <span className={cx('filter-icon')} onClick={handleOnFilter}>
                            <BsFunnel />
                        </span>
                        <div className={cx('dropdown-filter-message', getHiddenClass())}>
                            <span className={cx('filter-option')}>All message</span>
                            <span className={cx('filter-option')}>Group message</span>
                            <span className={cx('filter-option')}>Personal message</span>
                        </div>
                    </div>
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
                                currentUserId={currentUser._id}
                                // online={checkOnlineStatus(item)}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* <ChatBox
                chat={currentChat}
                currentUserId={currentUser._id}
                setSendMessage={setSendMessage}
                receiveMessage={receiveMessage}
            /> */}
        </div>
    );
}

export default PrivateChat;
