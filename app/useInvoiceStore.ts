"use client";

import { useState, useEffect, useCallback } from "react";
import {
  InvoiceData,
  getDefaultInvoiceData,
  createLineItem,
  LineItem,
  BusinessDetails,
  ClientDetails,
} from "./types";

const STORAGE_KEY = "nz-invoice-data";
const INVOICE_COUNTER_KEY = "nz-invoice-counter";

function loadFromStorage(): InvoiceData | null {
  if (typeof window === "undefined") return null;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored);
  } catch {
    // ignore
  }
  return null;
}

function saveToStorage(data: InvoiceData) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // ignore
  }
}

function getNextInvoiceNumber(): string {
  try {
    const counter = parseInt(
      localStorage.getItem(INVOICE_COUNTER_KEY) || "1",
      10
    );
    const next = counter + 1;
    localStorage.setItem(INVOICE_COUNTER_KEY, String(next));
    return `INV-${String(next).padStart(4, "0")}`;
  } catch {
    return "INV-0001";
  }
}

export function useInvoiceStore() {
  const [invoice, setInvoice] = useState<InvoiceData>(getDefaultInvoiceData);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const stored = loadFromStorage();
    if (stored) {
      setInvoice(stored);
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      saveToStorage(invoice);
    }
  }, [invoice, isLoaded]);

  const updateBusiness = useCallback(
    (updates: Partial<BusinessDetails>) => {
      setInvoice((prev) => ({
        ...prev,
        businessDetails: { ...prev.businessDetails, ...updates },
      }));
    },
    []
  );

  const updateClient = useCallback(
    (updates: Partial<ClientDetails>) => {
      setInvoice((prev) => ({
        ...prev,
        clientDetails: { ...prev.clientDetails, ...updates },
      }));
    },
    []
  );

  const updateField = useCallback(
    <K extends keyof InvoiceData>(key: K, value: InvoiceData[K]) => {
      setInvoice((prev) => ({ ...prev, [key]: value }));
    },
    []
  );

  const addLineItem = useCallback(() => {
    setInvoice((prev) => ({
      ...prev,
      lineItems: [...prev.lineItems, createLineItem()],
    }));
  }, []);

  const removeLineItem = useCallback((id: string) => {
    setInvoice((prev) => ({
      ...prev,
      lineItems: prev.lineItems.filter((item) => item.id !== id),
    }));
  }, []);

  const updateLineItem = useCallback(
    (id: string, updates: Partial<LineItem>) => {
      setInvoice((prev) => ({
        ...prev,
        lineItems: prev.lineItems.map((item) =>
          item.id === id ? { ...item, ...updates } : item
        ),
      }));
    },
    []
  );

  const newInvoice = useCallback(() => {
    const defaults = getDefaultInvoiceData();
    defaults.invoiceNumber = getNextInvoiceNumber();
    // Preserve business details across invoices
    setInvoice((prev) => ({
      ...defaults,
      businessDetails: prev.businessDetails,
    }));
  }, []);

  return {
    invoice,
    isLoaded,
    updateBusiness,
    updateClient,
    updateField,
    addLineItem,
    removeLineItem,
    updateLineItem,
    newInvoice,
  };
}
