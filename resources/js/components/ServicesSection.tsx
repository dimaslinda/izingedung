interface ServiceItem {
    icon: React.ReactNode;
    title: string;
    description: string;
    bgColor?: string;
    iconBgColor?: string;
}

interface ServicesSectionProps {
    title: string;
    services: ServiceItem[];
    className?: string;
}

export default function ServicesSection({ title, services, className = '' }: ServicesSectionProps) {
    return (
        <section className={`bg-gray-50 py-16 font-roboto ${className}`}>
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Title */}
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-3xl font-bold text-black md:text-4xl">{title}</h2>
                </div>

                {/* Services Grid */}
                <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`${
                                service.bgColor || 'bg-white'
                            } rounded-lg border-b-4 border-hijaunavbar p-8 text-center shadow-lg transition-shadow duration-300 hover:shadow-xl`}
                        >
                            {/* Icon */}
                            <div className="mb-6 flex justify-center">
                                <div className={`${service.iconBgColor} inline-flex items-center justify-center p-4`}>{service.icon}</div>
                            </div>

                            {/* Title */}
                            <h3 className="mb-4 text-xl leading-tight font-bold text-black">{service.title}</h3>

                            {/* Description */}
                            <p className="text-sm leading-relaxed text-gray-700">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
