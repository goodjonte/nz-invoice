export interface LineItem {
  id: string;
  description: string;
  quantity: number;
  unitPrice: number;
}

export interface BusinessDetails {
  name: string;
  nzbn: string;
  address: string;
  email: string;
  phone: string;
  logo: string;
}

export interface ClientDetails {
  name: string;
  address: string;
  email: string;
}

export interface InvoiceData {
  businessDetails: BusinessDetails;
  clientDetails: ClientDetails;
  invoiceNumber: string;
  date: string;
  dueDate: string;
  lineItems: LineItem[];
  includeGst: boolean;
  template: "modern" | "classic" | "minimal";
}

export const GST_RATE = 0.15;

export const defaultBusinessDetails: BusinessDetails = {
  name: "",
  nzbn: "",
  address: "",
  email: "",
  phone: "",
  logo: "",
};

export const defaultClientDetails: ClientDetails = {
  name: "",
  address: "",
  email: "",
};

export function createLineItem(): LineItem {
  return {
    id: crypto.randomUUID(),
    description: "",
    quantity: 1,
    unitPrice: 0,
  };
}

export function calculateSubtotal(items: LineItem[]): number {
  return items.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0);
}

export function calculateGst(subtotal: number): number {
  return subtotal * GST_RATE;
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-NZ", {
    style: "currency",
    currency: "NZD",
  }).format(amount);
}

export function getDefaultInvoiceData(): InvoiceData {
  const today = new Date();
  const due = new Date(today);
  due.setDate(due.getDate() + 14);

  return {
    businessDetails: { ...defaultBusinessDetails },
    clientDetails: { ...defaultClientDetails },
    invoiceNumber: "INV-0001",
    date: today.toISOString().split("T")[0],
    dueDate: due.toISOString().split("T")[0],
    lineItems: [createLineItem()],
    includeGst: true,
    template: "modern",
  };
}
