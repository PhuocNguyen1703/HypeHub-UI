import React from 'react';
import classNames from 'classnames/bind';

import styles from './Column.module.scss';
import Card from '../Card';
import { Draggable } from 'react-beautiful-dnd';

const cx = classNames.bind(styles);

function BoardContent({ column }) {
    const cards = column.cards;

    return (
        <div className={cx('wrapper')}>
            <header className={cx('column-header')}>{column.title}</header>
            <div className={cx('column-content')}>
                {cards.map((card, idx) => (
                    <Draggable key={card.id} draggableId={card.id} index={idx}>
                        {(provided, snapshot) => (
                            <div
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                ref={provided.innerRef}
                                style={{
                                    ...provided.draggableProps.style,
                                    opacity: snapshot.isDragging ? '0.5' : '1',
                                }}
                            >
                                <Card card={card} />
                            </div>
                        )}
                    </Draggable>
                ))}
            </div>
        </div>
    );
}

export default BoardContent;
