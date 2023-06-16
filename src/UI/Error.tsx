import React from 'react';

interface ErrorProps {
    error: string
}

const Error = ({error}: ErrorProps) => {
    return (
        <div style={{color: 'red', fontSize: 20, fontWeight: 'bold', }}>
            {error}
        </div>
    );
};

export default Error;