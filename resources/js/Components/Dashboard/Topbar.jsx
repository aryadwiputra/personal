import { Avatar } from '@mui/material';
import { Link, usePage } from '@inertiajs/react'
import React from 'react'
import { HiOutlineMenu } from 'react-icons/hi'

export default function Topbar({ toggleSidebar }) {
    // Data pengguna contoh
    const { auth } = usePage().props

    const user = {
        name: auth.user.name,
        avatarInitials: auth.user.name.split(' ').map((name) => name.charAt(0)).join(''),
    }

    return (
        <div className='pb-3 mb-8 border-b flex flex-row items-center justify-between'>
            <div className='flex space-x-10'>
                <button onClick={toggleSidebar} className='text-black'>
                    <HiOutlineMenu className="h-6 w-6" />
                </button>
                <div className="">
                    <div className='font-semibold'>Sinar Kasih</div>
                    <div>Event Ticket</div>
                </div>
            </div>
            <div className="flex items-center space-x-3">
                {/* Tampilkan avatar dan nama pengguna */}
                <Avatar>{user.avatarInitials}</Avatar>
                <div>{user.name}</div>
            </div>
        </div>
    )
}
