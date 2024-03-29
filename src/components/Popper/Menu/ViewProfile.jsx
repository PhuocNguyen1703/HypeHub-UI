import classNames from 'classnames/bind';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '~/components/Button/Button';
import Image from '~/components/Image/Image';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function ViewProfile() {
    const user = useSelector((state) => state.auth.login.currentUser);
    return (
        <div className={cx('wrapper')}>
            <Link to={'/profile'} className={cx('view-profile')}>
                <Image className={cx('avatar')} src={`${user?.avatar}`} alt="Nguyen  van A" />
                <div className={cx('info')}>
                    <span className={cx('name')}>{user?.fullName}</span>
                    <span className={cx('position')}>{user?.position}</span>
                </div>
            </Link>
            <Button className={cx('menu-item')} to={'/profile'}>
                View profile
            </Button>
        </div>
    );
}

export default ViewProfile;
