import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Calculate GST in New Zealand - Formulas & Examples",
  description:
    "Learn how to calculate GST in New Zealand. Step-by-step formulas for adding 15% GST, removing GST from inclusive prices, and working out the GST component.",
  alternates: { canonical: "https://nzinvoice.co.nz/how-to-calculate-gst" },
  openGraph: {
    title: "How to Calculate GST in New Zealand - Formulas & Examples",
    description:
      "Step-by-step guide to calculating GST in NZ. Formulas for adding GST, removing GST, and finding the GST component of any price.",
    url: "https://nzinvoice.co.nz/how-to-calculate-gst",
    images: [{ url: "/og-image.svg", width: 1200, height: 630 }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "How to Calculate GST in New Zealand - Formulas & Examples",
      "description": "Learn how to calculate GST in New Zealand. Step-by-step formulas for adding 15% GST, removing GST from inclusive prices, and working out the GST component.",
      "url": "https://nzinvoice.co.nz/how-to-calculate-gst",
      "inLanguage": "en-NZ",
      "publisher": { "@type": "Organization", "name": "NZ Invoice Generator", "url": "https://nzinvoice.co.nz" },
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How do I add GST to a price in NZ?",
          "acceptedAnswer": { "@type": "Answer", "text": "To add 15% GST to a price, multiply the GST-exclusive amount by 1.15. For example, $100 × 1.15 = $115.00 including GST." }
        },
        {
          "@type": "Question",
          "name": "How do I remove GST from a price?",
          "acceptedAnswer": { "@type": "Answer", "text": "To remove GST from a GST-inclusive price, divide by 1.15. For example, $115 ÷ 1.15 = $100.00 excluding GST." }
        },
        {
          "@type": "Question",
          "name": "How do I find the GST component of a price?",
          "acceptedAnswer": { "@type": "Answer", "text": "To find the GST component of a GST-inclusive price, multiply by 3 and divide by 23. For example, $230 × 3 ÷ 23 = $30.00 GST." }
        },
        {
          "@type": "Question",
          "name": "What is the GST rate in New Zealand?",
          "acceptedAnswer": { "@type": "Answer", "text": "The GST rate in New Zealand is 15%. This has been the rate since 1 October 2010." }
        },
        {
          "@type": "Question",
          "name": "Do I need to show GST on my invoices?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes, if you are GST-registered, you must issue tax invoices that show the GST amount separately, your GST number, and the total amount including GST." }
        }
      ]
    }
  ]
};

export default function HowToCalculateGstPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          How to Calculate GST in New Zealand
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          New Zealand&apos;s GST rate is <strong>15%</strong>. Whether you need to add GST to a price,
          remove it from a GST-inclusive amount, or work out the GST component, here are the
          formulas and examples you need.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          1. Adding GST to a Price
        </h2>
        <p className="text-gray-600 mb-4">
          To calculate the GST-inclusive price, multiply the GST-exclusive amount by 1.15.
        </p>
        <div className="bg-gray-100 rounded-lg p-6 mb-4 font-mono text-sm">
          <p className="mb-1"><strong>Formula:</strong> Price × 1.15 = Price incl. GST</p>
        </div>
        <div className="bg-primary-light rounded-lg p-6 mb-8">
          <h3 className="font-semibold text-gray-900 mb-3">Examples</h3>
          <div className="space-y-2 font-mono text-sm text-gray-700">
            <p>$50.00 × 1.15 = <strong>$57.50</strong> incl. GST</p>
            <p>$100.00 × 1.15 = <strong>$115.00</strong> incl. GST</p>
            <p>$250.00 × 1.15 = <strong>$287.50</strong> incl. GST</p>
            <p>$1,000.00 × 1.15 = <strong>$1,150.00</strong> incl. GST</p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          2. Removing GST from a Price
        </h2>
        <p className="text-gray-600 mb-4">
          To find the GST-exclusive price from a GST-inclusive amount, divide by 1.15.
        </p>
        <div className="bg-gray-100 rounded-lg p-6 mb-4 font-mono text-sm">
          <p className="mb-1"><strong>Formula:</strong> Price incl. GST ÷ 1.15 = Price excl. GST</p>
        </div>
        <div className="bg-primary-light rounded-lg p-6 mb-8">
          <h3 className="font-semibold text-gray-900 mb-3">Examples</h3>
          <div className="space-y-2 font-mono text-sm text-gray-700">
            <p>$57.50 ÷ 1.15 = <strong>$50.00</strong> excl. GST</p>
            <p>$115.00 ÷ 1.15 = <strong>$100.00</strong> excl. GST</p>
            <p>$287.50 ÷ 1.15 = <strong>$250.00</strong> excl. GST</p>
            <p>$1,150.00 ÷ 1.15 = <strong>$1,000.00</strong> excl. GST</p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          3. Finding the GST Component
        </h2>
        <p className="text-gray-600 mb-4">
          To find just the GST amount from a GST-inclusive price, multiply by 3 and divide by 23.
          This works because GST is 15/115 (or 3/23) of the inclusive price.
        </p>
        <div className="bg-gray-100 rounded-lg p-6 mb-4 font-mono text-sm">
          <p className="mb-1"><strong>Formula:</strong> Price incl. GST × 3 ÷ 23 = GST amount</p>
        </div>
        <div className="bg-primary-light rounded-lg p-6 mb-8">
          <h3 className="font-semibold text-gray-900 mb-3">Examples</h3>
          <div className="space-y-2 font-mono text-sm text-gray-700">
            <p>$57.50 × 3 ÷ 23 = <strong>$7.50</strong> GST</p>
            <p>$115.00 × 3 ÷ 23 = <strong>$15.00</strong> GST</p>
            <p>$230.00 × 3 ÷ 23 = <strong>$30.00</strong> GST</p>
            <p>$1,150.00 × 3 ÷ 23 = <strong>$150.00</strong> GST</p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Quick Reference Table
        </h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">Excl. GST</th>
                <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">GST (15%)</th>
                <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">Incl. GST</th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              <tr><td className="border border-gray-200 px-4 py-2">$50.00</td><td className="border border-gray-200 px-4 py-2">$7.50</td><td className="border border-gray-200 px-4 py-2">$57.50</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-2">$100.00</td><td className="border border-gray-200 px-4 py-2">$15.00</td><td className="border border-gray-200 px-4 py-2">$115.00</td></tr>
              <tr><td className="border border-gray-200 px-4 py-2">$200.00</td><td className="border border-gray-200 px-4 py-2">$30.00</td><td className="border border-gray-200 px-4 py-2">$230.00</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-2">$500.00</td><td className="border border-gray-200 px-4 py-2">$75.00</td><td className="border border-gray-200 px-4 py-2">$575.00</td></tr>
              <tr><td className="border border-gray-200 px-4 py-2">$1,000.00</td><td className="border border-gray-200 px-4 py-2">$150.00</td><td className="border border-gray-200 px-4 py-2">$1,150.00</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-2">$5,000.00</td><td className="border border-gray-200 px-4 py-2">$750.00</td><td className="border border-gray-200 px-4 py-2">$5,750.00</td></tr>
              <tr><td className="border border-gray-200 px-4 py-2">$10,000.00</td><td className="border border-gray-200 px-4 py-2">$1,500.00</td><td className="border border-gray-200 px-4 py-2">$11,500.00</td></tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          GST on Invoices
        </h2>
        <p className="text-gray-600 mb-4">
          If you are GST-registered, your tax invoices must clearly show the GST amount. A valid
          tax invoice needs to include:
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
          <li>The words &quot;tax invoice&quot;</li>
          <li>Your name and GST number</li>
          <li>The date of the invoice</li>
          <li>A description of the goods or services</li>
          <li>The total amount charged including GST</li>
          <li>The GST amount charged (for invoices over $1,000)</li>
        </ul>
        <p className="text-gray-600 mb-8">
          Our free invoice generator automatically calculates and displays GST for you, so you
          don&apos;t have to do the maths yourself.
        </p>

        <div className="bg-primary-light rounded-lg p-6 mb-8">
          <h3 className="font-semibold text-gray-900 mb-2">Create a GST Invoice Automatically</h3>
          <p className="text-gray-600 mb-4">Skip the manual calculations. Our free tool adds 15% GST to your line items and generates a professional tax invoice.</p>
          <Link href="/" className="inline-block bg-primary text-white py-2 px-6 rounded-lg font-medium hover:bg-primary-dark transition-colors">
            Create Invoice
          </Link>
        </div>

        <div className="bg-gray-100 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Related Resources</h2>
          <ul className="space-y-2">
            <li><Link href="/what-is-gst" className="text-primary hover:underline">What is GST in New Zealand?</Link></li>
            <li><Link href="/gst-registration-nz" className="text-primary hover:underline">GST Registration Guide</Link></li>
            <li><Link href="/gst-invoice-template" className="text-primary hover:underline">Free NZ GST Invoice Template</Link></li>
            <li><Link href="/freelancer-invoice-nz" className="text-primary hover:underline">Freelancer Invoice Guide</Link></li>
          </ul>
        </div>
      </div>
    </>
  );
}
