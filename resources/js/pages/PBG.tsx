import ComparisonTable from '@/components/ComparisonTable';
import FAQSection from '@/components/FAQSection';
import SLFScopeSection from '@/components/SLFScopeSection';
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
            src: '/img/general/pbg-banner.webp',
            alt: 'PBG Building Permit Service',
            objectPosition: 'center 10%',
            mobileBackground: {
                overlay: 'rgba(255, 255, 255, 0.85)',
                position: 'center',
                size: 'cover',
            },
        },
    };
    // Data untuk WhyPBG Section
    const whySLFTitle = 'Mengapa PBG Wajib Ada Sebelum Membangun?';
    const whySLFCards: WhySLFCard[] = [
        {
            title: 'Legalitas Penuh',
            description:
                'PBG merupakan persetujuan resmi dari pemerintah daerah sebagai pengganti IMB. Dokumen ini menyatakan bahwa rencana teknis bangunan telah diverifikasi dan sesuai dengan ketentuan tata ruang yang berlaku.',
        },
        {
            title: 'Terhindar dari Risiko Sanksi',
            description:
                'Tanpa PBG, kegiatan pembangunan berisiko dikenakan sanksi administratif seperti penghentian pekerjaan, denda, hingga perintah pembongkaran. Mengurus PBG sejak awal membantu melindungi investasi konstruksi Anda',
        },
        {
            title: 'Pembangunan Lebih Terarah & Aman',
            description:
                'Dokumen PBG memastikan perencanaan Dokumen PBG/IMB struktur bangunan memenuhi standar keselamatan teknis (SNI). PBG juga menjadi persyaratan utama dalam proses penerbitan Sertifikat Laik Fungsi [E1] (SLF) setelah bangunan selesai dibangun.',
        },
    ];

    // Comparison Table Data
    const comparisonData = {
        title: 'Perbedaan PBG dan IMB dalam Perizinan Bangunan Gedung',
        columns: [
            { header: 'PBG (Persetujuan Bangunan Gedung)', accessor: 'aspect' },
            { header: 'IMB (Izin Mendirikan Bangunan)', accessor: 'pbg' },
        ],
        data: [
            {
                aspect: 'Berlaku sejak diterbitkannya PP No. 16 Tahun 2021',
                pbg: 'Berlaku sebelum diberlakukannya PP No. 16 Tahun 2021',
            },
            {
                aspect: 'Berbasis kesesuaian rencana teknis bangunan',
                pbg: 'Berbasis izin administratif pembangunan',
            },
            {
                aspect: 'Verifikasi dilakukan melalui sistem SIMBG',
                pbg: 'Proses manual dan berbeda antar daerah',
            },
            {
                aspect: 'Melibatkan Tim Perencana Teknis bersertifikat (Arsitek & Sipil)',
                pbg: 'Tidak terintegrasi dengan sistem nasional',
            },
            {
                aspect: 'Fokus pada keselamatan, fungsi, dan kesesuaian tata ruang',
                pbg: 'Sudah tidak berlaku dan digantikan oleh PBG',
            },
            {
                aspect: 'Wajib dimiliki sebelum membangun atau merenovasi',
            },
        ],
    };

    // Data untuk SLF Scope Section
    const slfScopeData = {
        title: 'Ruang Lingkup Layanan Persetujuan Bangunan Gedung (PBG)',
        cards: [
            {
                title: 'Penguasaan Regulasi PBG & Tata Ruang',
                description:
                    'Kami memastikan seluruh proses pengurusan Persetujuan Bangunan Gedung (PBG) mengacu pada ketentuan PP No. 16 Tahun 2021 serta kesesuaian tata ruang daerah untuk meminimalkan risiko penolakan dokumen.',
                image: '/img/general/pbg-1.webp',
            },
            {
                title: 'Proses Pengurusan PBG Terstruktur & Transparan',
                description:
                    'Seluruh tahapan pengurusan PBG dilakukan secara sistematis melalui SIMBG, dengan alur jelas dan dapat dipantau tanpa proses tersembunyi.',
                image: '/img/general/pbg-2.webp',
            },
            {
                title: 'Pendampingan Teknis dari Perencana Bersertifikat',
                description:
                    'Dokumen perencanaan teknis disusun dan ditinjau oleh Arsitek dan Tenaga Teknik bersertifikat agar rencana bangunan memenuhi standar teknis dan persyaratan PBG.',
                image: '/img/general/pbg-3.webp',
            },
            {
                title: 'Legalitas PBG Sesuai Ketentuan Pemerintah',
                description:
                    'Persetujuan Bangunan Gedung (PBG) diterbitkan secara resmi oleh Pemerintah Daerah, sehingga dapat digunakan sebagai dasar legal pelaksanaan pembangunan tanpa risiko sanksi administratif.',
                image: '/img/general/pbg-4.webp',
            },
        ],
    };

    // Data untuk FAQ Section
    const pbgFaqData = {
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
                        category: 'Konsultan Sipil',
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
                <HeroSection {...heroData} imageClassName="translate-y-10" />
                <WhySLFSection title={whySLFTitle} cards={whySLFCards} />
                {/* Comparison Table Section */}
                <ComparisonTable {...comparisonData} />
                {/* Scope & FAQ Section */}
                <SLFScopeSection {...slfScopeData} gridCols={2} />
                <FAQSection {...pbgFaqData} bgColor="bg-white" variant="light" />
                <Footer />
            </div>
        </>
    );
}
