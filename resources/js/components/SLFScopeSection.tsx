interface SLFScopeCard {
    title: string;
    description: string;
    image: string;
}

interface SLFScopeSectionProps {
    title: string;
    cards: SLFScopeCard[];
}

export default function SLFScopeSection({ title, cards }: SLFScopeSectionProps) {
    return (
        <section className="relative font-roboto">
            {/* Background Background - Full height on mobile, partial on desktop to create hanging card effect */}
            <div className="absolute inset-x-0 top-0 h-full bg-hijauwhy lg:h-[75%]"></div>

            <div className="relative container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
                <h2 className="mb-12 text-center text-2xl font-bold text-white md:text-3xl lg:text-4xl">{title}</h2>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-xl bg-white shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                        >
                            <div className="relative h-64 w-full overflow-hidden">
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                            </div>
                            <div className="p-6">
                                <h3 className="mb-4 text-lg font-bold tracking-wider text-gray-900 uppercase">{card.title}</h3>
                                <p className="text-sm leading-relaxed text-gray-600">{card.description}</p>
                            </div>
                            <div className="absolute bottom-0 left-0 h-1 w-0 bg-hijauwhy transition-all duration-300 group-hover:w-full"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
