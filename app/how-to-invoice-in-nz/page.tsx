import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Invoice in NZ: A Guide for Freelancers and Sole Traders",
  description:
    "Complete guide to invoicing in New Zealand. Learn what to include on your invoices, GST requirements, payment terms, and best practices for NZ freelancers.",
  alternates: { canonical: "https://nzinvoice.co.nz/how-to-invoice-in-nz" },
  openGraph: {
    title: "How to Invoice in NZ: A Guide for Freelancers and Sole Traders",
    description: "Everything NZ freelancers and sole traders need to know about creating professional invoices.",
    url: "https://nzinvoice.co.nz/how-to-invoice-in-nz",
    images: [{ url: "/og-image.svg", width: 1200, height: 630 }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "How to Invoice in NZ: A Guide for Freelancers and Sole Traders",
      "description": "Complete guide to invoicing in New Zealand. Learn what to include on your invoices, GST requirements, payment terms, and best practices for NZ freelancers.",
      "url": "https://nzinvoice.co.nz/how-to-invoice-in-nz",
      "inLanguage": "en-NZ",
      "publisher": { "@type": "Organization", "name": "NZ Invoice Generator", "url": "https://nzinvoice.co.nz" },
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What do I need to include on an invoice in New Zealand?",
          "acceptedAnswer": { "@type": "Answer", "text": "An NZ invoice should include your business name and contact details, the client's name and address, an invoice number, the date, a description of goods or services, the amount due, and your payment details. If you are GST registered, you must also include your GST number and show the GST component separately." }
        },
        {
          "@type": "Question",
          "name": "Do I need to charge GST on my invoices in NZ?",
          "acceptedAnswer": { "@type": "Answer", "text": "You only need to charge GST if you are registered for GST. Registration is compulsory when your annual turnover exceeds $60,000. If you are not registered, you cannot charge GST on your invoices." }
        },
        {
          "@type": "Question",
          "name": "How long should I keep invoices in NZ?",
          "acceptedAnswer": { "@type": "Answer", "text": "The IRD requires you to keep business records including invoices for at least 7 years." }
        }
      ]
    }
  ]
};

export default function HowToInvoicePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        How to Invoice in New Zealand
      </h1>

      <p className="text-lg text-gray-600 mb-8">
        Whether you are a freelancer, sole trader, or running a small business
        in New Zealand, getting your invoicing right is essential. This guide
        covers everything you need to know about creating professional,
        compliant invoices.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">
        What to Include on Your Invoice
      </h2>
      <p className="text-gray-600 mb-4">
        Every invoice you send should include these key details:
      </p>
      <ol className="list-decimal list-inside text-gray-600 space-y-2 mb-8">
        <li>
          <strong>Your business name and contact details</strong> - including
          your address, email, and phone number
        </li>
        <li>
          <strong>Your client&apos;s name and address</strong> - so there is
          no confusion about who is being billed
        </li>
        <li>
          <strong>A unique invoice number</strong> - use a sequential numbering
          system (e.g., INV-0001, INV-0002)
        </li>
        <li>
          <strong>The invoice date</strong> - when the invoice was issued
        </li>
        <li>
          <strong>A due date</strong> - when payment is expected
        </li>
        <li>
          <strong>A clear description of services or goods</strong> - be
          specific about what you provided
        </li>
        <li>
          <strong>Quantities and unit prices</strong> - break down each line
          item
        </li>
        <li>
          <strong>The total amount due</strong> - including any GST if
          applicable
        </li>
        <li>
          <strong>Your payment details</strong> - bank account number for
          payment
        </li>
      </ol>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">
        GST Invoices vs Standard Invoices
      </h2>
      <p className="text-gray-600 mb-4">
        If you are registered for GST, you must issue tax invoices that show the
        GST component. A tax invoice includes all the standard invoice details
        plus:
      </p>
      <ul className="list-disc list-inside text-gray-600 space-y-2 mb-8">
        <li>The words &quot;tax invoice&quot;</li>
        <li>Your GST/IRD number</li>
        <li>The GST amount charged (at 15%)</li>
        <li>Whether prices are GST-inclusive or GST-exclusive</li>
      </ul>

      <p className="text-gray-600 mb-8">
        If you are not GST registered, you do not charge GST and should not show
        a GST amount on your invoices. You also cannot use the term &quot;tax
        invoice&quot;.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">
        Setting Payment Terms
      </h2>
      <p className="text-gray-600 mb-4">
        Common payment terms in New Zealand include:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="border border-gray-200 rounded-lg p-4">
          <h3 className="font-semibold text-gray-900 mb-1">Due on receipt</h3>
          <p className="text-sm text-gray-600">
            Payment expected immediately upon receiving the invoice
          </p>
        </div>
        <div className="border border-gray-200 rounded-lg p-4">
          <h3 className="font-semibold text-gray-900 mb-1">7 days</h3>
          <p className="text-sm text-gray-600">
            Common for small, recurring invoices
          </p>
        </div>
        <div className="border border-gray-200 rounded-lg p-4">
          <h3 className="font-semibold text-gray-900 mb-1">14 days</h3>
          <p className="text-sm text-gray-600">
            A popular choice for freelancers and contractors
          </p>
        </div>
        <div className="border border-gray-200 rounded-lg p-4">
          <h3 className="font-semibold text-gray-900 mb-1">30 days</h3>
          <p className="text-sm text-gray-600">
            Standard for business-to-business invoicing (also called &quot;net
            30&quot;)
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">
        Tips for NZ Freelancers
      </h2>
      <ul className="list-disc list-inside text-gray-600 space-y-2 mb-8">
        <li>
          <strong>Invoice promptly</strong> - send your invoice as soon as work
          is completed
        </li>
        <li>
          <strong>Keep records</strong> - store copies of all invoices for at
          least 7 years (IRD requirement)
        </li>
        <li>
          <strong>Use consistent numbering</strong> - sequential invoice numbers
          help with record-keeping and look professional
        </li>
        <li>
          <strong>Include your NZBN</strong> - if you have a New Zealand
          Business Number, include it on your invoices for credibility
        </li>
        <li>
          <strong>Follow up on late payments</strong> - send a friendly reminder
          if payment is overdue
        </li>
        <li>
          <strong>Consider GST registration</strong> - even if your turnover is
          below $60,000, voluntary registration lets you claim back GST on
          expenses
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">
        Common Invoicing Mistakes to Avoid
      </h2>
      <ul className="list-disc list-inside text-gray-600 space-y-2 mb-8">
        <li>Forgetting to include your GST number (if registered)</li>
        <li>Using duplicate invoice numbers</li>
        <li>Vague descriptions of services provided</li>
        <li>Not specifying payment terms or due dates</li>
        <li>Charging GST when you are not registered</li>
        <li>Not keeping copies of sent invoices</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">
        Sole Trader vs Company Invoicing
      </h2>
      <p className="text-gray-600 mb-8">
        As a sole trader, you invoice under your own name or a trading name. You
        use your personal IRD number for tax purposes. If you operate as a
        company, you invoice under the company name and use the company&apos;s
        IRD number. Both can register for GST independently of their business
        structure.
      </p>

      <div className="bg-primary-light rounded-lg p-6 mb-8">
        <h3 className="font-semibold text-gray-900 mb-2">
          Start Invoicing Now
        </h3>
        <p className="text-gray-600 mb-4">
          Use our free NZ invoice generator to create professional invoices with
          automatic GST calculations.
        </p>
        <Link
          href="/"
          className="inline-block bg-primary text-white py-2 px-6 rounded-lg font-medium hover:bg-primary-dark transition-colors"
        >
          Create Your Invoice
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
            <Link href="/nzbn" className="text-primary hover:underline">
              What is an NZBN?
            </Link>
          </li>
        </ul>
      </div>
    </div>
      </>
  );
}