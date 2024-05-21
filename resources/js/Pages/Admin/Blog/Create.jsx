import DashboardLayout from '@/Layouts/DashboardLayout'
import { Link } from '@inertiajs/react'

const Index = () => {
    return (
        <>
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold leading-tight">Create New Blog</h2>
            </div>

            <section className="my-5">
                <form>
                    <div className="mb-6">
                        <label htmlFor="title" className="block mb-2 font-medium text-gray-900">Title</label>
                        <input type="text" id="title" name="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5" placeholder="Enter blog title" required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="teaser" className="block mb-2 font-medium text-gray-900">Teaser</label>
                        <textarea id="teaser" name="teaser" rows="4" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5" placeholder="Write your blog teaser here..." required></textarea>
                    </div>
                    <button type="submit" className="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 font-medium rounded text-sm px-5 py-2.5 text-center">Create</button>
                </form>
            </section>
        </>
    )
}

Index.layout = page => <DashboardLayout children={page} title="Create new blog" />

export default Index
