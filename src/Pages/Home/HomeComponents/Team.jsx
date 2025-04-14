import React, { useState, useEffect } from 'react';

const Team = () => {
    const [teamData, setTeamData] = useState([]);

    useEffect(() => {
        fetch('/team.json')
            .then((response) => response.json())
            .then((data) => setTeamData(data))
    }, []);

    return (
        <div className="bg-white py-20 px-4 sm:px-6 lg:px-8">
            <div  className="max-w-screen-xl mx-auto text-center">
                <div className="text-center">
                    <h1 className="text-blue-950 text-4xl font-bold mb-6">Meet Our Creative Team</h1>
                    <p className="text-gray-600 text-lg lg:w-6/12 mx-auto mb-16">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Established fact that a reader will.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {teamData.map((member, index) => (
                        <div key={index} className="bg-gray-100  p-6 rounded-lg shadow-lg text-center flex flex-col items-center">
                            <img src={`/${member.image}`}  alt={member.name} className=" mb-4 mx-auto object-cover rounded-lg  transition-all duration-300 hover:scale-105  hover:brightness-70"  />
                            <h3 className="text-2xl font-bold text-blue-950">{member.name}</h3>
                            <p className="text-[#FFB800] text-sm font-bold py-2">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Team;
