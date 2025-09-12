import SLFServicesSection, { SLFServicesCTA } from '@/components/SLFServicesSection';
import WhySLFSection, { WhySLFCard } from '@/components/WhySLFSection';
import { Head } from '@inertiajs/react';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';

export default function PBG() {
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

    // Data untuk Hero Section PBG
    const heroData = {
        content: {
            title: {
                line1: 'Bangun Dengan',
                line2: 'Pasti Aman, &',
                line3: 'Sesuai Aturan',
            },
            subtitle: ' ',
            description:
                'PBG (Persetujuan Bangunan Gedung) adalah izin resmi yang kini menggantikan IMB. Dokumen ini wajib dimiliki setiap pemilik bangunan, baik untuk membangun baru, melakukan renovasi, maupun merawat bangunan. Dengan memiliki PBG, Anda memastikan seluruh proses pembangunan berjalan legal, aman, dan sesuai tata ruang, sehingga tidak ada risiko di kemudian hari.',
            button: {
                text: 'Konsultasi Sekarang!',
                bgColor: 'bg-tombol',
                hoverColor: 'hover:bg-orange-600',
                href: '/',
            },
        },
        image: {
            src: '/img/general/hero-3.png',
            alt: 'PBG Building Permit Service',
            mobileBackground: {
                overlay: 'rgba(255, 255, 255, 0.85)',
                position: 'center',
                size: 'cover',
            },
        },
    };
    // Data untuk WhyPBG Section
    const whySLFTitle = 'Mengapa PBG Begitu Penting?';
    const whySLFCards: WhySLFCard[] = [
        {
            title: 'Legalitas Penuh',
            description:
                ' PBG adalah bukti sah bahwa bangunan Anda telah sesuai dengan ketentuan teknis dan tata ruang dari pemerintah. Dengan PBG, Anda memiliki pegangan hukum yang jelas.',
        },
        {
            title: 'Terhindar dari Risiko Sanksi',
            description:
                ' Tanpa PBG, bangunan berisiko terkena denda, pembongkaran, hingga masalah hukum. Dengan mengurus PBG sejak awal, Anda melindungi investasi bangunan dari kerugian besar.',
        },
        {
            title: 'Pembangunan Lebih Terarah & Aman',
            description:
                ' PBG memastikan bahwa proses pembangunan tidak hanya indah secara desain, tetapi juga aman, efisien, dan sesuai standar yang berlaku. Hasilnya, bangunan lebih kokoh dan berfungsi optimal sesuai peruntukannya.',
        },
    ];

    const whySLFTitle2 = 'Layanan Kami dalam Pengurusan PBG';
    const whySLFCards2: WhySLFCard[] = [
        {
            title: 'Analisis Dokumen & Desain',
            description: 'Kami membantu menyiapkan dan menyesuaikan seluruh dokumen teknis dan administratif sesuai persyaratan terbaru.',
        },
        {
            title: 'Pendampingan Teknis & Administrasi',
            description:
                'Tim ahli kami mendampingi Anda dalam setiap tahap, mulai dari pengajuan, koordinasi dengan pihak terkait, hingga verifikasi teknis.',
        },
        {
            title: 'Pengurusan Perizinan Hingga Tuntas',
            description:
                ' PBG memastikan bahwa proses pembangunan tidak hanya indah secara desain, tetapi juga aman, efisien, dan sesuai standar yang berlaku. Hasilnya, bangunan lebih kokoh dan berfungsi optimal sesuai peruntukannya.',
        },
    ];

    // Data untuk PBG Services Section
    const slfServicesData = {
        title: 'Layanan Kami Dalam',
        subtitle: 'Pengurusan PBG',
        points: [
            {
                number: '1',
                title: 'Berpengalaman dalam regulasi & konstruksi',
                description: 'Kami memahami seluk-beluk aturan terbaru tentang PBG.',
            },
            {
                number: '2',
                title: 'Proses cepat & transparan',
                description: 'Semua langkah dijalankan secara jelas, tanpa ada yang disembunyikan.',
            },
            {
                number: '3',
                title: 'Pendampingan total',
                description: 'Kami mendampingi Anda dari konsultasi awal hingga izin selesai diterbitkan.',
            },
            {
                number: '4',
                title: 'Legalitas terjamin',
                description: 'Semua proses mengikuti regulasi pemerintah terbaru, sehingga Anda bisa tenang membangun.',
            },
        ],
        image: {
            src: '/img/general/layanan-2.png',
            alt: 'PBG Services Team',
        },
        cta: {
            title: 'Ajukan PBG Anda Sekarang & Mulai Pembangunan!',
            subtitle: '',
            buttonText: 'Konsultasi Sekarang!',
        } as SLFServicesCTA,
    };

    return (
        <>
            <Head title="PBG - Persetujuan Bangunan Gedung | Konsultan Sipil Profesional">
                {/* Basic Meta Tags */}
                <meta
                    name="description"
                    content="Layanan pengurusan Persetujuan Bangunan Gedung (PBG) dengan konsultan sipil profesional. Izin resmi pengganti IMB untuk pembangunan legal."
                />
                <meta
                    name="keywords"
                    content="PBG, persetujuan bangunan gedung, izin mendirikan bangunan, IMB, perizinan bangunan, konsultan sipil PBG, izin pembangunan"
                />
                <meta name="author" content="Izin Gedung" />
                <meta name="robots" content="index, follow" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="canonical" href="https://izingedung.id/pbg" />

                {/* Open Graph Meta Tags */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="PBG - Persetujuan Bangunan Gedung | Konsultan Sipil Profesional" />
                <meta
                    property="og:description"
                    content="Layanan pengurusan Persetujuan Bangunan Gedung (PBG) dengan konsultan sipil profesional. Izin resmi pengganti IMB untuk pembangunan legal."
                />
                <meta property="og:url" content="https://izingedung.id/pbg" />
                <meta property="og:site_name" content="Izin Gedung" />
                <meta property="og:image" content="https://izingedung.id/img/general/hero-3.png" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:locale" content="id_ID" />

                {/* Twitter Card Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="PBG - Persetujuan Bangunan Gedung | Konsultan Sipil Profesional" />
                <meta
                    name="twitter:description"
                    content="Layanan pengurusan Persetujuan Bangunan Gedung (PBG) dengan konsultan sipil profesional. Izin resmi pengganti IMB untuk pembangunan legal."
                />
                <meta name="twitter:image" content="https://izingedung.id/img/general/hero-3.png" />

                {/* Structured Data - Service Schema */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Service',
                        name: 'Persetujuan Bangunan Gedung (PBG)',
                        description:
                            'Layanan pengurusan Persetujuan Bangunan Gedung (PBG) sebagai izin resmi pengganti IMB untuk pembangunan yang legal, aman, dan sesuai tata ruang.',
                        provider: {
                            '@type': 'Organization',
                            name: 'Izin Gedung',
                            url: 'https://izingedung.id',
                        },
                        areaServed: 'Indonesia',
                        serviceType: 'Konsultan Sipil',
                        offers: {
                            '@type': 'Offer',
                            description:
                                'Pengurusan PBG lengkap dengan analisis dokumen, pendampingan teknis, dan pengurusan perizinan hingga tuntas',
                        },
                        hasOfferCatalog: {
                            '@type': 'OfferCatalog',
                            name: 'Layanan PBG',
                            itemListElement: [
                                {
                                    '@type': 'Offer',
                                    itemOffered: {
                                        '@type': 'Service',
                                        name: 'Analisis Dokumen & Desain',
                                        description:
                                            'Kami membantu menyiapkan dan menyesuaikan seluruh dokumen teknis dan administratif sesuai persyaratan terbaru.',
                                    },
                                },
                                {
                                    '@type': 'Offer',
                                    itemOffered: {
                                        '@type': 'Service',
                                        name: 'Pendampingan Teknis & Administrasi',
                                        description:
                                            'Tim ahli kami mendampingi Anda dalam setiap tahap, mulai dari pengajuan, koordinasi dengan pihak terkait, hingga verifikasi teknis.',
                                    },
                                },
                                {
                                    '@type': 'Offer',
                                    itemOffered: {
                                        '@type': 'Service',
                                        name: 'Pengurusan Perizinan Hingga Tuntas',
                                        description: 'Kami mengurus seluruh proses perizinan dari awal hingga PBG resmi diterbitkan.',
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
                        name: 'PBG - Persetujuan Bangunan Gedung',
                        description:
                            'Halaman layanan Persetujuan Bangunan Gedung (PBG) untuk pengurusan izin pembangunan yang legal dan sesuai aturan',
                        url: 'https://izingedung.id/pbg',
                        mainEntity: {
                            '@type': 'Service',
                            name: 'Persetujuan Bangunan Gedung (PBG)',
                            description:
                                'Izin resmi yang menggantikan IMB, wajib dimiliki untuk membangun baru, renovasi, maupun merawat bangunan sesuai tata ruang.',
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
                                    name: 'PBG',
                                    item: 'https://izingedung.id/pbg',
                                },
                            ],
                        },
                    })}
                </script>

                {/* Structured Data - FAQ Schema */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'FAQPage',
                        mainEntity: [
                            {
                                '@type': 'Question',
                                name: 'Mengapa PBG begitu penting?',
                                acceptedAnswer: {
                                    '@type': 'Answer',
                                    text: 'PBG adalah bukti sah bahwa bangunan Anda telah sesuai dengan ketentuan teknis dan tata ruang dari pemerintah. Dengan PBG, Anda terhindar dari risiko sanksi dan memiliki legalitas penuh.',
                                },
                            },
                            {
                                '@type': 'Question',
                                name: 'Apa risiko jika tidak memiliki PBG?',
                                acceptedAnswer: {
                                    '@type': 'Answer',
                                    text: 'Tanpa PBG, bangunan berisiko terkena denda, pembongkaran, hingga masalah hukum. PBG melindungi investasi bangunan dari kerugian besar.',
                                },
                            },
                        ],
                    })}
                </script>
            </Head>
            <div className="min-h-screen bg-white">
                <Navbar {...navbarData} />
                <HeroSection {...heroData} />
                <WhySLFSection title={whySLFTitle} cards={whySLFCards} />
                <WhySLFSection title={whySLFTitle2} cards={whySLFCards2} />

                <SLFServicesSection {...slfServicesData} />
                <Footer />
            </div>
        </>
    );
}
