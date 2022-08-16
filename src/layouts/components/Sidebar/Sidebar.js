import { faRocketchat } from '@fortawesome/free-brands-svg-icons';
import { faAddressCard, faGear, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { MdOutlineDashboardCustomize } from 'react-icons/md';
import config from '~/config';

import Menu, { MenuItem } from './Menu';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    title="My profile"
                    to={config.routes.profile}
                    icon={<FontAwesomeIcon icon={faAddressCard} />}
                />
                <MenuItem title="Chats" to={config.routes.chat} icon={<FontAwesomeIcon icon={faRocketchat} />} />
                <MenuItem title="Employee" to={config.routes.employee} icon={<FontAwesomeIcon icon={faUserGroup} />} />
                <MenuItem title="Check in" to={config.routes.checkin} icon={<FontAwesomeIcon icon={faGear} />} />
                <MenuItem title="Candidate" to={config.routes.candidates} icon={<MdOutlineDashboardCustomize />} />
            </Menu>
        </aside>
    );
}

export default Sidebar;
