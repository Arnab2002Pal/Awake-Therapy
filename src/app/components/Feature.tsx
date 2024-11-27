import React from 'react';

const FeatureComponent = () => {
    const features = [
        {
            title: "Subscriptionless Therapy",
            description:
                "We believe in providing mental healthcare on your terms. That's why we're a pay-as-you-go service. Book sessions as needed without being locked into monthly or annual plans.",
        },
        {
            title: "Market-Leading Pricing",
            description:
                "Enjoy therapy at competitive rates—$30-$45 per half hour and $60-$90 per hour—passing savings directly to you through virtual care.",
        },
        {
            title: "Bye-Bye Insurance Companies",
            description:
                "Avoid headaches and hidden costs. Awake Therapy offers care without the paperwork, restrictions, or surprise bills common with insurance.",
        },
        {
            title: "Our Top-Notch Team",
            description:
                "Meet our 20 dedicated mental health professionals, focused on individualized, research-driven, results-oriented therapy to enhance your quality of life.",
        },
    ];

    return (
        <div className="bg-gray-50 py-20 px-6 h-screen flex flex-col justify-center items-center">
            {/* Heading Section */}
            <div className="max-w-4xl mx-auto text-center mb-16">
                <h2 className="text-5xl font-extrabold text-gray-800 mb-6">
                    What Sets Awake Therapy Apart?
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                    At Awake Therapy, we redefine mental healthcare with flexibility, affordability, and exceptional service. Explore the pillars of our commitment to your well-being.
                </p>
            </div>

            {/* Features Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-28">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-lg rounded-lg p-8 hover:shadow-2xl transition-shadow duration-300"
                    >
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                        <p className="text-gray-600 text-base leading-relaxed">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeatureComponent;
