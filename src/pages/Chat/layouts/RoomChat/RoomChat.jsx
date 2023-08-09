import React from 'react';
import classNames from 'classnames/bind';

import styles from './RoomChat.module.scss';
import { BsGear } from 'react-icons/bs';
import {
  FaAngellist,
  FaAngleRight,
  FaBity,
  FaGg,
  FaGrunt,
  FaJava,
  FaJenkins,
  FaMicrochip,
  FaSnapchat,
  FaSpider,
  FaTheRedYeti,
} from 'react-icons/fa6';

const cx = classNames.bind(styles);

const RoomChat = () => {
  const channelList = [
    { id: 1, icon: <FaAngellist />, name: 'general' },
    { id: 2, icon: <FaBity />, name: 'culture' },
    { id: 3, icon: <FaGg />, name: 'marketing' },
    { id: 4, icon: <FaGrunt />, name: 'study' },
    { id: 5, icon: <FaJenkins />, name: 'school' },
    { id: 6, icon: <FaJava />, name: 'fruit' },
    { id: 7, icon: <FaSnapchat />, name: 'monkey' },
    { id: 8, icon: <FaTheRedYeti />, name: 'cow' },
    { id: 9, icon: <FaMicrochip />, name: 'bird' },
    { id: 10, icon: <FaSpider />, name: 'chicken' },
  ];

  return (
    <div className={cx('wrapper')}>
      <header className={cx('header')}>
        <img
          className={cx('banner')}
          src="https://images.unsplash.com/photo-1691030133693-84d7bbec65a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
          alt="banner"
        />
        <div className={cx('room-info')}>
          <span className={cx('room-name')}>User's room</span>
          <button className={cx('icon-setting')}>
            <BsGear />
          </button>
        </div>
      </header>
      <div className={cx('channel')}>
        <span className={cx('title')}>INFORMATION</span>
        <span className={cx('icon-dropdown')}>
          <FaAngleRight />
        </span>
      </div>
      <div className={cx('channel-list')}>
        {channelList.map((channel, idx) => (
          <div key={channel.id} className={cx('channel-item')}>
            <span className={cx('icon-channel')}>{channel.icon}</span>
            <span className={cx('name')}>{channel.name}</span>
            <span className={cx('icon-setting')}>
              <BsGear />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomChat;
