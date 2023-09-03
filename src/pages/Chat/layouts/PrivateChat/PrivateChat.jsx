import classNames from 'classnames/bind';
import { useState } from 'react';
import { BsPeople, BsPlus, BsRecord2Fill } from 'react-icons/bs';
import Search from '~/components/Search/Message/Message';

import Image from '~/components/Image/Image';
import CreateMessageForm from '../../components/CreateMessage/CreateMessageForm';
import styles from './PrivateChat.module.scss';
import { NavLink, Outlet } from 'react-router-dom';
import Icon from '~/components/Icon/Icon';

const cx = classNames.bind(styles);

const PrivateChat = () => {
  const [showCreateMessage, setShowCreateMessage] = useState(false);

  const memberList = [
    {
      id: '123asd13123',
      avatar:
        'https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      member: ['Tony', 'Yama', 'Alex nguyen'],
    },
    {
      id: '13sadasd123asdasd',
      avatar:
        'https://images.unsplash.com/photo-1640960543409-dbe56ccc30e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',

      member: ['Tony'],
    },
    {
      id: '123hdsuygfysdf',
      avatar:
        'https://images.unsplash.com/photo-1640951613773-54706e06851d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      member: ['Thomson'],
    },
    {
      id: 'asdyfjyqwe123asd',
      avatar:
        'https://images.unsplash.com/photo-1608889175123-8ee362201f81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      member: ['Yamamoto Yuki', 'Brian Nguyen', 'Alex nguyen'],
    },
    {
      id: 'asdigjq34',
      avatar:
        'https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      member: ['Yama'],
    },
    {
      id: 'as231zd24',
      avatar:
        'https://plus.unsplash.com/premium_photo-1688891564708-9b2247085923?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      member: ['Alex nguyen'],
    },
    {
      id: 'asd3zxd34',
      avatar:
        'https://plus.unsplash.com/premium_photo-1688891564708-9b2247085923?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      member: ['Tony', 'Yama', 'Alex nguyen', 'Tony', 'Yama', 'Alex nguyen'],
    },
    {
      id: 'asezxd234',
      avatar:
        'https://plus.unsplash.com/premium_photo-1688891564708-9b2247085923?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      member: ['Tony', 'Yama'],
    },
    {
      id: 'asdq31eazd234',
      avatar:
        'https://plus.unsplash.com/premium_photo-1688891564708-9b2247085923?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      member: ['Tony', 'Yama', 'Alex nguyen', 'Victoria'],
    },
    {
      id: 'asdadqwazxdd34',
      avatar:
        'https://plus.unsplash.com/premium_photo-1688891564708-9b2247085923?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      member: ['Victoria'],
    },
  ];

  const handleOnCreateMessage = () => {
    setShowCreateMessage(true);
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
          {memberList.map((user, idx) => (
            <NavLink to={user.id} key={user.id} className={(nav) => cx('user', { active: nav.isActive })} end>
              <div className={cx('info')}>
                <div className={cx('avatar')}>
                  <Image className={cx('photo')} src={user.avatar} alt="avatar" />
                  <Icon icon={<BsRecord2Fill />} className={cx('icon-dot')} />
                </div>
                <div className={cx('user-name')}>
                  <span className={cx('name')}>{user.member.join(', ')}</span>
                  {user.member.length > 1 && <span className={cx('member-count')}>{user.member.length} Members</span>}
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
      <div className={cx('container')}>
        <Outlet />
      </div>
    </div>
  );
};

export default PrivateChat;
