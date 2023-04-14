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
import Image from '~/components/Image';
import Search from '../Search';
import config from '~/config';
import { logOutUser } from '~/api/authApi';
import { logOutSuccess } from '~/redux/Slice/authSlice';
import { createAxios } from '~/api/axiosClient';
import Setting from '../Setting';
import { setSidebarCollapsed } from '~/redux/Slice/layoutSlice';
import ContactManagement from '~/components/Modal/ContactManagement';
import Notification from '~/components/Notification';
import Register from '~/components/Modal/Register';
import UserMenu from '~/components/UserMenu';
import FaceRecognition from '~/components/Modal/TimeKeeping/FaceRecognition';

const cx = classNames.bind(styles);

function Header() {
    const { currentUser } = useSelector((state) => state.auth.login);
    const { sidebarCollapsed } = useSelector((state) => state.layout);
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [showContactModal, setShowContactModal] = useState(false);
    const [showRegisterModal, setShowRegisterModal] = useState(false);
    const [showNotificationModal, setShowNotificationModal] = useState(false);
    const [showSettingModal, setShowSettingModal] = useState(false);
    const [showFaceRecognitionModal, setShowFaceRecognitionModal] = useState(false);
    const [faceRecognitionTitle, setFaceRecognitionTitle] = useState('');
    const accessToken = currentUser?.accessToken;
    const id = currentUser?._id;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let axiosJWT = createAxios(currentUser, dispatch, logOutSuccess);

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
                        title: 'Tiếng Việt (Việt Nam)',
                    },
                    {
                        code: 'ja',
                        title: '日本語 (日本)',
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
        },
        {
            icon: <IoLogOutOutline />,
            title: 'Logout',
            to: '/login',
            separate: true,
        },
    ];

    const adminMenu = [
        {
            icon: <BsFillPersonPlusFill />,
            title: 'Create user',
        },
        ...userMenu,
    ];

    const handleFullscreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch((err) => console.log(err));
        } else if (document.exitFullscreen) {
            document.exitFullscreen().catch((err) => console.log(err));
        }
    };

    document.addEventListener('fullscreenchange', () => {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'F11') {
                e.preventDefault();
            }
        });

        if (!document.fullscreenElement) {
            setIsFullScreen(false);
        } else if (document.exitFullscreen) {
            setIsFullScreen(true);
        }
    });

    const toggleShowRegisterModal = () => {
        setShowRegisterModal(true);
    };

    const handleMenuChange = (title) => {
        if (title === 'Logout') logOutUser(dispatch, id, navigate, accessToken, axiosJWT);

        if (title === 'Settings') setShowSettingModal(true);

        if (title === 'Check in') {
            setFaceRecognitionTitle('Check in');
            setShowFaceRecognitionModal(true);
        }

        if (title === 'Check out') {
            setFaceRecognitionTitle('Check out');
            setShowFaceRecognitionModal(true);
        }

        if (title === 'Create user') toggleShowRegisterModal();
    };

    const handleShowNotificationModal = () => {
        setShowNotificationModal(true);
    };

    const handleOpenFaceModal = () => {
        setFaceRecognitionTitle('Sign up');
        setShowFaceRecognitionModal(true);
    };

    const handleIsShowSidebar = () => {
        dispatch(setSidebarCollapsed(!sidebarCollapsed));
    };

    const handleContactManagement = () => {
        setShowContactModal(true);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header-left')}>
                <CgMenu onClick={handleIsShowSidebar} />
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
                        <Tippy delay={[0, 50]} interactive content={isFullScreen ? 'Exit fullscreen' : 'Fullscreen'}>
                            <button className={cx('action-btn')} onClick={handleFullscreen}>
                                {isFullScreen ? (
                                    <BsFullscreenExit className={cx('icon')} />
                                ) : (
                                    <BsFullscreen className={cx('icon')} />
                                )}
                            </button>
                        </Tippy>
                    </div>
                    <div className={cx('notification')}>
                        <Tippy delay={[0, 50]} interactive content="Notification">
                            <button className={cx('action-btn')} onClick={handleShowNotificationModal}>
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
                    {currentUser?.faceId ? null : (
                        <div>
                            <Tippy delay={[0, 50]} interactive content="Sign up">
                                <button className={cx('action-btn')} onClick={handleOpenFaceModal}>
                                    <BsPersonBoundingBox className={cx('icon')} />
                                </button>
                            </Tippy>
                        </div>
                    )}
                </div>
                <CgMoreVerticalAlt className={cx('more-icon')} />

                <UserMenu
                    items={currentUser?.isAdmin ? adminMenu : userMenu}
                    onChange={handleMenuChange}
                    viewProfile={true}
                >
                    <Image className={cx('user-avatar')} src={`${currentUser?.avatar}`} alt="Nguyen  van A" />
                </UserMenu>
            </div>

            <Register show={showRegisterModal} setShowRegisterModal={setShowRegisterModal} />

            <Notification show={showNotificationModal} setShowNotificationModal={setShowNotificationModal} />

            <Setting show={showSettingModal} setShowSettingModal={setShowSettingModal} />

            {showFaceRecognitionModal && (
                <FaceRecognition
                    show={showFaceRecognitionModal}
                    title={faceRecognitionTitle}
                    setShowFaceRecognitionModal={setShowFaceRecognitionModal}
                />
            )}

            <ContactManagement show={showContactModal} setShowContactModal={setShowContactModal} />
        </div>
    );
}

export default Header;
