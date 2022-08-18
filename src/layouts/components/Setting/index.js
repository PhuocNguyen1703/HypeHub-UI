import React from 'react';
import classNames from 'classnames/bind';
import { IoMdClose } from 'react-icons/io';

import styles from './Setting.module.scss';

const cx = classNames.bind(styles);

function Setting() {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <span className={cx('heading')}>
                    Theme Customizer
                    <IoMdClose />
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
                    <label>RTL</label>
                    <div className={cx('toggle-switch')}>
                        <input type="checkbox" />
                        <span class="slider round"></span>
                    </div>
                </div>
                <div className={cx('input-field')}>
                    <label>Menu Collapsed</label>
                    <input type="checkbox" />
                </div>
                <div className={cx('input-field')}>
                    <label>Menu Hidden</label>
                    <input type="checkbox" />
                </div>
                <span className={cx('title')}>Navbar Color</span>
                <div className={cx('input-field')}>
                    <input type="radio" value="Boxed" />
                    <input type="radio" value="Boxed" />
                    <input type="radio" value="Boxed" />
                    <input type="radio" value="Boxed" />
                    <input type="radio" value="Boxed" />
                    <input type="radio" value="Boxed" />
                    <input type="radio" value="Boxed" />
                    <input type="radio" value="Boxed" />
                </div>
            </form>
        </div>
    );
}

export default Setting;
