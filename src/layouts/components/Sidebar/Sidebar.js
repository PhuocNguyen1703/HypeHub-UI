import { faRocketchat } from '@fortawesome/free-brands-svg-icons';
import { faAddressCard, faGear, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Menu, { MenuItem } from './Menu';

import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="My profile" to="/profile" icon={<FontAwesomeIcon icon={faAddressCard} />} />
                <MenuItem title="Chats" to="/chat" icon={<FontAwesomeIcon icon={faRocketchat} />} />
                <MenuItem title="Employee" to="/employee" icon={<FontAwesomeIcon icon={faUserGroup} />} />
                <MenuItem title="Room" to="/" icon={<FontAwesomeIcon icon={faGear} />} />
            </Menu>
        </aside>
    );
}

export default Sidebar;
