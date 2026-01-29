import { useState } from 'react';

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQSectionProps {
    title?: string;
    items: FAQItem[];
    className?: string;
    bgColor?: string;
    variant?: 'default' | 'light';
}

export default function FAQSection({ title = 'FAQ', items, className = '', bgColor = 'bg-hijauwhy', variant = 'default' }: FAQSectionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const isLight = variant === 'light';

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className={`${bgColor} py-16 font-roboto lg:py-24 ${className}`}>
            <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                {title && (
                    <h2 className={`mb-12 text-center text-3xl font-bold md:text-4xl lg:text-5xl ${isLight ? 'text-gray-900' : 'text-white'}`}>
                        {title}
                    </h2>
                )}

                <div className="space-y-4">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className={`overflow-hidden rounded-lg border transition-all duration-300 ${
                                isLight 
                                    ? 'border-hijauwhy bg-hijauwhy hover:bg-hijauwhy/90' 
                                    : 'border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/15'
                            }`}
                        >
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="flex w-full items-center justify-between px-6 py-4 text-left text-white focus:outline-none"
                            >
                                <span className="text-lg font-bold leading-tight md:text-xl pr-8">
                                    {item.question}
                                </span>
                                <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-white transition-transform duration-300 ${openIndex === index ? 'rotate-180 bg-white text-hijauwhy' : 'text-white'}`}>
                                    <svg
                                        className="h-4 w-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={3}
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </span>
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                }`}
                            >
                                <div className={`px-6 pb-6 pt-0 ${isLight ? 'text-white' : 'text-white/90'}`}>
                                    {isLight && <div className="mb-4 h-px w-full bg-white/20"></div>}
                                    <p className="leading-relaxed">{item.answer}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
