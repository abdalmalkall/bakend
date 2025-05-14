import React from 'react';

const FrstSection = () => {
    const FemaleImage = "/src/assets/images/FemaleImage.png";

    return (
        <>
            <div className="w-full max-w-[1700px] mx-auto flex flex-col md:flex-row min-h-screen bg-white">
                {/* Left Section */}
                <div className="flex-1 flex flex-col justify-center px-6 md:px-12 py-12">
                    <div className="w-full">
                        <h1 className="text-[120px] md:text-[90px] font-extrabold text-blue-900 leading-tight mb-6">
                            Skill Your Way Up To Success With Us
                        </h1>
                        <p className="text-gray-500 mb-8">
                            Get the skills you need for the future of work.
                        </p>

                        {/* Search Bar */}
                        <div className="flex mb-6">
                            <input
                                type="text"
                                placeholder="Search the course you want"
                                className="flex-grow p-3  bg-gray-100 rounded-xl focus:outline-none text-sm"
                            />
                            <button className="bg-blue-900 text-white px-6 py-6 rounded-xl ml-3">
                                Search
                            </button>
                        </div>


                        {/* Course Categories */}
                        <div className="flex flex-col gap-3 w-full">
                            {/* First Row - 3 Buttons */}
                            <div className="flex gap-3">
                                <div className="bg-orange-400 text-white px-4 py-3 rounded-md text-sm flex-1 text-center">
                                    Cloud Computing
                                </div>
                                <div className="bg-gray-100 text-gray-600 px-4 py-3 rounded-md text-sm flex-1 text-center">
                                    Cyber Security
                                </div>
                                <div className="bg-gray-100 text-gray-600 px-4 py-3 rounded-md text-sm flex-1 text-center">
                                    DevOps
                                </div>
                            </div>

                            {/* Second Row - 2 Buttons (smaller width) */}
                            <div className="flex gap-3 ">
                                <div className="bg-gray-100 text-gray-600 px-8 py-3 rounded-md text-sm flex  text-center">
                                    Data Science
                                </div>
                                <div className="bg-gray-100 text-gray-600 px-8 py-3 rounded-md text-sm flex text-center">
                                    Software Testing
                                </div>
                            </div>
                        </div>



                    </div>
                </div>

                {/* Right Section */}
                <div className="flex-1 relative flex items-center justify-center">

                    {/* Person Image */}
                    <div className="relative z-10">
                        <img src={FemaleImage} alt="Woman with laptop" className="max-w-full" />


                    </div>
                </div>
            </div>
        </>
    );
};

export default FrstSection;
