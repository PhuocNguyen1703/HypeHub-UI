import classNames from 'classnames/bind';

import styles from './KanbanSkeleton.module.scss';

const cx = classNames.bind(styles);

function KanbanSkeleton({ length }) {
    return (
        <div className={cx('wrapper')}>
            {Array.from(new Array(length)).map((i, idx) => (
                <div key={idx} className={cx('board')}>
                    <span className={cx('title')}></span>
                    <div className={cx('bottom')}>
                        <span className={cx('createdAt')}></span>
                        <div className={cx('action-btn')}></div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default KanbanSkeleton;
