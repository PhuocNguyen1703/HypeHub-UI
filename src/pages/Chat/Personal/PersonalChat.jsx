import classNames from 'classnames/bind';
import { useState } from 'react';
import { BsPeople, BsPlus, BsRecord2Fill } from 'react-icons/bs';
import Search from '~/components/Search/Message/Message';

import Image from '~/components/Image/Image';
import CreateMessageForm from '../components/CreateMessage/CreateMessageForm';
import styles from './PersonalChat.module.scss';
import { NavLink, Outlet } from 'react-router-dom';
import Icon from '~/components/Icon/Icon';
import { chatData } from '~/data/mock-data';

const cx = classNames.bind(styles);

const PersonalChat = () => {
  const [conversation, setConversation] = useState({});
  const [showCreateMessage, setShowCreateMessage] = useState(false);

  const handleOnCreateMessage = () => {
    setShowCreateMessage(true);
  };

  const handleOnClickLabel = (conversation) => {
    setConversation(conversation);
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('sidebar')}>
        <div className={cx('search')}>
          <Search />
        </div>
        <NavLink to="" className={(nav) => cx('friends', { active: nav.isActive })} end>
          <Icon icon={<BsPeople />} size="2rem" />
          <span className={cx('title')}>Friends</span>
        </NavLink>
        <div className={cx('direct-messages')}>
          <span className={cx('title')}>DIRECT MESSAGES</span>
          <button className={cx('create-message-btn')} onClick={handleOnCreateMessage}>
            <BsPlus />
          </button>
          {showCreateMessage && <CreateMessageForm isOpen={showCreateMessage} isHide={setShowCreateMessage} />}
        </div>
        <div className={cx('message-list')}>
          {chatData.conversations?.map((conversation) => (
            <NavLink
              to={conversation._id}
              key={conversation._id}
              className={(nav) => cx('user', { active: nav.isActive })}
              end
              onClick={() => handleOnClickLabel(conversation)}
            >
              <div className={cx('info')}>
                <div className={cx('avatar')}>
                  <Image className={cx('photo')} src={conversation.cover_avatar} alt="avatar" />
                  <Icon icon={<BsRecord2Fill />} className={cx('icon-dot')} />
                </div>
                <div className={cx('user-name')}>
                  <span className={cx('name')}>{conversation.members.join(', ')}</span>
                  {conversation.members.length > 1 && (
                    <span className={cx('member-count')}>{conversation.members.length} Members</span>
                  )}
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
      <div className={cx('container')}>
        <Outlet context={{ conversation }} />
      </div>
    </div>
  );
};

export default PersonalChat;
