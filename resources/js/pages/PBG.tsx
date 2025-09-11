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
            <Head title="PBG - Persetujuan Bangunan Gedung" />
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
