import React from 'react';
import { Head } from '@inertiajs/react';

// Schema.org structured data types
interface SchemaOrgBase {
    '@context': string;
    '@type': string;
}

interface WebPageSchema extends SchemaOrgBase {
    '@type': 'WebPage';
    name: string;
    description: string;
    url: string;
    isPartOf?: {
        '@type': 'WebSite';
        name: string;
        url: string;
    };
    breadcrumb?: {
        '@type': 'BreadcrumbList';
        itemListElement: Array<{
            '@type': 'ListItem';
            position: number;
            name: string;
            item: string;
        }>;
    };
}

interface ServiceSchema extends SchemaOrgBase {
    '@type': 'Service';
    name: string;
    description: string;
    provider: {
        '@type': 'Organization';
        name: string;
        url: string;
    };
    areaServed?: string;
    serviceType?: string;
}

interface ArticleSchema extends SchemaOrgBase {
    '@type': 'Article';
    headline: string;
    description: string;
    author: {
        '@type': 'Organization' | 'Person';
        name: string;
    };
    publisher: {
        '@type': 'Organization';
        name: string;
        logo: {
            '@type': 'ImageObject';
            url: string;
        };
    };
    datePublished?: string;
    dateModified?: string;
}

type StructuredDataType = WebPageSchema | ServiceSchema | ArticleSchema | SchemaOrgBase;

interface SEOProps {
    title: string;
    description: string;
    keywords?: string;
    canonicalUrl: string;
    ogImage?: string;
    ogType?: 'website' | 'article' | 'service';
    structuredData?: StructuredDataType;
    breadcrumbs?: Array<{
        name: string;
        url: string;
    }>;
    faqData?: Array<{
        question: string;
        answer: string;
    }>;
}

const SEO: React.FC<SEOProps> = ({
    title,
    description,
    keywords,
    canonicalUrl,
    ogImage = 'https://izingedung.id/img/general/hero-1.png',
    ogType = 'website',
    structuredData,
    breadcrumbs,
    faqData
}) => {
    const fullTitle = title.includes('|') ? title : `${title} | Izin Gedung`;
    
    // Default Organization Schema
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Izin Gedung",
        "url": "https://izingedung.id",
        "logo": "https://izingedung.id/img/logo.png",
        "description": "Konsultan profesional untuk pengurusan izin bangunan, SLF, dan PBG dengan layanan terpercaya dan berpengalaman.",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+62-xxx-xxxx-xxxx",
            "contactType": "customer service",
            "areaServed": "Indonesia",
            "availableLanguage": "Indonesian"
        },
        "sameAs": [
            "https://www.facebook.com/izingedung",
            "https://www.instagram.com/izingedung",
            "https://www.linkedin.com/company/izingedung"
        ]
    };

    // Breadcrumb Schema
    const breadcrumbSchema = breadcrumbs ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.url
        }))
    } : null;

    // FAQ Schema
    const faqSchema = faqData ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqData.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    } : null;

    return (
        <Head title={fullTitle}>
            {/* Basic Meta Tags */}
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}
            <meta name="author" content="Izin Gedung" />
            <meta name="robots" content="index, follow" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="canonical" href={canonicalUrl} />

            {/* Open Graph Meta Tags */}
            <meta property="og:type" content={ogType} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:site_name" content="Izin Gedung" />
            <meta property="og:image" content={ogImage} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:locale" content="id_ID" />

            {/* Twitter Card Meta Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />

            {/* Structured Data - Organization Schema */}
            <script type="application/ld+json">
                {JSON.stringify(organizationSchema)}
            </script>

            {/* Custom Structured Data */}
            {structuredData && (
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            )}

            {/* Breadcrumb Schema */}
            {breadcrumbSchema && (
                <script type="application/ld+json">
                    {JSON.stringify(breadcrumbSchema)}
                </script>
            )}

            {/* FAQ Schema */}
            {faqSchema && (
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            )}

            {/* Font Links */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link
                href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
                rel="stylesheet"
            />
        </Head>
    );
};

export default SEO;