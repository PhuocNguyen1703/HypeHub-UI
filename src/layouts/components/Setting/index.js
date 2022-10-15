import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { motion } from 'framer-motion';

import styles from './Setting.module.scss';
import ToggleSwitch from '~/components/ToggleSwitch';
import { useDispatch } from 'react-redux';
import { setSettingModalIsOpen } from '~/redux/Slice/modalSlice';
import { BsCheck, BsXLg } from 'react-icons/bs';
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);

function Setting() {
    const { settingModalIsOpen } = useSelector((state) => state.modal);
    const [currentMode, setCurrentMode] = useState();
    const [currentWidth, setCurrentWidth] = useState();
    const [currentLayout, setCurrentLayout] = useState();
    const [currentSidebarColor, setCurrentSidebarColor] = useState('default');
    const [currentNavbarColor, setCurrentNavbarColor] = useState('default');
    const dispatch = useDispatch();

    const modeSettings = [
        { id: 'default', name: 'Default', class: 'theme-mode-default' },
        { id: 'light', name: 'Light', class: 'theme-mode-light' },
        { id: 'dark', name: 'Dark', class: 'theme-mode-dark' },
    ];

    const contentWidths = [
        { id: 'full width', name: 'Full width', class: 'content-width-full' },
        { id: 'boxed', name: 'Boxed', class: 'content-width-boxed' },
    ];

    const menuLayouts = [
        { id: 'menu collapsed', name: 'Menu collapsed', class: 'menu-layout-collapsed' },
        { id: 'menu hidden', name: 'Menu hidden', class: 'menu-layout-hidden' },
    ];

    const colorData = [
        { id: 'default', background: 'default-color', class: 'theme-color-default' },
        { id: 'radicchio', background: 'radicchio-color', class: 'theme-color-radicchio' },
        { id: 'tangerine', background: 'tangerine-color', class: 'theme-color-tangerine' },
        { id: 'citron', background: 'citron-color', class: 'theme-color-citron' },
        { id: 'basil', background: 'basil-color', class: 'theme-color-basil' },
        { id: 'blueBerry', background: 'blueBerry-color', class: 'theme-color-blueBerry' },
        { id: 'grape', background: 'grape-color', class: 'theme-color-grape' },
        { id: 'cherryBlossom', background: 'cherryBlossom-color', class: 'theme-color-cherryBlossom' },
        { id: 'pumpkin', background: 'pumpkin-color', class: 'theme-color-pumpkin' },
        { id: 'avocado', background: 'avocado-color', class: 'theme-color-avocado' },
        { id: 'eucalyptus', background: 'eucalyptus-color', class: 'theme-color-eucalyptus' },
        { id: 'lavender', background: 'lavender-color', class: 'theme-color-lavender' },
        { id: 'cocoa', background: 'cocoa-color', class: 'theme-color-cocoa' },
        { id: 'tomato', background: 'tomato-color', class: 'theme-color-tomato' },
        { id: 'mango', background: 'mango-color', class: 'theme-color-mango' },
        { id: 'pistachio', background: 'pistachio-color', class: 'theme-color-pistachio' },
        { id: 'peacock', background: 'peacock-color', class: 'theme-color-peacock' },
        { id: 'wisteria', background: 'wisteria-color', class: 'theme-color-wisteria' },
        { id: 'graphite', background: 'graphite-color', class: 'theme-color-graphite' },
        { id: 'flamingo', background: 'flamingo-color', class: 'theme-color-flamingo' },
        { id: 'banana', background: 'banana-color', class: 'theme-color-banana' },
        { id: 'sage', background: 'sage-color', class: 'theme-color-sage' },
        { id: 'cobalt', background: 'cobalt-color', class: 'theme-color-cobalt' },
        { id: 'amethyst', background: 'amethyst-color', class: 'theme-color-amethyst' },
        { id: 'birch', background: 'birch-color', class: 'theme-color-birch' },
    ];

    const handleCloseModal = () => {
        dispatch(setSettingModalIsOpen(false));
    };

    const handleSetSidebarColor = (item) => {
        setCurrentSidebarColor(item.id);
        localStorage.setItem('sidebarColor', item.class);
    };

    const handleSetNavColor = (item) => {
        setCurrentNavbarColor(item.id);
        localStorage.setItem('navbarColor', item.class);
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
                    {modeSettings.map((item, idx) => (
                        <label htmlFor={item.id} key={idx}>
                            <input id={item.id} type="radio" name="mode" value={item.name} />
                            {item.name}
                        </label>
                    ))}
                </div>
                <span className={cx('title')}>Content Width</span>
                <div className={cx('input-field')}>
                    {contentWidths.map((item, idx) => (
                        <label htmlFor={item.id} key={idx}>
                            <input id={item.id} type="radio" name="content-width" value={item.name} />
                            {item.name}
                        </label>
                    ))}
                </div>
                <span className={cx('title')}>Menu Layout</span>
                {menuLayouts.map((item, idx) => (
                    <div className={cx('input-field')} key={idx}>
                        <ToggleSwitch label={item.name} id={item.id} />
                    </div>
                ))}
                <span className={cx('title')}>Sidebar Color</span>
                <div className={cx('input-field')}>
                    <ul className={cx('color-list')} id="sidebar-color">
                        {colorData.map((item, idx) => (
                            <li
                                key={idx}
                                style={{ backgroundColor: `rgb(var(${item.code}))` }}
                                className={cx(
                                    'box-color',
                                    `${item.background}`,
                                    `${item.id === currentSidebarColor ? 'active' : ''}`,
                                )}
                                // data-color={item.name}
                                onClick={() => handleSetSidebarColor(item)}
                            >
                                <BsCheck className={cx('icon-check')} />
                            </li>
                        ))}
                    </ul>
                </div>
                <span className={cx('title')}>Navbar Color</span>
                <div className={cx('input-field')}>
                    <ul className={cx('color-list')} id="nav-color">
                        {colorData.map((item, idx) => (
                            <li
                                key={idx}
                                className={cx(
                                    'box-color',
                                    `${item.background}`,
                                    `${item.id === currentNavbarColor ? 'active' : ''}`,
                                )}
                                // data-color={color.name}
                                onClick={() => handleSetNavColor(item)}
                            >
                                <BsCheck className={cx('icon-check')} />
                            </li>
                        ))}
                    </ul>
                </div>
            </form>
        </motion.div>
    );
}

export default Setting;
