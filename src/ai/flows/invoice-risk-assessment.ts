// src/ai/flows/invoice-risk-assessment.ts
'use server';

/**
 * @fileOverview This file defines a Genkit flow for assessing the risk of an invoice using AI.
 *
 * - assessInvoiceRisk - A function that takes invoice data as input and returns a risk assessment.
 * - AssessInvoiceRiskInput - The input type for the assessInvoiceRisk function.
 * - AssessInvoiceRiskOutput - The return type for the assessInvoiceRisk function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AssessInvoiceRiskInputSchema = z.object({
  invoiceAmount: z.number().describe('The amount of the invoice.'),
  invoiceDueDate: z.string().describe('The due date of the invoice (YYYY-MM-DD).'),
  customerBusinessName: z.string().describe('The name of the customer business.'),
  customerIndustry: z.string().describe('The industry of the customer business.'),
  businessCreditRating: z.string().optional().describe('The credit rating of the business, if available (e.g., AAA, BB).'),
  customerPaymentHistory: z.string().optional().describe('A description of the customer payment history.'),
});
export type AssessInvoiceRiskInput = z.infer<typeof AssessInvoiceRiskInputSchema>;

const AssessInvoiceRiskOutputSchema = z.object({
  riskScore: z.number().describe('A risk score between 0 and 1, where 0 is low risk and 1 is high risk.'),
  riskLevel: z.string().describe('A categorical risk level (Low, Medium, High).'),
  riskFactors: z.array(z.string()).describe('Key factors contributing to the risk assessment.'),
  recommendedFundingRate: z.number().describe('The recommended funding rate (APR) for the invoice.'),
  explanation: z.string().describe('Explanation of the risk assessment'),
});
export type AssessInvoiceRiskOutput = z.infer<typeof AssessInvoiceRiskOutputSchema>;

export async function assessInvoiceRisk(input: AssessInvoiceRiskInput): Promise<AssessInvoiceRiskOutput> {
  return assessInvoiceRiskFlow(input);
}

const assessInvoiceRiskPrompt = ai.definePrompt({
  name: 'assessInvoiceRiskPrompt',
  input: {schema: AssessInvoiceRiskInputSchema},
  output: {schema: AssessInvoiceRiskOutputSchema},
  prompt: `You are an AI-powered risk assessment tool for invoice financing.

  Analyze the following invoice details and assess the risk of non-payment.
  Provide a risk score (0 to 1), risk level (Low, Medium, High), key risk factors, recommended funding rate (APR), and an explanation of your assessment.

  Invoice Amount: {{{invoiceAmount}}}
  Invoice Due Date: {{{invoiceDueDate}}}
  Customer Business Name: {{{customerBusinessName}}}
  Customer Industry: {{{customerIndustry}}}
  Business Credit Rating: {{{businessCreditRating}}}
  Customer Payment History: {{{customerPaymentHistory}}}

  Respond in a structured JSON format as described by the output schema.
  Ensure that the riskScore is a number between 0 and 1, riskLevel is one of "Low", "Medium", or "High", and riskFactors is an array of strings.
  The recommendedFundingRate should be a number representing the APR.
  The explanation should be a concise summary justifying the risk assessment.
  `,
});

const assessInvoiceRiskFlow = ai.defineFlow(
  {
    name: 'assessInvoiceRiskFlow',
    inputSchema: AssessInvoiceRiskInputSchema,
    outputSchema: AssessInvoiceRiskOutputSchema,
  },
  async input => {
    const {output} = await assessInvoiceRiskPrompt(input);
    return output!;
  }
);
