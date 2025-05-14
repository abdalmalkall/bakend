import React, { useState } from 'react';

const SecondSection = () => {
    const Group1 = "/src/assets/images/Group1.jpg";
    const Group2 = "/src/assets/images/Group2.jpg";
    const Group3 = "/src/assets/images/Group3.jpg";
    const Group4 = "/src/assets/images/Group4.jpg";

    // For carousel/slider functionality
    const [activeSlide, setActiveSlide] = useState(0);

    // Feature items for the carousel
    const features = [
        {
            title: "AI Based Course Selector",
            image: Group1,
            logo: "EZY"
        },
        {
            title: "AI Personalized Study Schedule",
            image: Group2,
            logo: "EZY"
        },
        {
            title: "AI Learning Assistant",
            image: Group3,
            logo: "EZY"
        },
        {
            title: "AI Progress Tracker",
            image: Group4,
            logo: "EZY"
        }
    ];

    // Function to handle slide navigation
    const goToSlide = (index) => {
        setActiveSlide(index);
    };

    return (
        <>
            <div className="w-full max-w-[1700px] mx-auto flex flex-col md:flex-row min-h-screen bg-white">

                {/* Left Title Section */}
                <div className="flex-1 flex flex-col justify-center px-6 md:px-12 py-12 w-full" >
                    <h2 className="text-[120px] md:text-[90px] font-extrabold text-blue-900 leading-tight mb-6">
                        <span className="text-blue-900">World's<br />First AI Based</span>
                        <br />
                        <span className="text-[#F98149]">Online Learning<br />Platform</span>
                    </h2>

                    {/* Dot pattern */}
                    <div className="mt-8 mb-4 overflow-hidden">
                        <div className="flex flex-col gap-4">
                            {[...Array(4)].map((_, rowIndex) => (
                                <div
                                    key={`row-${rowIndex}`}
                                    className="flex gap-4 translate-x-[-10%]"
                                >
                                    {[...Array(10)].map((_, i) => (
                                        <div
                                            key={`dot-${rowIndex}-${i}`}
                                            className="w-2 h-2 rounded-full bg-[#F98149]"
                                        ></div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>


                </div>

                {/* Right Features Carousel Section */}
                <div className="flex-1 relative flex items-center justify-center">
                    <div className="relative overflow-hidden">
                        {/* Features Slider */}
                        <div
                            className="flex transition-transform duration-300 ease-in-out"
                            style={{ transform: `translateX(-${activeSlide * 100 / features.length}%)`, width: `${features.length * 100}%` }}
                        >
                            {features.map((feature, index) => (
                                <div key={index} className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 p-2" style={{ width: `${100 / features.length}%` }}>
                                    {/* Feature image */}
                                    <div className="">
                                        <img src={feature.image} />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Carousel navigation dots */}
                        <div className="flex justify-center space-x-2 mt-6">
                            {features.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className={`w-8 h-1 rounded ${activeSlide === index ? 'bg-orange-500' : 'bg-gray-300'}`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default SecondSection;