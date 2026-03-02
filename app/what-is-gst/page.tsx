import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What is GST in New Zealand? A Complete Guide",
  description:
    "Learn about GST in New Zealand, the 15% rate, who needs to register, how to charge it, and how to file GST returns with the IRD.",
  alternates: { canonical: "https://nzinvoice.co.nz/what-is-gst" },
  openGraph: {
    title: "What is GST in New Zealand? A Complete Guide",
    description:
      "Everything you need to know about GST in New Zealand, including the 15% rate, registration thresholds, and filing requirements.",
    url: "https://nzinvoice.co.nz/what-is-gst",
    images: [{ url: "/og-image.svg", width: 1200, height: 630 }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "What is GST in New Zealand? A Complete Guide",
      "description": "Learn about GST in New Zealand, the 15% rate, who needs to register, how to charge it, and how to file GST returns with the IRD.",
      "url": "https://nzinvoice.co.nz/what-is-gst",
      "inLanguage": "en-NZ",
      "publisher": { "@type": "Organization", "name": "NZ Invoice Generator", "url": "https://nzinvoice.co.nz" },
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the GST rate in New Zealand?",
          "acceptedAnswer": { "@type": "Answer", "text": "The GST rate in New Zealand is 15%. This rate has been in effect since 1 October 2010." }
        },
        {
          "@type": "Question",
          "name": "Who needs to register for GST in NZ?",
          "acceptedAnswer": { "@type": "Answer", "text": "You must register for GST if your business has a turnover of more than $60,000 in any 12-month period, or you expect it to exceed $60,000 in the next 12 months." }
        },
        {
          "@type": "Question",
          "name": "How do I calculate GST in New Zealand?",
          "acceptedAnswer": { "@type": "Answer", "text": "To add GST to a price, multiply by 1.15. To find the GST component of a GST-inclusive price, multiply by 3 and divide by 23." }
        },
        {
          "@type": "Question",
          "name": "How often do I need to file GST returns in NZ?",
          "acceptedAnswer": { "@type": "Answer", "text": "You can file GST returns monthly, two-monthly (most common), or six-monthly if your turnover is under $500,000. Returns are filed online through myIR." }
        },
        {
          "@type": "Question",
          "name": "What goods and services are GST-exempt in NZ?",
          "acceptedAnswer": { "@type": "Answer", "text": "GST-exempt items in NZ include residential rent, financial services such as bank fees and interest, donated goods sold by non-profit organisations, and penalty interest and fines." }
        }
      ]
    }
  ]
};

export default function WhatIsGstPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          What is GST in New Zealand?
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          GST (Goods and Services Tax) is a consumption tax applied to most goods
          and services sold in New Zealand. It is collected by businesses on behalf
          of the government and paid to Inland Revenue (IRD).
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          The NZ GST Rate
        </h2>
        <p className="text-gray-600 mb-4">
          The current GST rate in New Zealand is <strong>15%</strong>. This rate
          has been in effect since 1 October 2010, when it was increased from
          12.5%.
        </p>
        <p className="text-gray-600 mb-8">
          GST is included in the price of most goods and services you buy in New
          Zealand. When you see a price in a shop, it typically already includes
          GST. For business-to-business transactions, invoices often show the GST
          component separately.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Who Needs to Register for GST?
        </h2>
        <p className="text-gray-600 mb-4">
          You must register for GST if your business has a turnover of more than
          $60,000 in any 12-month period, or you expect it to exceed $60,000 in
          the next 12 months. You can also voluntarily register if your turnover
          is below this threshold.
        </p>

        <div className="bg-primary-light rounded-lg p-6 mb-8">
          <h3 className="font-semibold text-gray-900 mb-2">GST Registration Threshold</h3>
          <p className="text-3xl font-bold text-primary mb-2">$60,000</p>
          <p className="text-sm text-gray-600">Annual turnover threshold for mandatory GST registration in NZ</p>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Benefits of GST Registration
        </h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-8">
          <li>You can claim back GST on business expenses (input tax credits)</li>
          <li>Your business may appear more professional and established</li>
          <li>You can deal more easily with other GST-registered businesses</li>
          <li>Voluntary registration lets smaller businesses claim GST refunds on expenses</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">What is GST-Exempt?</h2>
        <p className="text-gray-600 mb-4">Most goods and services in NZ are subject to GST, but some are exempt, including:</p>
        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-8">
          <li>Residential rent</li>
          <li>Financial services (such as bank fees and interest)</li>
          <li>Donated goods sold by non-profit organisations</li>
          <li>Penalty interest and fines</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Filing GST Returns</h2>
        <p className="text-gray-600 mb-4">Once registered, you need to file GST returns with the IRD. You can choose to file:</p>
        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
          <li><strong>Monthly</strong> - if your turnover is over $24 million, or you choose to</li>
          <li><strong>Two-monthly</strong> - the most common filing period</li>
          <li><strong>Six-monthly</strong> - if your turnover is under $500,000</li>
        </ul>
        <p className="text-gray-600 mb-8">GST returns can be filed online through myIR, the IRD&apos;s online portal.</p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Calculate GST</h2>
        <p className="text-gray-600 mb-4">To add GST to a price, multiply by 1.15. To find the GST component of a GST-inclusive price, multiply by 3 and divide by 23.</p>
        <div className="bg-gray-100 rounded-lg p-6 mb-8 font-mono text-sm">
          <p className="mb-2"><strong>Adding GST:</strong> $100 x 1.15 = $115.00 (incl. GST)</p>
          <p><strong>Finding GST in a price:</strong> $115 x 3 / 23 = $15.00 (GST component)</p>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">GST on Your Invoices</h2>
        <p className="text-gray-600 mb-4">
          If you are GST registered, your invoices must show the GST amount separately. This is called a tax invoice. Our free invoice generator automatically calculates and displays the 15% GST for you.
        </p>

        <div className="bg-primary-light rounded-lg p-6 mb-8">
          <h3 className="font-semibold text-gray-900 mb-2">Create a GST Invoice</h3>
          <p className="text-gray-600 mb-4">Use our free tool to create professional GST invoices with automatic 15% calculations.</p>
          <Link href="/" className="inline-block bg-primary text-white py-2 px-6 rounded-lg font-medium hover:bg-primary-dark transition-colors">
            Create Invoice
          </Link>
        </div>

        <div className="bg-gray-100 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Related Resources</h2>
          <ul className="space-y-2">
            <li><Link href="/gst-invoice-template" className="text-primary hover:underline">Free NZ GST Invoice Template</Link></li>
            <li><Link href="/how-to-invoice-in-nz" className="text-primary hover:underline">How to Invoice in NZ</Link></li>
            <li><Link href="/how-to-calculate-gst" className="text-primary hover:underline">How to Calculate GST</Link></li>
            <li><Link href="/gst-registration-nz" className="text-primary hover:underline">GST Registration Guide</Link></li>
            <li><Link href="/freelancer-invoice-nz" className="text-primary hover:underline">Freelancer Invoice Guide</Link></li>
            <li><Link href="/nzbn" className="text-primary hover:underline">What is an NZBN?</Link></li>
          </ul>
        </div>
      </div>
    </>
  );
}
