import classNames from 'classnames/bind';
import { useState } from 'react';
import {
  BsBookmarks,
  BsCardList,
  BsFillBookmarksFill,
  BsFunnel,
  BsPatchExclamation,
  BsPersonPlus,
  BsPinAngle,
  BsRecord2Fill,
  BsTag,
} from 'react-icons/bs';
import Search from '~/components/Search/Message/Message';

import { FaRegAddressBook } from 'react-icons/fa6';
import { NavLink, Outlet } from 'react-router-dom';
import Button from '~/components/Button/Button';
import Icon from '~/components/Icon/Icon';
import Image from '~/components/Image/Image';
import { chatList } from '~/data/mock-data';
import CreateMessageForm from '../components/CreateMessage/CreateMessageForm';
import styles from './PersonalChat.module.scss';
import CategoryMenu from './CategoryMenu/CategoryMenu';

const cx = classNames.bind(styles);

const PersonalChat = () => {
  const categoryMenu = [
    {
      icon: <BsCardList />,
      title: 'All',
    },
    {
      icon: <BsPatchExclamation />,
      title: 'Unread',
    },
    {
      icon: <BsPinAngle />,
      title: 'Pinned',
    },
    {
      icon: <BsBookmarks />,
      title: 'Filter By Label',
      separate: true,
      children: {
        title: 'Labels',
        data: [
          {
            icon: <BsFillBookmarksFill />,
            colorLeftIcon: '#c0392b',
            title: 'Client',
          },
          {
            icon: <BsFillBookmarksFill />,
            colorLeftIcon: '#0984e3',
            title: 'Family',
          },
          {
            icon: <BsFillBookmarksFill />,
            colorLeftIcon: '#6ab04c',
            title: 'Work',
          },
          {
            icon: <BsFillBookmarksFill />,
            colorLeftIcon: '#cabdbf',
            title: 'Friend',
          },
          {
            icon: <BsFillBookmarksFill />,
            colorLeftIcon: '#6c5ce7',
            title: 'Co-worker',
          },
          {
            icon: <BsFillBookmarksFill />,
            colorLeftIcon: '#747d8c',
            title: 'Stranger',
          },
          {
            icon: <BsFillBookmarksFill />,
            colorLeftIcon: '#fad165',
            title: 'Important',
          },
        ],
      },
    },
  ];

  const [conversation, setConversation] = useState({});
  const [title, setTitle] = useState('All');
  const [showCategoryMenu, setShowCategoryMenu] = useState(false);
  const [showCreateMessage, setShowCreateMessage] = useState(false);

  const handleMenuChange = (title) => {
    setTitle(title);
  };

  const handleOnCreateMessage = () => {
    setShowCreateMessage(true);
  };

  const handleOnClickLabel = (chat) => {
    setConversation(chat);
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('sidebar')}>
        <header className={cx('header')}>
          <span className={cx('title')}>{title + ' Chats'}</span>
          <div className={cx('action-group')}>
            <CategoryMenu items={categoryMenu} onChange={handleMenuChange}>
              <Icon icon={<BsFunnel />} className={cx('category-btn')} />
            </CategoryMenu>
            <NavLink to="" className={cx('contact-btn')} end>
              <Icon icon={<FaRegAddressBook />} size="1.8rem" />
            </NavLink>
            <Button className={cx('create-btn')} onClick={handleOnCreateMessage}>
              <Icon icon={<BsPersonPlus />} size="1.8rem" />
            </Button>
            {showCreateMessage && <CreateMessageForm isOpen={showCreateMessage} isHide={setShowCreateMessage} />}
          </div>
        </header>
        <div className={cx('search')}>
          <Search />
        </div>
        <section className={cx('chat-list')}>
          {chatList.map((chat) => (
            <NavLink
              to={chat.id}
              key={chat.id}
              className={(nav) => cx('chat', { active: nav.isActive })}
              onClick={() => handleOnClickLabel(chat)}
              end
            >
              <div className={cx('avatar')}>
                <Image className={cx('photo')} src={chat.avatar} alt="avatar" />
                {chat.online && <Icon icon={<BsRecord2Fill />} className={cx('icon-dot')} />}
              </div>
              <div className={cx('info')}>
                <span className={cx('name')}>{chat.name}</span>
                <p className={cx('last-msg')}>{chat.msg}</p>
              </div>
              {chat.unread !== 0 && <span className={cx('unread')}></span>}
            </NavLink>
          ))}
        </section>
      </div>
      <div className={cx('container')}>
        {/* <Outlet context={{ conversation }} /> */}
        <Outlet />
      </div>
    </div>
  );
};

export default PersonalChat;
