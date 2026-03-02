"use client";

import { InvoiceData, calculateSubtotal, calculateGst, formatCurrency } from "../../types";

export default function ModernTemplate({ invoice }: { invoice: InvoiceData }) {
  const { businessDetails, clientDetails, lineItems, includeGst } = invoice;
  const subtotal = calculateSubtotal(lineItems);
  const gst = includeGst ? calculateGst(subtotal) : 0;
  const total = subtotal + gst;

  return (
    <div className="invoice-preview bg-white p-8 max-w-[800px] mx-auto shadow-lg rounded-lg">
      {/* Header */}
      <div className="flex justify-between items-start mb-8 pb-6 border-b-2 border-primary">
        <div>
          {businessDetails.logo && (
            <img
              src={businessDetails.logo}
              alt="Business logo"
              className="h-16 mb-3 object-contain"
            />
          )}
          <h1 className="text-2xl font-bold text-gray-900">
            {businessDetails.name || "Your Business Name"}
          </h1>
          {businessDetails.gstNumber && (
            <p className="text-sm text-gray-500">GST No: {businessDetails.gstNumber}</p>
          )}
          {businessDetails.nzbn && (
            <p className="text-sm text-gray-500">NZBN: {businessDetails.nzbn}</p>
          )}
        </div>
        <div className="text-right">
          <h2 className="text-3xl font-bold text-primary">
            {includeGst ? "TAX INVOICE" : "INVOICE"}
          </h2>
          <p className="text-gray-600 mt-1">{invoice.invoiceNumber}</p>
        </div>
      </div>

      {/* Details Row */}
      <div className="grid grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
            From
          </h3>
          <p className="text-gray-900 font-medium">{businessDetails.name}</p>
          <p className="text-gray-600 text-sm whitespace-pre-line">
            {businessDetails.addressLine1}{businessDetails.addressLine2 && <><br />{businessDetails.addressLine2}</>}
          </p>
          {businessDetails.email && (
            <p className="text-gray-600 text-sm">{businessDetails.email}</p>
          )}
          {businessDetails.phone && (
            <p className="text-gray-600 text-sm">{businessDetails.phone}</p>
          )}
        </div>
        <div>
          <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
            Bill To
          </h3>
          <p className="text-gray-900 font-medium">
            {clientDetails.name || "Client Name"}
          </p>
          <p className="text-gray-600 text-sm whitespace-pre-line">
            {clientDetails.addressLine1}{clientDetails.addressLine2 && <><br />{clientDetails.addressLine2}</>}
          </p>
          {clientDetails.email && (
            <p className="text-gray-600 text-sm">{clientDetails.email}</p>
          )}
        </div>
      </div>

      {/* Dates */}
      <div className="flex gap-8 mb-8">
        <div>
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
            Date
          </span>
          <p className="text-gray-900">{invoice.date}</p>
        </div>
        <div>
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
            Due Date
          </span>
          <p className="text-gray-900">{invoice.dueDate}</p>
        </div>
      </div>

      {/* Line Items */}
      <table className="w-full mb-8">
        <thead>
          <tr className="bg-primary text-white">
            <th className="text-left py-3 px-4 rounded-tl-lg">Description</th>
            <th className="text-right py-3 px-4 w-20">Qty</th>
            <th className="text-right py-3 px-4 w-32">Unit Price</th>
            <th className="text-right py-3 px-4 w-32 rounded-tr-lg">Amount</th>
          </tr>
        </thead>
        <tbody>
          {lineItems.map((item, i) => (
            <tr
              key={item.id}
              className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}
            >
              <td className="py-3 px-4">{item.description || "-"}</td>
              <td className="text-right py-3 px-4">{item.quantity}</td>
              <td className="text-right py-3 px-4">
                {formatCurrency(item.unitPrice)}
              </td>
              <td className="text-right py-3 px-4">
                {formatCurrency(item.quantity * item.unitPrice)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Totals */}
      <div className="flex justify-end">
        <div className="w-64">
          <div className="flex justify-between py-2">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-medium">{formatCurrency(subtotal)}</span>
          </div>
          {includeGst && (
            <div className="flex justify-between py-2">
              <span className="text-gray-600">GST (15%)</span>
              <span className="font-medium">{formatCurrency(gst)}</span>
            </div>
          )}
          <div className="flex justify-between py-3 border-t-2 border-primary mt-2">
            <span className="text-lg font-bold">Total NZD</span>
            <span className="text-lg font-bold text-primary">
              {formatCurrency(total)}
            </span>
          </div>
        </div>
      </div>

      {!includeGst && (
        <p className="text-sm text-gray-500 mt-4">
          This invoice is GST exclusive. The supplier is not GST registered.
        </p>
      )}
    </div>
  );
}
