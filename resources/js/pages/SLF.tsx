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
            <Head title="SLF - Sertifikat Laik Fungsi Bangunan" />
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
