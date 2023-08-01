import React, { useEffect, useRef } from 'react';
import classNames from 'classnames/bind';

import styles from './CreateMessageForm.module.scss';
import { handleClickOutSide } from '~/utils/handleClickOutSide';
import { BsRecord2Fill } from 'react-icons/bs';
import Image from '~/components/Image/Image';
import { HiCheck } from 'react-icons/hi';

const cx = classNames.bind(styles);

function CreateMessageForm({ isOpen, isHide }) {
    const createMessageRef = useRef(null);

    //handleClick out side
    useEffect(() => {
        handleClickOutSide(isOpen, isHide, createMessageRef);
    }, []);

    return (
        <div ref={createMessageRef} className={cx('wrapper')}>
            <header className={cx('header')}>
                <span className={cx('title')}>Select Friends</span>
                <span className={cx('sub-title')}>You can add 9 more friends.</span>
            </header>
            <form className={cx('form')}>
                <input type="text" className={cx('input')} placeholder="Type the username of a friend" />
            </form>
            <div className={cx('search-result')}>
                <div className={cx('not-found')}>
                    <div className={cx('image')}></div>
                    <span className={cx('text')}>No friends found that are not already in this DM.</span>
                </div>
                <div className={cx('result-list')}>
                    <div className={cx('user')}>
                        <div className={cx('info')}>
                            <div className={cx('avatar')}>
                                <Image
                                    className={cx('photo')}
                                    src="https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                                    alt="avatar"
                                />
                                <span className={cx('icon-dot')}>
                                    <BsRecord2Fill />
                                </span>
                            </div>
                            <div className={cx('user-name')}>
                                <span className={cx('name')}>Brian Nguyen</span>
                            </div>
                        </div>
                        <label className={cx('checkbox')}>
                            <input
                                type="checkbox"
                                className={cx('checkbox-ipt')}
                                // onChange={() => handleOnClickCheckBox(idx)}
                                // checked={item?.done}
                            />
                            <span className={cx('icon-check')}>
                                <HiCheck />
                            </span>
                        </label>
                    </div>
                    <div className={cx('user')}>
                        <div className={cx('info')}>
                            <div className={cx('avatar')}>
                                <Image
                                    className={cx('photo')}
                                    src="https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                                    alt="avatar"
                                />
                                <span className={cx('icon-dot')}>
                                    <BsRecord2Fill />
                                </span>
                            </div>
                            <div className={cx('user-name')}>
                                <span className={cx('name')}>Brian Nguyen</span>
                            </div>
                        </div>
                        <label className={cx('checkbox')}>
                            <input
                                type="checkbox"
                                className={cx('checkbox-ipt')}
                                // onChange={() => handleOnClickCheckBox(idx)}
                                // checked={item?.done}
                            />
                            <span className={cx('icon-check')}>
                                <HiCheck />
                            </span>
                        </label>
                    </div>
                    <div className={cx('user')}>
                        <div className={cx('info')}>
                            <div className={cx('avatar')}>
                                <Image
                                    className={cx('photo')}
                                    src="https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                                    alt="avatar"
                                />
                                <span className={cx('icon-dot')}>
                                    <BsRecord2Fill />
                                </span>
                            </div>
                            <div className={cx('user-name')}>
                                <span className={cx('name')}>Brian Nguyen</span>
                            </div>
                        </div>
                        <label className={cx('checkbox')}>
                            <input
                                type="checkbox"
                                className={cx('checkbox-ipt')}
                                // onChange={() => handleOnClickCheckBox(idx)}
                                // checked={item?.done}
                            />
                            <span className={cx('icon-check')}>
                                <HiCheck />
                            </span>
                        </label>
                    </div>
                </div>
            </div>
            <button type="submit" className={cx('submit-btn')}>
                Create DM
            </button>
        </div>
    );
}

export default CreateMessageForm;
