import Navigation from '@/Components/Frontend/Navigation/Index'
import { Head } from '@inertiajs/react'
import React from 'react'

export default function AppLayout({ title, children }) {
    return (
        <>
            <Head title={title} />
            <Navigation />
            {children}
        </>
    )
}
