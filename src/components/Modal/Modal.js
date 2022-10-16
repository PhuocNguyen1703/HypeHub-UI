import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';

import Portal from '~/components/Portal';
import styles from './Modal.module.scss';

const cx = classNames.bind(styles);

function Modal({ children }) {
    const { themeMode, sidebarColor } = useSelector((state) => state.theme);
    return (
        <Portal>
            <div className={cx('wrapper', `${themeMode}`, `${sidebarColor}`)}>
                <div className={cx('overlay')}></div>
                {children}
            </div>
        </Portal>
    );
}

export default Modal;
