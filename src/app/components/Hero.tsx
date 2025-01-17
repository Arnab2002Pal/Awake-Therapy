import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import Navbar from './Navbar';

const HeroComponent = ({ heading, secondHeading, subheading }: { heading: string, secondHeading: string, subheading: string }) => {
    return (
        <div className=" relative">
            {/* Floating Header */}
            <Navbar/>
            {/* Hero Section */}
            <div
                className="relative h-screen bg-cover bg-no-repeat p-12 text-center"
                style={{
                    backgroundImage: `url(${process.env.WALLPAPER})`,
                }}
            >
                <div
                    className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
                    style={{ backgroundColor: "rgba(255, 230, 243, 0.42)" }}
                >
                    <div className="flex h-full w-full text-left mx-32 items-center justify-start">
                        <div className="text-neutral-900 pt-20 w-1/3">
                            <h2 className="mb-4 text-4xl font-semibold">
                                {heading}
                                <span className="text-purple-700">
                                    {secondHeading}
                                </span>
                            </h2>
                            <h4 className="mb-6 text-xl font-semibold">{subheading}</h4>
                            <div className="text-pink-400 flex flex-col justify-center items-start gap-5">
                                <button
                                    type="button"
                                    className="flex flex-row gap-2 items-center hover:text-pink-600"
                                >
                                    <p>About Awake Therapy</p>
                                    <div>
                                        <FaArrowRightLong />
                                    </div>
                                </button>
                                <button
                                    type="button"
                                    className="flex flex-row gap-2 items-center hover:text-pink-600"
                                >
                                    <p>Meet The Team</p>
                                    <div>
                                        <FaArrowRightLong />
                                    </div>
                                </button>
                                <button
                                    type="button"
                                    className="flex flex-row gap-2 items-center hover:text-pink-600"
                                >
                                    <p>Schedule An Initial Consultation</p>
                                    <div>
                                        <FaArrowRightLong />
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroComponent;
