interface SLFRequirementsSectionProps {
    title: string;
    cards: {
        title: string;
        points: string[];
        image: string;
    }[];
}

export default function SLFRequirementsSection({ title, cards }: SLFRequirementsSectionProps) {
    return (
        <section className="relative z-10 bg-white pt-16 pb-16 font-roboto lg:pt-48 xl:pt-64">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 className="mb-12 text-center text-2xl font-bold text-gray-900 md:text-3xl lg:text-4xl">{title}</h2>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-xl bg-white shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                        >
                            {/* Image Container */}
                            <div className="relative h-48 w-full overflow-hidden">
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="mb-4 text-lg font-bold tracking-wider text-gray-900 uppercase">{card.title}</h3>
                                <ul className="space-y-2">
                                    {card.points.map((point, pointIndex) => (
                                        <li key={pointIndex} className="flex items-start text-sm text-gray-600">
                                            <span className="mt-1.5 mr-2 h-1.5 w-1.5 shrink-0 rounded-full bg-hijauwhy"></span>
                                            <span className="leading-relaxed">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Bottom Border Accent */}
                            <div className="absolute bottom-0 left-0 h-1 w-0 bg-hijauwhy transition-all duration-300 group-hover:w-full"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
