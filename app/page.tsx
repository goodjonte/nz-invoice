"use client";

import { useInvoiceStore } from "./useInvoiceStore";
import ModernTemplate from "./components/templates/ModernTemplate";
import ClassicTemplate from "./components/templates/ClassicTemplate";
import MinimalTemplate from "./components/templates/MinimalTemplate";
import { formatCurrency, calculateSubtotal, calculateGst } from "./types";

export default function Home() {
  const {
    invoice,
    isLoaded,
    updateBusiness,
    updateClient,
    updateField,
    addLineItem,
    removeLineItem,
    updateLineItem,
    newInvoice,
  } = useInvoiceStore();

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      updateBusiness({ logo: ev.target?.result as string });
    };
    reader.readAsDataURL(file);
  };

  const handlePrint = () => {
    window.print();
  };

  const subtotal = calculateSubtotal(invoice.lineItems);
  const gst = invoice.includeGst ? calculateGst(subtotal) : 0;
  const total = subtotal + gst;

  const TemplateComponent =
    invoice.template === "classic"
      ? ClassicTemplate
      : invoice.template === "minimal"
        ? MinimalTemplate
        : ModernTemplate;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Page Header */}
      <div className="no-print mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Free NZ GST Invoice Generator
        </h1>
        <p className="text-gray-600 mt-2">
          Create professional GST invoices for your New Zealand business. Fill
          in the details below, preview your invoice, and download as PDF.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left: Form */}
        <div className="no-print space-y-6">
          {/* Template Selector */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Template Style
            </h2>
            <div className="flex gap-3">
              {(["modern", "classic", "minimal"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => updateField("template", t)}
                  className={`flex-1 py-2 px-4 rounded-lg border text-sm font-medium capitalize transition-colors ${
                    invoice.template === t
                      ? "bg-primary text-white border-primary"
                      : "bg-white text-gray-700 border-gray-300 hover:border-primary"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Business Details */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Your Business Details
            </h2>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Business name"
                value={invoice.businessDetails.name}
                onChange={(e) => updateBusiness({ name: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <input
                type="text"
                placeholder="NZBN (optional)"
                value={invoice.businessDetails.nzbn}
                onChange={(e) => updateBusiness({ nzbn: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <div>
                <input
                  type="text"
                  placeholder="GST Number (required for tax invoices)"
                  value={invoice.businessDetails.gstNumber}
                  onChange={(e) => updateBusiness({ gstNumber: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <p className="text-xs text-gray-400 mt-1">Format: 123-456-789. Required by IRD for valid tax invoices.</p>
              </div>
              <input
                type="text"
                placeholder="Address line 1 (e.g. 12 Example Street)"
                value={invoice.businessDetails.addressLine1}
                onChange={(e) => updateBusiness({ addressLine1: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <input
                type="text"
                placeholder="Address line 2 (e.g. Auckland 1010)"
                value={invoice.businessDetails.addressLine2}
                onChange={(e) => updateBusiness({ addressLine2: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="email"
                  placeholder="Email"
                  value={invoice.businessDetails.email}
                  onChange={(e) => updateBusiness({ email: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  value={invoice.businessDetails.phone}
                  onChange={(e) => updateBusiness({ phone: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Logo (optional)
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleLogoUpload}
                  className="w-full text-sm text-gray-500 file:mr-4 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-primary-light file:text-primary hover:file:bg-blue-100"
                />
                {invoice.businessDetails.logo && (
                  <button
                    onClick={() => updateBusiness({ logo: "" })}
                    className="text-xs text-red-500 mt-1 hover:underline"
                  >
                    Remove logo
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Client Details */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Client Details
            </h2>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Client name"
                value={invoice.clientDetails.name}
                onChange={(e) => updateClient({ name: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <input
                type="text"
                placeholder="Address line 1 (e.g. 12 Example Street)"
                value={invoice.clientDetails.addressLine1}
                onChange={(e) => updateClient({ addressLine1: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <input
                type="text"
                placeholder="Address line 2 (e.g. Auckland 1010)"
                value={invoice.clientDetails.addressLine2}
                onChange={(e) => updateClient({ addressLine2: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <input
                type="email"
                placeholder="Client email"
                value={invoice.clientDetails.email}
                onChange={(e) => updateClient({ email: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>

          {/* Invoice Details */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Invoice Details
            </h2>
            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Invoice #
                </label>
                <input
                  type="text"
                  value={invoice.invoiceNumber}
                  onChange={(e) =>
                    updateField("invoiceNumber", e.target.value)
                  }
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Date
                </label>
                <input
                  type="date"
                  value={invoice.date}
                  onChange={(e) => updateField("date", e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Due Date
                </label>
                <input
                  type="date"
                  value={invoice.dueDate}
                  onChange={(e) => updateField("dueDate", e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* GST Toggle */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  Include GST (15%)
                </h2>
                <p className="text-sm text-gray-500">
                  Toggle off if you are not GST registered
                </p>
              </div>
              <button
                onClick={() =>
                  updateField("includeGst", !invoice.includeGst)
                }
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  invoice.includeGst ? "bg-primary" : "bg-gray-300"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    invoice.includeGst ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Line Items */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Line Items
            </h2>
            <div className="space-y-3">
              {invoice.lineItems.map((item) => (
                <div key={item.id} className="border border-gray-200 rounded-lg p-3 space-y-2">
                  <input
                    type="text"
                    placeholder="Description"
                    value={item.description}
                    onChange={(e) => updateLineItem(item.id, { description: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  <div className="flex gap-2 items-center">
                    <div className="flex-1">
                      <label className="text-xs text-gray-500 mb-1 block">Qty</label>
                      <input
                        type="number"
                        placeholder="Qty"
                        min="0"
                        step="1"
                        value={item.quantity}
                        onChange={(e) => updateLineItem(item.id, { quantity: parseFloat(e.target.value) || 0 })}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-right focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    <div className="flex-1">
                      <label className="text-xs text-gray-500 mb-1 block">Unit Price</label>
                      <input
                        type="number"
                        placeholder="0.00"
                        min="0"
                        step="0.01"
                        value={item.unitPrice || ""}
                        onChange={(e) => updateLineItem(item.id, { unitPrice: parseFloat(e.target.value) || 0 })}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-right focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    <div className="flex-1">
                      <label className="text-xs text-gray-500 mb-1 block">Amount</label>
                      <div className="px-3 py-2 text-sm text-right text-gray-700 bg-gray-50 rounded-lg border border-gray-200">
                        {formatCurrency(item.quantity * item.unitPrice)}
                      </div>
                    </div>
                    <button
                      onClick={() => removeLineItem(item.id)}
                      disabled={invoice.lineItems.length <= 1}
                      className="mt-5 p-2 text-red-400 hover:text-red-600 disabled:opacity-30 disabled:cursor-not-allowed"
                      title="Remove item"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={addLineItem}
              className="mt-3 text-sm text-primary hover:text-primary-dark font-medium flex items-center gap-1"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
              Add Line Item
            </button>
          </div>

          {/* Totals Summary */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">{formatCurrency(subtotal)}</span>
              </div>
              {invoice.includeGst && (
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">GST (15%)</span>
                  <span className="font-medium">{formatCurrency(gst)}</span>
                </div>
              )}
              <div className="flex justify-between pt-2 border-t border-gray-200">
                <span className="text-lg font-bold">Total NZD</span>
                <span className="text-lg font-bold text-primary">
                  {formatCurrency(total)}
                </span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button
              onClick={handlePrint}
              className="flex-1 bg-primary text-white py-3 px-6 rounded-lg font-medium hover:bg-primary-dark transition-colors"
            >
              Download PDF
            </button>
            <button
              onClick={newInvoice}
              className="px-6 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              New Invoice
            </button>
          </div>
        </div>

        {/* Right: Preview */}
        <div className="lg:sticky lg:top-4 lg:self-start">
          <h2 className="no-print text-lg font-semibold text-gray-900 mb-4">
            Preview
          </h2>
          <div className="overflow-auto">
            <TemplateComponent invoice={invoice} />
          </div>
        </div>
      </div>

      {/* SEO Content */}
      <div className="no-print mt-16 max-w-3xl">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Free NZ GST Invoice Generator
        </h2>
        <p className="text-gray-600 mb-4">
          Create professional invoices for your New Zealand business in seconds.
          Our free invoice generator handles GST calculations at the standard
          15% rate, supports multiple invoice templates, and lets you download
          your invoices as PDF files.
        </p>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Features
        </h3>
        <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
          <li>Automatic GST (15%) calculations</li>
          <li>Three professional invoice templates</li>
          <li>NZBN support for registered businesses</li>
          <li>Logo upload for branded invoices</li>
          <li>Auto-saved data so you never lose your work</li>
          <li>Free PDF download via print</li>
          <li>No sign-up required</li>
        </ul>
        <p className="text-gray-600">
          Whether you are a freelancer, sole trader, or small business owner in
          New Zealand, this tool makes it easy to create tax-compliant invoices
          that include all the details required by the IRD.
        </p>
      </div>
    </div>
  );
}
