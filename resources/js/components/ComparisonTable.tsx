import { ReactNode } from 'react';

interface Column {
    header: string;
    accessor: string;
    className?: string;
}

interface ComparisonTableProps {
    title: string;
    subtitle?: string;
    columns: Column[];
    data: Record<string, ReactNode>[];
    className?: string;
}

export default function ComparisonTable({ title, subtitle, columns, data, className = '' }: ComparisonTableProps) {
    return (
        <section className={`bg-white py-12 font-roboto lg:bg-white ${className}`}>
            <div className="container mx-auto px-4">
                <div className="mb-8 text-center">
                    <h2 className="mb-2 text-3xl font-bold text-black">{title}</h2>
                    {subtitle && <p className="text-xl font-bold text-black">{subtitle}</p>}
                </div>

                <div className="overflow-x-auto rounded-lg shadow-sm">
                    <table className="w-full min-w-[600px] border-collapse">
                        <thead>
                            <tr>
                                {columns.map((col, index) => (
                                    <th
                                        key={index}
                                        className={`border-r border-white bg-hijaunavbar px-6 py-4 text-center font-semibold text-white last:border-r-0 ${col.className || ''}`}
                                    >
                                        {col.header}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((row, rowIndex) => (
                                <tr key={rowIndex} className="bg-gray-200/80 font-semibold transition-colors hover:bg-gray-200">
                                    {columns.map((col, colIndex) => (
                                        <td
                                            key={colIndex}
                                            className={`border-r border-b border-white px-6 py-4 text-center text-gray-800 last:border-r-0 ${col.className || ''}`}
                                        >
                                            {row[col.accessor]}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
