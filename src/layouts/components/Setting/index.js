import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { motion } from 'framer-motion';

import styles from './Setting.module.scss';
import ToggleSwitch from '~/components/ToggleSwitch';
import { useDispatch } from 'react-redux';
import { setSettingModalIsOpen } from '~/redux/Slice/modalSlice';
import { BsCheck, BsXLg } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { setNavbarColor, setSidebarColor, setThemeMode } from '~/redux/Slice/themeSlice';
import Modal from '~/components/Modal';

const cx = classNames.bind(styles);

function Setting({ show, setShowSettingModal }) {
    const { settingModalIsOpen } = useSelector((state) => state.modal);
    const { themeMode, sidebarColor, navbarColor } = useSelector((state) => state.theme);
    const [currentMode, setCurrentMode] = useState(themeMode);
    const [currentNavbarColor, setCurrentNavbarColor] = useState(navbarColor);
    const [currentSidebarColor, setCurrentSidebarColor] = useState(sidebarColor);
    const dispatch = useDispatch();

    const modeSettings = [
        { id: 'default', name: 'Default', class: 'theme-mode-default' },
        { id: 'light', name: 'Light', class: 'theme-mode-light' },
        { id: 'dark', name: 'Dark', class: 'theme-mode-dark' },
    ];

    const menuLayouts = [{ id: 'menu collapsed', name: 'Menu collapsed' }];

    const colorData = [
        { id: 'radicchio', background: 'radicchio-color', class: 'theme-color-radicchio' },
        { id: 'citron', background: 'citron-color', class: 'theme-color-citron' },
        { id: 'basil', background: 'basil-color', class: 'theme-color-basil' },
        { id: 'blueBerry', background: 'blueBerry-color', class: 'theme-color-blueBerry' },
        { id: 'grape', background: 'grape-color', class: 'theme-color-grape' },
        { id: 'avocado', background: 'avocado-color', class: 'theme-color-avocado' },
        { id: 'eucalyptus', background: 'eucalyptus-color', class: 'theme-color-eucalyptus' },
        { id: 'lavender', background: 'lavender-color', class: 'theme-color-lavender' },
        { id: 'cocoa', background: 'cocoa-color', class: 'theme-color-cocoa' },
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
        { id: 'cyan', background: 'cyan-color', class: 'theme-color-cyan' },
        { id: 'orange', background: 'orange-color', class: 'theme-color-orange' },
        { id: 'lemon', background: 'lemon-color', class: 'theme-color-lemon' },
        { id: 'lime', background: 'lime-color', class: 'theme-color-lime' },
        { id: 'seafoam', background: 'seafoam-color', class: 'theme-color-seafoam' },
        { id: 'teal', background: 'teal-color', class: 'theme-color-teal' },
    ];

    const handleCloseModal = () => {
        // dispatch(setSettingModalIsOpen(false));
        setShowSettingModal(false);
    };

    const handleSetMode = (item) => {
        setCurrentMode(item.class);
        dispatch(setThemeMode(item.class));
        dispatch(setSidebarColor(null));
        dispatch(setNavbarColor(null));
    };

    const handleSetSidebarColor = (item) => {
        setCurrentSidebarColor(item.class);
        dispatch(setSidebarColor(item.class));
    };

    const handleSetNavColor = (item) => {
        setCurrentNavbarColor(item.class);
        dispatch(setNavbarColor(item.class));
    };

    if (show) {
        return (
            <Modal>
                <motion.div animate={{ width: show ? '400px' : '0' }} className={cx('wrapper')}>
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
                                    <input
                                        id={item.id}
                                        type="radio"
                                        name="mode"
                                        value={item.name}
                                        checked={item.class === currentMode ? true : false}
                                        onClick={() => handleSetMode(item)}
                                        readOnly
                                    />
                                    {item.name}
                                </label>
                            ))}
                        </div>
                        <span className={cx('title')}>Menu Layout</span>
                        {menuLayouts.map((item, idx) => (
                            <div className={cx('input-field')} key={idx}>
                                <ToggleSwitch item={item} />
                            </div>
                        ))}
                        <span className={cx('title')}>Navbar Color</span>
                        <div className={cx('input-field')}>
                            <ul className={cx('color-list')} id="nav-color">
                                {colorData.map((item, idx) => (
                                    <li
                                        key={idx}
                                        className={cx(
                                            'box-color',
                                            `${item.background}`,
                                            `${item.class === currentNavbarColor ? 'active' : ''}`,
                                        )}
                                        onClick={() => handleSetNavColor(item)}
                                    >
                                        <BsCheck className={cx('icon-check')} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <span className={cx('title')}>Sidebar Color</span>
                        <div className={cx('input-field')}>
                            <ul className={cx('color-list')} id="sidebar-color">
                                {colorData.map((item, idx) => (
                                    <li
                                        key={idx}
                                        className={cx(
                                            'box-color',
                                            `${item.background}`,
                                            `${item.class === currentSidebarColor ? 'active' : ''}`,
                                        )}
                                        onClick={() => handleSetSidebarColor(item)}
                                    >
                                        <BsCheck className={cx('icon-check')} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </form>
                </motion.div>
            </Modal>
        );
    }
}

export default Setting;
