import { Head } from '@inertiajs/react';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import ServicesSection from '../components/ServicesSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';

export default function Index() {
    // Data untuk Navbar
    const navbarData = {
        logo: {
            src: '/img/general/logo.png',
            alt: 'Izin Gedung Logo',
        },
        menuItems: [
            { label: 'HOME', href: '/', isActive: true },
            {
                label: 'SERVICES',
                href: '#',
                submenu: [
                    { label: 'SLF', href: '/slf' },
                    { label: 'PBG', href: '/pbg' },
                ],
            },
            { label: 'CONTACT', href: '#' },
        ],
    };

    // Data untuk Hero Section
    const heroData = {
        content: {
            title: {
                line1: 'Bangunan',
                line2: 'Aman, Legal,',
                line3: '& Berkualitas',
            },
            subtitle: 'Bersama Konsultan Sipil Profesional',
            description:
                'Percayakan pengurusan izin dan legalitas bangunan Anda pada ahlinya. Kami menghadirkan layanan SLF & PBG yang cepat, tepat, dan terpercaya, sehingga Anda bisa fokus pada pembangunan tanpa ribet urusan administrasi.',
            button: {
                text: 'Konsultasi Sekarang!',
                bgColor: 'bg-tombol',
                hoverColor: 'hover:bg-orange-600',
                href: '/',
            },
        },
        image: {
            src: '/img/general/hero-1.png',
            alt: 'Professional Construction Consultant',
            mobileBackground: {
                overlay: 'rgba(255, 255, 255, 0.85)',
                position: 'center',
                size: 'cover',
            },
        },
    };

    // Services Section Data
    const servicesData = {
        title: 'LAYANAN KAMI',
        services: [
            {
                icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" viewBox="0 0 58 58" fill="none">
                        <path
                            d="M9.875 7.46875C7.20406 7.46875 5.0625 9.61031 5.0625 12.2812V36.3438C5.0625 37.6201 5.56953 38.8442 6.47205 39.7467C7.37457 40.6492 8.59865 41.1562 9.875 41.1562H29.125V53.1875L36.3438 45.9688L43.5625 53.1875V41.1562H48.375C49.6514 41.1562 50.8754 40.6492 51.778 39.7467C52.6805 38.8442 53.1875 37.6201 53.1875 36.3438V12.2812C53.1875 11.0049 52.6805 9.78082 51.778 8.8783C50.8754 7.97578 49.6514 7.46875 48.375 7.46875H9.875ZM29.125 12.2812L36.3438 17.0938L43.5625 12.2812V20.7031L50.7812 24.3125L43.5625 27.9219V36.3438L36.3438 31.5312L29.125 36.3438V27.9219L21.9062 24.3125L29.125 20.7031V12.2812ZM9.875 12.2812H21.9062V17.0938H9.875V12.2812ZM9.875 21.9062H17.0938V26.7188H9.875V21.9062ZM9.875 31.5312H21.9062V36.3438H9.875V31.5312Z"
                            fill="black"
                        />
                    </svg>
                ),
                title: 'SERTIFIKAT LAIK FUNGSI',
                description:
                    'Buktikan bangunan Anda aman dan layak digunakan. SLF memastikan gedung memenuhi standar keselamatan, kesehatan, dan kenyamanan.',
                bgColor: 'bg-transparent',
                iconBgColor: 'bg-transparent',
            },
            {
                icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" viewBox="0 0 47 46" fill="none">
                        <path
                            d="M8.375 8.10168C8.375 6.96415 8.82688 5.87321 9.63124 5.06886C10.4356 4.2645 11.5265 3.81262 12.6641 3.81262H27.9141C29.0516 3.81262 30.1425 4.2645 30.9469 5.06886C31.7512 5.87321 32.2031 6.96415 32.2031 8.10168V18.1095H34.5859C35.1492 18.1095 35.7069 18.2204 36.2273 18.436C36.7477 18.6515 37.2205 18.9675 37.6188 19.3657C38.017 19.764 38.333 20.2368 38.5485 20.7572C38.7641 21.2776 38.875 21.8353 38.875 22.3986V40.5079C38.875 40.8871 38.7244 41.2508 38.4563 41.5189C38.1881 41.787 37.8245 41.9376 37.4453 41.9376H32.2031V34.7892C32.2031 33.4739 31.1356 32.4064 29.8203 32.4064H17.4297C16.1144 32.4064 15.0469 33.4739 15.0469 34.7892V41.9376H9.80469C9.42551 41.9376 9.06186 41.787 8.79375 41.5189C8.52563 41.2508 8.375 40.8871 8.375 40.5079V8.10168ZM29.3437 35.2657V41.9376H25.0547V35.2657H29.3437ZM22.1953 35.2657V41.9376H17.9062V35.2657H22.1953ZM15.0469 12.3907C15.0469 12.8963 15.2477 13.3812 15.6052 13.7387C15.9627 14.0962 16.4476 14.297 16.9531 14.297C17.4587 14.297 17.9436 14.0962 18.301 13.7387C18.6585 13.3812 18.8594 12.8963 18.8594 12.3907C18.8594 11.8852 18.6585 11.4003 18.301 11.0428C17.9436 10.6853 17.4587 10.4845 16.9531 10.4845C16.4476 10.4845 15.9627 10.6853 15.6052 11.0428C15.2477 11.4003 15.0469 11.8852 15.0469 12.3907ZM16.9531 23.8282C16.4476 23.8282 15.9627 24.0291 15.6052 24.3866C15.2477 24.7441 15.0469 25.2289 15.0469 25.7345C15.0469 26.2401 15.2477 26.7249 15.6052 27.0824C15.9627 27.4399 16.4476 27.6407 16.9531 27.6407C17.4587 27.6407 17.9436 27.4399 18.301 27.0824C18.6585 26.7249 18.8594 26.2401 18.8594 25.7345C18.8594 25.2289 18.6585 24.7441 18.301 24.3866C17.9436 24.0291 17.4587 23.8282 16.9531 23.8282ZM16.9531 17.1564C16.4476 17.1564 15.9627 17.3572 15.6052 17.7147C15.2477 18.0722 15.0469 18.5571 15.0469 19.0626C15.0469 19.5682 15.2477 20.0531 15.6052 20.4105C15.9627 20.768 16.4476 20.9689 16.9531 20.9689C17.4587 20.9689 17.9436 20.768 18.301 20.4105C18.6585 20.0531 18.8594 19.5682 18.8594 19.0626C18.8594 18.5571 18.6585 18.0722 18.301 17.7147C17.9436 17.3572 17.4587 17.1564 16.9531 17.1564ZM23.625 10.4845C23.1194 10.4845 22.6346 10.6853 22.2771 11.0428C21.9196 11.4003 21.7187 11.8852 21.7187 12.3907C21.7187 12.8963 21.9196 13.3812 22.2771 13.7387C22.6346 14.0962 23.1194 14.297 23.625 14.297C24.1306 14.297 24.6154 14.0962 24.9729 13.7387C25.3304 13.3812 25.5312 12.8963 25.5312 12.3907C25.5312 11.8852 25.3304 11.4003 24.9729 11.0428C24.6154 10.6853 24.1306 10.4845 23.625 10.4845ZM23.625 23.8282C23.1194 23.8282 22.6346 24.0291 22.2771 24.3866C21.9196 24.7441 21.7187 25.2289 21.7187 25.7345C21.7187 26.2401 21.9196 26.7249 22.2771 27.0824C22.6346 27.4399 23.1194 27.6407 23.625 27.6407C24.1306 27.6407 24.6154 27.4399 24.9729 27.0824C25.3304 26.7249 25.5312 26.2401 25.5312 25.7345C25.5312 25.2289 25.3304 24.7441 24.9729 24.3866C24.6154 24.0291 24.1306 23.8282 23.625 23.8282ZM30.2969 23.8282C29.7913 23.8282 29.3064 24.0291 28.949 24.3866C28.5915 24.7441 28.3906 25.2289 28.3906 25.7345C28.3906 26.2401 28.5915 26.7249 28.949 27.0824C29.3064 27.4399 29.7913 27.6407 30.2969 27.6407C30.8024 27.6407 31.2873 27.4399 31.6448 27.0824C32.0023 26.7249 32.2031 26.2401 32.2031 25.7345C32.2031 25.2289 32.0023 24.7441 31.6448 24.3866C31.2873 24.0291 30.8024 23.8282 30.2969 23.8282ZM23.625 17.1564C23.1194 17.1564 22.6346 17.3572 22.2771 17.7147C21.9196 18.0722 21.7187 18.5571 21.7187 19.0626C21.7187 19.5682 21.9196 20.0531 22.2771 20.4105C22.6346 20.768 23.1194 20.9689 23.625 20.9689C24.1306 20.9689 24.6154 20.768 24.9729 20.4105C25.3304 20.0531 25.5312 19.5682 25.5312 19.0626C25.5312 18.5571 25.3304 18.0722 24.9729 17.7147C24.6154 17.3572 24.1306 17.1564 23.625 17.1564Z"
                            fill="black"
                        />
                    </svg>
                ),
                title: 'PERSETUJUAN BANGUNAN GEDUNG',
                description:
                    'Bangun dengan tenang dan sesuai aturan. PBG menjamin desain dan konstruksi Anda sah secara hukum serta sesuai standar teknis.',
                bgColor: 'bg-transparent',
                iconBgColor: 'bg-transparent',
            },
        ],
    };

    // Why Choose Us Section Data
    const whyChooseUsData = {
        title: 'Mengapa Memilih Kami?',
        points: [
            {
                number: '1',
                title: 'Profesional & Berpengalaman',
                description: 'Tim ahli dengan pengalaman bertahun-tahun di bidang konstruksi, regulasi, dan perizinan bangunan.',
            },
            {
                number: '2',
                title: 'Cepat & Efisien',
                description: 'Proses pengurusan izin tanpa ribet, transparan, dan sesuai kebutuhan Anda.',
            },
            {
                number: '3',
                title: 'Pendampingan Menyeluruh',
                description: 'Mulai dari konsultasi awal hingga izin terbit, kami selalu mendampingi Anda.',
            },
            {
                number: '4',
                title: 'Legalitas Terjamin',
                description: 'Semua dokumen dipastikan sah sesuai aturan pemerintah terbaru, memberi Anda rasa aman dan tenang.',
            },
        ],
        image: {
            src: '/img/general/profile.png',
            alt: 'Professional team',
        },
        buttonText: 'Konsultasi Sekarang!',
        buttonHref: '/',
    };
    return (
        <>
            <Head title="Konsultan Sipil Profesional - Izin Gedung SLF & PBG Terpercaya">
                {/* Basic Meta Tags */}
                <meta name="description" content="Konsultan sipil profesional untuk pengurusan izin gedung SLF dan PBG. Layanan cepat, tepat, dan terpercaya dengan tim berpengalaman." />
                <meta name="keywords" content="konsultan sipil, izin gedung, SLF, PBG, sertifikat laik fungsi, persetujuan bangunan gedung, konstruksi, perizinan bangunan, konsultan bangunan" />
                <meta name="author" content="Izin Gedung" />
                <meta name="robots" content="index, follow" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="canonical" href="https://izingedung.id/" />

                {/* Open Graph Meta Tags */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Konsultan Sipil Profesional - Izin Gedung SLF & PBG Terpercaya" />
                <meta property="og:description" content="Konsultan sipil profesional untuk pengurusan izin gedung SLF dan PBG. Layanan cepat, tepat, dan terpercaya dengan tim berpengalaman." />
                <meta property="og:url" content="https://izingedung.id/" />
                <meta property="og:site_name" content="Izin Gedung" />
                <meta property="og:image" content="https://izingedung.id/img/general/hero-1.png" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:locale" content="id_ID" />

                {/* Twitter Card Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Konsultan Sipil Profesional - Izin Gedung SLF & PBG Terpercaya" />
                <meta name="twitter:description" content="Konsultan sipil profesional untuk pengurusan izin gedung SLF dan PBG. Layanan cepat, tepat, dan terpercaya dengan tim berpengalaman." />
                <meta name="twitter:image" content="https://izingedung.id/img/general/hero-1.png" />

                {/* Structured Data - Organization Schema */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "Izin Gedung",
                        "url": "https://izingedung.id",
                        "logo": "https://izingedung.id/img/general/logo.png",
                        "description": "Konsultan sipil profesional untuk pengurusan izin gedung SLF dan PBG dengan layanan cepat, tepat, dan terpercaya.",
                        "serviceType": ["Konsultan Sipil", "Perizinan Bangunan", "SLF", "PBG"],
                        "areaServed": "Indonesia",
                        "hasOfferCatalog": {
                            "@type": "OfferCatalog",
                            "name": "Layanan Konsultan Sipil",
                            "itemListElement": [
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Sertifikat Laik Fungsi (SLF)",
                                        "description": "Buktikan bangunan Anda aman dan layak digunakan. SLF memastikan gedung memenuhi standar keselamatan, kesehatan, dan kenyamanan."
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Persetujuan Bangunan Gedung (PBG)",
                                        "description": "Bangun dengan tenang dan sesuai aturan. PBG menjamin desain dan konstruksi Anda sah secara hukum serta sesuai standar teknis."
                                    }
                                }
                            ]
                        }
                    })}
                </script>

                {/* Structured Data - Website Schema */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        "name": "Izin Gedung",
                        "url": "https://izingedung.id",
                        "description": "Website resmi konsultan sipil profesional untuk layanan izin gedung SLF dan PBG",
                        "publisher": {
                            "@type": "Organization",
                            "name": "Izin Gedung"
                        }
                    })}
                </script>

                {/* Fonts */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
            </Head>

            {/* Navbar Component */}
            <Navbar {...navbarData} />

            {/* Hero Section Component */}
            <HeroSection {...heroData} />

            {/* Services Section */}
            <ServicesSection {...servicesData} />

            {/* Why Choose Us Section */}
            <WhyChooseUsSection {...whyChooseUsData} />

            <Footer />
        </>
    );
}
