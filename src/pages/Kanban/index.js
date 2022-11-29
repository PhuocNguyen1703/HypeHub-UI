import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Kanban.module.scss';
import Column from '~/layouts/components/Column';
import { isEmpty } from 'lodash-es';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { useSelector } from 'react-redux';
import { createSection, getAllSection } from '~/api/kanbanApi';
import Modal from '~/components/Modal';
import CreateKanbanItem from '~/components/Modal/CreateKanbanItem';
import { v4 as uuid } from 'uuid';
import { mapOrder } from '~/utils/sort';

const cx = classNames.bind(styles);

function Kanban() {
    const boards = [
        {
            id: 'board-1',
            columnOrder: ['column-1', 'column-2', 'column-3'],
            columns: [
                {
                    id: 'column-1',
                    boardId: 'board-1',
                    title: 'To do column',
                    cardOrder: ['card-1', 'card-2', 'card-3'],
                    cards: [
                        {
                            id: 'card-1',
                            boardId: 'board-1',
                            columnId: 'column-1',
                            title: 'title card 1',
                            cover: null,
                        },
                        {
                            id: 'card-2',
                            boardId: 'board-1',
                            columnId: 'column-1',
                            title: 'title card 2',
                            cover: null,
                        },
                        {
                            id: 'card-3',
                            boardId: 'board-1',
                            columnId: 'column-1',
                            title: 'title card 3',
                            cover: null,
                        },
                    ],
                },
                {
                    id: 'column-2',
                    boardId: 'board-1',
                    title: 'press column',
                    cardOrder: ['card-4', 'card-5', 'card-6'],
                    cards: [
                        {
                            id: 'card-4',
                            boardId: 'board-1',
                            columnId: 'column-2',
                            title: 'title card 4',
                            cover: null,
                        },
                        {
                            id: 'card-5',
                            boardId: 'board-1',
                            columnId: 'column-2',
                            title: 'title card 5',
                            cover: null,
                        },
                        {
                            id: 'card-6',
                            boardId: 'board-1',
                            columnId: 'column-2',
                            title: 'title card 6',
                            cover: null,
                        },
                    ],
                },
                {
                    id: 'column-3',
                    boardId: 'board-1',
                    title: 'home column',
                    cardOrder: ['card-7', 'card-8'],
                    cards: [
                        {
                            id: 'card-7',
                            boardId: 'board-1',
                            columnId: 'column-3',
                            title: 'title card 7',
                            cover: null,
                        },
                        {
                            id: 'card-8',
                            boardId: 'board-1',
                            columnId: 'column-3',
                            title: 'title card 8',
                            cover: null,
                        },
                    ],
                },
            ],
        },
    ];

    const userId = useSelector((state) => state.auth.login.currentUser._id);
    const { createKanbanItemModalIsOpen } = useSelector((state) => state.modal);
    const [board, setBoard] = useState({});
    const [columns, setColumns] = useState([]);

    useEffect(() => {
        const boardData = boards.find((board) => board.id === 'board-1');
        if (boardData) {
            setBoard(boardData);
            setColumns(mapOrder(boardData.columns, boardData.columnOrder, 'id'));
        }
    }, []);

    const onDragEnd = (result) => {
        const { source, destination } = result;
        let newColumns = [...columns];
        if (!result.destination) return;

        const sourceCol = newColumns.find((col) => col.id === source.droppableId);
        const destinationCol = newColumns.find((col) => col.id === destination.droppableId);
        // console.log(sourceCol);
        // console.log(destinationCol);

        const sourceCards = [...sourceCol.cards];
        const destinationCards = [...destinationCol.cards];
        // console.log(sourceCards);
        // console.log(destinationCards);

        if (source.droppableId !== destination.droppableId) {
            const [removedCard] = sourceCards.splice(source.index, 1);
            // console.log(removedCard);
            destinationCards.splice(destination.index, 0, removedCard);
            // console.log(destinationCards);

            sourceCol.cards = sourceCards;
            destinationCol.cards = destinationCards;

            sourceCol.cardOrder = sourceCol.cards.map((i) => i.id);
            destinationCol.cardOrder = destinationCol.cards.map((i) => i.id);
            // console.log(sourceCol);
            // console.log(destinationCol);
            setColumns(newColumns);
        } else {
            const [removedCard] = sourceCards.splice(source.index, 1);
            sourceCards.splice(destination.index, 0, removedCard);
            // console.log(sourceCards);

            sourceCol.cards = sourceCards;
            sourceCol.cardOrder = sourceCol.cards.map((i) => i.id);
            // console.log(sourceCol);
            setColumns(newColumns);
        }
    };

    const handleAddNewColumn = () => {
        const newColumn = {
            id: Math.random().toString(36).substring(2, 5),
            boardId: board.id,
            title: 'Untitled'.trim(),
            cardOrder: [],
            cards: [],
        };
        let newColumns = [...columns];
        newColumns.push(newColumn);

        let newBoard = { ...board };
        newBoard.columnOrder = newColumns.map((col) => col.id);
        newBoard.columns = newColumns;

        setBoard(newBoard);
        setColumns(newColumns);
    };

    const onUpdateColumn = (columnUpdate) => {
        let newColumns = [...columns];
        const columnIdToUpdate = columnUpdate.id;

        const columnIdxToUpdate = newColumns.findIndex((i) => i.id === columnIdToUpdate);

        if (columnUpdate._destroy) {
            newColumns.splice(columnIdxToUpdate, 1);
        } else {
            newColumns.splice(columnIdxToUpdate, 1, columnUpdate);
        }

        let newBoard = { ...board };
        newBoard.columnOrder = newColumns.map((col) => col.id);
        newBoard.columns = newColumns;

        setBoard(newBoard);
        setColumns(newColumns);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <button className={cx('add-section-btn')} onClick={handleAddNewColumn}>
                    Add column
                </button>
                <span className={cx('total-section')}>{columns.length} column</span>
            </div>
            <DragDropContext onDragEnd={onDragEnd}>
                <div className={cx('board-columns')}>
                    {columns.map((col) => (
                        <Droppable key={col.id} droppableId={col.id}>
                            {(provided) => (
                                <div ref={provided.innerRef} {...provided.droppableProps}>
                                    <Column column={col} onUpdateColumn={onUpdateColumn} />
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    ))}
                </div>
            </DragDropContext>

            {createKanbanItemModalIsOpen && <Modal>{<CreateKanbanItem columns={columns} />}</Modal>}
        </div>
    );
}

export default Kanban;
