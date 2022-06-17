import React from 'react';

function MenuItem({ data }) {
    return <button>{JSON.stringify(data)}</button>;
}

export default MenuItem;
