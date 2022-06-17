import React from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { MessageIcon, SearchIcon } from '~/components/Icons';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import Menu from '~/components/Popper/Menu';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

const userMenu = [
    {
        icon: <FontAwesomeIcon icon={faBell} />,
        title: 'Lang',
    },
    {
        icon: <FontAwesomeIcon icon={faBell} />,
        title: 'nihon',
    },
    {
        icon: <FontAwesomeIcon icon={faBell} />,
        title: 'Logout',
        separate: true,
    },
];

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="logo" />
                    <h1>Logistics</h1>
                </div>

                <HeadlessTippy
                    interactive
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search value" spellCheck={false} />
                        <button className={cx('clear-btn')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                        <button className={cx('search-btn')}>
                            <SearchIcon />
                        </button>
                    </div>
                </HeadlessTippy>

                <div className={cx('actions')}>
                    <Tippy delay={[0, 50]} interactive content="Notification">
                        <button className={cx('action-btn')}>
                            <FontAwesomeIcon className={cx('notification-btn')} icon={faBell} />
                            <span className={cx('badge')}>12</span>
                        </button>
                    </Tippy>
                    <Tippy delay={[0, 50]} content="Message">
                        <button className={cx('action-btn')}>
                            <MessageIcon />
                            <span className={cx('badge')}>12</span>
                        </button>
                    </Tippy>

                    <Menu items={userMenu}>
                        <img
                            className={cx('user-avatar')}
                            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                            alt="Nguyen  van A"
                        />
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
