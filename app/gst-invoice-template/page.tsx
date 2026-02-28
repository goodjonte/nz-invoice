import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free NZ GST Invoice Template",
  description:
    "Download a free NZ GST invoice template. Includes automatic 15% GST calculations, NZBN support, and multiple professional designs. No sign-up needed.",
  keywords: [
    "NZ GST invoice template",
    "free invoice template NZ",
    "GST invoice template download",
    "New Zealand invoice template",
  ],
  openGraph: {
    title: "Free NZ GST Invoice Template",
    description:
      "Download a free NZ GST invoice template with automatic 15% GST calculations and multiple professional designs.",
  },
};

export default function GstInvoiceTemplatePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Free NZ GST Invoice Template
      </h1>

      <p className="text-lg text-gray-600 mb-8">
        Need a professional GST invoice template for your New Zealand business?
        Our free online invoice generator lets you create, customise, and
        download GST-compliant invoices in seconds.
      </p>

      <div className="bg-primary-light rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          Create Your Invoice Now
        </h2>
        <p className="text-gray-600 mb-4">
          No sign-up, no download, no cost. Just fill in your details and print
          to PDF.
        </p>
        <Link
          href="/"
          className="inline-block bg-primary text-white py-2 px-6 rounded-lg font-medium hover:bg-primary-dark transition-colors"
        >
          Open Invoice Generator
        </Link>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">
        What Makes a Valid NZ GST Invoice?
      </h2>
      <p className="text-gray-600 mb-4">
        Under New Zealand tax law, a GST invoice (also called a tax invoice)
        must include specific information to be valid. The IRD requires the
        following details on every tax invoice:
      </p>

      <ul className="list-disc list-inside text-gray-600 space-y-2 mb-8">
        <li>The words &quot;tax invoice&quot; displayed prominently</li>
        <li>Your business name and GST number (IRD number)</li>
        <li>The date the invoice was issued</li>
        <li>A description of the goods or services supplied</li>
        <li>The quantity or volume of goods or services</li>
        <li>
          The total amount charged, including GST (or the amount excluding GST
          with the GST shown separately)
        </li>
        <li>
          For invoices over $1,000, the buyer&apos;s name and address are also
          required
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">
        Three Professional Templates
      </h2>
      <p className="text-gray-600 mb-4">
        Our invoice generator offers three distinct template styles to match
        your brand:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="border border-gray-200 rounded-lg p-4">
          <h3 className="font-semibold text-gray-900 mb-2">Modern</h3>
          <p className="text-sm text-gray-600">
            Clean, colourful design with blue accents. Perfect for tech
            companies, digital agencies, and modern businesses.
          </p>
        </div>
        <div className="border border-gray-200 rounded-lg p-4">
          <h3 className="font-semibold text-gray-900 mb-2">Classic</h3>
          <p className="text-sm text-gray-600">
            Traditional, formal layout with borders and structured sections.
            Ideal for professional services, legal, and accounting firms.
          </p>
        </div>
        <div className="border border-gray-200 rounded-lg p-4">
          <h3 className="font-semibold text-gray-900 mb-2">Minimal</h3>
          <p className="text-sm text-gray-600">
            Simple, spacious design with plenty of whitespace. Great for
            freelancers, creatives, and consultants.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">
        GST at 15%
      </h2>
      <p className="text-gray-600 mb-4">
        New Zealand&apos;s GST rate is 15%, which applies to most goods and
        services. Our template automatically calculates and displays the GST
        amount for you. If you are not registered for GST, you can toggle the
        GST calculation off and create a standard invoice instead.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">
        How to Use This Template
      </h2>
      <ol className="list-decimal list-inside text-gray-600 space-y-2 mb-8">
        <li>Enter your business details (name, address, contact information)</li>
        <li>Add your NZBN if you have one</li>
        <li>Enter your client&apos;s details</li>
        <li>Add line items with descriptions, quantities, and prices</li>
        <li>Choose whether to include GST at 15%</li>
        <li>Select your preferred template style</li>
        <li>Click &quot;Download PDF&quot; to save your invoice</li>
      </ol>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">
        Your Data Stays Private
      </h2>
      <p className="text-gray-600 mb-8">
        Everything runs in your browser. No data is sent to any server, no
        account is required, and your invoice details are saved locally on your
        device so you can come back and create more invoices later.
      </p>

      <div className="bg-gray-100 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          Related Resources
        </h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/what-is-gst"
              className="text-primary hover:underline"
            >
              What is GST in New Zealand?
            </Link>
          </li>
          <li>
            <Link
              href="/how-to-invoice-in-nz"
              className="text-primary hover:underline"
            >
              How to Invoice in NZ: A Complete Guide
            </Link>
          </li>
          <li>
            <Link href="/nzbn" className="text-primary hover:underline">
              What is an NZBN and Where to Find Yours
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
