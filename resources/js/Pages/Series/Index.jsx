import Hero from '@/Components/Frontend/Hero/Index'
import AppLayout from '@/Layouts/AppLayout'
import { Link } from '@inertiajs/react'

const Index = ({ series }) => {
    return (
        <>
            <section className="bg-slate-900">
                <div className="max-w-screen-2xl mx-auto container px-6 md:px-0 py-24">
                    <div className="text-center mb-12 md:mb-24">
                        <h2 className='text-white text-4xl font-bold'>Series Terbaru</h2>
                        <p className='text-gray-400 text-lg mt-2'>Silahkan baca dan nikmati seluruh series secara gratis</p>

                    </div>
                    {/* List Cards Series */}
                    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {series.length > 0 ? (
                            series.map((serie, index) => (
                                <div className="bg-white rounded-lg shadow-md overflow-hidden" key={index}>
                                    <div className="overflow-hidden">
                                        <img src={`/series/${serie.picture}`} alt="Series Image" className="w-full h-72 object-cover transition-transform duration-500 hover:scale-110" />
                                    </div>
                                    <div className="p-6">

                                        <h3 className="text-xl font-bold mb-2">
                                            <Link href={route('series.show', serie.slug)}>
                                                {serie.title}
                                            </Link>
                                        </h3>
                                        <p className="text-gray-700 mb-4 line-clamp-2">
                                            {serie.teaser}
                                        </p>
                                        <div className="flex justify-between items-center text-gray-600 text-sm mt-5">
                                            {/* <span>{serie.author.name}</span> */}
                                            <span>{new Date(serie.created_at).toLocaleDateString()}</span>
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
