import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleProject = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null);

    useEffect(() => {
        fetch("/singleProjectData.json")
            .then((res) => res.json())
            .then((data) => {
                const selected = data.find((item) => item.id === id);
                setProject(selected);
            });
    }, [id]);

    if (!project) {
        return <div className="text-center py-20">Loading...</div>;
    }

    return (
        <div className="bg-gray-100 py-10">
            <div className="max-w-4xl mx-auto px-4 py-10">
                <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 border border-gray-100">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full rounded-xl mb-6"
                    />
                    <h1 className="text-3xl font-bold mb-2 text-blue-950">{project.title}</h1>
                    <p className="text-sm text-gray-500 mb-2 capitalize">{project.category}</p>
                    <p className="mb-6 text-gray-700 leading-relaxed">{project.description}</p>

                    <h3 className="text-xl font-semibold mb-3 text-blue-950">Technologies Used:</h3>
                    <ul className="list-disc list-inside text-gray-700 mb-6">
                        {project.technologies.map((tech, index) => (
                            <li key={index}>{tech}</li>
                        ))}
                    </ul>


                    <a
                        href={project.liveLink || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-[#FFB800] text-blue-950 px-6 py-2 rounded-full font-semibold hover:bg-blue-900 hover:text-white  shadow-md  hover:transition hover:scale-105 cursor-pointe"
                    >
                        See Live Project
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SingleProject;
