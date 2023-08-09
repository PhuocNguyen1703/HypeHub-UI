import React from 'react';
import classNames from 'classnames/bind';

import styles from './Card.module.scss';
import Image from '../Image/Image';
import { BsTrash } from 'react-icons/bs';

const cx = classNames.bind(styles);
function Card({ layout }) {
    return (
        <div className={cx('wrapper')}>
            <span className={cx('position')}>Design</span>
            <div className={cx('user-avatar')}>
                <Image
                    src="https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    alt="avatar"
                    className={cx('avatar')}
                />
            </div>
            <div className={cx('info')}>
                <span className={cx('name')}>Nguyen Van A</span>
                <span className={cx('email')}>admin@gmail.com</span>
                <span className={cx('phone')}>0349985272</span>
            </div>
            <footer className={cx('footer')}>
                {layout === 'contact' && <button className={cx('add-btn')}>Add contact</button>}
                {layout === 'directory' && (
                    <>
                        <button className={cx('message-btn')}>Message</button>
                        <button className={cx('delete-btn')}>
                            <BsTrash />
                        </button>
                    </>
                )}
                {layout === 'confirm' && <button className={cx('confirm-btn')}>Confirm</button>}
                {(layout === 'request' || layout === 'confirm') && (
                    <button className={cx('discard-btn')}>Discard</button>
                )}
            </footer>
        </div>
    );
}

export default Card;
