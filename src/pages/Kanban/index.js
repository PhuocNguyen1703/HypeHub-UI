import React from 'react';
import classNames from 'classnames/bind';

import styles from './Kanban.module.scss';

const cx = classNames.bind(styles);

function Kanban() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('board-columns')}>
                <div className={cx('column')}>
                    <header className={cx('board-header')}>Todo</header>
                    <div className={cx('board-content')}>
                        <div className={cx('card')}>
                            <span>Where are you to day?</span>
                        </div>
                        <div className={cx('card')}>
                            <span>Where are you to day?</span>
                        </div>
                        <div className={cx('card')}>
                            <span>Where are you to day?</span>
                        </div>
                        <div className={cx('card')}>
                            <span>Where are you to day?</span>
                        </div>
                        <div className={cx('card')}>
                            <span>Where are you to day?</span>
                        </div>
                        <div className={cx('card')}>
                            <span>Where are you to day?</span>
                        </div>
                        <div className={cx('card')}>
                            <span>Where are you to day?</span>
                        </div>
                        <div className={cx('card')}>
                            <span>Where are you to day?</span>
                        </div>
                        <div className={cx('card')}>
                            <span>Where are you to day?</span>
                        </div>
                        <div className={cx('card')}>
                            <span>Where are you to day?</span>
                        </div>
                        <div className={cx('card')}>
                            <span>Where are you to day?</span>
                        </div>
                        <div className={cx('card')}>
                            <span>Where are you to day?</span>
                        </div>
                        <div className={cx('card')}>
                            <span>Where are you to day?</span>
                        </div>
                        <div className={cx('card')}>
                            <span>Where are you to day?</span>
                        </div>
                        <div className={cx('card')}>
                            <span>Where are you to day?</span>
                        </div>
                        <div className={cx('card')}>
                            <span>Where are you to day?</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Kanban;
