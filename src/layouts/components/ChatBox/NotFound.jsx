import classNames from 'classnames/bind';

import { images } from '~/assets/images';
import styles from './NotFound.module.scss';

const cx = classNames.bind(styles);

function NotFound() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('logo')} src={images.logo} alt="logo" />
            <span className={cx('title')}>Welcome Message......</span>
        </div>
    );
}

export default NotFound;
