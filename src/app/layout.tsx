import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aniqsalon-annojiguda.vercel.app"),
  title: "ANIQ Salon & Tattoos | Best Salon in Annojiguda Hyderabad",
  description:
    "ANIQ Salon & Tattoos is a premium unisex salon in Annojiguda offering haircuts, hair spa, keratin treatment, beauty services, bridal makeup, nails, tattoos and grooming services. Rated 4.9★ by customers. Open daily from 9 AM to 10 PM.",
  keywords: [
    "Salon in Annojiguda",
    "Best Salon in Annojiguda",
    "Unisex Salon in Annojiguda",
    "Hair Salon in Annojiguda",
    "Hair Spa in Annojiguda",
    "Beauty Salon in Annojiguda",
    "Tattoo Studio in Annojiguda",
    "Bridal Makeup in Annojiguda",
    "Keratin Treatment in Annojiguda",
    "Hair Smoothening in Annojiguda",
    "Salon Near NTPC Chowrasta",
    "Salon Near Me",
    "Haircut Near Me",
    "Best Beauty Salon Near Me",
    "Nail Art in Annojiguda",
  ],
  authors: [{ name: "ANIQ Salon & Tattoos" }],
  openGraph: {
    title: "ANIQ Salon & Tattoos | Premium Salon in Annojiguda",
    description:
      "Premium Hair, Beauty, Bridal, Nail & Tattoo Services in Annojiguda. Rated 4.9★. Book instantly on WhatsApp.",
    url: "https://aniqsalon-annojiguda.vercel.app",
    siteName: "ANIQ Salon & Tattoos",
    images: [
      {
        url: "/assets/aniq-salon-annojiguda-exterior.jpg",
        width: 1200,
        height: 630,
        alt: "ANIQ Salon Annojiguda Premium Exterior Frontage",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ANIQ Salon & Tattoos | Premium Salon in Annojiguda",
    description:
      "Premium Hair, Beauty, Bridal, Nail & Tattoo Services in Annojiguda. Rated 4.9★. Book instantly on WhatsApp.",
    images: ["/assets/aniq-salon-annojiguda-exterior.jpg"],
  },
  alternates: {
    canonical: "https://aniqsalon-annojiguda.vercel.app",
  },
};

export const viewport: Viewport = {
  themeColor: "#0B0B0B",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD local business schema including ratings and reviews
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": "ANIQ Salon & Tattoos",
    "image": "https://aniqsalon-annojiguda.vercel.app/assets/logo.jpg",
    "@id": "https://aniqsalon-annojiguda.vercel.app/#salon",
    "url": "https://aniqsalon-annojiguda.vercel.app",
    "telephone": "+918522942128",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Door No. 6-99/2, First Floor, Beside Sri Balaji Bakery, Near NTPC Chowrasta",
      "addressLocality": "Annojiguda, Hyderabad",
      "addressRegion": "Telangana",
      "postalCode": "500088",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 17.432889,
      "longitude": 78.633519
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "09:00",
      "closes": "22:00"
    },
    "sameAs": [
      "https://www.instagram.com/aniqsalon_annojiguda"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "120"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Rahul Sharma"
        },
        "datePublished": "2026-05-15",
        "reviewBody": "Liked the ambience and the professional staff. They are well experienced and did a great job with my haircut.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Priyanka Reddy"
        },
        "datePublished": "2026-06-01",
        "reviewBody": "Excellent and professional service at affordable prices.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        }
      }
    ]
  };

  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans antialiased text-primary">
        {children}
      </body>
    </html>
  );
}
