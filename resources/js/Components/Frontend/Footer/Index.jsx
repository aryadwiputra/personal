import React from 'react'
import { Link } from '@inertiajs/react'
export default function Footer() {
    return (
        <>
            <footer className="bg-gradient-to-r from-slate-900 via-gray-900 to-slate-900 border-t border-gray-800 border-dashed text-white py-12">
                <div className="max-w-screen-2xl mx-auto container px-6 md:px-0">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Contact Info */}
                        <div>
                            <h3 className="text-2xl font-bold mb-4">Kontak</h3>
                            <p className="mb-2">De Paris Residence, Kalisuren, Tajurhalang</p>
                            <p className="mb-2">Bogor, Indonesia 16320</p>
                            <p className="mb-2">Email: aryadptr.business@gmail.com</p>
                            {/* <p>Phone: +62 812 3456 7890</p> */}
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="text-2xl font-bold mb-4">Tautan Cepat</h3>
                            <ul className="space-y-2">
                                <li><Link href="/" className="hover:underline">Beranda</Link></li>
                                <li><Link href="/about" className="hover:underline">Tentang</Link></li>
                                <li><Link href="/projects" className="hover:underline">Porfolio</Link></li>
                                <li><Link href="/contact" className="hover:underline">Kontak</Link></li>
                            </ul>
                        </div>

                        {/* Social Media */}
                        <div>
                            <h3 className="text-2xl font-bold mb-4">Ikuti Kami</h3>
                            <div className="flex space-x-4">
                                <a href="https://facebook.com" className="hover:text-blue-600"><i className="fab fa-facebook fa-2x"></i></a>
                                <a href="https://twitter.com" className="hover:text-blue-400"><i className="fab fa-twitter fa-2x"></i></a>
                                <a href="https://instagram.com" className="hover:text-pink-600"><i className="fab fa-instagram fa-2x"></i></a>
                                <a href="https://linkedin.com" className="hover:text-blue-700"><i className="fab fa-linkedin fa-2x"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-700 mt-8 pt-8 text-center">
                        <p>&copy; {new Date().getFullYear()} Arya Dwi Putra. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}
