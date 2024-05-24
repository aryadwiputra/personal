import DashboardLayout from '@/Layouts/DashboardLayout'
import Pagination from '@/Components/Dashboard/Pagination';
import { Link, router } from '@inertiajs/react'
import { HiEye, HiPencil, HiTrash } from 'react-icons/hi';

const Index = ({ series }) => {
    const handleDelete = (url) => {
        if (confirm('Are you sure you want to delete this series?')) {
            router.delete(url);
        }
    }
    return (
        <>
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold leading-tight">Manage Series</h2>
                <div className="flex gap-2">
                    <Link href={route('admin.series.create')} className="px-4 py-2 bg-slate-900 text-white rounded">
                        Create
                    </Link>
                </div>
            </div>

            <section className="my-5">

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200">
                        <thead>
                            <tr className="bg-gray-200 text-gray-600  text-sm leading-normal">
                                <th className="py-3 px-6 text-left">No</th>
                                <th className="py-3 px-6 text-left">Title</th>
                                <th className="py-3 px-6 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600 text-sm font-light">
                            {series.data.length ? (
                                series.data.map((serie, index) => (
                                    <tr key={serie.id} className="border-b border-gray-200 hover:bg-gray-100">
                                        <td className="py-3 px-6 text-left">{index + 1}</td>
                                        <td className="py-3 px-6 text-left">{serie.title}</td>
                                        <td className="py-3 px-6 flex gap-2 justify-center">
                                            <button
                                                onClick={() => handleDelete(route('admin.series.destroy', serie.id))}
                                                className="px-3 py-2 bg-red-500 text-white rounded flex items-center hover:bg-red-700"
                                            >
                                                <HiTrash />
                                            </button>
                                            <Link href={route('admin.series.edit', serie.id)} className="px-3 py-2 bg-green-500 text-white rounded flex items-center">
                                                <HiPencil />
                                            </Link>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={6} className="py-3 px-6 text-center">No series found</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                    {/* Pagination */}
                    <Pagination meta={series.meta} links={series.links} />
                </div>
            </section>
        </>
    )
}

Index.layout = page => <DashboardLayout children={page} title="Series" />

export default Index
