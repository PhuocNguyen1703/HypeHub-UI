import React from 'react';
import Button from '~/components/Button';

function MenuItem({ data }) {
    return <Button leftIcon = {data.icon}>{data.title}
     console.log(data)
     </Button>;
}

export default MenuItem;
