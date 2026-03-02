import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Register for GST in New Zealand - Step-by-Step Guide",
  description:
    "Step-by-step guide to registering for GST in New Zealand. Learn the $60,000 threshold, how to register online through myIR, and what happens after registration.",
  alternates: { canonical: "https://nzinvoice.co.nz/gst-registration-nz" },
  openGraph: {
    title: "How to Register for GST in New Zealand - Step-by-Step Guide",
    description:
      "Everything you need to know about GST registration in NZ, including thresholds, the online registration process, and filing obligations.",
    url: "https://nzinvoice.co.nz/gst-registration-nz",
    images: [{ url: "/og-image.svg", width: 1200, height: 630 }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "How to Register for GST in New Zealand - Step-by-Step Guide",
      "description": "Step-by-step guide to registering for GST in New Zealand. Learn the $60,000 threshold, how to register online through myIR, and what happens after registration.",
      "url": "https://nzinvoice.co.nz/gst-registration-nz",
      "inLanguage": "en-NZ",
      "publisher": { "@type": "Organization", "name": "NZ Invoice Generator", "url": "https://nzinvoice.co.nz" },
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "When do I need to register for GST in NZ?",
          "acceptedAnswer": { "@type": "Answer", "text": "You must register for GST if your business turnover exceeds $60,000 in any 12-month period, or you expect it to exceed $60,000 in the next 12 months. You can also register voluntarily below this threshold." }
        },
        {
          "@type": "Question",
          "name": "How do I register for GST in New Zealand?",
          "acceptedAnswer": { "@type": "Answer", "text": "You can register for GST online through myIR (Inland Revenue's online portal), by completing an IR360 form, or through a tax agent. Online registration through myIR is the quickest method." }
        },
        {
          "@type": "Question",
          "name": "How long does GST registration take in NZ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Online registration through myIR is usually processed within a few working days. You will receive your GST number once registration is confirmed." }
        },
        {
          "@type": "Question",
          "name": "Can I backdate my GST registration?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes, the IRD may allow you to backdate your GST registration. This is common if you have exceeded the $60,000 threshold without realising. Contact the IRD or your tax agent to arrange this." }
        },
        {
          "@type": "Question",
          "name": "What is the difference between invoice basis and payments basis for GST?",
          "acceptedAnswer": { "@type": "Answer", "text": "Invoice basis means you account for GST when you issue an invoice, regardless of when you receive payment. Payments basis means you account for GST when you actually receive or make payment. Payments basis is available if your turnover is under $2 million and can help with cash flow." }
        }
      ]
    }
  ]
};

export default function GstRegistrationNzPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          How to Register for GST in New Zealand
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          GST registration is required for any NZ business with turnover above $60,000.
          This guide walks you through when to register, how to register, and what your
          obligations are once registered.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Do You Need to Register?
        </h2>
        <p className="text-gray-600 mb-4">
          You <strong>must</strong> register for GST if:
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
          <li>Your business turnover has exceeded <strong>$60,000</strong> in any 12-month period</li>
          <li>You expect your turnover to exceed $60,000 in the next 12 months</li>
        </ul>
        <p className="text-gray-600 mb-8">
          You may also choose to register voluntarily if your turnover is below $60,000.
          This allows you to claim back GST on business expenses.
        </p>

        <div className="bg-primary-light rounded-lg p-6 mb-8">
          <h3 className="font-semibold text-gray-900 mb-2">Registration Threshold</h3>
          <p className="text-3xl font-bold text-primary mb-2">$60,000</p>
          <p className="text-sm text-gray-600">Annual turnover in any 12-month period. This is based on total sales, not profit.</p>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Benefits of Registering for GST
        </h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-8">
          <li><strong>Claim input tax credits</strong> - get back the GST you pay on business expenses</li>
          <li><strong>Professional credibility</strong> - shows clients your business is established</li>
          <li><strong>Business-to-business dealings</strong> - other GST-registered businesses expect tax invoices</li>
          <li><strong>GST refunds</strong> - if your expenses exceed your income in a period, you may get a refund</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          How to Register: Step by Step
        </h2>

        <div className="space-y-6 mb-8">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Get an IRD Number</h3>
              <p className="text-gray-600">If you don&apos;t already have one, apply for an IRD number for your business. Sole traders can use their personal IRD number.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Log in to myIR</h3>
              <p className="text-gray-600">Go to the IRD&apos;s online portal at myir.ird.govt.nz and log in with your credentials.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Complete the GST Registration</h3>
              <p className="text-gray-600">Select &quot;Register for GST&quot; and fill in the required details, including your business activity, expected turnover, and preferred filing frequency.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Choose Your Accounting Basis</h3>
              <p className="text-gray-600">Select either <strong>invoice basis</strong> (account for GST when invoiced) or <strong>payments basis</strong> (account for GST when paid). Payments basis is available if turnover is under $2 million.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">5</div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Choose Your Filing Frequency</h3>
              <p className="text-gray-600">Select how often you&apos;ll file GST returns: monthly, two-monthly, or six-monthly (if turnover is under $500,000).</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">6</div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Receive Your GST Number</h3>
              <p className="text-gray-600">Once approved, you&apos;ll receive your GST registration number. This is the same as your IRD number - it&apos;s simply activated for GST purposes.</p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Filing Frequency Options
        </h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">Frequency</th>
                <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">Eligibility</th>
                <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">Best For</th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              <tr><td className="border border-gray-200 px-4 py-2 font-medium">Monthly</td><td className="border border-gray-200 px-4 py-2">Any business</td><td className="border border-gray-200 px-4 py-2">Regular refunds, high turnover</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-2 font-medium">Two-monthly</td><td className="border border-gray-200 px-4 py-2">Any business</td><td className="border border-gray-200 px-4 py-2">Most common, good balance</td></tr>
              <tr><td className="border border-gray-200 px-4 py-2 font-medium">Six-monthly</td><td className="border border-gray-200 px-4 py-2">Turnover under $500,000</td><td className="border border-gray-200 px-4 py-2">Less admin, smaller businesses</td></tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          After Registration: Your Obligations
        </h2>
        <p className="text-gray-600 mb-4">
          Once GST-registered, you must:
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-8">
          <li>Charge 15% GST on all taxable goods and services you sell</li>
          <li>Issue <strong>tax invoices</strong> that include your GST number</li>
          <li>File GST returns by the due date for each period</li>
          <li>Pay any GST owing to the IRD on time</li>
          <li>Keep accurate records of all sales and expenses for at least seven years</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Invoice Basis vs Payments Basis
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="bg-gray-100 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Invoice Basis</h3>
            <p className="text-sm text-gray-600 mb-2">Account for GST when you issue or receive an invoice, regardless of when payment happens.</p>
            <p className="text-sm text-gray-600"><strong>Best for:</strong> Businesses that get paid promptly.</p>
          </div>
          <div className="bg-gray-100 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Payments Basis</h3>
            <p className="text-sm text-gray-600 mb-2">Account for GST only when you actually receive or make payment. Available if turnover is under $2 million.</p>
            <p className="text-sm text-gray-600"><strong>Best for:</strong> Freelancers and small businesses with longer payment cycles.</p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Deregistering for GST
        </h2>
        <p className="text-gray-600 mb-8">
          If your turnover drops below $60,000, you can apply to deregister for GST through
          myIR. You must file a final GST return and may need to account for GST on any
          business assets you keep.
        </p>

        <div className="bg-primary-light rounded-lg p-6 mb-8">
          <h3 className="font-semibold text-gray-900 mb-2">Start Issuing Tax Invoices</h3>
          <p className="text-gray-600 mb-4">Once registered, use our free tool to create compliant tax invoices with your GST number and automatic 15% calculations.</p>
          <Link href="/" className="inline-block bg-primary text-white py-2 px-6 rounded-lg font-medium hover:bg-primary-dark transition-colors">
            Create Invoice
          </Link>
        </div>

        <div className="bg-gray-100 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Related Resources</h2>
          <ul className="space-y-2">
            <li><Link href="/what-is-gst" className="text-primary hover:underline">What is GST in New Zealand?</Link></li>
            <li><Link href="/how-to-calculate-gst" className="text-primary hover:underline">How to Calculate GST</Link></li>
            <li><Link href="/freelancer-invoice-nz" className="text-primary hover:underline">Freelancer Invoice Guide</Link></li>
            <li><Link href="/gst-invoice-template" className="text-primary hover:underline">Free NZ GST Invoice Template</Link></li>
          </ul>
        </div>
      </div>
    </>
  );
}
