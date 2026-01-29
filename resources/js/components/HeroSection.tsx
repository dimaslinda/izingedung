interface HeroContent {
    title: {
        line1: string;
        line2: string;
        line3: string;
        line4?: string;
    };
    subtitle: string;
    description: string;
    button: {
        text: string;
        bgColor?: string;
        hoverColor?: string;
        href: string;
    };
}

interface HeroImage {
    src: string;
    alt: string;
    mobileBackground?: {
        overlay?: string;
        position?: string;
        size?: string;
    };
}

interface HeroSectionProps {
    content: HeroContent;
    image: HeroImage;
    className?: string;
}

export default function HeroSection({ content, image, className = '' }: HeroSectionProps) {
    const { overlay = 'rgba(255, 255, 255, 0.85)', position = 'center', size = 'cover' } = image.mobileBackground || {};

    return (
        <section className={`relative flex items-center overflow-hidden bg-white py-25 font-roboto md:min-h-screen md:py-0 lg:bg-white ${className}`}>
            {/* Background image for mobile and tablet only */}
            <div
                className="absolute inset-0 lg:hidden"
                style={{
                    backgroundImage: `linear-gradient(${overlay}, ${overlay}), url(${image.src})`,
                    backgroundSize: size,
                    backgroundPosition: position,
                    backgroundRepeat: 'no-repeat',
                }}
            ></div>

            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:py-12">
                <div className="flex justify-center lg:justify-start">
                    {/* Hero Content */}
                    <div className="relative z-20 max-w-2xl space-y-8 text-center lg:text-left">
                        <div className="space-y-6">
                            <h1 className="text-3xl leading-tight font-bold text-black md:text-5xl xl:text-6xl">
                                {content.title.line1 || ''}
                                <br />
                                <span className="text-black">{content.title.line2 || ''}</span>
                                <br />
                                <span className="text-black">{content.title.line3 || ''}</span>
                                <br />
                                <span className="text-black">{content.title.line4 || ''}</span>
                            </h1>
                            <p className="mx-auto max-w-lg text-lg font-bold text-black md:text-xl lg:mx-0">{content.subtitle}</p>
                            <p className="mx-auto max-w-sm text-base leading-relaxed text-black lg:mx-0 xl:max-w-lg">{content.description}</p>
                        </div>
                        <div className="flex justify-center lg:justify-start">
                            <a
                                href={content.button.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`cursor-pointer rounded-sm px-8 py-3 font-medium text-white shadow-lg transition-colors duration-200 ${
                                    content.button.bgColor || 'bg-tombol'
                                } ${content.button.hoverColor || 'hover:bg-orange-600'} hover:shadow-xl`}
                            >
                                {content.button.text}
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Hero Image - Background on mobile/tablet, positioned image on large screens */}
            <div className="absolute -top-52 -right-52 z-10 hidden lg:block 2xl:-top-80">
                <div className="relative">
                    <div className="absolute inset-0 scale-110 transform rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-20 blur-3xl"></div>
                    <img
                        src={image.src}
                        alt={image.alt}
                        className="relative z-10 h-200 w-200 rounded-full border-8 border-[#B6C3F35C] object-cover shadow-2xl xl:h-250 xl:w-250 2xl:h-300 2xl:w-300"
                    />
                </div>
            </div>
        </section>
    );
}
