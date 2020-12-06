import React from 'react'

export const Loader = () => {
    return (
        <div className="text-center text-warning mt-3 mb-3">
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
}

