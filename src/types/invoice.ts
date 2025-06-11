// src/types/invoice.ts

// Re-exporting AI flow types for convenience, or defining app-specific extensions
export type { AssessInvoiceRiskInput, AssessInvoiceRiskOutput } from "@/ai/flows/invoice-risk-assessment";

// App-specific Invoice type, potentially combining with AI output or other fields
export interface AppInvoice {
  id: string; // Unique identifier for the invoice in the app system
  userId?: string; // ID of the business user who submitted it
  
  // Core details also in AssessInvoiceRiskInput
  invoiceAmount: number;
  invoiceDueDate: string; // YYYY-MM-DD string format
  customerBusinessName: string;
  customerIndustry: string;
  businessCreditRating?: string;
  customerPaymentHistory?: string;

  // Data from risk assessment
  riskAssessment?: AssessInvoiceRiskOutput;

  // Blockchain related data (placeholders for MVP)
  tokenId?: string; // ID of the tokenized invoice on Solana
  escrowContractAddress?: string; // Address of the escrow smart contract
  status: "pending_assessment" | "pending_tokenization" | "listed" | "funded" | "repaid" | "defaulted" | "cancelled";

  // Timestamps
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
}

// Could add types for Investor, Investment, Transaction etc. in future iterations
