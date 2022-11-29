import React, { useEffect, useState } from 'react';
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
import { deleteSection, getAllTask, updateSection } from '~/api/kanbanApi';

const cx = classNames.bind(styles);
let timer;
const timeout = 500;

function Column({ column, sections, setSections }) {
    const [tasks, setTasks] = useState([]);
    const dispatch = useDispatch();

    // useEffect(() => {
    //     const getTasks = async () => {
    //         try {
    //             const res = await getAllTask(column.sectionId);
    //             setTasks(res.data);
    //         } catch (error) {}
    //     };
    //     getTasks();
    // }, [column]);

    const handleUpdateTitle = async (e) => {
        console.log('updateTitle');
        // clearTimeout(timer);
        // const newTitle = e.target.value;
        // const newSections = [...sections];
        // const idx = newSections.findIndex((item) => item.sectionId === column.sectionId);
        // newSections[idx].title = newTitle;
        // setSections(newSections);
        // timer = setTimeout(async () => {
        //     try {
        //         const sectionId = column.sectionId;
        //         await updateSection(sectionId, { title: newTitle });
        //         console.log('updated');
        //     } catch (error) {
        //         console.log(error);
        //     }
        // }, timeout);
    };

    const handleAddItem = () => {
        dispatch(setCreateKanbanItemModalIsOpen(true));
        dispatch(setSelectedItem(column));
    };

    const handleRemoveSection = async () => {
        try {
            await deleteSection(column.sectionId);
            const newSections = [...sections].filter((e) => e.sectionId !== column.sectionId);
            setSections(newSections);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <header className={cx('column-header')}>
                <input
                    className={cx('column-title')}
                    value={column.title}
                    placeholder="Untitled"
                    onChange={handleUpdateTitle}
                />
                {/* <span className={cx('column-title')}>{column.title}</span> */}
                <div className={cx('action-btn')}>
                    <button className={cx('icon')} onClick={handleAddItem}>
                        <FaPlus />
                    </button>
                    <button className={cx('icon')} onClick={handleRemoveSection}>
                        <BsTrash />
                    </button>
                </div>
            </header>
            <div className={cx('column-content')}>
                {column.cards.map((task, idx) => (
                    <Draggable key={task.id} draggableId={task.id} index={idx}>
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
                                <Card task={task} />
                            </div>
                        )}
                    </Draggable>
                ))}
            </div>
        </div>
    );
}

export default Column;
