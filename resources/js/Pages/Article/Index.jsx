import Hero from '@/Components/Frontend/Hero/Index'
import AppLayout from '@/Layouts/AppLayout'
import { Link } from '@inertiajs/react'

const Index = ({ articles }) => {
    return (
        <>
            <section className="bg-slate-900">
                <div className="max-w-screen-2xl mx-auto container px-6 md:px-0 py-24">
                    <div className="text-center mb-12 md:mb-24">
                        <h2 className='text-white text-4xl font-bold'>Artikel Terbaru</h2>
                        <p className='text-gray-400 text-lg mt-2'>Silahkan baca dan nikmati seluruh artikel secara gratis</p>

                    </div>
                    {/* List Cards Article */}
                    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {articles.length > 0 ? (
                            articles.map((article, index) => (
                                <div className="bg-white rounded-lg shadow-md overflow-hidden" key={index}>
                                    <div className="overflow-hidden">
                                        <img src={`/storage/articles/${article.picture}`} alt="Article Image" className="w-full h-72 object-cover transition-transform duration-500 hover:scale-110" />
                                    </div>
                                    <div className="p-6">
                                        <div className="flex mb-3">
                                            <span className="text-blue-600 bg-slate-200 px-3 py-1 rounded text-sm font-semibold">{article.category.name}</span>
                                        </div>

                                        <h3 className="text-xl font-bold mb-2">
                                            <Link href={route('articles.show', article.slug)}>
                                                {article.title}
                                            </Link>
                                        </h3>
                                        <p className="text-gray-700 mb-4 line-clamp-2">
                                            {article.teaser}
                                        </p>
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

Index.layout = page => <AppLayout children={page} title="Artikel" />

export default Index
