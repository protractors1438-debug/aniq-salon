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
  title: "ANIQ Salon Annojiguda | Premium Hair, Beauty & Grooming Salon",
  description:
    "Experience premium hair, beauty, grooming, and tattoo services at ANIQ Salon Annojiguda. Rated 4.9★ by customers. Book instantly on WhatsApp.",
  keywords: [
    "Best Salon in Annojiguda",
    "Unisex Salon in Annojiguda",
    "Hair Spa in Annojiguda",
    "Haircut Near NTPC Chowrasta",
    "Beauty Salon in Annojiguda",
    "Keratin Treatment in Annojiguda",
    "Tattoo Studio in Annojiguda",
    "ANIQ Salon Annojiguda",
    "ANIQ Salon",
    "Salon near Annojiguda",
    "Bridal Makeup Annojiguda",
  ],
  authors: [{ name: "ANIQ Salon Annojiguda" }],
  openGraph: {
    title: "ANIQ Salon Annojiguda | Premium Hair, Beauty & Grooming Salon",
    description:
      "Experience premium hair, beauty, grooming, and tattoo services at ANIQ Salon Annojiguda. Rated 4.9★ by customers. Book instantly on WhatsApp.",
    url: "https://aniqsalon-annojiguda.vercel.app",
    siteName: "ANIQ Salon Annojiguda",
    images: [
      {
        url: "/assets/interior.jpg",
        width: 1200,
        height: 630,
        alt: "ANIQ Salon Annojiguda Interior Ambience",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ANIQ Salon Annojiguda | Premium Hair, Beauty & Grooming Salon",
    description:
      "Experience premium hair, beauty, grooming, and tattoo services at ANIQ Salon Annojiguda. Rated 4.9★ by customers. Book instantly on WhatsApp.",
    images: ["/assets/interior.jpg"],
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
  // JSON-LD local business schema
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": "ANIQ Salon Annojiguda",
    "image": "/assets/logo.jpg",
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
      "latitude": 17.4475,
      "longitude": 78.6361
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
