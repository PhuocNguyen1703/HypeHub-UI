import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Kanban.module.scss';
import Column from '~/layouts/components/Column';
import { isEmpty } from 'lodash-es';

const cx = classNames.bind(styles);

function Kanban() {
    const boards = [
        {
            id: 'board-1',
            columnOrder: ['column-1', 'column-3', 'column-2'],
            columns: [
                {
                    id: 'column-1',
                    boardId: 'board-1',
                    title: 'To do column',
                    cardOrder: ['card-1', 'card-2', 'card-3', 'card-4', 'card-5', 'card-6'],
                    cards: [
                        {
                            id: 'card-1',
                            boardId: 'board-1',
                            columnId: 'column-1',
                            title: 'title card 1',
                            picture: null,
                        },
                        {
                            id: 'card-2',
                            boardId: 'board-1',
                            columnId: 'column-1',
                            title: 'title card 2',
                            picture: null,
                        },
                        {
                            id: 'card-3',
                            boardId: 'board-1',
                            columnId: 'column-1',
                            title: 'title card 3',
                            picture: null,
                        },
                        {
                            id: 'card-4',
                            boardId: 'board-1',
                            columnId: 'column-1',
                            title: 'title card 4',
                            picture: null,
                        },
                        {
                            id: 'card-5',
                            boardId: 'board-1',
                            columnId: 'column-1',
                            title: 'title card 5',
                            picture: null,
                        },
                        {
                            id: 'card-6',
                            boardId: 'board-1',
                            columnId: 'column-1',
                            title: 'title card 6',
                            picture: null,
                        },
                    ],
                },
                {
                    id: 'column-2',
                    boardId: 'board-1',
                    title: 'Press column',
                    cardOrder: ['card-7', 'card-8', 'card-9', 'card-10', 'card-11', 'card-12'],
                    cards: [
                        {
                            id: 'card-7',
                            boardId: 'board-1',
                            columnId: 'column-2',
                            title: 'title card 7',
                            picture: null,
                        },
                        {
                            id: 'card-8',
                            boardId: 'board-1',
                            columnId: 'column-2',
                            title: 'title card 8',
                            picture: null,
                        },
                        {
                            id: 'card-9',
                            boardId: 'board-1',
                            columnId: 'column-2',
                            title: 'title card 9',
                            picture: null,
                        },
                        {
                            id: 'card-10',
                            boardId: 'board-1',
                            columnId: 'column-2',
                            title: 'title card 10',
                            picture: null,
                        },
                        {
                            id: 'card-11',
                            boardId: 'board-1',
                            columnId: 'column-2',
                            title: 'title card 11',
                            picture: null,
                        },
                        {
                            id: 'card-12',
                            boardId: 'board-1',
                            columnId: 'column-2',
                            title: 'title card 12',
                            picture: null,
                        },
                    ],
                },
                {
                    id: 'column-3',
                    boardId: 'board-1',
                    title: 'Task column',
                    cardOrder: ['card-13', 'card-14', 'card-15'],
                    cards: [
                        {
                            id: 'card-13',
                            boardId: 'board-1',
                            columnId: 'column-3',
                            title: 'title card 13',
                            picture: null,
                        },
                        {
                            id: 'card-14',
                            boardId: 'board-1',
                            columnId: 'column-3',
                            title: 'title card 14',
                            picture: null,
                        },
                        {
                            id: 'card-15',
                            boardId: 'board-1',
                            columnId: 'column-3',
                            title: 'title card 15',
                            picture: null,
                        },
                    ],
                },
            ],
        },
    ];

    const [board, setBoard] = useState({});
    const [columns, setColumns] = useState({});

    useEffect(() => {
        const boardFromDB = boards.find((board) => board.id === 'board-1');
        if (boardFromDB) {
            setBoard(boardFromDB);

            // sort column
            boardFromDB.columns.sort((a, b) => {
                return boardFromDB.columnOrder.indexOf(a.id) - boardFromDB.columnOrder.indexOf(b.id);
            });
            setColumns(boardFromDB.columns);
        }
    }, []);

    if (isEmpty(board)) {
        return <div>Not Found</div>;
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('board-columns')}>
                {columns.map((col, idx) => (
                    <Column key={idx} column={col} />
                ))}
            </div>
        </div>
    );
}

export default Kanban;
