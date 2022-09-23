import React from 'react';
import classNames from 'classnames/bind';

import styles from './Card.module.scss';

const cx = classNames.bind(styles);

function Card({ card }) {
    return (
        <div className={cx('wrapper')}>
            {card.picture && <img src={card.picture} alt="Cover" className={cx('picture')} />}
            <header className={cx('header')}>
                <span className={cx('label')}>{card.label}</span>
                <span className={cx('date')}>{card.createdAt}</span>
            </header>
            <div className={cx('card-info')}>
                <span className={cx('title')}>{card.title}</span>
                <p className={cx('desc')}>{card.description}</p>
            </div>
        </div>
    );
}

export default Card;
