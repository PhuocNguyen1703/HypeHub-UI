import React from 'react';
import classNames from 'classnames/bind';

import styles from './Column.module.scss';
import Card from '../Card';
import { Draggable } from 'react-beautiful-dnd';
import { FaPlus } from 'react-icons/fa';
import { BsTrash } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import Modal from '~/components/Modal';
import CreateKanbanItem from '~/components/Modal/CreateKanbanItem';
import { useDispatch } from 'react-redux';
import { setCreateKanbanItemModalIsOpen } from '~/redux/Slice/modalSlice';
import { setSelectedItem } from '~/redux/Slice/kanbanSlice';

const cx = classNames.bind(styles);

function BoardContent({ column }) {
    const cards = column.cards;
    const { createKanbanItemModalIsOpen } = useSelector((state) => state.modal);
    const dispatch = useDispatch();

    const handleAddItem = () => {
        dispatch(setCreateKanbanItemModalIsOpen(true));
        dispatch(setSelectedItem(column));
    };

    return (
        <div className={cx('wrapper')}>
            <header className={cx('column-header')}>
                <span className={cx('column-title')}>{column.title}</span>
                <div className={cx('action-btn')}>
                    <button className={cx('icon')} onClick={handleAddItem}>
                        <FaPlus />
                    </button>
                    <button className={cx('icon')}>
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

            {createKanbanItemModalIsOpen && (
                <Modal>
                    <CreateKanbanItem />
                </Modal>
            )}
        </div>
    );
}

export default BoardContent;
