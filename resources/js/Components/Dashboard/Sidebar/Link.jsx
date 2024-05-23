import { Link } from '@inertiajs/react'
import clsx from 'clsx'
import React from 'react'

export default function SidebarLink({ active = false, children, ...props }) {
    return (
        <>
            {/* <Link
                className={clsx(
                    active && 'font-semibold text-white',
                    'inline-block rounded px-4 py-2 text-gray-400 text-lg'
                )}
                {...props}
            >
                {children}
            </Link> */}
            <Link className={clsx(active && 'font-semibold bg-gray-600', 'flex items-center justify-start px-6 py-3 rounded-md text-lg font-semibold text-white hover:bg-gray-500 hover:text-butter-yellow')} {...props}>
                {children}
            </Link>
        </>
    )
}
