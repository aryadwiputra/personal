import React from 'react';

const PortfolioCard = ({ project }) => {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img className="w-full h-72 object-cover " src={`/projects/${project.picture}`} alt={project.title} />
            <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-700">{project.description}</p>
                <div className="mt-4 flex justify-between items-center">
                    {/* <span className="text-gray-600">{project.technologies.join(', ')}</span> */}
                    <div className="flex gap-x-2">
                        {project.tags.map((tag, index) => (
                            <span key={index} className="text-white bg-blue-600 px-2 py-1 text-sm rounded">{tag.name}</span>
                        ))}
                    </div>
                    <a href={project.source_code} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Github</a>
                </div>
            </div>
        </div>
    );
};

export default PortfolioCard;
