import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';

import { BsRecord2Fill } from 'react-icons/bs';
import { FaXmark } from 'react-icons/fa6';
import Icon from '~/components/Icon/Icon';
import Image from '~/components/Image/Image';
import { handleClickOutSide } from '~/utils/handleClickOutSide';
import styles from './InviteFriend.module.scss';
import Search from '../CreateMessage/SearchAccount/Search';

const cx = classNames.bind(styles);

function InviteFriend({ isOpen, isHide, currentMembers }) {
  const [memberList, setMemberList] = useState([]);
  const createMessageRef = useRef(null);

  console.log(memberList);

  const limitMembersLength = 9 - currentMembers.length - memberList.length;

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
        <span className={cx('title')}>Invite Friends</span>
        <span className={cx('sub-title')} style={{ color: limitMembersLength === 0 && 'red' }}>
          You can add <strong>{limitMembersLength}</strong> more friends.
        </span>
      </header>
      <div className={cx('from-search')}>
        <Search memberList={memberList} setMemberList={setMemberList} currentMembers={currentMembers} />
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
          <span className={cx('text')}>No friends invited that are from search.</span>
        </div>
      )}

      <button type="submit" className={cx('submit-btn', memberList.length < 1 && 'disabled')}>
        Invite friends
      </button>
    </div>
  );
}

export default InviteFriend;
