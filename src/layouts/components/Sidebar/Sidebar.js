import classNames from 'classnames/bind';
import {
    BsColumnsGap,
    BsCalendar2Date,
    BsChatSquareDots,
    BsCheck2Square,
    BsClipboardCheck,
    BsEnvelope,
    BsPerson,
    BsClipboardData,
    BsPeople,
    BsPatchQuestion,
    BsClock,
} from 'react-icons/bs';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { useSelector } from 'react-redux';
import config from '~/config';

import styles from './Sidebar.module.scss';
import SidebarItem from './SidebarItem';
import { Link } from 'react-router-dom';
import images from '~/assets/images';
import { AnimatePresence, motion } from 'framer-motion';

const cx = classNames.bind(styles);

function Sidebar() {
    const { currentUser } = useSelector((state) => state.auth.login);
    const { sidebarCollapsed } = useSelector((state) => state.layout);
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
            children: [
                {
                    icon: <BsPeople />,
                    title: 'Group',
                    path: config.routes.chat.group,
                },
                {
                    icon: <BsPerson />,
                    title: 'Private',
                    path: config.routes.chat.private,
                },
            ],
        },
        {
            icon: <BsCheck2Square />,
            title: 'Todo',
            path: config.routes.todo,
        },
        {
            icon: <BsClock />,
            title: 'Timeline',
            path: config.routes.timeline,
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
            path: config.routes.profile.default,
        },
        {
            icon: <BsPatchQuestion />,
            title: 'Support',
            path: config.routes.support,
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
                    path: config.routes.user_management.default,
                },
                {
                    icon: <BsPatchQuestion />,
                    title: 'Ticket',
                    path: config.routes.support_center,
                },
            ],
        },
    ];

    return (
        <div className={cx('wrapper')}>
            <Link to={config.routes.home} className={cx('logo')}>
                <img className={cx('logo-image')} src={images.logo} alt="logo" />
                <AnimatePresence>
                    {!sidebarCollapsed && (
                        <motion.h1
                            initial={{
                                width: 0,
                                opacity: 0,
                                transition: {
                                    duration: 0.2,
                                },
                            }}
                            animate={{
                                width: '100%',
                                opacity: 1,
                                transition: {
                                    duration: 0.2,
                                },
                            }}
                            exit={{
                                width: 0,
                                opacity: 0,
                                transition: {
                                    duration: 0.2,
                                },
                            }}
                        >
                            HypeHub
                        </motion.h1>
                    )}
                </AnimatePresence>
            </Link>
            {menu.map((item, index) => (
                <SidebarItem key={index} item={item} />
            ))}

            {currentUser?.isAdmin && adminMenu.map((item, index) => <SidebarItem key={index} item={item} />)}
        </div>
    );
}

export default Sidebar;
