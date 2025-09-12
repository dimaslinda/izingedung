import SLFServicesSection, { SLFServicesCTA } from '@/components/SLFServicesSection';
import WhySLFSection, { WhySLFCard } from '@/components/WhySLFSection';
import { Head } from '@inertiajs/react';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';

export default function SLF() {
    // Data untuk Navbar
    const navbarData = {
        logo: {
            src: '/img/general/logo.png',
            alt: 'Izin Gedung Logo',
        },
        menuItems: [
            { label: 'HOME', href: '/' },
            {
                label: 'SERVICES',
                href: '#',
                submenu: [
                    { label: 'SLF', href: '/slf' },
                    { label: 'PBG', href: '/pbg' },
                ],
            },
            { label: 'CONTACT', href: '#' },
            { label: 'ARTICLE', href: 'https://izingedung.id/artikel' },
        ],
    };

    // Data untuk Hero Section SLF
    const heroData = {
        content: {
            title: {
                line1: 'Kunci Legalitas',
                line2: '& Keamanan ',
                line3: 'Bangunan Anda',
            },
            subtitle: ' ',
            description:
                'Jadikan bangunan Anda aman, layak, dan diakui secara hukum. Sertifikat Laik Fungsi (SLF) adalah bukti resmi bahwa properti Anda memenuhi standar keselamatan, kesehatan, kenyamanan, dan kemudahan sesuai regulasi pemerintah.',
            button: {
                text: 'Konsultasi Sekarang!',
                bgColor: 'bg-tombol',
                hoverColor: 'hover:bg-orange-600',
                href: '/',
            },
        },
        image: {
            src: '/img/general/hero-2.png',
            alt: 'SLF Certificate Service',
            mobileBackground: {
                overlay: 'rgba(255, 255, 255, 0.85)',
                position: 'center',
                size: 'cover',
            },
        },
    };

    // Data untuk WhySLF Section
    const whySLFTitle = 'Mengapa SLF Penting Untuk Bangunan Anda?';
    const whySLFCards: WhySLFCard[] = [
        {
            title: 'LEGALITAS RESMI',
            description: 'Dengan SLF, bangunan Anda sah di mata hukum dan siap digunakan tanpa hambatan.',
        },
        {
            title: 'JAMINAN KEAMANAN',
            description: 'Melindungi penghuni, pekerja, maupun pengunjung dari risiko akibat kelalaian teknis.',
        },
        {
            title: 'SYARAT OPERASIONAL',
            description: 'Wajib dimiliki untuk menjalankan gedung komersial, perkantoran, pusat bisnis, maupun fasilitas publik.',
        },
    ];

    // Data untuk SLF Services Section
    const slfServicesData = {
        title: 'Layanan Kami Dalam',
        subtitle: 'Pengurusan SLF',
        points: [
            {
                number: '1',
                title: 'Konsultasi Regulasi & Persyaratan',
                description: 'Memberikan pemahaman jelas mengenai aturan terbaru yang berlaku.',
            },
            {
                number: '2',
                title: 'Pendampingan Audit Teknis',
                description: 'Membantu dalam pemeriksaan kondisi fisik bangunan hingga siap diverifikasi.',
            },
            {
                number: '3',
                title: 'Pengurusan Dokumen Lengkap',
                description: 'Kami urus semua administrasi hingga SLF resmi diterbitkan.',
            },
        ],
        image: {
            src: '/img/general/layanan.png',
            alt: 'SLF Services Team',
        },
        cta: {
            title: 'Ajukan SLF Anda Sekarang & Rasakan Kemudahannya!',
            subtitle: '',
            buttonText: 'Konsultasi Sekarang!',
            buttonLink: '/',
        } as SLFServicesCTA,
    };

    return (
        <>
            <Head title="SLF - Sertifikat Laik Fungsi Bangunan | Konsultan Sipil Profesional">
                {/* Basic Meta Tags */}
                <meta
                    name="description"
                    content="Layanan pengurusan Sertifikat Laik Fungsi (SLF) dengan konsultan sipil profesional. Jaminan legalitas dan keamanan bangunan sesuai standar."
                />
                <meta
                    name="keywords"
                    content="SLF, sertifikat laik fungsi, izin bangunan, legalitas bangunan, keamanan bangunan, audit teknis bangunan, konsultan sipil SLF"
                />
                <meta name="author" content="Izin Gedung" />
                <meta name="robots" content="index, follow" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="canonical" href="https://izingedung.id/slf" />

                {/* Open Graph Meta Tags */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="SLF - Sertifikat Laik Fungsi Bangunan | Konsultan Sipil Profesional" />
                <meta
                    property="og:description"
                    content="Layanan pengurusan Sertifikat Laik Fungsi (SLF) dengan konsultan sipil profesional. Jaminan legalitas dan keamanan bangunan sesuai standar."
                />
                <meta property="og:url" content="https://izingedung.id/slf" />
                <meta property="og:site_name" content="Izin Gedung" />
                <meta property="og:image" content="https://izingedung.id/img/general/hero-2.png" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:locale" content="id_ID" />

                {/* Twitter Card Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="SLF - Sertifikat Laik Fungsi Bangunan | Konsultan Sipil Profesional" />
                <meta
                    name="twitter:description"
                    content="Layanan pengurusan Sertifikat Laik Fungsi (SLF) dengan konsultan sipil profesional. Jaminan legalitas dan keamanan bangunan sesuai standar."
                />
                <meta name="twitter:image" content="https://izingedung.id/img/general/hero-2.png" />

                {/* Structured Data - Service Schema */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Service',
                        name: 'Sertifikat Laik Fungsi (SLF)',
                        description:
                            'Layanan pengurusan Sertifikat Laik Fungsi bangunan untuk memastikan legalitas, keamanan, dan kelayakan bangunan sesuai standar pemerintah.',
                        provider: {
                            '@type': 'Organization',
                            name: 'Izin Gedung',
                            url: 'https://izingedung.id',
                        },
                        areaServed: 'Indonesia',
                        category: 'Konsultan Sipil',
                        offers: {
                            '@type': 'Offer',
                            description: 'Pengurusan SLF lengkap dengan konsultasi regulasi, audit teknis, dan pengurusan dokumen',
                        },
                        hasOfferCatalog: {
                            '@type': 'OfferCatalog',
                            name: 'Layanan SLF',
                            itemListElement: [
                                {
                                    '@type': 'Offer',
                                    itemOffered: {
                                        '@type': 'Service',
                                        name: 'Konsultasi Regulasi & Persyaratan',
                                        description: 'Memberikan pemahaman jelas mengenai aturan terbaru yang berlaku.',
                                    },
                                },
                                {
                                    '@type': 'Offer',
                                    itemOffered: {
                                        '@type': 'Service',
                                        name: 'Pendampingan Audit Teknis',
                                        description: 'Membantu dalam pemeriksaan kondisi fisik bangunan hingga siap diverifikasi.',
                                    },
                                },
                                {
                                    '@type': 'Offer',
                                    itemOffered: {
                                        '@type': 'Service',
                                        name: 'Pengurusan Dokumen Lengkap',
                                        description: 'Kami urus semua administrasi hingga SLF resmi diterbitkan.',
                                    },
                                },
                            ],
                        },
                    })}
                </script>

                {/* Structured Data - WebPage Schema */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'WebPage',
                        name: 'SLF - Sertifikat Laik Fungsi Bangunan',
                        description: 'Halaman layanan Sertifikat Laik Fungsi (SLF) untuk pengurusan legalitas dan keamanan bangunan',
                        url: 'https://izingedung.id/slf',
                        mainEntity: {
                            '@type': 'Service',
                            name: 'Sertifikat Laik Fungsi (SLF)',
                            description:
                                'Bukti resmi bahwa properti Anda memenuhi standar keselamatan, kesehatan, kenyamanan, dan kemudahan sesuai regulasi pemerintah.',
                        },
                        breadcrumb: {
                            '@type': 'BreadcrumbList',
                            itemListElement: [
                                {
                                    '@type': 'ListItem',
                                    position: 1,
                                    name: 'Home',
                                    item: 'https://izingedung.id',
                                },
                                {
                                    '@type': 'ListItem',
                                    position: 2,
                                    name: 'SLF',
                                    item: 'https://izingedung.id/slf',
                                },
                            ],
                        },
                    })}
                </script>
            </Head>
            <div className="min-h-screen bg-white">
                <Navbar {...navbarData} />
                <HeroSection {...heroData} />
                <WhySLFSection title={whySLFTitle} cards={whySLFCards} />

                <SLFServicesSection {...slfServicesData} />
                <Footer />
            </div>
        </>
    );
}
