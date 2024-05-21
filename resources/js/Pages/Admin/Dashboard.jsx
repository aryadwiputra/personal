import DashboardLayout from '@/Layouts/DashboardLayout'
import { Link } from '@inertiajs/react'

const Index = () => {
    return (
        <>
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold leading-tight">Dashboard</h2>
            </div>
        </>
    )
}

Index.layout = page => <DashboardLayout children={page} title="Blog" />

export default Index
