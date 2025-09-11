import { useState } from 'react';

interface NavItem {
    label: string;
    href: string;
    isActive?: boolean;
}

interface NavbarProps {
    logo: {
        src: string;
        alt: string;
    };
    menuItems: NavItem[];
    activeColor?: string;
    hoverColor?: string;
}

export default function Navbar({ 
    logo, 
    menuItems, 
    activeColor = 'text-hijaunavbar', 
    hoverColor = 'hover:text-hijaunavbar' 
}: NavbarProps) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 z-50 w-full bg-white font-roboto opacity-80 shadow-sm backdrop-blur-md">
            <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <div className="flex items-center">
                            <img className="h-12 w-auto" src={logo.src} alt={logo.alt} />
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {menuItems.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.href}
                                    className={`px-3 py-2 text-sm font-medium transition-colors ${
                                        item.isActive 
                                            ? activeColor 
                                            : `text-black ${hoverColor}`
                                    }`}
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-gray-700 hover:text-green-500 focus:text-green-500 focus:outline-none"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden">
                        <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                            {menuItems.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.href}
                                    className={`block px-3 py-2 text-base font-medium transition-colors ${
                                        item.isActive 
                                            ? activeColor 
                                            : `text-black ${hoverColor}`
                                    }`}
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}