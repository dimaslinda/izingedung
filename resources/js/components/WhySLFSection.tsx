import React from 'react';

interface WhySLFCard {
    title: string;
    description: string;
}

interface WhySLFSectionProps {
    title?: string;
    cards?: WhySLFCard[];
}

const defaultCards: WhySLFCard[] = [
    {
        title: 'LEGALITAS RESMI',
        description: 'Dengan SLF Bangunan Anda Sah Di Mata Hukum Dan Siap Digunakan Tanpa Hambatan.',
    },
    {
        title: 'JAMINAN KEAMANAN',
        description: 'Melindungi Penghuni, Pekerja, Maupun Pengunjung Dari Risiko Akibat Kelalaian Teknis.',
    },
    {
        title: 'SYARAT OPERASIONAL',
        description: 'Wajib Dimiliki Untuk Menjalankan Gedung Komersial, Perkantoran, Pusat Bisnis, Maupun Fasilitas Publik.',
    },
];

const WhySLFSection: React.FC<WhySLFSectionProps> = ({ title = 'Mengapa SLF Penting Untuk Bangunan Anda?', cards = defaultCards }) => {
    return (
        <section className="bg-white px-4 py-16 font-roboto">
            <div className="mx-auto max-w-7xl">
                <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">{title}</h2>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="flex min-h-[300px] flex-col items-center justify-center rounded-xl border-b-4 border-b-hijaunavbar bg-white p-10 py-12 shadow-lg drop-shadow-2xl transition-shadow duration-300 hover:shadow-xl"
                        >
                            <h3 className="mb-6 text-center text-xl font-semibold text-black">{card.title}</h3>
                            <p className="flex-grow text-center leading-relaxed text-black">{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhySLFSection;
export type { WhySLFCard, WhySLFSectionProps };
