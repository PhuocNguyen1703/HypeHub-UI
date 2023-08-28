import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';

import { BsRecord2Fill } from 'react-icons/bs';
import { FaXmark } from 'react-icons/fa6';
import Icon from '~/components/Icon/Icon';
import Image from '~/components/Image/Image';
import { handleClickOutSide } from '~/utils/handleClickOutSide';
import styles from './CreateMessageForm.module.scss';
import Search from './SearchAccount/Search';

const cx = classNames.bind(styles);

function CreateMessageForm({ isOpen, isHide }) {
  const [memberList, setMemberList] = useState([]);
  const createMessageRef = useRef(null);

  //handleClick out side
  useEffect(() => {
    handleClickOutSide(isOpen, isHide, createMessageRef);
  }, []);

  const handleOnClickRemove = (selectedUser) => {
    const newMemberList = memberList.filter((user) => user.id !== selectedUser.id);
    setMemberList(newMemberList);
  };

  return (
    <div ref={createMessageRef} className={cx('wrapper')}>
      <header className={cx('header')}>
        <span className={cx('title')}>Select Friends</span>
        <span className={cx('sub-title')} style={{ color: memberList.length > 8 && 'red' }}>
          You can add <strong>{9 - memberList.length}</strong> more friends.
        </span>
      </header>
      <div className={cx('from-search')}>
        <Search memberList={memberList} setMemberList={setMemberList} />
      </div>
      <span className={cx('label-member')}>Member : {memberList.length}</span>
      {memberList.length > 0 ? (
        <div className={cx('member-list')}>
          {memberList.map((user, idx) => (
            <div key={idx} className={cx('user')}>
              <div className={cx('info')}>
                <div className={cx('avatar')}>
                  <Image className={cx('photo')} src={user.avatar} alt="avatar" />
                  <span className={cx('icon-dot')}>
                    <BsRecord2Fill />
                  </span>
                </div>
                <div className={cx('user-name')}>
                  <span className={cx('name')}>{user.full_name}</span>
                </div>
              </div>
              <div className={cx('remove-btn')} onClick={() => handleOnClickRemove(user)}>
                <Icon icon={<FaXmark />} className={cx('icon-remove')} />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className={cx('no-friends')}>
          <div className={cx('image')}></div>
          <span className={cx('text')}>No friends found that are not already in this DM.</span>
        </div>
      )}

      <button type="submit" className={cx('submit-btn', memberList.length < 1 && 'disabled')}>
        Create DM
      </button>
    </div>
  );
}

export default CreateMessageForm;
