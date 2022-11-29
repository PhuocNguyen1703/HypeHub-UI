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
            ],
        },
    ];

    const userId = useSelector((state) => state.auth.login.currentUser._id);
    const { createKanbanItemModalIsOpen } = useSelector((state) => state.modal);
    const [sections, setSections] = useState(boards[0].columns);
    const [board, setBoard] = useState(boards[0]);
    const [columns, setColumns] = useState(board.columns);

    // useEffect(() => {
    //     const getSections = async () => {
    //         try {
    //             const res = await getAllSection(userId);
    //             setSections(res.data);
    //             console.log(res);
    //         } catch (error) {}
    //     };
    //     getSections();
    // }, []);

    const handleAddSection = async () => {
        const data = {
            userId: userId,
            sectionId: uuid(),
        };
        try {
            const section = await createSection(data);
            setSections([...sections, section.data]);
        } catch (error) {
            console.log(error);
        }
    };

    const onDragEnd = (result) => {
        console.log(result);
        // if (!result.destination) return;

        // const { source, destination } = result;

        // const sourceColIdx = sections.findIndex((e) => e._id === source.droppableId);
        // const destinationColIdx = sections.findIndex((e) => e._id === destination.droppableId);

        // const sourceCol = sections[sourceColIdx];
        // const destinationCol = sections[destinationColIdx];
        // console.log(sourceCol);

        // const sourceSectionId = sourceCol.sectionId;
        // const destinationSectionId = destinationCol.sectionId;

        // // const sourceCard = [...sourceCol.cards];
        // const sourceTasks = [...sourceCol.tasks];
        // // const destinationCard = [...destinationCol.cards];
        // const destinationCard = [...destinationCol];

        // if (source.droppableId !== destination.droppableId) {
        //     const [removed] = sourceTasks.splice(source.index, 1);
        //     destinationCard.splice(destination.index, 0, removed);

        //     // boards[sourceColIdx].cards = sourceCard;
        //     // boards[destinationColIdx].cards = destinationCard;
        // } else {
        //     // const [removed] = sourceCard.splice(source.index, 1);
        //     // destinationCard.splice(destination.index, 0, removed);
        //     // boards[destinationColIdx].cards = destinationCard;
        // }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <button className={cx('add-section-btn')} onClick={handleAddSection}>
                    Add section
                </button>
                <span className={cx('total-section')}>{sections.length} section</span>
            </div>
            <DragDropContext onDragEnd={onDragEnd}>
                <div className={cx('board-columns')}>
                    {columns.map((col) => (
                        <Droppable key={col.id} droppableId={col.id}>
                            {(provided) => (
                                <div ref={provided.innerRef} {...provided.droppableProps}>
                                    <Column column={col} sections={sections} setSections={setSections} />
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    ))}
                </div>
            </DragDropContext>

            {createKanbanItemModalIsOpen && (
                <Modal>
                    <CreateKanbanItem sections={sections} setSections={setSections} />
                </Modal>
            )}
        </div>
    );
}

export default Kanban;
