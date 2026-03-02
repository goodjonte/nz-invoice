"use client";

import { InvoiceData, calculateSubtotal, calculateGst, formatCurrency } from "../../types";

export default function MinimalTemplate({ invoice }: { invoice: InvoiceData }) {
  const { businessDetails, clientDetails, lineItems, includeGst } = invoice;
  const subtotal = calculateSubtotal(lineItems);
  const gst = includeGst ? calculateGst(subtotal) : 0;
  const total = subtotal + gst;

  return (
    <div className="invoice-preview bg-white p-8 max-w-[800px] mx-auto shadow-lg">
      {/* Header */}
      <div className="flex justify-between items-start mb-12">
        <div>
          {businessDetails.logo && (
            <img
              src={businessDetails.logo}
              alt="Business logo"
              className="h-12 mb-3 object-contain"
            />
          )}
          <h1 className="text-xl font-light text-gray-900">
            {businessDetails.name || "Your Business Name"}
          </h1>
          {businessDetails.gstNumber && (
            <p className="text-xs text-gray-400 mt-1">GST No: {businessDetails.gstNumber}</p>
          )}
          {businessDetails.nzbn && (
            <p className="text-xs text-gray-400 mt-1">NZBN: {businessDetails.nzbn}</p>
          )}
        </div>
        <div className="text-right">
          <p className="text-xs text-gray-400 uppercase tracking-widest">
            {includeGst ? "Tax Invoice" : "Invoice"}
          </p>
          <p className="text-lg text-gray-700 mt-1">{invoice.invoiceNumber}</p>
        </div>
      </div>

      {/* Details Row */}
      <div className="grid grid-cols-3 gap-8 mb-12 text-sm">
        <div>
          <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">
            From
          </p>
          <p className="text-gray-700 whitespace-pre-line">
            {businessDetails.addressLine1}{businessDetails.addressLine2 && <><br />{businessDetails.addressLine2}</>}
          </p>
          {businessDetails.email && (
            <p className="text-gray-500">{businessDetails.email}</p>
          )}
          {businessDetails.phone && (
            <p className="text-gray-500">{businessDetails.phone}</p>
          )}
        </div>
        <div>
          <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">
            To
          </p>
          <p className="text-gray-900">{clientDetails.name || "Client Name"}</p>
          <p className="text-gray-700 whitespace-pre-line">
            {clientDetails.addressLine1}{clientDetails.addressLine2 && <><br />{clientDetails.addressLine2}</>}
          </p>
          {clientDetails.email && (
            <p className="text-gray-500">{clientDetails.email}</p>
          )}
        </div>
        <div>
          <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">
            Details
          </p>
          <p className="text-gray-700">Date: {invoice.date}</p>
          <p className="text-gray-700">Due: {invoice.dueDate}</p>
        </div>
      </div>

      {/* Line Items */}
      <table className="w-full mb-12">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="text-left py-3 text-xs text-gray-400 uppercase tracking-wider font-normal">
              Description
            </th>
            <th className="text-right py-3 text-xs text-gray-400 uppercase tracking-wider font-normal w-16">
              Qty
            </th>
            <th className="text-right py-3 text-xs text-gray-400 uppercase tracking-wider font-normal w-28">
              Price
            </th>
            <th className="text-right py-3 text-xs text-gray-400 uppercase tracking-wider font-normal w-28">
              Amount
            </th>
          </tr>
        </thead>
        <tbody>
          {lineItems.map((item) => (
            <tr key={item.id} className="border-b border-gray-100">
              <td className="py-3 text-gray-800">{item.description || "-"}</td>
              <td className="text-right py-3 text-gray-600">{item.quantity}</td>
              <td className="text-right py-3 text-gray-600">
                {formatCurrency(item.unitPrice)}
              </td>
              <td className="text-right py-3 text-gray-800">
                {formatCurrency(item.quantity * item.unitPrice)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Totals */}
      <div className="flex justify-end">
        <div className="w-56">
          <div className="flex justify-between py-2 text-sm">
            <span className="text-gray-400">Subtotal</span>
            <span className="text-gray-700">{formatCurrency(subtotal)}</span>
          </div>
          {includeGst && (
            <div className="flex justify-between py-2 text-sm">
              <span className="text-gray-400">GST (15%)</span>
              <span className="text-gray-700">{formatCurrency(gst)}</span>
            </div>
          )}
          <div className="flex justify-between py-3 border-t border-gray-300 mt-2">
            <span className="font-medium text-gray-900">Total</span>
            <span className="font-medium text-gray-900">
              {formatCurrency(total)}
            </span>
          </div>
        </div>
      </div>

      {!includeGst && (
        <p className="text-xs text-gray-400 mt-8">
          GST exclusive. Supplier not GST registered.
        </p>
      )}
    </div>
  );
}
