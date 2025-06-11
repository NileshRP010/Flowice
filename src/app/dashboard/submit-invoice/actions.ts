// src/app/dashboard/submit-invoice/actions.ts
"use server";
import { assessInvoiceRisk, type AssessInvoiceRiskInput, type AssessInvoiceRiskOutput } from "@/ai/flows/invoice-risk-assessment";

export async function submitInvoiceForRiskAssessment(
  data: AssessInvoiceRiskInput
): Promise<AssessInvoiceRiskOutput | null> {
  try {
    // Basic validation (could be more extensive)
    if (!data.invoiceAmount || !data.invoiceDueDate || !data.customerBusinessName || !data.customerIndustry) {
      throw new Error("Missing required invoice details.");
    }
    
    console.log("Submitting for risk assessment:", data);
    const result = await assessInvoiceRisk(data);
    console.log("Risk assessment result:", result);
    return result;
  } catch (error) {
    console.error("Error in submitInvoiceForRiskAssessment action:", error);
    // Depending on the error, you might want to throw it or return a specific error structure
    // For now, returning null to indicate failure to the client
    return null;
  }
}
