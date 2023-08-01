import { useState, forwardRef } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './image.module.scss';
import { images } from '~/assets/images';

const cx = classNames.bind(styles);

const Image = forwardRef(({ src, alt, className, ...props }, ref) => {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(images.coverAvatar);
    };

    return (
        <img
            className={cx('sub-avatar', className)}
            ref={ref}
            src={fallback || src}
            {...props}
            alt={alt}
            onError={handleError}
        />
    );
});

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
};

export default Image;
