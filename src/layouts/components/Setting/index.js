import React from 'react';
import classNames from 'classnames/bind';
import { IoMdClose } from 'react-icons/io';

import styles from './Setting.module.scss';
import ToggleSwitch from '~/components/ToggleSwitch';
import { useDispatch } from 'react-redux';
import { setSettingModalIsOpen } from '~/redux/Slice/modalSlice';

const cx = classNames.bind(styles);

function Setting() {
    const dispatch = useDispatch();

    const handleCloseModal = () => {
        dispatch(setSettingModalIsOpen(false));
    };

    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <span className={cx('heading')}>
                    Theme Customizer
                    <IoMdClose className={cx('icon-close')} onClick={handleCloseModal} />
                </span>
                <p className={cx('desc')}>Customize & Preview in Real Time</p>
            </header>
            <form className={cx('form')}>
                <span className={cx('title')}>Mode</span>
                <div className={cx('input-field')}>
                    <label htmlFor="light">
                        <input id="light" type="radio" name="mode" value="Light" />
                        Light
                    </label>
                    <label htmlFor="dark">
                        <input id="dark" type="radio" name="mode" value="Dark" />
                        Dark
                    </label>
                    <label htmlFor="semi-dark">
                        <input id="semi-dark" type="radio" name="mode" value="Semi Dark" />
                        Semi Dark
                    </label>
                </div>
                <span className={cx('title')}>Content Width</span>
                <div className={cx('input-field')}>
                    <label htmlFor="full-width">
                        <input id="full-width" type="radio" name="content-width" value="Full Width" />
                        Full Width
                    </label>
                    <label htmlFor="boxed">
                        <input id="boxed" type="radio" name="content-width" value="Boxed" />
                        Boxed
                    </label>
                </div>
                <span className={cx('title')}>Menu Layout</span>
                <div className={cx('input-field')}>
                    <ToggleSwitch label="Menu Collapsed" id="menu-collapsed" />
                </div>
                <div className={cx('input-field')}>
                    <ToggleSwitch label="Menu Hidden" id="menu-hidden" />
                </div>
                <span className={cx('title')}>Sidebar Color</span>
                <div className={cx('input-field')}>
                    <ul className={cx('color-list')}>
                        <li className={cx('color')}></li>
                        <li className={cx('color')}></li>
                        <li className={cx('color')}></li>
                        <li className={cx('color')}></li>
                        <li className={cx('color')}></li>
                        <li className={cx('color')}></li>
                        <li className={cx('color')}></li>
                        <li className={cx('color')}></li>
                        <li className={cx('color')}></li>
                        <li className={cx('color')}></li>
                        <li className={cx('color')}></li>
                        <li className={cx('color')}></li>
                        <li className={cx('color')}></li>
                        <li className={cx('color')}></li>
                        <li className={cx('color')}></li>
                        <li className={cx('color')}></li>
                    </ul>
                </div>
                <span className={cx('title')}>Navbar Color</span>
                <div className={cx('input-field')}>
                    <ul className={cx('color-list')}>
                        <li className={cx('color')}></li>
                        <li className={cx('color')}></li>
                        <li className={cx('color')}></li>
                        <li className={cx('color')}></li>
                        <li className={cx('color')}></li>
                        <li className={cx('color')}></li>
                        <li className={cx('color')}></li>
                        <li className={cx('color')}></li>
                        <li className={cx('color')}></li>
                        <li className={cx('color')}></li>
                        <li className={cx('color')}></li>
                        <li className={cx('color')}></li>
                        <li className={cx('color')}></li>
                        <li className={cx('color')}></li>
                        <li className={cx('color')}></li>
                        <li className={cx('color')}></li>
                    </ul>
                </div>
            </form>
        </div>
    );
}

export default Setting;
