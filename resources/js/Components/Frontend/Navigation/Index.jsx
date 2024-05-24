import { Link } from '@inertiajs/react'
import React from 'react'
import NavigationLink from './Link'

export default function Navigation() {
    return (
        <>
            <nav className="hidden border-b border-dashed border-slate-800 bg-slate-900 py-4 shadow lg:block">
                <div className="mx-auto max-w-screen-2xl">
                    <div className="flex items-center justify-between">
                        {/* Title */}
                        <Link href={route('home')}
                            className="mr-3 text-xl font-bold capitalize text-white"
                        >
                            {import.meta.env.VITE_APP_NAME}
                        </Link>
                        <div className="flex flex-1 items-center justify-between">
                            {/* Left Menu */}
                            <div className='flex items-center'>
                                <NavigationLink href={route('home')}
                                    active={route().current('home')}>Beranda</NavigationLink>
                                <NavigationLink href={route('articles.index')}
                                    active={route().current('articles.*')}>Artikel</NavigationLink>
                                <NavigationLink href={route('about')}
                                    active={route().current('about')}>Tentang</NavigationLink>
                                <NavigationLink href={route('series.index')}
                                    active={route().current('series.*')}>Series</NavigationLink>
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
