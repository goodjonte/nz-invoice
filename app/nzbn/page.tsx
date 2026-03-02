import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What is an NZBN? New Zealand Business Number Explained",
  description:
    "Learn about the New Zealand Business Number (NZBN), how to find yours, why it matters, and how to include it on your invoices.",
  alternates: { canonical: "https://nzinvoice.co.nz/nzbn" },
  openGraph: {
    title: "What is an NZBN? New Zealand Business Number Explained",
    description: "Everything you need to know about the New Zealand Business Number (NZBN) and how to use it on your invoices.",
    url: "https://nzinvoice.co.nz/nzbn",
    images: [{ url: "/og-image.svg", width: 1200, height: 630 }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "What is an NZBN? New Zealand Business Number Explained",
      "description": "Learn about the New Zealand Business Number (NZBN), how to find yours, why it matters, and how to include it on your invoices.",
      "url": "https://nzinvoice.co.nz/nzbn",
      "inLanguage": "en-NZ",
      "publisher": { "@type": "Organization", "name": "NZ Invoice Generator", "url": "https://nzinvoice.co.nz" },
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is an NZBN?",
          "acceptedAnswer": { "@type": "Answer", "text": "An NZBN (New Zealand Business Number) is a unique 13-digit identifier for businesses in New Zealand. It is issued by the Companies Office and helps identify businesses across government agencies and private sector systems." }
        },
        {
          "@type": "Question",
          "name": "Is an NZBN the same as a GST number?",
          "acceptedAnswer": { "@type": "Answer", "text": "No. An NZBN is a business identifier issued by the Companies Office. A GST number is issued by the IRD when you register for GST. They are different numbers and serve different purposes." }
        },
        {
          "@type": "Question",
          "name": "Do I need to put my NZBN on my invoices?",
          "acceptedAnswer": { "@type": "Answer", "text": "An NZBN is not legally required on invoices. However, including it can help your clients identify your business and may be required by some larger organisations." }
        },
        {
          "@type": "Question",
          "name": "How do I find my NZBN?",
          "acceptedAnswer": { "@type": "Answer", "text": "You can look up any NZBN using the New Zealand Business Number register at nzbn.govt.nz. Search by business name or company number to find the NZBN." }
        }
      ]
    }
  ]
};

export default function NzbnPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        What is an NZBN?
      </h1>

      <p className="text-lg text-gray-600 mb-8">
        The NZBN (New Zealand Business Number) is a unique 13-digit identifier
        assigned to every registered business in New Zealand. Think of it like
        a national ID number, but for businesses.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">
        Why Was the NZBN Created?
      </h2>
      <p className="text-gray-600 mb-8">
        The NZBN was introduced by the New Zealand government to make it easier
        for businesses to interact with each other and with government agencies.
        It provides a single, consistent way to identify any business operating
        in New Zealand, regardless of their structure (sole trader, partnership,
        company, trust, etc.).
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">
        Who Gets an NZBN?
      </h2>
      <p className="text-gray-600 mb-4">
        NZBNs are assigned to:
      </p>
      <ul className="list-disc list-inside text-gray-600 space-y-2 mb-8">
        <li>
          <strong>NZ registered companies</strong> - automatically assigned
          when you register with the Companies Office
        </li>
        <li>
          <strong>Sole traders</strong> - can register for an NZBN through the
          NZBN website
        </li>
        <li>
          <strong>Partnerships</strong> - can register voluntarily
        </li>
        <li>
          <strong>Trusts and other entities</strong> - can register voluntarily
        </li>
      </ul>

      <div className="bg-primary-light rounded-lg p-6 mb-8">
        <h3 className="font-semibold text-gray-900 mb-2">
          NZBN Format
        </h3>
        <p className="text-3xl font-bold text-primary font-mono mb-2">
          9429XXXXXXXXX
        </p>
        <p className="text-sm text-gray-600">
          13 digits, always starting with 9429 (New Zealand&apos;s country
          prefix)
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">
        How to Find Your NZBN
      </h2>
      <p className="text-gray-600 mb-4">
        There are several ways to find your NZBN:
      </p>
      <ol className="list-decimal list-inside text-gray-600 space-y-2 mb-8">
        <li>
          <strong>NZBN Register</strong> - search the public register at
          nzbn.govt.nz
        </li>
        <li>
          <strong>Companies Office</strong> - if you have a registered company,
          your NZBN appears on your company record
        </li>
        <li>
          <strong>Your registration confirmation</strong> - it was included in
          your original registration documents
        </li>
      </ol>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">
        Benefits of Using Your NZBN
      </h2>
      <ul className="list-disc list-inside text-gray-600 space-y-2 mb-8">
        <li>
          <strong>Credibility</strong> - shows your business is legitimate and
          registered
        </li>
        <li>
          <strong>Easy verification</strong> - clients and suppliers can quickly
          verify your business details
        </li>
        <li>
          <strong>Government interactions</strong> - simplifies dealing with
          government agencies
        </li>
        <li>
          <strong>Business-to-business transactions</strong> - makes it easier
          to set up accounts and relationships with other businesses
        </li>
        <li>
          <strong>International recognition</strong> - the NZBN follows the
          global GS1 standard, making it recognisable internationally
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">
        NZBN on Your Invoices
      </h2>
      <p className="text-gray-600 mb-4">
        While including your NZBN on invoices is not legally required, it is
        good practice. It helps your clients identify and verify your business,
        and it adds a layer of professionalism to your invoices.
      </p>
      <p className="text-gray-600 mb-8">
        Our invoice generator includes an optional NZBN field that displays your
        business number prominently on the invoice. Simply enter your 13-digit
        NZBN and it will appear under your business name.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">
        NZBN vs IRD Number vs GST Number
      </h2>
      <p className="text-gray-600 mb-4">
        These are often confused, but they serve different purposes:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="border border-gray-200 rounded-lg p-4">
          <h3 className="font-semibold text-gray-900 mb-2">NZBN</h3>
          <p className="text-sm text-gray-600">
            13-digit business identifier. Used for general business
            identification and verification.
          </p>
        </div>
        <div className="border border-gray-200 rounded-lg p-4">
          <h3 className="font-semibold text-gray-900 mb-2">IRD Number</h3>
          <p className="text-sm text-gray-600">
            8 or 9-digit number. Used for tax purposes, assigned by Inland
            Revenue.
          </p>
        </div>
        <div className="border border-gray-200 rounded-lg p-4">
          <h3 className="font-semibold text-gray-900 mb-2">GST Number</h3>
          <p className="text-sm text-gray-600">
            Same as your IRD number. Used when you are registered for GST, shown
            on tax invoices.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">
        How to Register for an NZBN
      </h2>
      <p className="text-gray-600 mb-4">
        If you have a registered NZ company, you already have one. For sole
        traders and other entities:
      </p>
      <ol className="list-decimal list-inside text-gray-600 space-y-2 mb-8">
        <li>Visit the NZBN website (nzbn.govt.nz)</li>
        <li>Sign in with your RealMe account</li>
        <li>Complete the registration form with your business details</li>
        <li>Your NZBN will be assigned immediately</li>
      </ol>
      <p className="text-gray-600 mb-8">
        Registration is free and takes just a few minutes.
      </p>

      <div className="bg-primary-light rounded-lg p-6 mb-8">
        <h3 className="font-semibold text-gray-900 mb-2">
          Add Your NZBN to Your Invoice
        </h3>
        <p className="text-gray-600 mb-4">
          Our free invoice generator includes an NZBN field. Create a
          professional invoice with your NZBN in minutes.
        </p>
        <Link
          href="/"
          className="inline-block bg-primary text-white py-2 px-6 rounded-lg font-medium hover:bg-primary-dark transition-colors"
        >
          Create Invoice with NZBN
        </Link>
      </div>

      <div className="bg-gray-100 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          Related Resources
        </h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/gst-invoice-template"
              className="text-primary hover:underline"
            >
              Free NZ GST Invoice Template
            </Link>
          </li>
          <li>
            <Link
              href="/what-is-gst"
              className="text-primary hover:underline"
            >
              What is GST in NZ?
            </Link>
          </li>
          <li>
            <Link
              href="/how-to-invoice-in-nz"
              className="text-primary hover:underline"
            >
              How to Invoice in NZ
            </Link>
          </li>
        </ul>
      </div>
    </div>
      </>
  );
}