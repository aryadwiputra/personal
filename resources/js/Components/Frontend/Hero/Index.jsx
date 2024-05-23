import { Link } from '@inertiajs/react'
import React from 'react'

export default function Hero() {
    return (
        <>
            <section className='bg-gradient-to-r from-slate-900 via-gray-900 to-slate-900 border-b border-gray-800 border-dashed'>
                <div className='container max-w-screen-2xl mx-auto px-6 md:px-0 py-24 md:py-32'>
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="flex flex-col gap-y-8 md:gap-y-7 w-full md:max-w-4xl text-center md:text-left md:h-full md:justify-center">
                            <h1 className='text-white text-5xl font-semibold'>Halo 👋, saya Arya Dwi Putra</h1>
                            <p className="text-2xl text-white">
                                Saya adalah seorang software engineer dengan pengalaman lebih dari 4 tahun. Dengan keahlian pada web dan mobile development, saya menguasai beberapa teknologi seperti {" "} <span className='text-red-500 font-semibold'>Laravel</span>, <span className='text-green-600 font-semibold'>Node.js</span>, <span className="text-blue-600 font-semibold">React</span>, <span className='text-green-400 font-semibold'>Vue, Nuxt</span>, <span className="text-sky-500 font-semibold">Flutter</span> dan  <span className='bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent font-semibold'> TailwindCSS. </span>
                            </p>

                            <div className="flex gap-x-5 justify-center md:justify-start">
                                <Link href="/about" className='text-white text-xl font-semibold px-4 py-3 rounded-md bg-blue-800 hover:bg-blue-700'>Tentang</Link>
                                <Link href="/contact" className='text-slate-900 text-xl font-semibold px-4 py-3 rounded-md bg-white hover:bg-gray-100'>Hubungi Saya</Link>
                            </div>
                        </div>
                        <div className="flex justify-center md:justify-end md:ml-8">
                            <img src="/assets/hero-image.png" alt="Arya Dwi Putra" className='hidden md:block rounded-full w-32 h-32 md:w-96 md:h-96' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
