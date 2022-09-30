import React from 'react';
import classNames from 'classnames/bind';
import { motion } from 'framer-motion';

import styles from './Setting.module.scss';
import ToggleSwitch from '~/components/ToggleSwitch';
import { useDispatch } from 'react-redux';
import { setSettingModalIsOpen } from '~/redux/Slice/modalSlice';
import { BsXLg } from 'react-icons/bs';
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);

function Setting() {
    const { settingModalIsOpen } = useSelector((state) => state.modal);
    const dispatch = useDispatch();

    const colorData = [
        { name: 'radicchio', code: '--radicchio-rgb' },
        { name: 'tangerine', code: '--tangerine-rgb' },
        { name: 'citron', code: '--citron-rgb' },
        { name: 'basil', code: '--basil-rgb' },
        { name: 'blueBerry', code: '--blueBerry-rgb' },
        { name: 'grape', code: '--grape-rgb' },
        { name: 'cherryBlossom', code: '--cherryBlossom-rgb' },
        { name: 'pumpkin', code: '--pumpkin-rgb' },
        { name: 'avocado', code: '--avocado-rgb' },
        { name: 'eucalyptus', code: '--eucalyptus-rgb' },
        { name: 'lavender', code: '--lavender-rgb' },
        { name: 'cocoa', code: '--cocoa-rgb' },
        { name: 'tomato', code: '--tomato-rgb' },
        { name: 'mango', code: '--mango-rgb' },
        { name: 'pistachio', code: '--pistachio-rgb' },
        { name: 'peacock', code: '--peacock-rgb' },
        { name: 'wisteria', code: '--wisteria-rgb' },
        { name: 'graphite', code: '--graphite-rgb' },
        { name: 'flamingo', code: '--flamingo-rgb' },
        { name: 'banana', code: '--banana-rgb' },
        { name: 'sage', code: '--sage-rgb' },
        { name: 'cobalt', code: '--cobalt-rgb' },
        { name: 'amethyst', code: '--amethyst-rgb' },
        { name: 'birch', code: '--birch-rgb' },
    ];

    const handleCloseModal = () => {
        dispatch(setSettingModalIsOpen(false));
    };

    const handleSetSidebarColor = (color) => {
        console.log(color.name);
    };

    const handleSetNavColor = (color) => {
        console.log(color.name);
    };

    return (
        <motion.div animate={{ width: settingModalIsOpen ? '400px' : '0' }} className={cx('wrapper')}>
            <header className={cx('header')}>
                <span className={cx('heading')}>
                    Theme Customizer
                    <button className={cx('close-btn')} onClick={handleCloseModal}>
                        <BsXLg />
                    </button>
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
                        {colorData.map((color, idx) => (
                            <li
                                key={idx}
                                style={{ backgroundColor: `rgb(var(${color.code}))` }}
                                className={cx('color')}
                                value={color.name}
                                onClick={() => handleSetSidebarColor(color)}
                            ></li>
                        ))}
                    </ul>
                </div>
                <span className={cx('title')}>Navbar Color</span>
                <div className={cx('input-field')}>
                    <ul className={cx('color-list')}>
                        {colorData.map((color, idx) => (
                            <li
                                key={idx}
                                style={{ backgroundColor: `rgb(var(${color.code}))` }}
                                className={cx('color')}
                                value={color.name}
                                onClick={() => handleSetNavColor(color)}
                            ></li>
                        ))}
                    </ul>
                </div>
            </form>
        </motion.div>
    );
}

export default Setting;
