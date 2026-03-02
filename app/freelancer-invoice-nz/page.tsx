import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Freelancer Invoice Guide NZ - How to Invoice as a Sole Trader",
  description:
    "Complete guide to invoicing as a freelancer or sole trader in New Zealand. Learn what to include, GST requirements, payment terms, and free invoice templates.",
  alternates: { canonical: "https://nzinvoice.co.nz/freelancer-invoice-nz" },
  openGraph: {
    title: "Freelancer Invoice Guide NZ - How to Invoice as a Sole Trader",
    description:
      "Everything NZ freelancers and sole traders need to know about invoicing, GST, and getting paid on time.",
    url: "https://nzinvoice.co.nz/freelancer-invoice-nz",
    images: [{ url: "/og-image.svg", width: 1200, height: 630 }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Freelancer Invoice Guide NZ - How to Invoice as a Sole Trader",
      "description": "Complete guide to invoicing as a freelancer or sole trader in New Zealand. Learn what to include, GST requirements, payment terms, and free invoice templates.",
      "url": "https://nzinvoice.co.nz/freelancer-invoice-nz",
      "inLanguage": "en-NZ",
      "publisher": { "@type": "Organization", "name": "NZ Invoice Generator", "url": "https://nzinvoice.co.nz" },
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do freelancers in NZ need to charge GST?",
          "acceptedAnswer": { "@type": "Answer", "text": "Freelancers must register for and charge GST if their annual turnover exceeds $60,000. Below that threshold, GST registration is voluntary." }
        },
        {
          "@type": "Question",
          "name": "What should a freelancer include on an invoice in NZ?",
          "acceptedAnswer": { "@type": "Answer", "text": "A freelancer invoice should include your name and contact details, the client's details, an invoice number, date, description of services, amounts, payment terms, and your bank account number. If GST-registered, it must also include your GST number and the GST amount." }
        },
        {
          "@type": "Question",
          "name": "What payment terms should freelancers use in NZ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Common payment terms for NZ freelancers are 7 days, 14 days (the 20th of the month following), or 30 days. Shorter terms like 7 days are recommended for smaller businesses." }
        },
        {
          "@type": "Question",
          "name": "Do sole traders need an NZBN to invoice?",
          "acceptedAnswer": { "@type": "Answer", "text": "An NZBN (New Zealand Business Number) is not required to issue invoices, but it adds credibility and makes it easier for clients and government agencies to identify your business." }
        },
        {
          "@type": "Question",
          "name": "Can a freelancer issue a tax invoice without being GST-registered?",
          "acceptedAnswer": { "@type": "Answer", "text": "No. Only GST-registered businesses can issue tax invoices. If you are not GST-registered, you issue a standard invoice without GST and cannot charge GST to clients." }
        }
      ]
    }
  ]
};

export default function FreelancerInvoiceNzPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Freelancer Invoice Guide for New Zealand
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          Whether you&apos;re a freelance designer, developer, writer, or consultant, getting
          your invoices right is essential to getting paid on time and staying compliant with
          NZ tax rules. Here&apos;s everything you need to know.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          What to Include on a Freelancer Invoice
        </h2>
        <p className="text-gray-600 mb-4">
          Every freelancer invoice in New Zealand should include these details:
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-8">
          <li><strong>Your name</strong> (or trading name) and contact details</li>
          <li><strong>Client&apos;s name</strong> and address</li>
          <li><strong>Invoice number</strong> - a unique, sequential number</li>
          <li><strong>Invoice date</strong> and <strong>due date</strong></li>
          <li><strong>Description of services</strong> provided</li>
          <li><strong>Amount</strong> for each service or line item</li>
          <li><strong>Total amount due</strong></li>
          <li><strong>Your bank account number</strong> for payment</li>
          <li><strong>GST number</strong> and GST amount (if GST-registered)</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Tax Invoice vs Standard Invoice
        </h2>
        <p className="text-gray-600 mb-4">
          If you are GST-registered, you must issue a <strong>tax invoice</strong> that includes
          your GST number and shows the GST amount separately. If you are not GST-registered,
          you issue a standard invoice without GST.
        </p>
        <div className="bg-primary-light rounded-lg p-6 mb-8">
          <h3 className="font-semibold text-gray-900 mb-3">Key Difference</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-semibold text-gray-900 mb-1">Tax Invoice (GST-registered)</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Must say &quot;Tax Invoice&quot;</li>
                <li>Shows your GST number</li>
                <li>GST amount listed separately</li>
                <li>Total includes GST</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-1">Standard Invoice (not registered)</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>No GST number</li>
                <li>No GST charged</li>
                <li>Cannot claim input tax credits</li>
                <li>Total is the full amount</li>
              </ul>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Do Freelancers Need to Register for GST?
        </h2>
        <p className="text-gray-600 mb-4">
          You <strong>must</strong> register for GST if your turnover exceeds $60,000 in any
          12-month period. Below this threshold, registration is voluntary.
        </p>
        <p className="text-gray-600 mb-8">
          Voluntary registration can be beneficial if your business expenses are high, as you
          can claim back GST on purchases. However, it means you must charge GST on your
          services and file regular GST returns.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Payment Terms for Freelancers
        </h2>
        <p className="text-gray-600 mb-4">
          Common payment terms used by NZ freelancers:
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
          <li><strong>Due on receipt</strong> - payment expected immediately</li>
          <li><strong>7 days</strong> - common for small jobs and ongoing clients</li>
          <li><strong>14 days</strong> - the most common term for freelancers</li>
          <li><strong>20th of the month following</strong> - common for regular contracts</li>
          <li><strong>30 days</strong> - typical for larger businesses and agencies</li>
        </ul>
        <p className="text-gray-600 mb-8">
          Shorter payment terms help with cash flow. If you&apos;re working with a new client,
          consider requesting a deposit or milestone payments for larger projects.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Invoice Numbering
        </h2>
        <p className="text-gray-600 mb-4">
          Use a consistent, sequential numbering system for your invoices. This is important
          for your own records and for IRD compliance. Common formats include:
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-8">
          <li><strong>INV-0001, INV-0002, INV-0003</strong> - simple sequential</li>
          <li><strong>2026-001, 2026-002</strong> - year-based numbering</li>
          <li><strong>CLIENT-001</strong> - client-based prefixes</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Tips for Getting Paid on Time
        </h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-8">
          <li>Send invoices promptly - ideally the same day you complete the work</li>
          <li>Include your bank account details clearly on the invoice</li>
          <li>Use clear payment terms and due dates</li>
          <li>Follow up with a friendly reminder if payment is overdue</li>
          <li>Consider offering a small discount for early payment</li>
          <li>For large projects, invoice in stages rather than at completion</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Record Keeping
        </h2>
        <p className="text-gray-600 mb-8">
          As a freelancer or sole trader, you are required to keep records of all income and
          expenses for at least seven years. This includes copies of all invoices you issue.
          Good record keeping makes tax time easier and protects you in case of an IRD audit.
        </p>

        <div className="bg-primary-light rounded-lg p-6 mb-8">
          <h3 className="font-semibold text-gray-900 mb-2">Create Your Freelancer Invoice</h3>
          <p className="text-gray-600 mb-4">Use our free tool to create professional invoices with automatic GST calculations and instant PDF download.</p>
          <Link href="/" className="inline-block bg-primary text-white py-2 px-6 rounded-lg font-medium hover:bg-primary-dark transition-colors">
            Create Invoice
          </Link>
        </div>

        <div className="bg-gray-100 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Related Resources</h2>
          <ul className="space-y-2">
            <li><Link href="/how-to-invoice-in-nz" className="text-primary hover:underline">How to Invoice in NZ</Link></li>
            <li><Link href="/gst-registration-nz" className="text-primary hover:underline">GST Registration Guide</Link></li>
            <li><Link href="/how-to-calculate-gst" className="text-primary hover:underline">How to Calculate GST</Link></li>
            <li><Link href="/nzbn" className="text-primary hover:underline">What is an NZBN?</Link></li>
          </ul>
        </div>
      </div>
    </>
  );
}
