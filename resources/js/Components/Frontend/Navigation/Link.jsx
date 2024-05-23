import { Link } from '@inertiajs/react';
import clsx from 'clsx';
import React from 'react';

export default function NavigationLink({ active = false, children, ...props }) {
    return (
        <Link
            className={clsx(
                active && 'font-semibold text-white',
                'inline-block rounded px-4 py-2 text-gray-400 text-lg'
            )}
            {...props}
        >
            {children}
        </Link>
    );
}
