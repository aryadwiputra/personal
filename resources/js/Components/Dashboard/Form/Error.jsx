import React from 'react';

export default function Error({ message, className = '', ...props }) {
    return (
        //
        <p {...props} className={'text-red-600 font-medium mt-2 ' + className}>
            {message}
        </p>
    );
}

