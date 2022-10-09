import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { useDispatch, useSelector } from 'react-redux';
import { CgMenu, CgMoreVerticalAlt } from 'react-icons/cg';
import { IoLanguageOutline, IoLogOutOutline, IoSettingsOutline } from 'react-icons/io5';
import {
    BsFullscreen,
    BsChatSquareDots,
    BsBell,
    BsFullscreenExit,
    BsPersonBoundingBox,
    BsFillPersonPlusFill,
} from 'react-icons/bs';

import styles from './Header.module.scss';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu';
import Image from '~/components/Image';
import Search from '../Search';
import config from '~/config';
import { logOutUser } from '~/api/authApi';
import { logOutSuccess } from '~/redux/Slice/authSlice';
import { createAxios } from '~/api/axiosClient';
import Modal from '~/components/Modal';
import Setting from '../Setting';
import {
    setContactManagementModalIsOpen,
    setFaceRecognitionModalIsOpen,
    setFaceRecognitionTitle,
    setNotificationModalIsOpen,
    setSettingModalIsOpen,
} from '~/redux/Slice/modalSlice';
import { setIsFullscreen } from '~/redux/Slice/screenSlice';
import Checkin from '~/components/Modal/TimeKeeping/FaceRecognition';
import { setSidebarCollapsed } from '~/redux/Slice/layoutSlice';
import ContactManagement from '~/components/Modal/ContactManagement';
import Notification from '~/components/Notification';

const cx = classNames.bind(styles);

const userMenu = [
    {
        icon: <IoLanguageOutline />,
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
        icon: <BsPersonBoundingBox />,
        title: 'Check in',
    },
    {
        icon: <BsPersonBoundingBox />,
        title: 'Check out',
    },
    {
        icon: <IoSettingsOutline />,
        title: 'Settings',
        // to: '/settings',
    },
    {
        icon: <IoLogOutOutline />,
        title: 'Logout',
        to: '/login',
        separate: true,
    },
];

function Header() {
    const user = useSelector((state) => state.auth.login.currentUser);
    const { sidebarCollapsed } = useSelector((state) => state.layout);
    const { isFullscreen } = useSelector((state) => state.screen);
    const { notificationModalIsOpen, settingModalIsOpen, faceRecognitionModalIsOpen, contactManagementModalIsOpen } =
        useSelector((state) => state.modal);
    const accessToken = user?.accessToken;
    const id = user?._id;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let axiosJWT = createAxios(user, dispatch, logOutSuccess);

    const handleFullscreen = () => {
        const maxHeight = window.screen.height;
        const maxWidth = window.screen.width;
        const curHeight = window.innerHeight;
        const curWidth = window.innerWidth;

        if (maxWidth === curWidth && maxHeight === curHeight) {
            dispatch(setIsFullscreen(false));
            document.exitFullscreen();
        } else {
            dispatch(setIsFullscreen(true));
            document.documentElement.requestFullscreen().catch((e) => console.log(e));
        }
    };

    document.addEventListener('fullscreenchange', () => {
        const maxHeight = window.screen.height;
        const maxWidth = window.screen.width;
        const curHeight = window.innerHeight;
        const curWidth = window.innerWidth;

        if (maxWidth === curWidth && maxHeight === curHeight) {
            dispatch(setIsFullscreen(true));
        } else {
            dispatch(setIsFullscreen(false));
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'F11') {
            e.preventDefault();
        }
    });

    const handleMenuChange = (menuItem) => {
        switch (menuItem.title) {
            case 'Logout':
                logOutUser(dispatch, id, navigate, accessToken, axiosJWT);
                break;
            case 'Settings':
                dispatch(setSettingModalIsOpen(true));
                break;
            case 'Check in':
                dispatch(setFaceRecognitionTitle('Check in'));
                dispatch(setFaceRecognitionModalIsOpen(true));
                break;
            case 'Check out':
                dispatch(setFaceRecognitionTitle('Check out'));
                dispatch(setFaceRecognitionModalIsOpen(true));
                break;

            default:
                break;
        }
    };

    const handleNotification = () => {
        dispatch(setNotificationModalIsOpen(true));
    };

    const handleOpenFaceModal = () => {
        dispatch(setFaceRecognitionTitle('Sign up'));
        dispatch(setFaceRecognitionModalIsOpen(true));
    };

    const handleIsShowSidebar = () => {
        dispatch(setSidebarCollapsed(!sidebarCollapsed));
    };

    const handleContactManagement = () => {
        dispatch(setContactManagementModalIsOpen(true));
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('header-left')}>
                    <CgMenu className={cx('menu-icon')} onClick={handleIsShowSidebar} />
                    <Link to={config.routes.home} className={cx('logo')}>
                        <img src={images.logo} alt="logo" />
                        <h1>Minato</h1>
                    </Link>
                </div>

                <Search />

                <div className={cx('header-right')}>
                    <CgMoreVerticalAlt className={cx('more-icon')} />
                    <div className={cx('actions')}>
                        <div>
                            <Tippy delay={[0, 50]} interactive content="Language">
                                <button className={cx('action-btn')}>
                                    <span>EN</span>
                                    <IoLanguageOutline className={cx('icon')} />
                                </button>
                            </Tippy>
                        </div>
                        <div>
                            <Tippy
                                delay={[0, 50]}
                                interactive
                                content={isFullscreen ? 'Exit fullscreen' : 'Fullscreen'}
                            >
                                <button className={cx('action-btn')} onClick={handleFullscreen}>
                                    {isFullscreen ? (
                                        <BsFullscreenExit className={cx('icon')} />
                                    ) : (
                                        <BsFullscreen className={cx('icon')} />
                                    )}
                                </button>
                            </Tippy>
                        </div>
                        <div className={cx('notification')}>
                            <Tippy delay={[0, 50]} interactive content="Notification">
                                <button className={cx('action-btn')} onClick={handleNotification}>
                                    <BsBell className={cx('icon')} />
                                    <span className={cx('badge')}></span>
                                </button>
                            </Tippy>
                        </div>
                        <div>
                            <Tippy delay={[0, 50]} interactive content="Message">
                                <button className={cx('action-btn')}>
                                    <BsChatSquareDots className={cx('icon')} />
                                    <span className={cx('badge')}></span>
                                </button>
                            </Tippy>
                        </div>
                        <div>
                            <Tippy delay={[0, 50]} interactive content="Contact management">
                                <button className={cx('action-btn')} onClick={handleContactManagement}>
                                    <BsFillPersonPlusFill className={cx('icon')} />
                                </button>
                            </Tippy>
                        </div>
                        <div>
                            <Tippy delay={[0, 50]} interactive content="Sign up">
                                <button className={cx('action-btn')} onClick={handleOpenFaceModal}>
                                    <BsPersonBoundingBox className={cx('icon')} />
                                </button>
                            </Tippy>
                        </div>
                    </div>
                    <CgMoreVerticalAlt className={cx('more-icon')} />

                    <Menu items={userMenu} onChange={handleMenuChange} viewProfile={true}>
                        <Image className={cx('user-avatar')} src={`${user.avatar}`} alt="Nguyen  van A" />
                    </Menu>
                </div>
            </div>

            {notificationModalIsOpen && (
                <Modal>
                    <Notification />
                </Modal>
            )}

            {settingModalIsOpen && (
                <Modal>
                    <Setting />
                </Modal>
            )}
            {faceRecognitionModalIsOpen && (
                <Modal>
                    <Checkin />
                </Modal>
            )}
            {contactManagementModalIsOpen && (
                <Modal>
                    <ContactManagement />
                </Modal>
            )}
        </header>
    );
}

export default Header;
