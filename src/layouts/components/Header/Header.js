import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Header.module.scss';
import images from '~/assets/images';
import { MessageIcon } from '~/components/Icons';
import Menu from '~/components/Popper/Menu';
import Image from '~/components/Image';
import Search from '../Search';
import config from '~/config';
import { logOutUser } from '~/api/authApi';
import { logOutSuccess } from '~/redux/Slice/authSlice';
import { createAxios } from '~/api/axiosClient';

const cx = classNames.bind(styles);

const userMenu = [
    {
        icon: <FontAwesomeIcon icon={faBell} />,
        title: 'Language',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'VietNam',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faBell} />,
        title: 'Settings',
        to: '/settings',
    },
    {
        icon: <FontAwesomeIcon icon={faBell} />,
        title: 'Logout',
        to: '/logout',
        separate: true,
    },
];

function Header() {
    const user = useSelector((state) => state.auth.login.currentUser);
    const accessToken = user?.accessToken;
    const id = user?._id;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let axiosJWT = createAxios(user, dispatch, logOutSuccess);

    const handleMenuChange = (menuItem) => {
        switch (menuItem.title) {
            case 'Logout':
                logOutUser(dispatch, id, navigate, accessToken, axiosJWT);
                break;

            default:
                break;
        }
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo')}>
                    <img src={images.logo} alt="logo" />
                    <h1>Oriental Sun</h1>
                </Link>

                <Search />

                <div className={cx('actions')}>
                    <Tippy delay={[0, 50]} interactive content="Notification">
                        <button className={cx('action-btn')}>
                            <FontAwesomeIcon className={cx('notification-btn')} icon={faBell} />
                            <span className={cx('badge')}>12</span>
                        </button>
                    </Tippy>
                    <Tippy delay={[0, 50]} content="Message">
                        <button className={cx('action-btn')}>
                            <Link to={config.routes.chat}>
                                <MessageIcon />
                            </Link>
                            <span className={cx('badge')}>12</span>
                        </button>
                    </Tippy>

                    <Menu items={userMenu} onChange={handleMenuChange}>
                        <Image className={cx('user-avatar')} src={`${user.avatar}`} alt="Nguyen  van A" />
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
