import classNames from 'classnames/bind';
import {
    BsColumnsGap,
    BsCalendar2Date,
    BsChatSquareDots,
    BsCheck2Square,
    BsClipboardCheck,
    BsEnvelope,
    BsPerson,
    BsAlarm,
    BsClipboardData,
} from 'react-icons/bs';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { useSelector } from 'react-redux';
import config from '~/config';

import styles from './Sidebar.module.scss';
import SidebarItem from './SidebarItem';

const cx = classNames.bind(styles);

function Sidebar() {
    const { currentUser } = useSelector((state) => state.auth.login);
    const menu = [
        {
            icon: <BsColumnsGap />,
            title: 'Dashboards',
            children: [
                {
                    icon: <BsClipboardData />,
                    title: 'Overview',
                    path: config.routes.home,
                },
                {
                    icon: <BsColumnsGap />,
                    title: 'Sales',
                    path: config.routes.sales,
                },
                {
                    icon: <BsColumnsGap />,
                    title: 'SD',
                    path: config.routes.profile,
                },
            ],
        },
        {
            icon: <BsEnvelope />,
            title: 'Email',
            path: config.routes.email,
        },
        {
            icon: <BsChatSquareDots />,
            title: 'Chat',
            path: config.routes.chat,
        },
        {
            icon: <BsCheck2Square />,
            title: 'Todo',
            path: config.routes.todo,
        },
        {
            icon: <BsCalendar2Date />,
            title: 'Calendar',
            path: config.routes.calendar,
        },
        {
            icon: <BsClipboardCheck />,
            title: 'Kanban',
            path: config.routes.kanban,
        },
        {
            icon: <BsPerson />,
            title: 'Profile',
            path: config.routes.profile,
        },
    ];

    const adminMenu = [
        {
            icon: <HiOutlineUserGroup />,
            title: 'Management',
            children: [
                {
                    icon: <BsClipboardData />,
                    title: 'User',
                    path: config.routes.user_management,
                },
                {
                    icon: <BsAlarm />,
                    title: 'Timesheets',
                    path: config.routes.timesheets,
                },
            ],
        },
    ];

    return (
        <div className={cx('wrapper')}>
            {menu.map((item, index) => (
                <SidebarItem key={index} item={item} />
            ))}

            {currentUser?.isAdmin && adminMenu.map((item, index) => <SidebarItem key={index} item={item} />)}
        </div>
    );
}

export default Sidebar;
