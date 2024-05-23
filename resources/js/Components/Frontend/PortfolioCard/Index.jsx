import React from 'react';

const PortfolioCard = ({ project }) => {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img className="w-full h-48 object-cover object-center" src={project.imageUrl} alt={project.title} />
            <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-700">{project.description}</p>
                <div className="mt-4 flex justify-between items-center">
                    <span className="text-gray-600">{project.technologies.join(', ')}</span>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Github</a>
                </div>
            </div>
        </div>
    );
};

export default PortfolioCard;
