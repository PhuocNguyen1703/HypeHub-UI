import classNames from 'classnames/bind';

import Portal from '~/components/Portal';
import styles from './Modal.module.scss';

const cx = classNames.bind(styles);

function Modal({ children }) {
    return (
        <Portal>
            <div className={cx('wrapper')}>
                <div className={cx('overlay')}></div>
                {children}
            </div>
        </Portal>
    );
}

export default Modal;
