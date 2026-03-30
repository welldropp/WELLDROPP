
'use server';
/**
 * @fileOverview This file implements a Genkit flow for categorizing lead inquiries,
 * generating draft responses, and sending an actual email notification.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { sendEmail } from '@/lib/mail';
import { escapeHtml } from '@/lib/utils';

const AILeadCategorizationAndResponseInputSchema = z.object({
  name: z.string().describe('The name of the lead submitting the contact form.'),
  email: z.string().email().describe('The email address of the lead.'),
  phone: z.string().optional().describe('The phone number of the lead.'),
  service: z.string().describe('The service the lead is interested in.'),
  message: z.string().describe('The message content from the lead inquiry.'),
});
export type AILeadCategorizationAndResponseInput = z.infer<typeof AILeadCategorizationAndResponseInputSchema>;

const AILeadCategorizationAndResponseOutputSchema = z.object({
  category: z
    .enum([
      'AI Agent Development',
      'AI Chatbot Services',
      'LLM Solutions',
      'E-commerce Websites & Applications',
      'Data Analytics Dashboards',
      'Data Management Systems',
      'Website Development',
      'Data Automation Applications',
      'Partnership Inquiry',
      'General Inquiry',
      'Other',
    ])
    .describe('The categorized type of the lead inquiry.'),
  draftResponse: z
    .string()
    .describe('A draft AI-generated response tailored to the lead inquiry.'),
  sentToEmail: z.boolean().describe('Whether the notification was successfully processed for sending.'),
  adminNotification: z.string().describe('A summary for the admin email notification.'),
});
export type AILeadCategorizationAndResponseOutput = z.infer<typeof AILeadCategorizationAndResponseOutputSchema>;

export async function aiLeadCategorizationAndResponse(
  input: AILeadCategorizationAndResponseInput
): Promise<AILeadCategorizationAndResponseOutput> {
  return aiLeadCategorizationAndResponseFlow(input);
}

const prompt = ai.definePrompt({
  name: 'categorizeLeadAndRespondPrompt',
  input: { schema: AILeadCategorizationAndResponseInputSchema },
  output: { schema: AILeadCategorizationAndResponseOutputSchema },
  prompt: `You are an AI assistant for WELLDROPP (welldropp.tech@gmail.com).
Your task is to process a new lead inquiry.

1. Categorize the message into one of the following:
   'AI Agent Development', 'AI Chatbot Services', 'LLM Solutions', 'E-commerce Websites & Applications', 
   'Data Analytics Dashboards', 'Data Management Systems', 'Website Development', 
   'Data Automation Applications', 'Partnership Inquiry', 'General Inquiry', 'Other'.

2. Generate a professional draft response to the lead.

3. Create a detailed "Admin Notification" summary that includes the lead's contact details and the core request.

Lead Info:
Name: {{{name}}}
Email: {{{email}}}
Phone: {{{phone}}}
Service Selected: {{{service}}}
Message: {{{message}}}

---

Provide the JSON output.`,
});

const aiLeadCategorizationAndResponseFlow = ai.defineFlow(
  {
    name: 'aiLeadCategorizationAndResponseFlow',
    inputSchema: AILeadCategorizationAndResponseInputSchema,
    outputSchema: AILeadCategorizationAndResponseOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    if (!output) {
      throw new Error('Failed to process lead.');
    }

    try {
      const safeName = escapeHtml(input.name);
      const safeEmail = escapeHtml(input.email);
      const safePhone = escapeHtml(input.phone || 'Not provided');
      const safeService = escapeHtml(input.service);
      const safeMessage = escapeHtml(input.message);
      const safeCategory = escapeHtml(output.category);
      const safeDraftResponse = escapeHtml(output.draftResponse);

      await sendEmail({
        to: 'welldropp.tech@gmail.com',
        subject: `[New Lead] ${output.category} Inquiry from ${input.name}`,
        text: output.adminNotification,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; border: 1px solid #e2e8f0; padding: 20px; border-radius: 10px;">
            <h2 style="color: #00e676;">New Contact Form Submission</h2>
            <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;">
            <p><strong>Name:</strong> ${safeName}</p>
            <p><strong>Email:</strong> ${safeEmail}</p>
            <p><strong>Phone:</strong> ${safePhone}</p>
            <p><strong>Service:</strong> ${safeService}</p>
            <p><strong>Category (AI Identified):</strong> ${safeCategory}</p>
            <div style="background: #f8fafc; padding: 15px; border-radius: 5px; margin-top: 20px;">
              <p><strong>Message:</strong></p>
              <p style="white-space: pre-wrap;">${safeMessage}</p>
            </div>
            <div style="margin-top: 30px; padding: 15px; border-left: 4px solid #00e676; background: #f0fff4;">
              <p><strong>AI Draft Response:</strong></p>
              <p>${safeDraftResponse}</p>
            </div>
          </div>
        `,
      });
      
      return {
        ...output,
        sentToEmail: true,
      };
    } catch (error) {
      console.error('Failed to send email:', error);
      return {
        ...output,
        sentToEmail: false,
      };
    }
  }
);
