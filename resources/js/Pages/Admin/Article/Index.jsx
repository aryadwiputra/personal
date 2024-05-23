import Pagination from '@/Components/Dashboard/Pagination';
import DashboardLayout from '@/Layouts/DashboardLayout'
import { Link, router } from '@inertiajs/react'
import clsx from 'clsx';
import { HiEye, HiPencil, HiTrash } from 'react-icons/hi';

const Index = ({ articles }) => {
    const handleDelete = (url) => {
        if (window.confirm('Are you sure you want to delete this article?')) {
            router.delete(url);
        }
    };
    return (
        <>
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold leading-tight">Manage Articles</h2>
                <div className="flex gap-2">
                    <Link href={route('admin.articles.create')} className="px-4 py-2 bg-slate-900 text-white rounded">
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
                                <th className="py-3 px-6 text-left">Category</th>
                                <th className="py-3 px-6 text-center">Status</th>
                                <th className="py-3 px-6 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600 text-sm font-light">
                            {articles.data.length ? (
                                articles.data.map((article, index) => (
                                    <tr key={article.id} className="border-b border-gray-200 hover:bg-gray-100">
                                        <td className="py-3 px-6 text-left">{index + 1}</td>
                                        <td className="py-3 px-6 text-left">{article.title}</td>
                                        <td className="py-3 px-6 text-left">{article.category.name}</td>
                                        <td className="py-3 px-6 text-center">
                                            <span className={clsx(
                                                article.status == 'Published' && 'bg-green-100 text-green-800',
                                                article.status == 'Unpublished' && 'bg-orange-100 text-orange-800',
                                                article.status == 'Preview' && 'bg-sky-100 text-sky-800',
                                                'px-2 py-1 rounded text-xs font-semibold'
                                            )}>
                                                {article.status}
                                            </span>
                                        </td>
                                        <td className="py-3 px-6 flex gap-2 justify-center">
                                            <button
                                                onClick={() => handleDelete(route('admin.articles.destroy', article.id))}
                                                className="px-3 py-2 bg-red-500 text-white rounded flex items-center hover:bg-red-700"
                                            >
                                                <HiTrash />
                                            </button>
                                            <Link href={route('admin.articles.edit', article.id)} className="px-3 py-2 bg-green-500 text-white rounded flex items-center">
                                                <HiPencil />
                                            </Link>
                                            <Link href={route('admin.articles.show', article.id)} className="px-3 py-2 bg-slate-800 text-white rounded flex items-center">
                                                <HiEye />
                                            </Link>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={5} className="py-3 px-6 text-center">No articles found</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                    {/* Pagination */}
                    <Pagination meta={articles.meta} links={articles.links} />
                </div>
            </section>
        </>
    )
}

Index.layout = page => <DashboardLayout children={page} title="Article" />

export default Index
