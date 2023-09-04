import classNames from 'classnames/bind';
import { useRef, useState } from 'react';

import { FaPlus } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { MessageIcon } from '~/components/Icons';
import Image from '~/components/Image/Image';
import { setModalOnOpen } from '~/redux/Slice/modalSlice';
import styles from './Chat.module.scss';
import { MODAL_CREATE_ROOM, MODAL_JOIN_ROOM } from '~/utils/constants';
import Icon from '~/components/Icon/Icon';
import { BsDoorOpen } from 'react-icons/bs';

const cx = classNames.bind(styles);

function Chat() {
  const rooms = [
    {
      id: '12314123',
      roomName: 'room1',
      coverAvatar:
        'https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
    {
      id: '1231255345',
      roomName: 'room2',
      coverAvatar:
        'https://images.unsplash.com/photo-1640960543409-dbe56ccc30e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: '1313445324423',
      roomName: 'room3',
      coverAvatar:
        'https://images.unsplash.com/photo-1640951613773-54706e06851d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: '31223524',
      roomName: 'room4',
      coverAvatar:
        'https://images.unsplash.com/photo-1608889175123-8ee362201f81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: '543554',
      roomName: 'room5',
      coverAvatar:
        'https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: '12267456',
      roomName: 'room6',
      coverAvatar:
        'https://plus.unsplash.com/premium_photo-1688891564708-9b2247085923?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    },
  ];

  const [showCreateRoomModal, setShowCreateRoomModal] = useState(false);
  const [roomList, setRoomList] = useState(rooms);
  const [allUsers, setAllUsers] = useState([]);
  const [chats, setChats] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [sendMessage, setSendMessage] = useState(null);
  const [receiveMessage, setReceiveMessage] = useState(null);
  const socket = useRef();
  const dispatch = useDispatch();

  const handleToggleCreateRoomModal = () => {
    dispatch(setModalOnOpen(MODAL_CREATE_ROOM));
  };

  const handleToggleJoinRoomModal = () => {
    dispatch(setModalOnOpen(MODAL_JOIN_ROOM));
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
        <div className={cx('room', 'private-message')}>
          <NavLink to="@me" className={(nav) => cx('message-link', { active: nav.isActive })}>
            <MessageIcon width="48px" height="48px" className={cx('icon-message')} />
          </NavLink>
        </div>
        <div className={cx('room-list')}>
          {roomList?.map((room, idx) => (
            <div key={room.id} className={cx('room')}>
              <NavLink to={room.id} className={(nav) => cx('message-link', { active: nav.isActive })}>
                <Image className={cx('avatar')} src={room?.coverAvatar} alt="avatar" />
              </NavLink>
            </div>
          ))}
        </div>
        <button className={cx('create-room-btn')} onClick={handleToggleCreateRoomModal}>
          <FaPlus />
        </button>
        <button className={cx('join-room-btn')} onClick={handleToggleJoinRoomModal}>
          <Icon icon={<BsDoorOpen />} className={cx('icon-join-room')} />
        </button>
      </div>
      <div className={cx('container')}>
        <Outlet />
      </div>
    </div>
  );
}

export default Chat;
