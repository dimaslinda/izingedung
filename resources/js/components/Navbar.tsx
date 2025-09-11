import { usePage } from '@inertiajs/react';
import { useEffect, useRef, useState } from 'react';

interface SubMenuItem {
    label: string;
    href: string;
}

interface NavItem {
    label: string;
    href: string;
    isActive?: boolean;
    submenu?: SubMenuItem[];
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

export default function Navbar({ logo, menuItems, activeColor = 'text-hijaunavbar', hoverColor = 'hover:text-hijaunavbar' }: NavbarProps) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<number | null>(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const { url } = usePage();

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setOpenDropdown(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const isActiveLink = (href: string) => {
        if (href === '/' && url === '/') return true;
        if (href !== '/' && url.startsWith(href)) return true;
        return false;
    };

    // Handle scroll to change navbar opacity
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header
            className={`fixed top-0 z-50 w-full bg-white font-roboto shadow-sm backdrop-blur-md transition-opacity duration-300 ${
                isScrolled ? 'opacity-100' : 'opacity-80'
            }`}
        >
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
                                <div key={index} className="relative cursor-pointer">
                                    {item.submenu ? (
                                        <div className="relative" ref={dropdownRef}>
                                            <button
                                                onClick={() => setOpenDropdown(openDropdown === index ? null : index)}
                                                className={`flex items-center px-3 py-2 text-sm font-medium transition-colors ${
                                                    item.isActive ? activeColor : `text-black ${hoverColor}`
                                                }`}
                                            >
                                                {item.label}
                                                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </button>

                                            {/* Dropdown Menu */}
                                            {openDropdown === index && (
                                                <div className="absolute top-full left-0 z-50 mt-2 w-52 rounded-xl border border-gray-100 bg-white py-2 shadow-xl ring-1 ring-gray-200 duration-200 animate-in fade-in-0 zoom-in-95">
                                                    {item.submenu.map((subItem, subIndex) => (
                                                        <a
                                                            key={subIndex}
                                                            href={subItem.href}
                                                            className={`group flex items-center px-4 py-3 text-sm font-medium transition-all duration-200 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100 hover:text-orange-600 ${
                                                                isActiveLink(subItem.href) ? 'bg-orange-50 text-orange-600' : 'text-gray-700'
                                                            }`}
                                                        >
                                                            <span
                                                                className={`mr-3 h-2 w-2 rounded-full bg-orange-400 transition-opacity duration-200 ${
                                                                    isActiveLink(subItem.href) ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                                                                }`}
                                                            ></span>
                                                            {subItem.label}
                                                        </a>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <a
                                            href={item.href}
                                            className={`px-3 py-2 text-sm font-medium transition-colors ${
                                                item.isActive ? activeColor : `text-black ${hoverColor}`
                                            }`}
                                        >
                                            {item.label}
                                        </a>
                                    )}
                                </div>
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
                                <div key={index}>
                                    {item.submenu ? (
                                        <div>
                                            <button
                                                onClick={() => setOpenDropdown(openDropdown === index ? null : index)}
                                                className={`flex w-full items-center justify-between px-3 py-2 text-base font-medium transition-colors ${
                                                    item.isActive ? activeColor : `text-black ${hoverColor}`
                                                }`}
                                            >
                                                {item.label}
                                                <svg
                                                    className={`h-4 w-4 transform transition-transform ${openDropdown === index ? 'rotate-180' : ''}`}
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </button>

                                            {/* Mobile Submenu */}
                                            {openDropdown === index && (
                                                <div className="mt-2 ml-4 space-y-1 border-l-2 border-orange-200 pl-4">
                                                    {item.submenu.map((subItem, subIndex) => (
                                                        <a
                                                            key={subIndex}
                                                            href={subItem.href}
                                                            className={`group flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 hover:bg-orange-50 hover:text-orange-600 ${
                                                                isActiveLink(subItem.href) ? 'bg-orange-50 text-orange-600' : 'text-gray-600'
                                                            }`}
                                                        >
                                                            <span
                                                                className={`mr-2 h-1.5 w-1.5 rounded-full bg-orange-400 transition-opacity duration-200 ${
                                                                    isActiveLink(subItem.href) ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                                                                }`}
                                                            ></span>
                                                            {subItem.label}
                                                        </a>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <a
                                            href={item.href}
                                            className={`block px-3 py-2 text-base font-medium transition-colors ${
                                                item.isActive ? activeColor : `text-black ${hoverColor}`
                                            }`}
                                        >
                                            {item.label}
                                        </a>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}
