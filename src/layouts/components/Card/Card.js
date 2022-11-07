import React from 'react';
import classNames from 'classnames/bind';

import styles from './Card.module.scss';

const cx = classNames.bind(styles);

function Card({ task }) {
    return (
        <div className={cx('wrapper')}>
            <span className={cx('tag')}></span>
            <div className={cx('container')}>
                <header className={cx('header')}>
                    <span className={cx('label', task?.labelColor)}>{task?.label}</span>
                    <span className={cx('date')}>{task?.startDate}</span>
                </header>
                <span className={cx('title')}>{task?.title}</span>
                {task?.photoUrl && <img src={task?.photoUrl} alt="Cover" className={cx('picture')} />}
                <p className={cx('desc')}>{task?.description}</p>
            </div>
        </div>
    );
}

export default Card;
