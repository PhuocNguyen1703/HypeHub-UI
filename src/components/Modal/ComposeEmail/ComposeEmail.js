import React from 'react';
import classNames from 'classnames/bind';

import styles from './ComposeEmail.module.scss';
import { BsDash, BsTrash, BsX } from 'react-icons/bs';
import { IoResizeSharp } from 'react-icons/io5';

const cx = classNames.bind(styles);

function ComposeEmail() {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <span className={cx('title')}>New Message</span>
                <div className={cx('action-btn')}>
                    <button className={cx('minimize-btn')}>
                        <BsDash />
                    </button>
                    <button className={cx('fullscreen-btn')}>
                        <IoResizeSharp />
                    </button>
                    <button className={cx('close-btn')}>
                        <BsX />
                    </button>
                </div>
            </header>
            <div className={cx('container')}>
                <div>
                    <div className={cx('input-group')}>
                        <label className={cx('to-ipt')}>
                            To :
                            <input />
                        </label>
                        <div className={cx('input-btn')}>
                            <button className={cx('cc-btn')}>Cc</button>
                            <button className={cx('bcc-btn')}>Bcc</button>
                        </div>
                    </div>
                    <input className={cx('subject')} placeholder="Subject" />
                </div>
                <div className={cx('content')}>
                    <textarea />
                </div>
                <div className={cx('footer')}>
                    <div>
                        <button className={cx('send-btn')}>Send</button>
                    </div>
                    <button className={cx('delete-btn')}>
                        <BsTrash />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ComposeEmail;
