import React, { forwardRef } from 'react';

function Image({src,  ,...props }, ref) {
    // eslint-disable-next-line jsx-a11y/alt-text
    return <img ref={ref} {...props} />;
}

export default forwardRef(Image);
