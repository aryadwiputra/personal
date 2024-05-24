import Markdown from '@/Components/Frontend/Markdown/Index'
import AppLayout from '@/Layouts/AppLayout'
import { Link } from '@inertiajs/react'

const Detail = ({ article, relatedArticles, relatedSeriesArticles, hasSeries }) => {
    return (
        <>
            <section className="bg-slate-900">
                <div className="max-w-screen-2xl mx-auto container px-6 md:px-0 py-24">
                    <div className="flex flex-col gap-y-4 mb-4">
                        {/* Only display category name if there are no series associated with the article */}
                        {!hasSeries && (
                            <span className='px-4 py-2 text-white font-bold text-lg bg-blue-600 rounded self-start'>
                                {article.category.name}
                            </span>
                        )}
                        <h2 className='text-white text-4xl font-bold leading-tight'>
                            {article.title}
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                        <div className="md:col-span-8 text-white">
                            <div className="text-gray-300">
                                <p className="text-xl">
                                    {article.content}
                                </p>
                            </div>
                            <div className="flex gap-x-5 text-gray-400">
                                <p className='underline'>
                                    {article.author.name}
                                </p>
                                <p>
                                    {new Date(article.created_at).toLocaleDateString()}
                                </p>
                            </div>
                            <div className="my-3">
                                <Markdown>{article.body}</Markdown>
                            </div>
                        </div>
                        <div className="md:col-span-4">
                            {relatedSeriesArticles.length > 0 && (
                                <div className="text-white">
                                    <h3 className="text-xl font-bold mb-4">Table of Contents</h3>
                                    <ul>
                                        {relatedSeriesArticles.map((item) => (
                                            <li key={item.id}>
                                                <Link href={route('articles.show', item.slug)}
                                                    className={`inline-block w-full text-left rounded-lg px-4 py-2 mt-2 text-white hover:text-gray-100 ${item.isActive ? "bg-gray-500" : "bg-gray-700 hover:bg-gray-600"}`}>
                                                    {item.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            <div className="text-white mt-5">
                                <h3 className="text-xl font-bold mb-4">Related Articles</h3>
                                <ul>
                                    {relatedArticles.map((item) => (
                                        <li key={item.id}>
                                            <Link href={route('articles.show', item.slug)}
                                                className={`inline-block w-full text-left rounded-lg px-4 py-2 mt-2 text-white hover:text-gray-100 ${item.isActive ? "bg-gray-500" : "bg-gray-700 hover:bg-gray-600"}`}>
                                                {item.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

Detail.layout = page => <AppLayout children={page} title="Artikel" />

export default Detail
