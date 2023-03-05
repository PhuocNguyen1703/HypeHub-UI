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
import { BsFunnel, BsPatchPlus } from 'react-icons/bs';
import NotFound from '~/layouts/components/ChatBox/NotFound';
import AddChannelModal from '~/components/Modal/AddChannel/AddChannelModal';

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
        { id: 1, title: 'channel 1 ' },
        { id: 2, title: 'channel 2 ' },
        { id: 3, title: 'channel 3 ' },
        { id: 4, title: 'channel 4 ' },
        { id: 5, title: 'channel 5 ' },
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
                <div className={cx('title')}>
                    <h5 className={cx('label')}>Channels</h5>
                    <span className={cx('add-channel-btn')} onClick={handleToggleAddChannelModal}>
                        <BsPatchPlus />
                    </span>
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
                            {item.title}
                        </div>
                    ))}
                </div>
            </div>

            <AddChannelModal show={showAddChannelModal} setShowAddChannelModal={setShowAddChannelModal} />
        </div>
    );
}

export default GroupChat;
