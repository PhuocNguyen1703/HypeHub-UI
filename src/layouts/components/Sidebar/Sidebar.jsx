import classNames from 'classnames/bind';
import {
    BsCalendar2Date,
    BsChatSquareDots,
    BsCheck2Square,
    BsClipboardCheck,
    BsClipboardData,
    BsClock,
    BsColumnsGap,
    BsEnvelope,
    BsPatchQuestion,
    BsPerson
} from 'react-icons/bs';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { useSelector } from 'react-redux';
import config from '~/config';

import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { images } from '~/assets/images';
import { MANAGE_TICKETS_PATH, MANAGE_USERS_PATH } from '~/utils/constants';
import styles from './Sidebar.module.scss';
import SidebarItem from './SidebarItem';

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
                    path: config.routes.home,
                },
                {
                    icon: <BsColumnsGap />,
                    title: 'SD',
                    path: config.routes.home,
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
            icon: <BsClock />,
            title: 'Timeline',
            path: config.routes.timeline,
        },
        {
            icon: <BsCalendar2Date />,
            title: 'Calendar',
            path: config.routes.calendar.path,
        },
        {
            icon: <BsClipboardCheck />,
            title: 'Kanban',
            path: config.routes.kanban,
        },
        {
            icon: <BsPerson />,
            title: 'Profile',
            path: config.routes.profile.path,
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
            title: 'Manage',
            children: [
                {
                    icon: <BsClipboardData />,
                    title: 'Users',
                    path: MANAGE_USERS_PATH,
                },
                {
                    icon: <BsPatchQuestion />,
                    title: 'Tickets',
                    path: MANAGE_TICKETS_PATH,
                },
            ],
        },
    ];

    const showAnimation = {
        hidden: {
            width: 0,
            opacity: 0,
            transition: {
                duration: 0.4,
            },
        },
        show: {
            width: '100%',
            opacity: 1,
            transition: {
                duration: 0.4,
            },
        },
    };

    return (
        <div className={cx('wrapper')}>
            <Link to={config.routes.home} className={cx('logo')}>
                <img className={cx('logo-image')} src={images.logo} alt="logo" />
                <AnimatePresence>
                    {!sidebarCollapsed && (
                        <motion.span
                            className={cx('app-name')}
                            variants={showAnimation}
                            initial="show"
                            animate="show"
                            exit="hidden"
                        >
                            HypeHub
                        </motion.span>
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
