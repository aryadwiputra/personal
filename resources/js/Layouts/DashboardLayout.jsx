import Sidebar from '@/Components/Dashboard/Sidebar'
import Topbar from '@/Components/Dashboard/Topbar'
import { Head, Link } from '@inertiajs/react'
import React, { useState } from 'react'

export default function DashboardLayout({ children, title }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    return (
        <>
            <Head title={title} />
            <div className="min-h-screen bg-gray-100">
                <div className="flex flex-row">
                    {/* <Sidebar /> */}
                    <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
                    {/* <div className="col-span-3 overflow-auto lg:col-span-5 lg-border-l w-[82%]"> */}
                    <div className={`col-span-3 overflow-auto lg:col-span-5 lg-border-l w-${isSidebarOpen ? '[82%]' : 'full'}`}>
                        <div className="px-6 py-6 lg:px-8">
                            <Topbar toggleSidebar={toggleSidebar} />

                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
