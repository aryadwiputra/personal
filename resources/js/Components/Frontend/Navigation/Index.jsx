import { Link } from '@inertiajs/react'
import React from 'react'
import NavigationLink from './Link'

export default function Navigation() {
    return (
        <>
            <nav className="hidden border-b border-dashed border-gray-800 bg-gray-900 py-4 shadow lg:block">
                <div className="mx-auto max-w-screen-2xl">
                    <div className="flex items-center justify-between">
                        {/* Title */}
                        <Link href='/'
                            className="mr-3 text-xl font-semibold capitalize text-white"
                        >
                            {import.meta.env.VITE_APP_NAME}
                        </Link>
                        <div className="flex flex-1 items-center justify-between">
                            {/* Left Menu */}
                            <div className='flex items-center'>
                                <NavigationLink>Beranda</NavigationLink>
                            </div>
                            {/* Right Menu */}
                            <div className="flex items-center">
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
