import { faGear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Menu, { MenuItem } from './Menu';

import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="My profile" to="/profile" icon={<FontAwesomeIcon icon={faGear} />} />
                <MenuItem title="Chats" to="/chat" icon={<FontAwesomeIcon icon={faGear} />} />
                <MenuItem title="My password" to="/profi" icon={<FontAwesomeIcon icon={faGear} />} />
                <MenuItem title="My live" to="/pr" icon={<FontAwesomeIcon icon={faGear} />} />
            </Menu>
        </aside>
    );
}

export default Sidebar;
