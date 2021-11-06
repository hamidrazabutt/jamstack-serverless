import React from 'react';

export default ({ children}) => {
    return <>
    <h1>Header</h1>
    {children || <h1> No Children Found</h1>}
    </>;
}