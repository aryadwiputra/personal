import Pagination from '@/Components/Dashboard/Pagination';
import DashboardLayout from '@/Layouts/DashboardLayout'
import { Link } from '@inertiajs/react'
import clsx from 'clsx';

const Index = ({ articles }) => {
    console.log(articles);
    return (
        <>
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold leading-tight">Manage Articles</h2>
                <Link href={route('admin.articles.create')} className='px-4 py-2 bg-slate-900 text-white rounded'>Create</Link>
            </div>

            <section className="my-5">
                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200">
                        <thead>
                            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
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
                                        <td className="py-3 px-6 text-center">
                                            <Link href={route('admin.articles.edit', article.id)} className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700'>Edit</Link>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={4} className="py-3 px-6 text-center">No articles found</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                    {/* Pagination */}
                    <Pagination links={articles.links} />
                </div>
            </section>
        </>
    )
}

Index.layout = page => <DashboardLayout children={page} title="Article" />

export default Index
