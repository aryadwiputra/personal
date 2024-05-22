import DashboardLayout from '@/Layouts/DashboardLayout'
import { Link } from '@inertiajs/react'

const Index = () => {
    return (
        <>
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold leading-tight">Manage Articles</h2>
                <Link href={route('admin.articles.create')} className='px-4 py-2 bg-slate-900 text-white rounded'>Create</Link>
            </div>
        </>
    )
}

Index.layout = page => <DashboardLayout children={page} title="Article" />

export default Index
