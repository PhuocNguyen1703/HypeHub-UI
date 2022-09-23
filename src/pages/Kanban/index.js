import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Kanban.module.scss';
import Column from '~/layouts/components/Column';
import { isEmpty } from 'lodash-es';
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
                    cardOrder: ['card-1', 'card-2', 'card-3', 'card-4', 'card-5', 'card-6'],
                    cards: [
                        {
                            id: 'card-1',
                            boardId: 'board-1',
                            columnId: 'column-1',
                            label: 'UI',
                            createdAt: 'Sep 05, 2022',
                            title: 'title card 1',
                            description: 'HOw old are you ?',
                            picture:
                                'https://images.unsplash.com/photo-1617654112329-c446806d40e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHlwZXIlMjBjYXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
                        },
                        {
                            id: 'card-2',
                            boardId: 'board-1',
                            columnId: 'column-1',
                            title: 'title card 2',
                            label: 'UI Team',
                            createdAt: 'Sep 22, 2023',
                            description: 'HOw old are you ?',
                            picture: null,
                        },
                        {
                            id: 'card-3',
                            boardId: 'board-1',
                            columnId: 'column-1',
                            title: 'title card 3',
                            label: 'UX Team',
                            createdAt: 'Jan 13, 2022',
                            description: 'HOw old are you ?',
                            picture: null,
                        },
                        {
                            id: 'card-4',
                            boardId: 'board-1',
                            columnId: 'column-1',
                            title: 'title card 4',
                            label: 'Design Team',
                            createdAt: 'Oct 05, 2022',
                            description: 'HOw old are you ?',
                            picture: null,
                        },
                        {
                            id: 'card-5',
                            boardId: 'board-1',
                            columnId: 'column-1',
                            title: 'title card 5',
                            label: 'UI Team',
                            createdAt: 'Sep 05, 2022',
                            description: 'HOw old are you ?',
                            picture: null,
                        },
                        {
                            id: 'card-6',
                            boardId: 'board-1',
                            columnId: 'column-1',
                            title: 'title card 6',
                            label: 'Developer',
                            createdAt: 'Sep 05, 2022',
                            description: 'HOw old are you ?',
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
                            label: 'Marketing',
                            createdAt: 'Dec 05, 2022',
                            description: 'HOw old are you ?',
                            picture: null,
                        },
                        {
                            id: 'card-8',
                            boardId: 'board-1',
                            columnId: 'column-2',
                            title: 'title card 8',
                            label: 'UI',
                            createdAt: 'Sep 05, 2022',
                            description: 'HOw old are you ?',
                            picture: null,
                        },
                        {
                            id: 'card-9',
                            boardId: 'board-1',
                            columnId: 'column-2',
                            title: 'title card 9',
                            label: 'UI',
                            createdAt: 'Sep 05, 2022',
                            description: 'HOw old are you ?',
                            picture:
                                'https://images.unsplash.com/photo-1584902645120-f86567d892b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGh5cGVyJTIwY2FyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
                        },
                        {
                            id: 'card-10',
                            boardId: 'board-1',
                            columnId: 'column-2',
                            title: 'title card 10',
                            label: 'UI',
                            createdAt: 'Sep 05, 2022',
                            description: 'HOw old are you ?',
                            picture: null,
                        },
                        {
                            id: 'card-11',
                            boardId: 'board-1',
                            columnId: 'column-2',
                            title: 'title card 11',
                            label: 'UI',
                            createdAt: 'Sep 05, 2022',
                            description: 'HOw old are you ?',
                            picture: null,
                        },
                        {
                            id: 'card-12',
                            boardId: 'board-1',
                            columnId: 'column-2',
                            title: 'title card 12',
                            label: 'UI',
                            createdAt: 'Sep 05, 2022',
                            description: 'HOw old are you ?',
                            picture:
                                'https://images.unsplash.com/photo-1632441730372-d8509de481d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGh5cGVyJTIwY2FyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
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
                            label: 'UI',
                            createdAt: 'Sep 05, 2022',
                            description: 'HOw old are you ?',
                            picture: null,
                        },
                        {
                            id: 'card-14',
                            boardId: 'board-1',
                            columnId: 'column-3',
                            title: 'title card 14',
                            label: 'UI',
                            createdAt: 'Sep 05, 2022',
                            description: 'HOw old are you ?',
                            picture:
                                'https://images.unsplash.com/photo-1562234246-ca4e88982724?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fGh5cGVyJTIwY2FyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
                        },
                        {
                            id: 'card-15',
                            boardId: 'board-1',
                            columnId: 'column-3',
                            title: 'title card 15',
                            label: 'UI',
                            createdAt: 'Sep 05, 2022',
                            description: 'HOw old are you ?',
                            picture:
                                'https://images.unsplash.com/photo-1663529628961-80aa6ebcd157?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
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

            // sort column after setColumn
            setColumns(mapOrder(boardFromDB.columns, boardFromDB.columnOrder, 'id'));
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
