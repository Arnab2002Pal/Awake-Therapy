'use client'
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
    {
        name: "John Smith",
        role: "Client",
        message:
            "Affordable therapy with no insurance hassle. Awake Therapy allowed me to focus on healing rather than paperwork.",
    },
    {
        name: "Jane Doe",
        role: "Therapist",
        message:
            "Awake Therapy has transformed how I provide mental health support. The pay-as-you-go model ensures clients receive care on their terms.",
    },
    {
        name: "Alice Brown",
        role: "Psychologist",
        message:
            "Working with Awake Therapy means delivering high-quality care in a flexible, client-centered environment.",
    },
    {
        name: "Emily Carter",
        role: "Counselor",
        message:
            "Awake Therapy's platform has revolutionized how I interact with my clients, making therapy accessible and effective for all.",
    },
    {
        name: "Michael Johnson",
        role: "Client",
        message:
            "I was struggling to find affordable therapy until I discovered Awake Therapy. The convenience and support have been life-changing.",
    },
    {
        name: "Sarah Williams",
        role: "Therapist",
        message:
            "The intuitive interface and flexibility of Awake Therapy allow me to focus more on helping my clients rather than administrative tasks.",
    },
    {
        name: "David Lee",
        role: "Psychologist",
        message:
            "The ability to provide therapy sessions seamlessly through Awake Therapy has improved my practice and my clients' outcomes.",
    },
    {
        name: "Sophia Martinez",
        role: "Client",
        message:
            "Awake Therapy made it possible for me to receive quality care without stepping out of my comfort zone.",
    },
];


const TestimonialCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
    };

    return (
        <div className=" mx-auto mt-20 h-[400px] w-4/6 flex flex-col justify-center items-center rounded-md border-slate-200 border-4 border-solid" style={{ backgroundColor: "rgba(255, 230, 243, 0.22)" }}>
            <h2 className="text-4xl font-extrabold text-center text-purple-700 mb-10">
                Client Testimonials
            </h2>
            <div className="max-w-4xl mx-auto">
                <Slider {...settings}>
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className=" rounded-lg p-8 flex flex-col items-center justify-center text-center"
                            style={{ backgroundColor: "rgba(255, 230, 243, 0.42)" }}
                        >
                            <p className="text-lg text-gray-600 italic mb-4">
                                "{testimonial.message}"
                            </p>
                            <h3 className="text-xl font-bold text-gray-800">
                                {testimonial.name}
                            </h3>
                            <p className="text-sm text-gray-500">{testimonial.role}</p>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default TestimonialCarousel;
