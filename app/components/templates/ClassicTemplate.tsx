"use client";

import { InvoiceData, calculateSubtotal, calculateGst, formatCurrency } from "../../types";

export default function ClassicTemplate({ invoice }: { invoice: InvoiceData }) {
  const { businessDetails, clientDetails, lineItems, includeGst } = invoice;
  const subtotal = calculateSubtotal(lineItems);
  const gst = includeGst ? calculateGst(subtotal) : 0;
  const total = subtotal + gst;

  return (
    <div className="invoice-preview bg-white p-8 max-w-[800px] mx-auto shadow-lg border border-gray-300">
      {/* Header */}
      <div className="text-center mb-8 pb-4 border-b-2 border-gray-800">
        {businessDetails.logo && (
          <img
            src={businessDetails.logo}
            alt="Business logo"
            className="h-16 mx-auto mb-3 object-contain"
          />
        )}
        <h1 className="text-2xl font-bold text-gray-900 uppercase tracking-wide">
          {businessDetails.name || "Your Business Name"}
        </h1>
        {businessDetails.nzbn && (
          <p className="text-sm text-gray-500 mt-1">NZBN: {businessDetails.nzbn}</p>
        )}
        <p className="text-sm text-gray-600 mt-1 whitespace-pre-line">
          {businessDetails.address}
        </p>
        {businessDetails.email && (
          <p className="text-sm text-gray-600">{businessDetails.email}</p>
        )}
        {businessDetails.phone && (
          <p className="text-sm text-gray-600">{businessDetails.phone}</p>
        )}
      </div>

      {/* Invoice Title */}
      <h2 className="text-xl font-bold text-center text-gray-800 uppercase tracking-widest mb-6">
        Tax Invoice
      </h2>

      {/* Details */}
      <div className="grid grid-cols-2 gap-8 mb-8">
        <div className="border border-gray-300 p-4">
          <h3 className="font-bold text-gray-800 mb-2 uppercase text-sm">
            Bill To
          </h3>
          <p className="font-medium">{clientDetails.name || "Client Name"}</p>
          <p className="text-sm text-gray-600 whitespace-pre-line">
            {clientDetails.address}
          </p>
          {clientDetails.email && (
            <p className="text-sm text-gray-600">{clientDetails.email}</p>
          )}
        </div>
        <div className="border border-gray-300 p-4">
          <table className="w-full text-sm">
            <tbody>
              <tr>
                <td className="font-bold py-1">Invoice No:</td>
                <td className="text-right">{invoice.invoiceNumber}</td>
              </tr>
              <tr>
                <td className="font-bold py-1">Date:</td>
                <td className="text-right">{invoice.date}</td>
              </tr>
              <tr>
                <td className="font-bold py-1">Due Date:</td>
                <td className="text-right">{invoice.dueDate}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Line Items */}
      <table className="w-full mb-8 border-collapse">
        <thead>
          <tr className="border-t-2 border-b-2 border-gray-800">
            <th className="text-left py-3 px-2 font-bold uppercase text-sm">
              Description
            </th>
            <th className="text-right py-3 px-2 w-20 font-bold uppercase text-sm">
              Qty
            </th>
            <th className="text-right py-3 px-2 w-32 font-bold uppercase text-sm">
              Unit Price
            </th>
            <th className="text-right py-3 px-2 w-32 font-bold uppercase text-sm">
              Amount
            </th>
          </tr>
        </thead>
        <tbody>
          {lineItems.map((item) => (
            <tr key={item.id} className="border-b border-gray-200">
              <td className="py-3 px-2">{item.description || "-"}</td>
              <td className="text-right py-3 px-2">{item.quantity}</td>
              <td className="text-right py-3 px-2">
                {formatCurrency(item.unitPrice)}
              </td>
              <td className="text-right py-3 px-2">
                {formatCurrency(item.quantity * item.unitPrice)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Totals */}
      <div className="flex justify-end">
        <div className="w-72 border-t-2 border-gray-800">
          <div className="flex justify-between py-2 px-2">
            <span className="font-bold uppercase text-sm">Subtotal</span>
            <span>{formatCurrency(subtotal)}</span>
          </div>
          {includeGst && (
            <div className="flex justify-between py-2 px-2">
              <span className="font-bold uppercase text-sm">GST (15%)</span>
              <span>{formatCurrency(gst)}</span>
            </div>
          )}
          <div className="flex justify-between py-3 px-2 border-t-2 border-b-2 border-gray-800 bg-gray-100">
            <span className="text-lg font-bold uppercase">Total NZD</span>
            <span className="text-lg font-bold">{formatCurrency(total)}</span>
          </div>
        </div>
      </div>

      {!includeGst && (
        <p className="text-sm text-gray-500 mt-6 text-center italic">
          This invoice is GST exclusive. The supplier is not GST registered.
        </p>
      )}
    </div>
  );
}
