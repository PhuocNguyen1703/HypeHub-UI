import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import { useState } from 'react';
import {
    BsBell,
    BsChatSquareDots,
    BsFillPersonPlusFill,
    BsFullscreen,
    BsFullscreenExit,
    BsPersonBoundingBox,
} from 'react-icons/bs';
import { CgMenu, CgMoreVerticalAlt } from 'react-icons/cg';
import { IoLanguageOutline, IoLogOutOutline, IoSettingsOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import 'tippy.js/dist/tippy.css';

import { CNFlagIcon, JPFlagIcon, KRFlagIcon, THFlagIcon, USFlagIcon, VNFlagIcon } from '~/components/Icons';
import Image from '~/components/Image/Image';
import Message from '~/components/Message/Message';
import ContactManagement from '~/components/Modal/ContactManagement/ContactManagement';
import FaceRecognition from '~/components/Modal/TimeKeeping/FaceRecognition/FaceRecognition';
import Notification from '~/components/Notification/Notification';
import UserMenu from '~/components/UserMenu/UserMenu';
import Register from '~/pages/Auth/Register';
import { logOutSuccess } from '~/redux/Slice/authSlice';
import { setSidebarCollapsed } from '~/redux/Slice/layoutSlice';
import { logOutUser } from '~/services/authApi';
import { createAxios } from '~/services/axiosClient';
import Search from '../Search/Search';
import Setting from '../Setting';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    const { currentUser } = useSelector((state) => state.auth.login);
    const { sidebarCollapsed } = useSelector((state) => state.layout);
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [showMessageModal, setShowMessageModal] = useState(false);
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
                        icon: <USFlagIcon />,
                        code: 'en',
                        title: 'English (US)',
                    },
                    {
                        icon: <VNFlagIcon />,
                        code: 'vi',
                        title: 'Vietnamese',
                    },
                    {
                        icon: <JPFlagIcon />,
                        code: 'ja',
                        title: 'Japanese',
                    },
                    {
                        icon: <KRFlagIcon />,
                        code: 'kr',
                        title: 'Korean',
                    },
                    {
                        icon: <THFlagIcon />,
                        code: 'th',
                        title: 'Thai',
                    },
                    {
                        icon: <CNFlagIcon />,
                        code: 'cn',
                        title: 'Chinese',
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

    const handleToggleMessageModal = () => {
        setShowMessageModal(true);
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
                            <button className={cx('action-btn')} onClick={handleToggleMessageModal}>
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
            <Message show={showMessageModal} setShowMessageModal={setShowMessageModal} />

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
