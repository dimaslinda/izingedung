interface SLFServicePoint {
    number: string;
    title: string;
    description: string;
}

interface SLFServicesCTA {
    title: string;
    subtitle?: string;
    buttonText: string;
    buttonLink: string;
}

interface SLFServicesSectionProps {
    title: string;
    subtitle: string;
    points: SLFServicePoint[];
    image: {
        src: string;
        alt: string;
    };
    cta: SLFServicesCTA;
    className?: string;
}

export default function SLFServicesSection({ title, subtitle, points, image, cta, className = '' }: SLFServicesSectionProps) {
    return (
        <section className={`relative overflow-hidden bg-hijauwhy py-16 font-roboto lg:py-24 ${className}`}>
            {/* Circular Image positioned at bottom left */}
            <div className="absolute bottom-0 left-0 hidden lg:block">
                <div className="h-80 w-80 -translate-x-1/4 translate-y-1/4 transform lg:h-170 lg:w-170 xl:h-220 xl:w-220 2xl:h-250 2xl:w-250">
                    <img src={image.src} alt={image.alt} className="h-full w-full rounded-full object-cover shadow-2xl" />
                </div>
            </div>

            {/* Curved decorative element */}
            <div className="pointer-events-none absolute top-0 left-0 h-full w-full">
                <svg className="absolute top-0 left-0 h-full w-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
                    <path d="M0,0 Q300,80 600,40 Q900,0 1200,60 L1200,800 L0,800 Z" fill="rgba(255, 255, 255, 0.05)" />
                </svg>
            </div>

            <div className="relative z-10 container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                    {/* Mobile Image */}
                    <div className="mb-8 flex justify-center lg:hidden">
                        <div className="h-64 w-64 md:h-70 md:w-70">
                            <img src={image.src} alt={image.alt} className="h-full w-full rounded-full object-cover shadow-2xl" />
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="text-white lg:col-start-2">
                        <div className="mb-8 lg:mb-12">
                            <h2 className="mb-4 text-3xl leading-tight font-bold md:text-4xl lg:text-5xl">{title}</h2>
                            <p className="text-lg opacity-90 lg:text-xl">{subtitle}</p>
                        </div>

                        <div className="mb-12 space-y-6 lg:mb-16 lg:space-y-8">
                            {points.map((point, index) => (
                                <div key={index} className="relative flex items-start gap-4">
                                    {/* Vertical Line */}
                                    {index < points.length - 1 && <div className="absolute top-12 left-5 h-16 w-0.5 bg-hijautime opacity-30"></div>}

                                    {/* Number Circle */}
                                    <div className="z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-hijautime text-lg font-bold text-white lg:h-12 lg:w-12">
                                        {point.number}
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 pt-1">
                                        <h3 className="mb-2 text-lg leading-tight font-bold lg:text-xl">{point.title}</h3>
                                        <p className="text-sm leading-relaxed opacity-95 lg:text-base">{point.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA Section */}
                        <div className="rounded-2xl border border-white/20 bg-hijautime p-6 backdrop-blur-sm lg:p-8">
                            <h3 className="mb-10 text-2xl font-bold text-white lg:text-3xl">{cta.title}</h3>
                            {cta.subtitle && <p className="mb-6 text-base opacity-90 lg:text-lg">{cta.subtitle}</p>}

                            {/* CTA Button */}
                            <a
                                href={cta.buttonLink}
                                className="transform cursor-pointer rounded-lg bg-tombol px-8 py-4 text-base font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600 hover:shadow-xl lg:text-lg"
                            >
                                {cta.buttonText}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export type { SLFServicePoint, SLFServicesCTA, SLFServicesSectionProps };
