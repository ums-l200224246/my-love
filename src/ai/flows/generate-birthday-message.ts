'use server';

/**
 * @fileOverview Generates a suggested birthday message using AI based on the name of the person celebrating the birthday.
 *
 * - generateBirthdayMessage - A function that handles the generation of a birthday message.
 * - GenerateBirthdayMessageInput - The input type for the generateBirthdayMessage function.
 * - GenerateBirthdayMessageOutput - The return type for the generateBirthdayMessage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateBirthdayMessageInputSchema = z.object({
  name: z.string().describe('The name of the person celebrating the birthday.'),
});
export type GenerateBirthdayMessageInput = z.infer<typeof GenerateBirthdayMessageInputSchema>;

const GenerateBirthdayMessageOutputSchema = z.object({
  message: z.string().describe('The generated birthday message.'),
});
export type GenerateBirthdayMessageOutput = z.infer<typeof GenerateBirthdayMessageOutputSchema>;

export async function generateBirthdayMessage(
  input: GenerateBirthdayMessageInput
): Promise<GenerateBirthdayMessageOutput> {
  return generateBirthdayMessageFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateBirthdayMessagePrompt',
  input: {schema: GenerateBirthdayMessageInputSchema},
  output: {schema: GenerateBirthdayMessageOutputSchema},
  prompt: `You are a helpful assistant that generates heartfelt birthday messages.

  Generate a birthday message for {{name}}. The message should be no more than 50 words.`,
});

const generateBirthdayMessageFlow = ai.defineFlow(
  {
    name: 'generateBirthdayMessageFlow',
    inputSchema: GenerateBirthdayMessageInputSchema,
    outputSchema: GenerateBirthdayMessageOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
