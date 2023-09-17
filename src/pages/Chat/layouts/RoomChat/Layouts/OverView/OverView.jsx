import classNames from 'classnames/bind';

import { BsFillCloudArrowUpFill } from 'react-icons/bs';
import Image from '~/components/Image/Image';
import styles from './OverView.module.scss';
import Icon from '~/components/Icon/Icon';
import { FaRegCopy } from 'react-icons/fa';

const cx = classNames.bind(styles);

const OverView = () => {
  return (
    <div className={cx('wrapper')}>
      <header className={cx('header')}>Room Overview</header>
      <section className={cx('room-info')}>
        <div className={cx('left-container')}>
          <div className={cx('avatar')}>
            <Image src="" alt="avatar" className={cx('avatar-img')} />
            <div className={cx('upload-action')}>
              <span className={cx('note')}>We recommend an image of at least 512x512 for the room.</span>
              <button className={cx('upload-btn')}>Upload Image</button>
            </div>
          </div>
          <label className={cx('room-name')}>
            Room Name
            <input type="text" className={cx('input')} />
          </label>
        </div>
        <label className={cx('banner-label')}>
          Banner
          <div className={cx('banner-img')}>
            <span className={cx('upload-icon')}>
              <BsFillCloudArrowUpFill />
            </span>
            <span className={cx('text')}>No file chosen, yet!</span>
          </div>
        </label>
      </section>
      <section className={cx('room-link')}>
        <label className={cx('room-link-label')}>
          Room Link
          <div className={cx('input-group')}>
            <input type="text" className={cx('input')} />
            <Icon icon={<FaRegCopy />} className={cx('icon-copy')} />
          </div>
        </label>
        <label className={cx('invite-code')}>
          Invite Code
          <div className={cx('input-group')}>
            <input type="text" className={cx('input')} />
            <Icon icon={<FaRegCopy />} className={cx('icon-copy')} />
          </div>
        </label>
      </section>
    </div>
  );
};

export default OverView;
