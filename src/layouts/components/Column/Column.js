import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Column.module.scss';
import Card from '../Card';
import { Draggable } from 'react-beautiful-dnd';
import { FaPlus } from 'react-icons/fa';
import { BsTrash } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { setCreateKanbanItemModalIsOpen } from '~/redux/Slice/modalSlice';
import { setSelectedItem } from '~/redux/Slice/kanbanSlice';
import { mapOrder } from '~/utils/sort';

const cx = classNames.bind(styles);

function Column({ column, onUpdateColumn }) {
    const [columnTitle, setColumnTitle] = useState('Untitled');
    const dispatch = useDispatch();

    const cards = mapOrder(column.cards, column.cardOrder, 'id');

    useEffect(() => {
        setColumnTitle(column.title);
    }, [column.title]);

    const handleChangeColumnTitle = (e) => {
        setColumnTitle(e.target.value);
    };

    const handleBlurColumnTitle = () => {
        const newColumn = { ...column, title: columnTitle };
        onUpdateColumn(newColumn);
    };

    const handleKeyDownColumnTitle = (e) => {
        if (e.key === 'Enter') {
            e.target.blur();
        }
    };

    const handleRemoveColumn = () => {
        const newColumn = { ...column, _destroy: true };
        onUpdateColumn(newColumn);
    };

    const handleAddNewCard = () => {
        dispatch(setCreateKanbanItemModalIsOpen(true));
        // dispatch(setSelectedItem(column));
    };

    return (
        <div className={cx('wrapper')}>
            <header className={cx('column-header')}>
                <input
                    className={cx('column-title')}
                    value={columnTitle}
                    onChange={handleChangeColumnTitle}
                    onBlur={handleBlurColumnTitle}
                    onKeyDown={handleKeyDownColumnTitle}
                />
                {/* <span className={cx('column-title')}>{column.title}</span> */}
                <div className={cx('action-btn')}>
                    <button className={cx('icon')} onClick={handleAddNewCard}>
                        <FaPlus />
                    </button>
                    <button className={cx('icon')} onClick={handleRemoveColumn}>
                        <BsTrash />
                    </button>
                </div>
            </header>
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

export default Column;
