import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Kanban.module.scss';
import Column from '~/layouts/components/Column';
import { isEmpty } from 'lodash-es';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

const cx = classNames.bind(styles);

function Kanban() {
    const boards = [
        {
            id: 'column-1',
            title: 'To do column',
            cards: [
                {
                    id: 'card-1',
                    label: 'UI',
                    tagColor: 'radicchio-color',
                    createdAt: 'Sep 05, 2022',
                    title: 'title card 1',
                    description:
                        'HOw old are you ?HOw old are you ?HOw old are you ?HOw old are you ?HOw old are you ?HOw old are you ?HOw old are you ?HOw old are you ?HOw old are you ?HOw old are you ?HOw old are you ?HOw old are you ?HOw old are you ?',
                    picture:
                        'https://images.unsplash.com/photo-1617654112329-c446806d40e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHlwZXIlMjBjYXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
                },
                {
                    id: 'card-2',
                    title: 'title card 2',
                    label: 'UI Team',
                    tagColor: 'pistachio-color',
                    createdAt: 'Sep 22, 2023',
                    description: 'HOw old are you ?',
                    picture: null,
                },
                {
                    id: 'card-3',
                    title: 'title card 3',
                    label: 'UX Team',
                    tagColor: 'grape-color',
                    createdAt: 'Jan 13, 2022',
                    description: 'HOw old are you ?',
                    picture: null,
                },
                {
                    id: 'card-4',
                    title: 'title card 4',
                    label: 'Design Team',
                    tagColor: null,
                    createdAt: 'Oct 05, 2022',
                    description: 'HOw old are you ?',
                    picture: null,
                },
                {
                    id: 'card-5',
                    title: 'title card 5',
                    label: 'UI Team',
                    tagColor: 'mango-color',
                    createdAt: 'Sep 05, 2022',
                    description: 'HOw old are you ?',
                    picture:
                        'https://images.unsplash.com/photo-1525498128493-380d1990a112?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fCVFNSVCNyVBNSVFNSVBMCVCNHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                },
                {
                    id: 'card-6',
                    title: 'title card 6',
                    label: 'Developer',
                    tagColor: 'cherryBlossom-color',
                    createdAt: 'Sep 05, 2022',
                    description:
                        'HOw old are you ?HOw old are you ?HOw old are you ?HOw old are you ?HOw old are you ?HOw old are you ?HOw old are you ?HOw old are you ?HOw old are you ?HOw old are you ?HOw old are you ?',
                    picture: null,
                },
            ],
        },
        {
            id: 'column-2',
            title: 'Press column',
            cards: [
                {
                    id: 'card-7',
                    title: 'title card 7',
                    label: 'Marketing',
                    tagColor: null,
                    createdAt: 'Dec 05, 2022',
                    description: 'HOw old are you ?',
                    picture: null,
                },
                {
                    id: 'card-8',
                    title: 'title card 8',
                    label: 'UI',
                    tagColor: 'cyan-color',
                    createdAt: 'Sep 05, 2022',
                    description:
                        'HOw old are you ?HOw old are you ?HOw old are you ?HOw old are you ?HOw old are you ?HOw old are you ?HOw old are you ?HOw old are you ?HOw old are you ?HOw old are you ?HOw old are you ?HOw old are you ?HOw old are you ?HOw old are you ?HOw old are you ?HOw old are you ?',
                    picture: null,
                },
                {
                    id: 'card-9',
                    title: 'title card 9',
                    label: 'UI',
                    tagColor: 'orange-color',
                    createdAt: 'Sep 05, 2022',
                    description: 'HOw old are you ?',
                    picture:
                        'https://images.unsplash.com/photo-1584902645120-f86567d892b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGh5cGVyJTIwY2FyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
                },
                {
                    id: 'card-10',
                    title: 'title card 10',
                    label: 'UI',
                    tagColor: 'tomato-color',
                    createdAt: 'Sep 05, 2022',
                    description: 'HOw old are you ?',
                    picture: null,
                },
                {
                    id: 'card-11',
                    title: 'title card 11',
                    label: 'UI',
                    tagColor: null,
                    createdAt: 'Sep 05, 2022',
                    description:
                        'HOw old are you ?HOw old are you ?HOw old are you ?HOw old are you ?HOw old are you ?HOw old are you ?HOw old are you ?HOw old are you ?HOw old are you ?HOw old are you ?HOw old are you ?HOw old are you ?HOw old are you ?HOw old are you ?HOw old are you ?HOw old are you ?HOw old are you ?HOw old are you ?',
                    picture: null,
                },
                {
                    id: 'card-12',
                    title: 'title card 12',
                    label: 'UI',
                    tagColor: 'default-color',
                    createdAt: 'Sep 05, 2022',
                    description: 'HOw old are you ?',
                    picture:
                        'https://images.unsplash.com/photo-1632441730372-d8509de481d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGh5cGVyJTIwY2FyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
                },
            ],
        },
        {
            id: 'column-3',
            title: 'Task column',
            cards: [
                {
                    id: 'card-13',
                    title: 'title card 13',
                    label: 'UI',
                    tagColor: 'avocado-color',
                    createdAt: 'Sep 05, 2022',
                    description: 'HOw old are you ?',
                    picture: null,
                },
                {
                    id: 'card-14',
                    title: 'title card 14',
                    label: 'UI',
                    tagColor: 'peacock-color',
                    createdAt: 'Sep 05, 2022',
                    description: 'HOw old are you ?',
                    picture:
                        'https://images.unsplash.com/photo-1562234246-ca4e88982724?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fGh5cGVyJTIwY2FyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
                },
                {
                    id: 'card-15',
                    title: 'title card 15',
                    label: 'UI',
                    tagColor: 'cobalt-color',
                    createdAt: 'Sep 05, 2022',
                    description: 'HOw old are you ?',
                    picture:
                        'https://images.unsplash.com/photo-1663529628961-80aa6ebcd157?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
                },
            ],
        },
    ];

    const onDragEnd = (result) => {
        console.log(result);
        if (!result.destination) return;

        const { source, destination } = result;

        const sourceColIdx = boards.findIndex((e) => e.id === source.droppableId);
        const destinationColIdx = boards.findIndex((e) => e.id === destination.droppableId);

        const sourceCol = boards[sourceColIdx];
        const destinationCol = boards[destinationColIdx];

        const sourceCard = [...sourceCol.cards];
        const destinationCard = [...destinationCol.cards];

        if (source.droppableId !== destination.droppableId) {
            const [removed] = sourceCard.splice(source.index, 1);
            destinationCard.splice(destination.index, 0, removed);

            boards[sourceColIdx].cards = sourceCard;
            boards[destinationColIdx].cards = destinationCard;
        } else {
            const [removed] = sourceCard.splice(source.index, 1);
            destinationCard.splice(destination.index, 0, removed);

            boards[destinationColIdx].cards = destinationCard;
        }
    };

    if (isEmpty(boards)) {
        return <div>Not Found</div>;
    }

    return (
        <div className={cx('wrapper')}>
            <DragDropContext onDragEnd={onDragEnd}>
                <div className={cx('board-columns')}>
                    {boards.map((col) => (
                        <Droppable key={col.id} droppableId={col.id}>
                            {(provided) => (
                                <div ref={provided.innerRef} {...provided.droppableProps}>
                                    <Column column={col} />
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    ))}
                </div>
            </DragDropContext>
        </div>
    );
}

export default Kanban;
