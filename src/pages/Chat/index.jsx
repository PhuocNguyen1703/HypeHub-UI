import classNames from 'classnames/bind';
import { useRef, useState } from 'react';

import { FaPlus } from 'react-icons/fa';
import { images } from '~/assets/images';
import Image from '~/components/Image/Image';
import styles from './Chat.module.scss';
import Friends from './components/Friends/Friends';
import CreateRoomModal from './components/Modal/CreateRoomModal';
import RoomChat from './layouts/RoomChat/RoomChat';

const cx = classNames.bind(styles);

function Chat() {
  const [showCreateRoomModal, setShowCreateRoomModal] = useState(false);
  const [allUsers, setAllUsers] = useState([]);
  const [chats, setChats] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [sendMessage, setSendMessage] = useState(null);
  const [receiveMessage, setReceiveMessage] = useState(null);
  const socket = useRef();

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
        {/* <PrivateChat /> */}
        <RoomChat />
      </div>
      <div className={cx('container')}>
        <Friends />
      </div>

      {showCreateRoomModal && <CreateRoomModal isOpen={showCreateRoomModal} isHide={setShowCreateRoomModal} />}
    </div>
  );
}

export default Chat;
