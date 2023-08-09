import classNames from 'classnames/bind';
import { ImSpinner9 } from 'react-icons/im';

import { images } from '~/assets/images';
import styles from './Loading.module.scss';

const cx = classNames.bind(styles);

function Loading() {
    return (
        <div className={cx('wrapper')}>
            <img src={images.logo} alt="logo" className={cx('logo')} />
            <span className={cx('title')}>Thanks for the patience</span>
            <p className={cx('sub-title')}>Great things are coming to you</p>
            <ImSpinner9 className={cx('icon')} />
        </div>
    );
}

export default Loading;
