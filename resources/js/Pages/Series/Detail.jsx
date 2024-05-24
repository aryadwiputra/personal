import Markdown from '@/Components/Frontend/Markdown/Index'
import AppLayout from '@/Layouts/AppLayout'
import { Link } from '@inertiajs/react'

const Detail = ({ series, articles }) => {
    console.log(articles)
    return (
        <>
            <section className="bg-slate-900">
                <div className="max-w-screen-2xl mx-auto container px-6 md:px-0 py-24">
                    <div className="flex flex-col gap-y-4 mb-4">
                        {/* <span className='px-4 py-2 text-white font-bold text-lg bg-blue-600 rounded self-start'>
                            {series.category.name}
                        </span> */}
                        <h2 className='text-white text-4xl font-bold leading-tight'>
                            {series.title}
                        </h2>
                    </div>
                    <div className="my-3">
                        <Markdown>{series.description}</Markdown>
                    </div>

                    <div className="flex mt-5 md:my-10">
                        <h2 className='text-3xl font-semibold text-white'>Daftar Artikel</h2>
                    </div>

                    {/* List Cards Article */}
                    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {articles.length > 0 ? (
                            articles.map((article, index) => (
                                <div className="bg-white rounded-lg shadow-md overflow-hidden" key={index}>
                                    <div className="overflow-hidden">
                                        <img src={`/articles/${article.picture}`} alt="Article Image" className="w-full h-72 object-cover transition-transform duration-500 hover:scale-110" />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold mb-2">
                                            <Link href={route('articles.show', article.slug)}>
                                                {article.title}
                                            </Link>
                                        </h3>
                                        <div className="flex justify-between items-center text-gray-600 text-sm mt-5">
                                            <span>{article.author.name}</span>
                                            <span>{new Date(article.created_at).toLocaleDateString()}</span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="text-white text-xl font-semibold col-span-3 text-center mt-10">
                                Tidak ada artikel yang dipublikasi
                            </div>
                        )}
                    </div>
                </div>


            </section>
        </>
    )
}

Detail.layout = page => <AppLayout children={page} title="Artikel" />

export default Detail
