import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import classNames from 'classnames/bind';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { useRef, useState } from 'react';
import 'react-18-image-lightbox/style.css';

import { BsCardImage, BsCursor, BsEmojiSmile, BsGear, BsRecord2Fill } from 'react-icons/bs';
import { FaHashtag, FaUsers, FaUsersSlash } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';
import Button from '~/components/Button/Button';
import Icon from '~/components/Icon/Icon';
import Image from '~/components/Image/Image';
import { setModalOnOpen } from '~/redux/Slice/modalSlice';
import { addMessage } from '~/services/messageApi';
import { uploadImages } from '~/services/uploadImagesApi';
import { MODAL_CHANNEL_DETAIL } from '~/utils/constants';
import styles from './RoomChatBox.module.scss';

const cx = classNames.bind(styles);
dayjs.extend(utc);

function RoomChatBox({ chat, currentUserId, setSendMessage, receiveMessage }) {
  const { currentUser } = useSelector((state) => state.auth.login);
  const { themeMode } = useSelector((state) => state.theme);
  const [showMemberList, setShowMemberList] = useState(true);
  const [userData, setUserData] = useState(null);
  const [showEmojis, setShowEmojis] = useState(false);
  const [previewImg, setPreviewImg] = useState(null);
  const [isOpenLightBox, setIsOpenLightBox] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [uploadImg, setUploadImg] = useState();
  const dispatch = useDispatch();
  const scroll = useRef(null);
  const imageRef = useRef(null);
  const emojiRef = useRef(null);

  const messageList = [
    {
      id: 1,
      avatar:
        'https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      name: 'Victoria',
      content: 'hello',
      date: '07/03/2023 22:00',
    },
    {
      id: 2,
      avatar:
        'https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      name: 'Victoria',
      content: 'hello',
      date: '07/03/2023 22:00',
    },
    {
      id: 3,
      avatar:
        'https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      name: 'Victoria',
      content: 'hello',
      date: '07/03/2023 22:00',
    },
    {
      id: 4,
      avatar:
        'https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      name: 'Victoria',
      content: 'hello',
      date: '07/03/2023 22:00',
    },
    {
      id: 5,
      avatar:
        'https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      name: 'Victoria',
      content: 'hello',
      date: '07/03/2023 22:00',
    },
    {
      id: 6,
      avatar:
        'https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      name: 'Victoria',
      content: 'hello',
      date: '07/03/2023 22:00',
    },
    {
      id: 7,
      avatar:
        'https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      name: 'Victoria',
      content: 'hello',
      date: '07/03/2023 22:00',
    },
    {
      id: 8,
      avatar:
        'https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      name: 'Victoria',
      content: 'hello',
      date: '07/03/2023 22:00',
    },
    {
      id: 9,
      avatar:
        'https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      name: 'Victoria',
      content: 'hello',
      date: '07/03/2023 22:00',
    },
    {
      id: 10,
      avatar:
        'https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      name: 'Victoria',
      content: 'hello',
      date: '07/03/2023 22:00',
    },
    {
      id: 11,
      avatar:
        'https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      name: 'Victoria',
      content: 'hello',
      date: '07/03/2023 22:00',
    },
    {
      id: 12,
      avatar:
        'https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      name: 'Victoria',
      content: 'hello',
      date: '07/03/2023 22:00',
    },
  ];

  //Fetching data for header
  // useEffect(() => {
  //     const userId = chat?.members?.find((id) => id !== currentUserId);

  //     const getUserData = async () => {
  //         try {
  //             const { data } = await getUser(userId);
  //             setUserData(data);
  //         } catch (error) {
  //             console.log(error);
  //         }
  //     };
  //     if (chat !== null) getUserData();
  // }, [chat, currentUserId]);

  //Fetching data for messages
  // useEffect(() => {
  //     const MessagesData = async () => {
  //         try {
  //             const { data } = await getMessages(chat._id);
  //             setMessages(data);
  //         } catch (error) {
  //             console.log(error);
  //         }
  //     };
  //     if (chat !== null) MessagesData();
  // }, [chat]);

  const handleToggleChannelDetailModal = () => {
    dispatch(setModalOnOpen(MODAL_CHANNEL_DETAIL));
  };

  const handleToggleMemberList = () => {
    setShowMemberList((prevState) => !prevState);
  };

  const handleUploadImg = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setUploadImg(reader.result);
    };
    reader.onerror = () => {
      console.error('something went wrong!');
    };
  };

  const handleChange = (e) => {
    e.preventDefault();
    setNewMessage(e.target.value);
  };

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  //Send message
  const handleSend = async (e) => {
    let url = '';
    if (uploadImg) {
      url = await uploadImages(uploadImg);
    }

    const message = {
      senderId: currentUserId,
      content: newMessage,
      chatId: chat._id,
      fileUrl: url,
      // createdAt: Date.now(),
    };
    // Send message to socket server
    const receiverId = chat.members.find((id) => id !== currentUserId);
    setSendMessage({ ...message, receiverId });

    // Send message to DB
    try {
      const { data } = await addMessage(message);
      setMessages([...messages, data]);
      setNewMessage('');
    } catch (error) {
      console.log(error);
    }
  };

  //Receive message from parent component
  // useEffect(() => {
  //     if (receiveMessage !== null && receiveMessage.chatId === chat._id) {
  //         setMessages([...messages, receiveMessage]);
  //     }
  // }, [receiveMessage]);

  //Always scroll to last message
  // useEffect(() => {
  //     scroll.current?.scrollIntoView({ behavior: 'smooth' });
  // }, [messages]);

  const handleShowEmojis = () => {
    setShowEmojis((prevState) => !prevState);
  };

  // const handleClickImage = (e) => {
  //     setPreviewImg(e.target.src);
  //     setIsOpenLightBox(true);
  // };

  const handleSelectEmoji = (e) => {
    let sym = e.unified.split('-');
    let codesArray = [];
    sym.forEach((el) => codesArray.push('0x' + el));
    let emoji = String.fromCodePoint(...codesArray);
    setNewMessage(newMessage + emoji);
  };

  // useEffect(() => {
  //     document.addEventListener('click', hideOnClickOutside, true);
  // }, []);

  // Hide on outside click
  // const hideOnClickOutside = (e) => {
  //     if (emojiRef.current && !emojiRef.current.contains(e.target)) {
  //         setShowEmojis(false);
  //     }
  // };

  return (
    <div className={cx('wrapper')}>
      <header className={cx('header')}>
        <div className={cx('header-left')}>
          <span className={cx('title')} onClick={handleToggleChannelDetailModal}>
            <Icon icon={<FaHashtag />} className={cx('icon-hashtag')} />
            Welcome-and-rules
          </span>
          <p className={cx('topic')}>Welcome new members.</p>
        </div>
        <div className={cx('header-right')}>
          <Button className={cx('toggle-member-btn')} onClick={handleToggleMemberList}>
            {showMemberList ? <Icon icon={<FaUsers />} size="2rem" /> : <Icon icon={<FaUsersSlash />} size="2rem" />}
          </Button>
          <Button className={cx('setting-btn')}>
            <Icon icon={<BsGear />} size="2rem" />
          </Button>
        </div>
      </header>

      <div className={cx('container')}>
        <div className={cx('chat-box')}>
          <div className={cx('content')}>
            <div className={cx('begin-message')}>
              <span className={cx('title')}>Welcome to</span>
              <span className={cx('room-name')}>Pisces Room</span>
              <span className={cx('sub-title')}>This is the beginning of this room.</span>
            </div>
          </div>

          <div className={cx('footer')}>
            <label className={cx('icon-image')} onClick={() => imageRef.current.click()}>
              <BsCardImage />
            </label>
            <input id="send-file" type="file" ref={imageRef} hidden onChange={handleUploadImg} />
            <input
              className={cx('input-message')}
              type="text"
              placeholder="Enter message..."
              value={newMessage}
              onChange={handleChange}
              onKeyDown={handleEnter}
            />
            <div className={cx('emoji')}>
              <button className={cx('emoji-icon')} onClick={handleShowEmojis}>
                <BsEmojiSmile />
              </button>
              {showEmojis && (
                <div ref={emojiRef} className={cx('picker-emoji')}>
                  <Picker
                    data={data}
                    onEmojiSelect={handleSelectEmoji}
                    previewPosition="none"
                    theme={themeMode === 'theme-mode-dark' ? 'dark' : 'light'}
                  />
                </div>
              )}
            </div>
            <div className={cx('icon-send')}>
              <BsCursor onClick={handleSend} />
            </div>
          </div>
        </div>
        {showMemberList && (
          <div className={cx('member-container')}>
            <header className={cx('member-header')}>Member-3</header>
            <div className={cx('member-list')}>
              {messageList.map((user, idx) => (
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
        )}
      </div>
      {/* {isOpenLightBox && (
                <div className={cx('light-box')}>
                    <Lightbox mainSrc={previewImg} onCloseRequest={() => setIsOpenLightBox(false)} />
                </div>
            )} */}
    </div>
  );
}

export default RoomChatBox;
