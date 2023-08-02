import React from 'react';
import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import { useSelector } from 'react-redux';
import {images} from '~/assets/images';
import { Link } from 'react-router-dom';
import routes from '~/config/routes';
import Image from '~/components/Image';
import { BsLayers } from 'react-icons/bs';

const cx = classNames.bind(styles);

function Home() {
    const { currentUser } = useSelector((state) => state.auth.login);

    const todoList = [
        {
            tagColor: 'radicchio-color',
            title: 'what your name ?',
            description: 'asd asd asd asd asd asd asd asd asd asd asd asd asd ',
            status: 'New',
        },
        {
            tagColor: 'sage-color',
            title: 'what your name ?',
            description:
                'asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd ',
            status: 'New',
        },
        {
            tagColor: 'cobalt-color',
            title: 'what your name ?',
            description:
                'asd asd asd asd asd asd asdasd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd  asd asd asd asd asd asd ',
            status: 'New',
        },
        {
            tagColor: 'amethyst-color',
            title: 'what your name ?',
            description: 'asd asd asd asd asd asd asd asd asd asd asd asd asd ',
            status: 'New',
        },
        {
            tagColor: 'birch-color',
            title: 'what your name ?',
            description: 'asd asd asd asd asd asd asd asd asd asd asd asd asd ',
            status: 'New',
        },
        {
            tagColor: 'cyan-color',
            title: 'what your name ?',
            description:
                'asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd ',
            status: 'New',
        },
        {
            tagColor: 'orange-color',
            title: 'what your name ?',
            description: 'asd asd asd asd asd asd asd asd asd asd asd asd asd ',
            status: 'New',
        },
        {
            tagColor: 'lemon-color',
            title: 'what your name ?',
            description: 'asd asd asd asd asd asd asd asd asd asd asd asd asd ',
            status: 'New',
        },
        {
            tagColor: 'lime-color',
            title: 'what your name ?',
            description:
                'asd asd asd asd asd asdasd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd  asd asd asd asd asd asd asd ',
            status: 'New',
        },
        {
            tagColor: 'seafoam-color',
            title: 'what your name ?',
            description: 'asd asd asd asd asd asd asd asd asd asd asd asd asd ',
            status: 'New',
        },
        {
            tagColor: 'teal-color',
            title: 'what your name ?',
            description:
                'asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd ',
            status: 'New',
        },
        {
            tagColor: 'banana-color',
            title: 'what your name ?',
            description: 'asd asd asd asd asd asd asd asd asd asd asd asd asd ',
            status: 'New',
        },
        {
            tagColor: 'flamingo-color',
            title: 'what your name ?',
            description: 'asd asd asd asd asd asd asd asd asd asd asd asd asd ',
            status: 'New',
        },
        {
            tagColor: 'graphite-color',
            title: 'what your name ?',
            description: 'asd asd asd asd asd asd asd asd asd asd asd asd asd ',
            status: 'New',
        },
        {
            tagColor: 'wisteria-color',
            title: 'what your name ?',
            description: 'asd asd asd asd asd asd asd asd asd asd asd asd asd ',
            status: 'New',
        },
        {
            tagColor: 'peacock-color',
            title: 'what your name ?',
            description: 'asd asd asd asd asd asd asd asd asd asd asd asd asd ',
            status: 'New',
        },
        {
            tagColor: 'pistachio-color',
            title: 'what your name ?',
            description: 'asd asd asd asd asd asd asd asd asd asd asd asd asd ',
            status: 'New',
        },
        {
            tagColor: 'mango-color',
            title: 'what your name ?',
            description: 'asd asd asd asd asd asd asd asd asd asd asd asd asd ',
            status: 'New',
        },
        {
            tagColor: 'cocoa-color',
            title: 'what your name ?',
            description: 'asd asd asd asd asd asd asd asd asd asd asd asd asd ',
            status: 'New',
        },
        {
            tagColor: 'lavender-color',
            title: 'what your name ?',
            description: 'asd asd asd asd asd asd asd asd asd asd asd asd asd ',
            status: 'New',
        },
        {
            tagColor: 'eucalyptus-color',
            title: 'what your name ?',
            description: 'asd asd asd asd asd asd asd asd asd asd asd asd asd ',
            status: 'New',
        },
        {
            tagColor: 'avocado-color',
            title: 'what your name ?',
            description: 'asd asd asd asd asd asd asd asd asd asd asd asd asd ',
            status: 'New',
        },
        {
            tagColor: 'grape-color',
            title: 'what your name ?',
            description: 'asd asd asd asd asd asd asd asd asd asd asd asd asd ',
            status: 'New',
        },
        {
            tagColor: 'citron-color',
            title: 'what your name ?',
            description: 'asd asd asd asd asd asd asd asd asd asd asd asd asd ',
            status: 'New',
        },
        {
            tagColor: 'basil-color',
            title: 'what your name ?',
            description: 'asd asd asd asd asd asd asd asd asd asd asd asd asd ',
            status: 'New',
        },
        {
            tagColor: 'blueBerry-color',
            title: 'what your name ?',
            description: 'asd asd asd asd asd asd asd asd asd asd asd asd asd ',
            status: 'New',
        },
    ];

    const calendarData = [
        {
            tagColor: 'radicchio-color',
            title: 'what your name ?',
            description: 'asd asd asd asd asd asd asd asd asd asd asd asd asd ',
            type: 'Task',
        },
        {
            tagColor: 'sage-color',
            title: 'what your name ?',
            description:
                'asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd ',
            type: 'Task',
        },
        {
            tagColor: 'cobalt-color',
            title: 'what your name ?',
            description:
                'asd asd asd asd asd asd asdasd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd  asd asd asd asd asd asd ',
            type: 'Event',
        },
        {
            tagColor: 'amethyst-color',
            title: 'what your name ?',
            description: 'asd asd asd asd asd asd asd asd asd asd asd asd asd ',
            type: 'Task',
        },
        {
            tagColor: 'birch-color',
            title: 'what your name ?',
            description: 'asd asd asd asd asd asd asd asd asd asd asd asd asd ',
            type: 'Task',
        },
        {
            tagColor: 'cyan-color',
            title: 'what your name ?',
            description:
                'asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd ',
            type: 'Event',
        },
        {
            tagColor: 'orange-color',
            title: 'what your name ?',
            description: 'asd asd asd asd asd asd asd asd asd asd asd asd asd ',
            type: 'Task',
        },
        {
            tagColor: 'lemon-color',
            title: 'what your name ?',
            description: 'asd asd asd asd asd asd asd asd asd asd asd asd asd ',
            type: 'Event',
        },
        {
            tagColor: 'lime-color',
            title: 'what your name ?',
            description:
                'asd asd asd asd asd asdasd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd  asd asd asd asd asd asd asd ',
            type: 'Event',
        },
        {
            tagColor: 'seafoam-color',
            title: 'what your name ?',
            description: 'asd asd asd asd asd asd asd asd asd asd asd asd asd ',
            type: 'Event',
        },
        {
            tagColor: 'teal-color',
            title: 'what your name ?',
            description:
                'asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd ',
            type: 'Task',
        },
        {
            tagColor: 'banana-color',
            title: 'what your name ?',
            description: 'asd asd asd asd asd asd asd asd asd asd asd asd asd ',
            type: 'Task',
        },
        {
            tagColor: 'flamingo-color',
            title: 'what your name ?',
            description: 'asd asd asd asd asd asd asd asd asd asd asd asd asd ',
            type: 'Event',
        },
        {
            tagColor: 'graphite-color',
            title: 'what your name ?',
            description: 'asd asd asd asd asd asd asd asd asd asd asd asd asd ',
            type: 'Task',
        },
        {
            tagColor: 'wisteria-color',
            title: 'what your name ?',
            description: 'asd asd asd asd asd asd asd asd asd asd asd asd asd ',
            type: 'Event',
        },
        {
            tagColor: 'peacock-color',
            title: 'what your name ?',
            description: 'asd asd asd asd asd asd asd asd asd asd asd asd asd ',
            type: 'Event',
        },
        {
            tagColor: 'pistachio-color',
            title: 'what your name ?',
            description: 'asd asd asd asd asd asd asd asd asd asd asd asd asd ',
            type: 'Task',
        },
        {
            tagColor: 'mango-color',
            title: 'what your name ?',
            description: 'asd asd asd asd asd asd asd asd asd asd asd asd asd ',
            type: 'Event',
        },
        {
            tagColor: 'cocoa-color',
            title: 'what your name ?',
            description: 'asd asd asd asd asd asd asd asd asd asd asd asd asd ',
            type: 'Task',
        },
        {
            tagColor: 'lavender-color',
            title: 'what your name ?',
            description: 'asd asd asd asd asd asd asd asd asd asd asd asd asd ',
            type: 'Task',
        },
        {
            tagColor: 'eucalyptus-color',
            title: 'what your name ?',
            description: 'asd asd asd asd asd asd asd asd asd asd asd asd asd ',
            type: 'Event',
        },
        {
            tagColor: 'avocado-color',
            title: 'what your name ?',
            description: 'asd asd asd asd asd asd asd asd asd asd asd asd asd ',
            type: 'Event',
        },
        {
            tagColor: 'grape-color',
            title: 'what your name ?',
            description: 'asd asd asd asd asd asd asd asd asd asd asd asd asd ',
            type: 'Task',
        },
        {
            tagColor: 'citron-color',
            title: 'what your name ?',
            description: 'asd asd asd asd asd asd asd asd asd asd asd asd asd ',
            type: 'Event',
        },
        {
            tagColor: 'basil-color',
            title: 'what your name ?',
            description: 'asd asd asd asd asd asd asd asd asd asd asd asd asd ',
            type: 'Task',
        },
        {
            tagColor: 'blueBerry-color',
            title: 'what your name ?',
            description: 'asd asd asd asd asd asd asd asd asd asd asd asd asd ',
            type: 'Event',
        },
    ];

    const notificationData = [
        {
            avatar: 'https://images.unsplash.com/photo-1641894252843-9794796577be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fGF2YXRhciUyMGF2ZW50ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            fullName: 'Victoria Secret',
            content: 'sent a messagesent a messagesent a messagesent a messagesent a messagesent a message',
            createAt: '2022-10-11',
        },
        {
            avatar: 'https://images.unsplash.com/photo-1641894252843-9794796577be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fGF2YXRhciUyMGF2ZW50ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            fullName: 'Victoria Secret',
            content:
                'sent a message sent a message sent a message sent a message sent a message sent a message sent a message ',
            createAt: '2022-10-11',
        },
        {
            avatar: 'https://images.unsplash.com/photo-1641894252843-9794796577be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fGF2YXRhciUyMGF2ZW50ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            fullName: 'Victoria Secret',
            content: 'sent a message',
            createAt: '2022-10-11',
        },
        {
            avatar: 'https://images.unsplash.com/photo-1641894252843-9794796577be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fGF2YXRhciUyMGF2ZW50ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            fullName: 'Victoria Secret',
            content: 'sent a message',
            createAt: '2022-10-11',
        },
        {
            avatar: 'https://images.unsplash.com/photo-1641894252843-9794796577be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fGF2YXRhciUyMGF2ZW50ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            fullName: 'Victoria Secret',
            content: 'sent a message',
            createAt: '2022-10-11',
        },
        {
            avatar: 'https://images.unsplash.com/photo-1641894252843-9794796577be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fGF2YXRhciUyMGF2ZW50ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            fullName: 'Victoria Secret',
            content:
                'sent a message sent a message sent a message sent a message sent a message sent a message sent a message',
            createAt: '2022-10-11',
        },
        {
            avatar: 'https://images.unsplash.com/photo-1641894252843-9794796577be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fGF2YXRhciUyMGF2ZW50ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            fullName: 'Victoria Secret',
            content: 'sent a message',
            createAt: '2022-10-11',
        },
        {
            avatar: 'https://images.unsplash.com/photo-1641894252843-9794796577be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fGF2YXRhciUyMGF2ZW50ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            fullName: 'Victoria Secret',
            content: 'sent a message',
            createAt: '2022-10-11',
        },
        {
            avatar: 'https://images.unsplash.com/photo-1641894252843-9794796577be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fGF2YXRhciUyMGF2ZW50ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            fullName: 'Victoria Secret',
            content: 'sent a message',
            createAt: '2022-10-11',
        },
        {
            avatar: 'https://images.unsplash.com/photo-1641894252843-9794796577be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fGF2YXRhciUyMGF2ZW50ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            fullName: 'Victoria Secret',
            content: 'sent a message sent a message sent a message sent a message sent a message sent a message',
            createAt: '2022-10-11',
        },
    ];

    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('title')}>Overview</h1>
            <div className={cx('container')}>
                <div className={cx('header-grid')}>
                    <div className={cx('welcome')}>
                        <div className={cx('info')}>
                            <div>
                                <h3>Welcome {currentUser?.fullName} !!</h3>
                                <p>
                                    Wishing everyone a smooth new day and a hard working day. Check your work in your
                                    todo list.
                                </p>
                            </div>
                            <img src={images.workspace} alt="workspace" />
                        </div>
                        <Link to={routes.todo} className={cx('todo-btn')}>
                            View TodoList
                        </Link>
                    </div>
                    <div className={cx('item2')}>asd</div>
                    <div className={cx('item3')}>what</div>
                    <div className={cx('item4')}>hell</div>
                    <div className={cx('item5')}>lo</div>
                    <div className={cx('item6')}>who</div>
                    <div className={cx('item7')}>sho</div>
                </div>
                <div className={cx('center')}>
                    <div className={cx('todo-list')}>
                        <span className={cx('todo-title')}>To do</span>
                        <div className={cx('todo-container')}>
                            {todoList.map((item, idx) => (
                                <div key={idx} className={cx('todo-item')}>
                                    <span className={cx('todo-tag', item.tagColor)}></span>
                                    <input className={cx('checkbox')} type="checkbox" />
                                    <div className={cx('todo-content')}>
                                        <span>{item.title}</span>
                                        <p>{item.description}</p>
                                    </div>
                                    <span className={cx('todo-status')}>{item.status}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={cx('item9')}>spay</div>
                </div>
                <div className={cx('footer')}>
                    <div className={cx('calendar')}>
                        <span className={cx('calendar-title')}>Calendar</span>
                        <div className={cx('calendar-container')}>
                            {calendarData.map((item, idx) => (
                                <div key={idx} className={cx('calendar-item')}>
                                    <input className={cx('checkbox')} type="checkbox" />
                                    <div className={cx('calendar-content')}>
                                        <span>{item.title}</span>
                                        <p>{item.description}</p>
                                    </div>
                                    <span className={cx('calendar-type', item.tagColor)}>{item.type}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={cx('notification')}>
                        <span className={cx('notification-title')}>Notifications</span>
                        <div className={cx('notification-container')}>
                            {notificationData.map((item, idx) => (
                                <div key={idx} className={cx('notification-item')}>
                                    <Image src={item.avatar} alt="avatar" className={cx('avatar')} />
                                    <div className={cx('notification-content')}>
                                        <p>
                                            <strong>{item.fullName} </strong>
                                            {item.content}
                                        </p>
                                        <span>{item.createAt}</span>
                                    </div>
                                    <span className={cx('icon-layer')}>
                                        <BsLayers />
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={cx('email')}>
                        <span className={cx('email-title')}>Email</span>
                        <div className={cx('email-container')}>
                            {notificationData.map((item, idx) => (
                                <div key={idx} className={cx('email-item')}>
                                    <div className={cx('email-content')}>
                                        <p>
                                            <strong>{item.fullName} </strong>
                                            {item.content}
                                        </p>
                                        <span>{item.createAt}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
