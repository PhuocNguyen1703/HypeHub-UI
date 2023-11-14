import classNames from 'classnames/bind';

import { faker } from '@faker-js/faker';
import { Picker } from 'emoji-mart';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { BsCardImage, BsCursor, BsEmojiSmile, BsPaperclip } from 'react-icons/bs';
import Image from '~/components/Image/Image';
import Modal from '~/components/Modal/Modal';
import { chatHistory } from '~/data/mock-data';
import { handleClickOutSide } from '~/utils/handleClickOutSide';
import styles from './DirectConversation.module.scss';
import Icon from '~/components/Icon/Icon';

const cx = classNames.bind(styles);

const DirectConversation = () => {
  const conversation = chatHistory;

  const [showEmojis, setShowEmojis] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const [messages, setMessages] = useState();
  const [newMessage, setNewMessage] = useState('');
  const [uploadImg, setUploadImg] = useState();
  const [isOpenLightBox, setIsOpenLightBox] = useState(false);
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const scroll = useRef(null);
  const imageRef = useRef(null);
  const emojiRef = useRef(null);
  const lightBoxRef = useRef(null);
  const moreMenuRef = useRef(null);

  // const separateDate = Array.from(
  //   new Set(conversation.messages?.map((message) => dayjs(message.createdAt).format('MMMM D, YYYY'))),
  // );

  // const moreAction = [
  //   {
  //     icon: <BsPencil />,
  //     title: 'Edit Message',
  //   },
  //   {
  //     icon: <BsTrash />,
  //     title: 'Delete Message',
  //   },
  // ];

  //handleClick out side
  useEffect(() => {
    handleClickOutSide(isOpenLightBox, setIsOpenLightBox, lightBoxRef);
  }, [isOpenLightBox]);

  useEffect(() => {
    handleClickOutSide(showMoreMenu, setShowMoreMenu, moreMenuRef);
  }, [showMoreMenu]);

  const handleHoverOutSide = () => {
    setShowMoreMenu(false);
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

  // Always scroll to last message
  useEffect(() => {
    scroll.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

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

  const handleOnClickImage = (url) => {
    setImageUrl(url);
    setIsOpenLightBox(true);
  };

  const handleToggleMoreMenu = () => {
    setShowMoreMenu((prevState) => !prevState);
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('content')}>
        <div className={cx('begin-message')}>
          <Image className={cx('user-avatar-begin')} src={faker.image.avatar()} alt="avatar" />
          <span className={cx('user-name')}>{faker.person.fullName()}</span>
          <p className={cx('welcome-text')}>
            This is the beginning of your direct message history with
            <strong>{faker.person.fullName()}</strong>.
          </p>
        </div>
        {conversation.map((message, idx) => (
          <div ref={scroll} key={idx} className={cx('message-container', message.to === 'owner' && 'owner')}>
            {message.to !== 'owner' && <Image className={cx('avatar')} src={faker.image.avatar()} alt="avatar" />}
            <div className={cx('message')}>
              <p className={cx('text')}>{message?.msg}</p>
              {message?.img_url && (
                <div className={cx('image-container')}>
                  <img
                    className={cx('image')}
                    src={message.img_url}
                    alt="img_img"
                    onClick={() => handleOnClickImage(message.img_url)}
                  />
                </div>
              )}
              <span className={cx('time')}>{message.createdAt}</span>
            </div>
          </div>
        ))}
      </div>

      <footer className={cx('footer')}>
        <div className={cx('input-group')}>
          <label onClick={() => imageRef.current.click()}>
            <Icon icon={<BsPaperclip />} className={cx('icon-image')}></Icon>
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
            <button className={cx('icon-emoji')} onClick={handleShowEmojis}>
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
        </div>
        <div className={cx('btn-send')}>
          <BsCursor onClick={handleSend} />
        </div>
      </footer>
      {isOpenLightBox && (
        <Modal>
          <motion.div
            ref={lightBoxRef}
            initial={{ x: '-50%', y: '-50%', scale: 0 }}
            animate={{ scale: 1 }}
            className={cx('wrapper-image')}
          >
            <img className={cx('image')} srcSet={imageUrl} alt="file_url" />
          </motion.div>
        </Modal>
      )}
    </div>
  );
};

export default DirectConversation;
