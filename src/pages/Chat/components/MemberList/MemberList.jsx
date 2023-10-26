import classNames from 'classnames/bind';
import Image from '~/components/Image/Image';
import styles from './MemberList.module.scss';
import Icon from '~/components/Icon/Icon';
import { OwnerGroupIcon } from '~/components/Icons';
import Tippy from '@tippyjs/react';

const cx = classNames.bind(styles);

const MemberList = ({ conversation }) => {
  return (
    <div className={cx('wrapper')}>
      <span className={cx('title')}>Member - {conversation.members.length}</span>
      <div className={cx('member-list')}>
        {conversation.members.map((member, idx) => (
          <div key={idx} className={cx('member')}>
            <Image
              src="https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
              alt="avatar"
              className={cx('avatar')}
            />
            <span className={cx('name')}>Brian Nguyen</span>
            <div>
              <Tippy delay={[0, 50]} interactive content="Group Owner">
                <span className={cx('icon-owner')}>
                  <OwnerGroupIcon />
                </span>
              </Tippy>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemberList;
