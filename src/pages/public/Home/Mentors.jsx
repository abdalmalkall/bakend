import React from 'react';

function Mentors() {
    return (
        <>
            <div className="w-full max-w-[1700px] mx-auto flex flex-col bg-white px-12 py-8">
                <div className="mb-8">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 leading-tight">
                        <span className="text-blue-900">Meet Our Professional</span>
                        <br />
                        <span className="text-orange-500">Mentors & Trainers</span>
                    </h2>
                </div>

                <div className="flex flex-wrap gap-8">

                    {/* Mentor Cards */}
                    <div className="flex flex-col md:flex-row gap-8 w-full">
                        {/* Sandeep Card */}
                        <div className="flex-1 bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 relative">
                                    <img src="/api/placeholder/100/100" alt="Sandeep" className="rounded-full" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">Sandeep</h3>
                                    <p className="text-sm text-gray-600">Android & Flutter Developer</p>
                                </div>
                            </div>

                            <div className="flex items-center mb-3">
                                <div className="flex">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                    ))}
                                </div>
                                <span className="text-xs text-gray-600 ml-2">(70 Reviews)</span>
                            </div>

                            <div className="flex gap-4 mb-4">
                                <div className="flex items-center">
                                    <svg className="w-4 h-4 text-gray-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    <span className="text-xs">99.5K Minutes</span>
                                </div>
                                <div className="flex items-center">
                                    <svg className="w-4 h-4 text-gray-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                                    </svg>
                                    <span className="text-xs">275 Students</span>
                                </div>
                            </div>

                            <p className="text-sm text-gray-700">
                                Sandeep is a full-stack Developer who specialized in  MERN Stack. He loves to help and guide 1000s of students to build a better future for themselves.
                            </p>
                        </div>

                        {/* Sudhansu Card */}
                        <div className="flex-1 bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 relative">
                                    <img src="/api/placeholder/100/100" alt="Sudhansu" className="rounded-full" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">Sudhansu</h3>
                                    <p className="text-sm text-gray-600">Ethical Hacker, Cyber Security, Forensic</p>
                                </div>
                            </div>

                            <div className="flex items-center mb-3">
                                <div className="flex">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                    ))}
                                </div>
                                <span className="text-xs text-gray-600 ml-2">(93 Reviews)</span>
                            </div>

                            <div className="flex gap-4 mb-4">
                                <div className="flex items-center">
                                    <svg className="w-4 h-4 text-gray-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    <span className="text-xs">17.6K Minutes</span>
                                </div>
                                <div className="flex items-center">
                                    <svg className="w-4 h-4 text-gray-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                                    </svg>
                                    <span className="text-xs">102 Students</span>
                                </div>
                            </div>

                            <p className="text-sm text-gray-700">
                                He's now a Certified Hacker with specialization in Cyber security, Cyber Analyst, Web Server & Network. He helps students over 20 years and counting blocks of students to excels in security.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Orange semi-circle decoration */}
                <div className="absolute left-0 bottom-0 w-32 h-64 bg-orange-400 rounded-r-full opacity-30"></div>
               
            </div>
        </>
    );
}

export default Mentors;