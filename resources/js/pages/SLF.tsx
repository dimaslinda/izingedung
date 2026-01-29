import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import WhySLFSection, { WhySLFCard } from '@/components/WhySLFSection';
import { Head } from '@inertiajs/react';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import SLFRequirementsSection from '../components/SLFRequirementsSection';
import SLFScopeSection from '../components/SLFScopeSection';

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
                line1: 'Jasa Pengurusan',
                line2: 'Sertifikat Laik',
                line3: 'Fungsi (SLF)',
                line4: 'Terpercaya & Resmi',
            },
            subtitle: 'Pendampingan Pengurusan SLF sesuai Standar Teknis dan PP No. 16 Tahun 2021',
            description:
                'Kami membantu penerbitan SLF untuk bangunan baru maupun eksisting. Didukung Tim Pengkaji Teknis bersertifikat untuk memastikan bangunan Anda lolos verifikasi SIMBG dan terhindar dari sanksi administratif.',
            button: {
                text: 'Konsultasi Gratis',
                bgColor: 'bg-tombol',
                hoverColor: 'hover:bg-orange-600',
                href: 'https://api.whatsapp.com/send?phone=6285111444499',
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
            description:
                'Dengan Sertifikat Laik Fungsi (SLF), bangunan dinyatakan sah secara hukum oleh pemerintah daerah dan dapat digunakan secara legal.',
        },
        {
            title: 'JAMINAN KEAMANAN',
            description:
                'SLF memastikan bangunan memenuhi standar keselamatan teknis untuk melindungi penghuni, pekerja, dan pengunjung dari risiko kegagalan bangunan.',
        },
        {
            title: 'SYARAT OPERASIONAL',
            description:
                'Sertifikat Laik Fungsi (SLF) menjadi syarat wajib operasional gedung komersial, perkantoran, pusat bisnis, dan fasilitas publik.',
        },
    ];

    // Data untuk SLF Services Section
    const slfServicesData = {
        title: 'Tahapan Proses Pengurusan Sertifikat ',
        subtitle: 'Laik Fungsi (SLF)',
        points: [
            {
                number: '1',
                title: 'Konsultasi Awal & Identifikasi Bangunan',
                description:
                    'Identifikasi awal fungsi bangunan, status bangunan (baru atau eksisting), serta kelengkapan dokumen dasar sebagai acuan proses pengurusan SLF.',
            },
            {
                number: '2',
                title: 'Pemeriksaan Teknis Bangunan',
                description:
                    'Pemeriksaan keandalan bangunan oleh Pengkaji Teknis bersertifikat meliputi aspek arsitektur, struktur, dan utilitas (MEP) sesuai standar teknis PP No. 16 Tahun 2021.',
            },
            {
                number: '3',
                title: 'Penyusunan & Validasi Dokumen Teknis',
                description:
                    'Penyusunan laporan hasil pemeriksaan teknis dan verifikasi kesesuaian dokumen dengan persyaratan SLF sebelum diajukan ke sistem SIMBG.',
            },
            {
                number: '4',
                title: 'Pengajuan & Verifikasi melalui SIMBG',
                description:
                    'Pengajuan dokumen SLF secara resmi melalui sistem SIMBG untuk diverifikasi oleh dinas teknis pemerintah daerah sesuai kewenangannya.',
            },
            {
                number: '5',
                title: 'Penerbitan Sertifikat Laik Fungsi (SLF)',
                description:
                    'Sertifikat Laik Fungsi (SLF) diterbitkan setelah seluruh persyaratan teknis dan administratif dinyatakan memenuhi ketentuan yang berlaku.',
            },
        ],
        image: {
            src: '/img/general/layanan.webp',
            alt: 'SLF Services Team',
        },
        buttonText: 'Konsultasi Sekarang',
        buttonHref: 'https://api.whatsapp.com/send?phone=6285111444499',
    };

    // Data untuk SLF Requirements Section
    const slfRequirementsData = {
        title: 'Dokumen Dan Persyaratan Teknis Pengurusan Sertifikat Laik Fungsi (SLF)',
        cards: [
            {
                title: 'DOKUMEN ADMINISTRASI',
                points: [
                    'Data Pemilik Bangunan',
                    'Data bangunan (fungsi, luas, lokasi)',
                    'Dokumen PBB/IMB',
                    'Surat Pernyataan pemilik',
                    'Dokumen Pendukung Sesuai Ketentuan Daerah',
                ],
                image: '/img/general/slide-1.webp',
            },
            {
                title: 'DOKUMEN TEKNIS BANGUNAN',
                points: [
                    'Gambar As-Built Drawing, struktur, dan utilitas (MEP)',
                    'Laporan pemeriksaan keandalan bangunan',
                    'Rekomendasi Pengkaji Teknis Bersertifikat',
                    'Dokumen Keselamatan bangunan',
                ],
                image: '/img/general/slide-2.webp',
            },
            {
                title: 'SYARAT OPERASIONAL',
                points: [
                    'Memenuhi Standar Keselamatan Dan Keandalan Bangunan',
                    'Pemeriksaan Mengacu PP No. 16 Tahun 2021',
                    'Pengajuan Dilakukan Melalui Sistem SIMBG',
                ],
                image: '/img/general/slide-3.webp',
            },
        ],
    };

    // Data untuk SLF Scope Section
    const slfScopeData = {
        title: 'Ruang Lingkup Layanan Pengurusan Sertifikat Laik Fungsi (SLF)',
        cards: [
            {
                title: 'KONSULTASI REGULASI & PERSYARATAN',
                description:
                    'Melakukan Screening Awal Kelengkapan Dokumen Administrasi Dan Teknis Sesuai Persyaratan SIMBG Dan Perda Setempat Agar Meminimalisir Revisi.',
                image: '/img/general/slide-4.webp',
            },
            {
                title: 'PENDAMPINGAN AUDIT TEKNIS',
                description:
                    'Pemeriksaan Keandalan Bangunan Oleh Pengkaji Teknis Meliputi Aspek Arsitektur, Struktur, Dan Utilitas (MEP) Sesuai Standar PP 16/2021.',
                image: '/img/general/slide-5.webp',
            },
            {
                title: 'PENGURUSAN DOKUMEN LENGKAP',
                description:
                    'Pengurusan Dan Pengajuan Seluruh Dokumen Administrasi Melalui Sistem SIMBG Hingga Sertifikat Laik Fungsi (SLF) Resmi Diterbitkan.',
                image: '/img/general/slide-6.webp',
            },
        ],
    };

    // Data untuk FAQ Section
    const slfFaqData = {
        title: 'FAQ',
        items: [
            {
                question: 'Apakah Semua Bangunan Wajib Memiliki SLF?',
                answer: 'Ya. Bangunan gedung yang telah selesai dibangun dan akan digunakan wajib memiliki SLF, terutama untuk bangunan komersial, industri, perkantoran, dan fasilitas publik sesuai ketentuan peraturan perundang-undangan.',
            },
            {
                question: 'Berapa Lama Masa Berlaku SLF?',
                answer: 'Masa berlaku Sertifikat Laik Fungsi (SLF) adalah 20 tahun untuk rumah tinggal tunggal atau deret, dan 5 tahun untuk bangunan gedung lainnya seperti kantor, pabrik, atau gudang.',
            },
            {
                question: 'Bagaimana Cara Memperpanjang Sertifikat Laik Fungsi (SLF)?',
                answer: 'Perpanjangan Sertifikat Laik Fungsi (SLF) dilakukan dengan mengajukan pemeriksaan ulang keandalan bangunan oleh Pengkaji Teknis bersertifikat. Proses perpanjangan dilakukan melalui sistem SIMBG dengan melampirkan dokumen teknis terbaru dan memastikan kondisi bangunan masih memenuhi standar keselamatan dan fungsi bangunan.',
            },
        ],
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

                <WhyChooseUsSection {...slfServicesData} />

                {/* Dokumen & Persyaratan Section */}
                <SLFRequirementsSection {...slfRequirementsData} />

                {/* Scope & FAQ Section */}
                <SLFScopeSection {...slfScopeData} />
                <FAQSection {...slfFaqData} bgColor="bg-white" variant="light" />

                <Footer />
            </div>
        </>
    );
}
