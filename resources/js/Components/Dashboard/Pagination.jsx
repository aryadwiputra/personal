import { Link } from '@inertiajs/react';
import React from 'react';
import he from 'he';

export default function Pagination({ events }) {
    const { links } = events;

    if (!links || links.length === 1) return null; // Tidak menampilkan jika hanya satu halaman

    return (
        <div className="flex justify-end mt-4 space-x-2">
            <div className="flex justify-between w-full">

                <p>
                    Total : {events.total}
                </p>
                <div className="flex space-x-2">
                    {links.map((link, index) => (
                        <React.Fragment key={index}>
                            {link.url && (
                                <Link
                                    href={link.url}
                                    className={`px-3 py-1 rounded ${link.active ? 'font-semibold bg-dark-indigo text-white hover:bg-indigo-900' : 'bg-gray-200 text-gray-700 hover:bg-gray-300 '}`}
                                >
                                    {he.decode(link.label)}
                                </Link>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
}
