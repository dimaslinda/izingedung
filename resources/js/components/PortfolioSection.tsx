const slides = [
    '/img/general/slide-1.webp',
    '/img/general/slide-2.webp',
    '/img/general/slide-3.webp',
    '/img/general/slide-4.webp',
    '/img/general/slide-5.webp',
    '/img/general/slide-6.webp',
    '/img/general/slide-7.webp',
    '/img/general/slide-8.webp',
];

export default function PortfolioSection() {
    return (
        <section className="relative overflow-hidden bg-white pt-20 pb-20 lg:pt-48 xl:pt-64">
            <style>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 40s linear infinite;
                }
                .animate-marquee:hover {
                    animation-play-state: paused;
                }
            `}</style>

            <div className="container mx-auto mb-12 px-4 text-center">
                <h2 className="text-4xl font-bold text-black lg:text-5xl">Portfolio</h2>
            </div>

            <div className="relative w-full overflow-hidden">
                <div className="animate-marquee flex w-fit gap-4">
                    {/* First set of images */}
                    {slides.map((src, index) => (
                        <div key={`original-${index}`} className="group relative h-64 w-80 shrink-0 overflow-hidden rounded-xl">
                            <img
                                src={src}
                                alt={`Portfolio ${index + 1}`}
                                className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10"></div>
                        </div>
                    ))}

                    {/* Duplicate set for seamless loop */}
                    {slides.map((src, index) => (
                        <div key={`duplicate-${index}`} className="group relative h-64 w-80 shrink-0 overflow-hidden rounded-xl">
                            <img
                                src={src}
                                alt={`Portfolio ${index + 1}`}
                                className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10"></div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Second Row - Reverse Direction (Optional, but looks cool) */}
            <div className="relative z-10 mt-4 w-full overflow-hidden">
                <style>{`
                    @keyframes marquee-reverse {
                        0% { transform: translateX(-50%); }
                        100% { transform: translateX(0); }
                    }
                    .animate-marquee-reverse {
                        animation: marquee-reverse 40s linear infinite;
                    }
                     .animate-marquee-reverse:hover {
                        animation-play-state: paused;
                    }
                `}</style>
                <div className="animate-marquee-reverse flex w-fit gap-4">
                    {/* First set of images */}
                    {slides.map((src, index) => (
                        <div key={`original-rev-${index}`} className="group relative h-64 w-80 flex-shrink-0 overflow-hidden rounded-xl">
                            <img
                                src={src}
                                alt={`Portfolio ${index + 1}`}
                                className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10"></div>
                        </div>
                    ))}

                    {/* Duplicate set for seamless loop */}
                    {slides.map((src, index) => (
                        <div key={`duplicate-rev-${index}`} className="group relative h-64 w-80 flex-shrink-0 overflow-hidden rounded-xl">
                            <img
                                src={src}
                                alt={`Portfolio ${index + 1}`}
                                className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10"></div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Seamless Bottom Transition */}
            <div className="absolute bottom-0 left-0 h-52 w-full bg-hijauwhy"></div>
        </section>
    );
}
