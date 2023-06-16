import React from 'react';
import '../style/error.css'

interface ErrorProps {
    children: React.ReactNode
}

const Error = ({children}: ErrorProps) => {
    return (
        <div className={'error'}>
            {children}
        </div>
    );
};

export default Error;