import classNames from 'classnames/bind';

import styles from './StartMessage.module.scss';

const cx = classNames.bind(styles);

const StartMessage = () => {
  return (
    <div className={cx('wrapper')}>
      <span className={cx('image')}></span>
      <span className={cx('text')}>You can choose channel to chat with everyone.</span>
    </div>
  );
};

export default StartMessage;
