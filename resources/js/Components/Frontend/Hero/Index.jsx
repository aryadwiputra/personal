import { Link } from '@inertiajs/react'
import React from 'react'

export default function Hero() {
    return (
        <><section className='bg-gradient-to-r from-slate-900 via-gray-900 to-slate-900'>
            <div className='container max-w-screen-2xl mx-auto py-24 md:py-32'>
                <div className="flex flex-col md:flex-row items-center">
                    <div className="flex flex-col gap-5 w-full md:max-w-4xl text-center md:text-left md:h-full md:justify-center">
                        <h1 className='text-white text-4xl font-bold'>Halo 👋, saya Arya Dwi Putra</h1>
                        <p className='text-white text-xl'>Saya adalah seorang software engineer dengan pengalaman lebih dari 4 tahun. Dengan keahlian pada web dan mobile development, saya menguasai beberapa teknologi seperti Laravel, NodeJS, React Native, React JS, dan Tailwind CSS.</p>
                        <div className="flex gap-x-5 justify-center md:justify-start">
                            <Link href="/about" className='text-white text-xl font-bold px-4 py-3 rounded-md bg-blue-800 hover:bg-blue-700'>Tentang</Link>
                            <Link href="/projects" className='text-slate-900 text-xl font-bold px-4 py-3 rounded-md bg-white hover:bg-gray-100'>Portfolio</Link>
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
