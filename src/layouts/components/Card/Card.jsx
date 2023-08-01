import React from 'react';
import classNames from 'classnames/bind';

import styles from './Card.module.scss';

const cx = classNames.bind(styles);

function Card({ card }) {
    return (
        <div className={cx('wrapper')}>
            <span className={cx('tag')}></span>
            <div className={cx('container')}>
                <header className={cx('header')}>
                    <span className={cx('label', card?.labelColor)}>{card?.label}</span>
                    <span className={cx('date')}>{card?.startDate}</span>
                </header>
                <span className={cx('title')}>{card?.title}</span>
                {card?.photoUrl && <img src={card?.photoUrl} alt="Cover" className={cx('picture')} />}
                <p className={cx('desc')}>{card?.description}</p>
            </div>
        </div>
    );
}

export default Card;
