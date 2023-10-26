import classNames from 'classnames/bind';
import { useRef, useState } from 'react';

import { BsDoorOpen } from 'react-icons/bs';
import { FaPlus } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import Icon from '~/components/Icon/Icon';
import { MessageIcon } from '~/components/Icons';
import Image from '~/components/Image/Image';
import { chatData } from '~/data/mock-data';
import { setModalOnOpen } from '~/redux/Slice/modalSlice';
import { MODAL_CREATE_ROOM, MODAL_JOIN_ROOM } from '~/utils/constants';
import styles from './Chat.module.scss';

const cx = classNames.bind(styles);

function Chat() {
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
          {chatData.rooms?.map((room) => (
            <div key={room._id} className={cx('room')}>
              <NavLink to={room._id} className={(nav) => cx('message-link', { active: nav.isActive })}>
                <Image className={cx('avatar')} src={room?.avatar} alt="avatar" />
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
