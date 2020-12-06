import React from 'react'

export const Error = ({text, classCss}) => {
    return (
        <div className={`alert alert-danger mb-0 p-1 text-center ${classCss}`} role="alert">
            {text}
        </div>
    );
}

