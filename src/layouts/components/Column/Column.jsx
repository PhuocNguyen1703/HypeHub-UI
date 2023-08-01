import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Column.module.scss';
import Card from '../Card';
import { Draggable } from 'react-beautiful-dnd';
import { FaPlus } from 'react-icons/fa';
import { BsTrash } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { setCreateKanbanItemModalIsOpen } from '~/redux/Slice/modalSlice';
import { mapOrder } from '~/utils/sort';
import { updateColumn } from '~/services/kanbanApi';
import ConfirmModal from '~/components/Modal/Confirm';
import { MODAL_ACTION_CONFIRM } from '~/utils/constants';
import CreateCardModal from '~/components/Modal/CreateCardModal';

const cx = classNames.bind(styles);

function Column({ column, onUpdateColumnState }) {
    const cards = mapOrder(column.cards, column.cardOrder, '_id');
    const [columnTitle, setColumnTitle] = useState('Untitled');
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [showCreateCardModal, setShowCreateCardModal] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        setColumnTitle(column.title);
    }, [column.title]);

    const toggleShowCreateCardModal = () => {
        setShowCreateCardModal((prevState) => !prevState);
    };

    const toggleShowConfirmModal = () => {
        setShowConfirmModal((prevState) => !prevState);
    };

    const handleChangeColumnTitle = (e) => {
        setColumnTitle(e.target.value);
    };

    const handleBlurColumnTitle = () => {
        if (column.title !== columnTitle) {
            const newColumn = { ...column, title: columnTitle };
            updateColumn(newColumn._id, newColumn).then((updatedColumn) => {
                updatedColumn.cards = newColumn.cards;
                onUpdateColumnState(updatedColumn);
            });
        }
    };

    const handleKeyDownColumnTitle = (e) => {
        if (e.key === 'Enter') {
            e.target.blur();
        }
    };

    const handleActionCreateCardModal = (type) => {
        //Add new card
        toggleShowCreateCardModal();
    };

    const handleConfirmModalAction = (type) => {
        //Remove column
        if (type === MODAL_ACTION_CONFIRM) {
            const newColumn = { ...column, _destroy: true };
            updateColumn(newColumn._id, newColumn).then((updatedColumn) => {
                onUpdateColumnState(updatedColumn);
            });
        }
        toggleShowConfirmModal();
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
                <div className={cx('action-btn')}>
                    <button className={cx('icon')} onClick={toggleShowCreateCardModal}>
                        <FaPlus />
                    </button>
                    <button className={cx('icon')} onClick={toggleShowConfirmModal}>
                        <BsTrash />
                    </button>
                </div>
            </header>
            <div className={cx('column-content')}>
                {cards.map((card, idx) => (
                    <Draggable key={card._id} draggableId={card._id} index={idx}>
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
            <ConfirmModal
                show={showConfirmModal}
                title={'Remove column'}
                content={`Are you sure you want to remove <strong>${column.title}</strong>.</br>All related cards will also be removed`}
                onAction={handleConfirmModalAction}
            />
            <CreateCardModal
                show={showCreateCardModal}
                title={`Create new card`}
                subTitle={`Add card to the <strong>${column.title}</strong>.`}
                column={column}
                onUpdateColumnState={onUpdateColumnState}
                onAction={handleActionCreateCardModal}
            />
        </div>
    );
}

export default Column;
