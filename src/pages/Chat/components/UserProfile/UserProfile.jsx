import classNames from 'classnames/bind';

import styles from './UserProfile.module.scss';
import Image from '~/components/Image/Image';
import { BsRecord2Fill } from 'react-icons/bs';

const cx = classNames.bind(styles);

const UserProfile = () => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('banner')}>
        <img
          className={cx('image')}
          src="https://images.unsplash.com/photo-1682685797507-d44d838b0ac7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
          alt="banner"
        />
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
      </div>
      <div className={cx('profile')}>
        <span className={cx('user-name')}>Brian Nguyen</span>
        <span className={cx('email')}>admin@gmail.com</span>
        <label className={cx('label')}>
          Join company since
          <span className={cx('date')}>Jul 12 2023</span>
        </label>
        <label className={cx('label')}>
          Note
          <textarea className={cx('textarea')} placeholder="Add a note"></textarea>
        </label>
      </div>
    </div>
  );
};

export default UserProfile;
