import classNames from 'classnames/bind';
import { useEffect, useRef } from 'react';

import { BsRecord2Fill } from 'react-icons/bs';
import { HiCheck } from 'react-icons/hi';
import Image from '~/components/Image/Image';
import { handleClickOutSide } from '~/utils/handleClickOutSide';
import styles from './CreateMessageForm.module.scss';

const cx = classNames.bind(styles);

function CreateMessageForm({ isOpen, isHide }) {
  const createMessageRef = useRef(null);

  const addedMember = [
    {
      id: 1,
      avatar:
        'https://plus.unsplash.com/premium_photo-1688891564708-9b2247085923?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      name: 'Victoria',
    },
    {
      id: 2,
      avatar:
        'https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      name: 'Brian Nguyen',
    },
    {
      id: 3,
      avatar:
        'https://images.unsplash.com/photo-1608889175123-8ee362201f81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      name: 'Yamamoto Yuki',
    },
    {
      id: 4,
      avatar:
        'https://images.unsplash.com/photo-1640951613773-54706e06851d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      name: 'Thomson',
    },
    {
      id: 5,
      avatar:
        'https://images.unsplash.com/photo-1640960543409-dbe56ccc30e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      name: 'Alex Nguyen',
    },
    {
      id: 6,
      avatar:
        'https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      name: 'Tony',
    },
    {
      id: 7,
      avatar:
        'https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      name: 'Tony',
    },
    {
      id: 8,
      avatar:
        'https://images.unsplash.com/photo-1640960543409-dbe56ccc30e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      name: 'Alex Nguyen',
    },
    {
      id: 9,
      avatar:
        'https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      name: 'Tony',
    },
  ];

  const searchResult = [
    {
      id: 1,
      avatar:
        'https://plus.unsplash.com/premium_photo-1688891564708-9b2247085923?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      name: 'Victoria',
    },
    {
      id: 2,
      avatar:
        'https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      name: 'Brian Nguyen',
    },
    {
      id: 3,
      avatar:
        'https://images.unsplash.com/photo-1608889175123-8ee362201f81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      name: 'Yamamoto Yuki',
    },
    {
      id: 4,
      avatar:
        'https://images.unsplash.com/photo-1640951613773-54706e06851d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      name: 'Thomson',
    },
    {
      id: 5,
      avatar:
        'https://images.unsplash.com/photo-1640960543409-dbe56ccc30e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      name: 'Alex Nguyen',
    },
    {
      id: 6,
      avatar:
        'https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      name: 'Tony',
    },
  ];

  //handleClick out side
  useEffect(() => {
    handleClickOutSide(isOpen, isHide, createMessageRef);
  }, []);

  return (
    <div ref={createMessageRef} className={cx('wrapper')}>
      <header className={cx('header')}>
        <span className={cx('title')}>Select Friends</span>
        <span className={cx('sub-title')}>You can add 9 more friends.</span>
      </header>
      <div className={cx('form-search')}>
        <input type="text" className={cx('input')} placeholder="Type the username of a friend" />
      </div>
      <span className={cx('label-member')}>Member :</span>
      <div className={cx('member-list')}>
        {addedMember.map((user, idx) => (
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
            <label className={cx('checkbox')}>
              <input
                type="checkbox"
                className={cx('checkbox-ipt')}
                // onChange={() => handleOnClickCheckBox(idx)}
                // checked={item?.done}
              />
              <span className={cx('icon-check')}>
                <HiCheck />
              </span>
            </label>
          </div>
        ))}
      </div>
      {/* <div className={cx('search-result')}>
        <div className={cx('not-found')}>
          <div className={cx('image')}></div>
          <span className={cx('text')}>No friends found that are not already in this DM.</span>
        </div>
        <div className={cx('result-list')}>
          <div className={cx('user')}>
            <div className={cx('info')}>
              <div className={cx('avatar')}>
                <Image
                  className={cx('photo')}
                  src="https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt="avatar"
                />
                <span className={cx('icon-dot')}>
                  <BsRecord2Fill />
                </span>
              </div>
              <div className={cx('user-name')}>
                <span className={cx('name')}>Brian Nguyen</span>
              </div>
            </div>
            <label className={cx('checkbox')}>
              <input
                type="checkbox"
                className={cx('checkbox-ipt')}
                // onChange={() => handleOnClickCheckBox(idx)}
                // checked={item?.done}
              />
              <span className={cx('icon-check')}>
                <HiCheck />
              </span>
            </label>
          </div>
          <div className={cx('user')}>
            <div className={cx('info')}>
              <div className={cx('avatar')}>
                <Image
                  className={cx('photo')}
                  src="https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt="avatar"
                />
                <span className={cx('icon-dot')}>
                  <BsRecord2Fill />
                </span>
              </div>
              <div className={cx('user-name')}>
                <span className={cx('name')}>Brian Nguyen</span>
              </div>
            </div>
            <label className={cx('checkbox')}>
              <input
                type="checkbox"
                className={cx('checkbox-ipt')}
                // onChange={() => handleOnClickCheckBox(idx)}
                // checked={item?.done}
              />
              <span className={cx('icon-check')}>
                <HiCheck />
              </span>
            </label>
          </div>
          <div className={cx('user')}>
            <div className={cx('info')}>
              <div className={cx('avatar')}>
                <Image
                  className={cx('photo')}
                  src="https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt="avatar"
                />
                <span className={cx('icon-dot')}>
                  <BsRecord2Fill />
                </span>
              </div>
              <div className={cx('user-name')}>
                <span className={cx('name')}>Brian Nguyen</span>
              </div>
            </div>
            <label className={cx('checkbox')}>
              <input
                type="checkbox"
                className={cx('checkbox-ipt')}
                // onChange={() => handleOnClickCheckBox(idx)}
                // checked={item?.done}
              />
              <span className={cx('icon-check')}>
                <HiCheck />
              </span>
            </label>
          </div>
        </div>
      </div> */}
      <button type="submit" className={cx('submit-btn')}>
        Create DM
      </button>
    </div>
  );
}

export default CreateMessageForm;
