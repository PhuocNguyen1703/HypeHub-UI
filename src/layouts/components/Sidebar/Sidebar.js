import { faRocketchat } from '@fortawesome/free-brands-svg-icons';
import { faAddressCard, faGear, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { MdOutlineDashboardCustomize, MdNavigateNext, MdMailOutline } from 'react-icons/md';
import { BsColumnsGap, BsCalendar2Date, BsChatSquareDots, BsCheck2Square, BsClipboardCheck } from 'react-icons/bs';
import config from '~/config';

import Menu, { MenuItem } from './Menu';
import styles from './Sidebar.module.scss';
import { useEffect, useRef } from 'react';

const cx = classNames.bind(styles);

function Sidebar({ showSidebar }) {
    return (
        <aside className={cx('wrapper', showSidebar ? '' : 'hide')}>
            <Menu>
                <MenuItem
                    title="Dashboards"
                    to={config.routes.profile}
                    leftIcon={<BsColumnsGap />}
                    rightIcon={<MdNavigateNext />}
                />
            </Menu>
            <span className={cx('label')}>Application</span>
            <Menu>
                <MenuItem title="Email" to={config.routes.profile} leftIcon={<MdMailOutline />} />
                <MenuItem title="Chat" to={config.routes.profile} leftIcon={<BsChatSquareDots />} />
                <MenuItem title="Todo" to={config.routes.profile} leftIcon={<BsCheck2Square />} />
                <MenuItem title="Calendar" to={config.routes.profile} leftIcon={<BsCalendar2Date />} />
                <MenuItem title="Kanban" to={config.routes.profile} leftIcon={<BsClipboardCheck />} />
            </Menu>
            <Menu>
                <MenuItem
                    title="My profile"
                    to={config.routes.profile}
                    leftIcon={<FontAwesomeIcon icon={faAddressCard} />}
                />
                <MenuItem title="Chats" to={config.routes.chat} leftIcon={<FontAwesomeIcon icon={faRocketchat} />} />
                <MenuItem
                    title="Employee"
                    to={config.routes.employee}
                    leftIcon={<FontAwesomeIcon icon={faUserGroup} />}
                />
                <MenuItem title="Check in" to={config.routes.checkin} leftIcon={<FontAwesomeIcon icon={faGear} />} />
                <MenuItem title="Candidate" to={config.routes.candidates} leftIcon={<MdOutlineDashboardCustomize />} />
            </Menu>
        </aside>
    );
}

export default Sidebar;
