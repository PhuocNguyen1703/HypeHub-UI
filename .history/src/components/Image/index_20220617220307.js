import React, { useState, forwardRef } from 'react';
import images from '~/assets/images';

function Image({ src, alt, ...props }, ref) {
    const [fallback, setFallback] = useState('');

    const handleError = () => {setFallback(images.logo)};

    return <img ref={ref} src={fallback || src} {...props} alt={alt} onError={handleError} />;
}

export default forwardRef(Image);
