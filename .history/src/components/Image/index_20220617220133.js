import React, { useState, forwardRef } from 'react';
import avatar from '~/assets/images';

function Image({ src, alt, ...props }, ref) {
    const [fallback, setFallback] = useState('');

    return <img ref={ref} src={fallback ||src} {...props} alt={alt} onError={hande} />;
}

export default forwardRef(Image);
