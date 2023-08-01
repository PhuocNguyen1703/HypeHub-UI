import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Board.module.scss';
import Column from '~/layouts/components/Column';
import { cloneDeep, isEmpty } from 'lodash-es';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { useSelector } from 'react-redux';
import { createNewColumn, getBoardDetails, updateCard, updateColumn, updateTwoColumn } from '~/services/kanbanApi';
import Modal from '~/components/Modal';
import CreateKanbanItem from '~/components/Modal/CreateCardModal';
import { mapOrder } from '~/utils/sort';
import { useParams } from 'react-router-dom';

const cx = classNames.bind(styles);

function Board() {
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
    const { boardId } = useParams();

    useEffect(() => {
        // const boardData = boards.find((board) => board.id === 'board-1');
        // setBoard(boardData);
        // setColumns(boardData.columns);
        // const boardId = '6384c275a4c4ecc29352cf68';
        getBoardDetails(boardId).then((board) => {
            setBoard(board);
            setColumns(mapOrder(board.columns, board.columnOrder, '_id'));
        });
    }, []);

    const onDragEnd = (result) => {
        const { source, destination } = result;
        let newColumns = cloneDeep(columns);
        if (!result.destination) return;

        const sourceCol = newColumns.find((col) => col._id === source.droppableId);
        const destinationCol = newColumns.find((col) => col._id === destination.droppableId);
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

            sourceCol.cardOrder = sourceCol.cards.map((i) => i._id);
            destinationCol.cardOrder = destinationCol.cards.map((i) => i._id);
            // console.log(sourceCol);
            // console.log(destinationCol);
            setColumns(newColumns);

            //Update columns when drag ang drop
            const dataColumns = { sourceCol, destinationCol };
            updateTwoColumn(sourceCol._id, destinationCol._id, dataColumns).catch(() => setColumns(columns));

            let currentCard = cloneDeep(removedCard);
            currentCard.columnId = destinationCol._id;
            updateCard(currentCard._id, currentCard);
        } else {
            const [removedCard] = sourceCards.splice(source.index, 1);
            sourceCards.splice(destination.index, 0, removedCard);
            // console.log(sourceCards);

            sourceCol.cards = sourceCards;
            sourceCol.cardOrder = sourceCol.cards.map((i) => i._id);
            // console.log(sourceCol);
            setColumns(newColumns);

            if (source.index === destination.index) return;
            updateColumn(sourceCol._id, sourceCol).catch(() => setColumns(columns));
        }
    };

    const handleAddNewColumn = () => {
        const newColumn = {
            boardId: board._id,
            title: 'Untitled'.trim(),
        };
        createNewColumn(newColumn).then((column) => {
            let newColumns = [...columns];
            newColumns.push(column);

            let newBoard = { ...board };
            newBoard.columnOrder = newColumns.map((col) => col._id);
            newBoard.columns = newColumns;

            setBoard(newBoard);
            setColumns(newColumns);
        });
    };

    const onUpdateColumnState = (columnUpdate) => {
        let newColumns = [...columns];
        const columnIdToUpdate = columnUpdate._id;

        const columnIdxToUpdate = newColumns.findIndex((i) => i._id === columnIdToUpdate);

        if (columnUpdate._destroy) {
            newColumns.splice(columnIdxToUpdate, 1);
        } else {
            newColumns.splice(columnIdxToUpdate, 1, columnUpdate);
        }

        let newBoard = { ...board };
        newBoard.columnOrder = newColumns.map((col) => col._id);
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
                        <Droppable key={col._id} droppableId={col._id}>
                            {(provided) => (
                                <div ref={provided.innerRef} {...provided.droppableProps}>
                                    <Column column={col} onUpdateColumnState={onUpdateColumnState} />
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    ))}
                </div>
            </DragDropContext>

            {/* {createKanbanItemModalIsOpen && (
                <Modal>
                    <CreateKanbanItem columns={columns} />
                </Modal>
            )} */}
        </div>
    );
}

export default Board;
