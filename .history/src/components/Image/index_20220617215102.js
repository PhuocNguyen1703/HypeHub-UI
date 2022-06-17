import React, { forwardRef } from 'react';

function Image({ ...props }) {
    // eslint-disable-next-line jsx-a11y/alt-text
    return <img {...props} />;
}

export default forwardRef(Image);
