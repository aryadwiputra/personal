import Markdown from '@/Components/Frontend/Markdown/Index'
import AppLayout from '@/Layouts/AppLayout'
import { Link } from '@inertiajs/react'

const Detail = ({ article }) => {
    console.log(article)
    return (
        <>
            <section className="bg-slate-900">
                <div className="max-w-screen-xl mx-auto container px-6 md:px-0 py-24">
                    <div className="flex flex-col gap-y-4 mb-4">
                        <span className='px-4 py-2 text-white font-bold text-lg bg-blue-600 rounded self-start'>
                            {article.category.name}
                        </span>
                        <h2 className='text-white text-4xl font-bold leading-tight'>
                            {article.title}
                        </h2>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex-1 text-white">
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
                        </div>
                    </div>
                    <div className="my-3">
                        <Markdown>{article.body}</Markdown>

                    </div>
                </div>
            </section>
        </>
    )
}

Detail.layout = page => <AppLayout children={page} title="Artikel" />

export default Detail
