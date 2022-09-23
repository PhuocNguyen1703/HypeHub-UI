import React from 'react';
import classNames from 'classnames/bind';

import styles from './Column.module.scss';
import Card from '../Card';
import { mapOrder } from '~/utils/sort';

const cx = classNames.bind(styles);

function BoardContent({ column }) {
    const cards = mapOrder(column.cards, column.cardOrder, 'id');
    return (
        <div className={cx('wrapper')}>
            <header className={cx('column-header')}>{column.title}</header>
            <div className={cx('column-content')}>
                {cards.map((card, idx) => (
                    <Card key={idx} card={card} />
                ))}
            </div>
        </div>
    );
}

export default BoardContent;
