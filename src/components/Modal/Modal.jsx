import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';

import Portal from '~/components/Portal';
import styles from './Modal.module.scss';

const cx = classNames.bind(styles);

function Modal({ children, overlay = true }) {
    const { themeMode, sidebarColor } = useSelector((state) => state.theme);
    return (
        <Portal>
            <div className={cx('wrapper', `${themeMode}`, `${sidebarColor}`)}>
                {overlay && <div className={cx('overlay')}></div>}
                {children}
            </div>
        </Portal>
    );
}

export default Modal;
