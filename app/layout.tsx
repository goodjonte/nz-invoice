import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Free NZ Invoice Generator – No Sign-Up Required",
    template: "%s | NZ Invoice Generator",
  },
  description:
    "Create professional GST invoices for free in seconds. No sign-up, no software, no cost. Built for NZ freelancers, contractors, and sole traders. Includes automatic 15% GST calculations and multiple templates.",
  metadataBase: new URL("https://nzinvoice.co.nz"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Free NZ Invoice Generator – Create GST Invoices Instantly, No Sign-Up",
    description:
      "Create professional GST invoices for free in seconds. No sign-up, no software, no cost. Built for NZ freelancers, contractors, and sole traders.",
    type: "website",
    locale: "en_NZ",
    siteName: "NZ Invoice Generator",
    url: "https://nzinvoice.co.nz",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "NZ Invoice Generator - Free GST Invoice Tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free NZ Invoice Generator – Create GST Invoices Instantly, No Sign-Up",
    description: "Create professional GST invoices for free in seconds. No sign-up, no software, no cost. Built for NZ freelancers, contractors, and sole traders.",
    images: ["/og-image.svg"],
  },
};

function Header() {
  return (
    <header className="no-print bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">NZ</span>
            </div>
            <span className="font-semibold text-gray-900 text-lg">
              NZ Invoice
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link
              href="/gst-invoice-template"
              className="text-gray-600 hover:text-primary"
            >
              GST Template
            </Link>
            <Link
              href="/what-is-gst"
              className="text-gray-600 hover:text-primary"
            >
              What is GST?
            </Link>
            <Link
              href="/how-to-invoice-in-nz"
              className="text-gray-600 hover:text-primary"
            >
              Invoicing Guide
            </Link>
            <Link href="/nzbn" className="text-gray-600 hover:text-primary">
              NZBN
            </Link>
            <Link
              href="/how-to-calculate-gst"
              className="text-gray-600 hover:text-primary"
            >
              GST Calculator
            </Link>
            <Link
              href="/freelancer-invoice-nz"
              className="text-gray-600 hover:text-primary"
            >
              Freelancers
            </Link>
            <Link
              href="/gst-registration-nz"
              className="text-gray-600 hover:text-primary"
            >
              GST Registration
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="no-print bg-gray-800 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-3">NZ Invoice Generator</h3>
            <p className="text-sm">
              Free online invoice generator for New Zealand businesses,
              freelancers, and sole traders. Create professional GST invoices in
              seconds.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/gst-invoice-template"
                  className="hover:text-white"
                >
                  Free GST Invoice Template
                </Link>
              </li>
              <li>
                <Link href="/what-is-gst" className="hover:text-white">
                  What is GST in NZ?
                </Link>
              </li>
              <li>
                <Link
                  href="/how-to-invoice-in-nz"
                  className="hover:text-white"
                >
                  How to Invoice in NZ
                </Link>
              </li>
              <li>
                <Link href="/nzbn" className="hover:text-white">
                  What is an NZBN?
                </Link>
              </li>
              <li>
                <Link href="/how-to-calculate-gst" className="hover:text-white">
                  How to Calculate GST
                </Link>
              </li>
              <li>
                <Link href="/freelancer-invoice-nz" className="hover:text-white">
                  Freelancer Invoice Guide
                </Link>
              </li>
              <li>
                <Link href="/gst-registration-nz" className="hover:text-white">
                  GST Registration
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">About</h3>
            <p className="text-sm">
              Built for the New Zealand market. All calculations use the
              standard 15% GST rate. No sign-up required, no data stored on
              servers.
            </p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} NZ Invoice Generator. Free to use.</p>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-8WMM118P8S" strategy="afterInteractive" />
      <Script id="gtag-init" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-8WMM118P8S');
      `}</Script>
      <Script id="json-ld-webapp" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "NZ Invoice Generator",
        "url": "https://nzinvoice.co.nz",
        "description": "Free online NZ GST invoice generator. Create professional invoices with 15% GST calculations, multiple templates, and instant PDF download.",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Any",
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "NZD" },
        "featureList": ["GST calculation", "Multiple templates", "PDF export", "NZBN support"],
        "inLanguage": "en-NZ",
        "publisher": { "@type": "Organization", "name": "NZ Invoice Generator", "url": "https://nzinvoice.co.nz" }
      })}} />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

