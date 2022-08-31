import React from 'react';
import classNames from 'classnames/bind';
import { BsTrash, BsPlus, BsJournal, BsCheck2, BsExclamationLg, BsFillRecordFill } from 'react-icons/bs';

import styles from './Todo.module.scss';
import SidebarItem from '~/layouts/components/Sidebar/SidebarItem';

const cx = classNames.bind(styles);

function Todo() {
    const menu = [
        { icon: <BsJournal />, title: 'My Tasks', path: '/todo' },
        { icon: <BsExclamationLg />, title: 'Important', path: '/sent' },
        { icon: <BsCheck2 />, title: 'Completed', path: '/title' },
        { icon: <BsTrash />, title: 'Deleted', path: '/deleted' },
    ];

    const tags = [
        { icon: <BsFillRecordFill />, color: 'indigo', title: 'Team', path: '/company' },
        { icon: <BsFillRecordFill />, color: 'forestgreen', title: 'Low', path: '/important' },
        { icon: <BsFillRecordFill />, color: 'orange', title: 'Medium', path: '/important' },
        { icon: <BsFillRecordFill />, color: 'red', title: 'Hight', path: '/important' },
    ];

    const todo = [
        {
            title: 'How are you today ?',
            type: ['hight', 'team'],
            createdAt: 'Feb 22',
        },
        {
            title: 'How are you today ?',
            type: [],
            createdAt: 'Feb 22',
        },
        {
            title: 'How are you today ?',
            type: ['low'],
            createdAt: 'Feb 22',
        },
        {
            title: 'How are you today ?',
            type: ['medium', 'team'],
            createdAt: 'Feb 22',
        },
        {
            title: 'How are you today ?',
            type: [],
            createdAt: 'Feb 22',
        },
        {
            title: 'How are you today ?',
            type: ['hight'],
            createdAt: 'Feb 22',
        },
        {
            title: 'How are you today ?',
            type: ['team'],
            createdAt: 'Feb 22',
        },
        {
            title: 'How are you today ?',
            type: ['hight', 'team'],
            createdAt: 'Feb 22',
        },
        {
            title: 'How are you today ?',
            type: [],
            createdAt: 'Feb 22',
        },
        {
            title: 'How are you today ?',
            type: ['low'],
            createdAt: 'Feb 22',
        },
        {
            title: 'How are you today ?',
            type: ['medium', 'team'],
            createdAt: 'Feb 22',
        },
        {
            title: 'How are you today ?',
            type: [],
            createdAt: 'Feb 22',
        },
        {
            title: 'How are you today ?',
            type: ['hight'],
            createdAt: 'Feb 22',
        },
        {
            title: 'How are you today ?',
            type: ['team'],
            createdAt: 'Feb 22',
        },
        {
            title: 'How are you today ?',
            type: ['hight', 'team'],
            createdAt: 'Feb 22',
        },
        {
            title: 'How are you today ?',
            type: [],
            createdAt: 'Feb 22',
        },
        {
            title: 'How are you today ?',
            type: ['low'],
            createdAt: 'Feb 22',
        },
        {
            title: 'How are you today ?',
            type: ['medium', 'team'],
            createdAt: 'Feb 22',
        },
        {
            title: 'How are you today ?',
            type: [],
            createdAt: 'Feb 22',
        },
        {
            title: 'How are you today ?',
            type: ['hight'],
            createdAt: 'Feb 22',
        },
        {
            title: 'How are you today ?',
            type: ['team'],
            createdAt: 'Feb 22',
        },
        {
            title: 'How are you today ?',
            type: ['hight', 'team'],
            createdAt: 'Feb 22',
        },
        {
            title: 'How are you today ?',
            type: [],
            createdAt: 'Feb 22',
        },
        {
            title: 'How are you today ?',
            type: ['low'],
            createdAt: 'Feb 22',
        },
        {
            title: 'How are you today ?',
            type: ['medium', 'team'],
            createdAt: 'Feb 22',
        },
        {
            title: 'How are you today ?',
            type: [],
            createdAt: 'Feb 22',
        },
        {
            title: 'How are you today ?',
            type: ['hight'],
            createdAt: 'Feb 22',
        },
        {
            title: 'How are you today ?',
            type: ['team'],
            createdAt: 'Feb 22',
        },
        {
            title: 'How are you today ?',
            type: ['hight', 'team'],
            createdAt: 'Feb 22',
        },
        {
            title: 'How are you today ?',
            type: [],
            createdAt: 'Feb 22',
        },
        {
            title: 'How are you today ?',
            type: ['low'],
            createdAt: 'Feb 22',
        },
        {
            title: 'How are you today ?',
            type: ['medium', 'team'],
            createdAt: 'Feb 22',
        },
        {
            title: 'How are you today ?',
            type: [],
            createdAt: 'Feb 22',
        },
        {
            title: 'How are you today ?',
            type: ['hight'],
            createdAt: 'Feb 22',
        },
        {
            title: 'How are you today ?',
            type: ['team'],
            createdAt: 'Feb 22',
        },
    ];

    return (
        <div className={cx('wrapper')}>
            <div className={cx('sidebar')}>
                <button className={cx('create-task')}>
                    <BsPlus />
                    Create Task
                </button>
                {menu.map((item, index) => (
                    <SidebarItem key={index} item={item} className={'menu-item'} />
                ))}
                <span className={cx('tags')}>Tags</span>
                {tags.map((item, index) => (
                    <SidebarItem key={index} item={item} className={'tags-item'} />
                ))}
            </div>
            <div className={cx('content')}>
                {todo.map((item, index) => (
                    <div key={index} className={cx('todo-item')}>
                        <div className={cx('item-content')}>
                            <input type="checkbox" />
                            <span className={cx('item-title')}>{item.title}</span>
                        </div>
                        <div className={cx('date')}>
                            {item.type?.map((value, index) => (
                                <BsFillRecordFill
                                    key={index}
                                    style={{
                                        color: `${
                                            (value === 'team' && 'indigo') ||
                                            (value === 'low' && 'forestgreen') ||
                                            (value === 'medium' && 'orange') ||
                                            (value === 'hight' && 'red')
                                        }`,
                                    }}
                                />
                            ))}
                            <span>{item.createdAt}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Todo;
