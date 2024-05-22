import Hero from '@/Components/Frontend/Hero/Index'
import PortfolioCard from '@/Components/Frontend/PortfolioCard/Index'
import AppLayout from '@/Layouts/AppLayout'
import { Link } from '@inertiajs/react'

const Index = () => {
    const projects = [
        { id: 1, title: 'Project 1', description: 'This is a project', imageUrl: 'https://via.placeholder.com/640x360', technologies: ['React', 'Vue'], githubUrl: 'https://github.com/aryadwiputra/project1' },
        { id: 2, title: 'Project 2', description: 'This is another project', imageUrl: 'https://via.placeholder.com/640x360', technologies: ['Laravel', 'Flutter'], githubUrl: 'https://github.com/aryadwiputra/project2' },
        { id: 3, title: 'Project 3', description: 'This is another project', imageUrl: 'https://via.placeholder.com/640x360', technologies: ['Laravel', 'Flutter'], githubUrl: 'https://github.com/aryadwiputra/project2' },
    ]
    return (
        <>
            <section className="bg-slate-900">
                <div className="max-w-screen-2xl mx-auto container px-6 md:px-0 py-24">
                    <div className="bg-gray-800 w-full py-10 px-6 md:px-12 lg:px-24 xl:px-32 rounded">
                        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start">
                            <img src="https://media.licdn.com/dms/image/D4E03AQFZQ2Gbd8TkEg/profile-displayphoto-shrink_400_400/0/1673573702148?e=2147483647&v=beta&t=zlKMsSExaDQI0Xr6dBxTSm2AGQXgWYXYNU5Xng2kTyo" className='rounded-full w-24 h-24 md:w-32 md:h-32' alt="" />
                            <div className="ml-4">
                                <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold">Arya Dwi Putra</h1>
                                <p className="text-gray-400 text-lg mt-2">Software Engineer</p>
                            </div>
                        </div>
                        <div className="mt-5 text-center md:text-left">
                            <p className="text-gray-400 text-base md:text-lg lg:text-xl">Saya adalah seorang Software Engineer yang tinggal di Kabupaten Bogor, Jawa Barat, Indonesia. Saya memiliki pengalaman dalam mengembangkan aplikasi web dan mobile menggunakan Laravel, React, Vue, dan Flutter. Selama ini saya bekerja sebagai Senior Software Engineer di salah satu perusahaan Internet Service Provider di Jakarta, sebelum itu saya bekerja sebagai Supervisor Programmer di PT. Iconmedia Lintas Nusantara selama 20 bulan.</p>
                        </div>
                        {/* Button to social media */}
                        <div className="flex flex-wrap justify-center gap-2 md:gap-0 md:justify-start mt-5">
                            <a target='_blank' href="https://www.linkedin.com/in/aryadwiputra/" className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md mb-2 md:mb-0 md:mr-4">LinkedIn</a>
                            <a target='_blank' href="https://github.com/aryadwiputra" className="bg-gray-500 text-white font-bold py-2 px-4 rounded-md mb-2 md:mb-0 md:mr-4">GitHub</a>
                            <a target='_blank' href="https://www.facebook.com/aryadptraa/" className="bg-blue-800 text-white font-bold py-2 px-4 rounded-md mb-2 md:mb-0 md:mr-4">Facebook</a>
                            <a target='_blank' href="https://www.instagram.com/aryadwiiptr/" className="bg-red-500 text-white font-bold py-2 px-4 rounded-md mb-2 md:mb-0">Instagram</a>
                        </div>

                    </div>


                    <div className="mt-10">
                        <h1 className="text-white text-4xl font-bold">Portfolio</h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
                            {projects.map(project => (
                                <PortfolioCard key={project.id} project={project} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

Index.layout = page => <AppLayout children={page} title="Tentang" />

export default Index
