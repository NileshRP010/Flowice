// src/components/invoice/InvoiceList.tsx
"use client";
import type React from 'react';
import InvoiceCard, { type Invoice } from "./InvoiceCard";

const mockInvoices: Invoice[] = [
  {
    id: "1",
    invoiceAmount: 5000,
    invoiceDueDate: "2024-09-15",
    customerBusinessName: "Innovatech Solutions",
    customerIndustry: "Technology",
    riskLevel: "Low",
    apr: 8.5,
  },
  {
    id: "2",
    invoiceAmount: 12500,
    invoiceDueDate: "2024-08-30",
    customerBusinessName: "GreenLeaf Organics",
    customerIndustry: "Agriculture",
    riskLevel: "Medium",
    apr: 12.0,
  },
  {
    id: "3",
    invoiceAmount: 7800,
    invoiceDueDate: "2024-10-01",
    customerBusinessName: "ConstructX Ltd.",
    customerIndustry: "Construction",
    riskLevel: "Low",
    apr: 9.2,
  },
  {
    id: "4",
    invoiceAmount: 22000,
    invoiceDueDate: "2024-09-05",
    customerBusinessName: "Global Logistics Co.",
    customerIndustry: "Transportation",
    riskLevel: "High",
    apr: 15.5,
  },
   {
    id: "5",
    invoiceAmount: 3500,
    invoiceDueDate: "2024-10-20",
    customerBusinessName: "Creative Designs Inc.",
    customerIndustry: "Marketing",
    riskLevel: "Low",
    apr: 7.8,
  },
  {
    id: "6",
    invoiceAmount: 18000,
    invoiceDueDate: "2024-09-25",
    customerBusinessName: "HealthFirst Pharmacy",
    customerIndustry: "Healthcare",
    riskLevel: "Medium",
    apr: 11.5,
  },
];


const InvoiceList: React.FC = () => {
  // In a real app, you'd fetch invoices. For MVP, we use mock data.
  const invoices = mockInvoices;

  if (invoices.length === 0) {
    return <p className="text-center text-muted-foreground py-10">No invoices available for funding at the moment.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {invoices.map((invoice) => (
        <InvoiceCard key={invoice.id} invoice={invoice} />
      ))}
    </div>
  );
};

export default InvoiceList;
