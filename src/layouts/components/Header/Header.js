import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { useDispatch, useSelector } from 'react-redux';
import { CgMenu, CgMoreVerticalAlt } from 'react-icons/cg';
import { IoLanguageOutline, IoLogOutOutline, IoSettingsOutline } from 'react-icons/io5';
import { BsFullscreen, BsColumnsGap, BsChatSquareDots, BsBell, BsGear } from 'react-icons/bs';

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
import { setSettingModalIsOpen } from '~/redux/Slice/modalSlice';

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
        icon: <IoSettingsOutline />,
        title: 'Settings',
        to: '/settings',
    },
    {
        icon: <IoLogOutOutline />,
        title: 'Logout',
        to: '/logout',
        separate: true,
    },
];

function Header({ setShowSidebar }) {
    const user = useSelector((state) => state.auth.login.currentUser);
    const { settingModalIsOpen } = useSelector((state) => state.modal);
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

    const handleShowSidebar = () => {
        setShowSidebar((setShowSidebar) => !setShowSidebar);
    };

    const handleOpenModal = () => {
        dispatch(setSettingModalIsOpen(true));
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('header-left')}>
                    <CgMenu className={cx('menu-icon')} onClick={handleShowSidebar} />
                    <Link to={config.routes.home} className={cx('logo')}>
                        <img src={images.logo} alt="logo" />
                        <h1>Oriental Sun</h1>
                    </Link>
                </div>

                <Search />

                <div className={cx('header-right')}>
                    <CgMoreVerticalAlt className={cx('more-icon')} />
                    <div className={cx('actions')}>
                        <Tippy delay={[0, 50]} interactive content="Language">
                            <button className={cx('action-btn')}>
                                <span>EN</span>
                                <IoLanguageOutline className={cx('icon')} />
                            </button>
                        </Tippy>
                        <Tippy delay={[0, 50]} interactive content="Fullscreen">
                            <button className={cx('action-btn')}>
                                <BsFullscreen className={cx('icon')} />
                            </button>
                        </Tippy>
                        <Tippy delay={[0, 50]} interactive content="Apps">
                            <button className={cx('action-btn')}>
                                <BsColumnsGap className={cx('icon')} />
                            </button>
                        </Tippy>
                        <Tippy delay={[0, 50]} interactive content="Notification">
                            <button className={cx('action-btn')}>
                                <BsBell className={cx('icon')} />
                                <span className={cx('badge')}></span>
                            </button>
                        </Tippy>
                        <Tippy delay={[0, 50]} interactive content="Message">
                            <button className={cx('action-btn')}>
                                <BsChatSquareDots className={cx('icon')} />
                                <span className={cx('badge')}></span>
                            </button>
                        </Tippy>
                        <Tippy delay={[0, 50]} interactive content="Settings">
                            <button className={cx('action-btn')} onClick={handleOpenModal}>
                                <BsGear className={cx('icon')} />
                            </button>
                        </Tippy>
                    </div>
                    <CgMoreVerticalAlt className={cx('more-icon')} />

                    <Menu items={userMenu} onChange={handleMenuChange} viewProfile={true}>
                        <Image className={cx('user-avatar')} src={`${user.avatar}`} alt="Nguyen  van A" />
                    </Menu>
                </div>
            </div>

            {settingModalIsOpen && (
                <Modal>
                    <Setting />
                </Modal>
            )}
        </header>
    );
}

export default Header;
