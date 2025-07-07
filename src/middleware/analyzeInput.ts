// /src/middleware/analyzeInput.ts

import { OpenAI } from 'openai';
import { ReportInput, ReportAnalysis } from '../types.d';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY, // use your .env variable
  dangerouslyAllowBrowser: true, // for client-side testing
});

const FLAG_TAG_PROMPT = `
You're an AI trained to classify women's dating behavior reports submitted anonymously by men.
Your job is to assign a single flag to the input:

- ✅ Green Flag: respectful, honest, emotionally mature behavior.
- ⚠️ Yellow Flag: questionable or immature behavior, but not abusive.
- 🚩 Red Flag: manipulative, toxic, dishonest, or abusive behavior.
- 🕵️ Special Tags (optional): cheating, narcissism, gold digging, ghosting, etc.

Respond ONLY with:
1. flag: green, yellow, red
2. optionalTags: (if any)

Return JSON only, like:
{
  "flag": "red",
  "optionalTags": ["cheating", "manipulative", "gaslighting"]
}
`;

export async function analyzeInput(userInput: ReportInput): Promise<ReportAnalysis> {
  try {
    const response = await openai.chat.completions.create({
      messages: [
        { role: 'system', content: FLAG_TAG_PROMPT },
        { role: 'user', content: userInput.content },
      ],
      model: 'gpt-4o',
      temperature: 0.2,
    });

    const raw = response.choices[0].message.content || '{}';
    const parsed = JSON.parse(raw);

    return {
      flag: parsed.flag || 'yellow',
      optionalTags: parsed.optionalTags || [],
    };
  } catch (err) {
    console.error('[AnalyzeInput Error]', err);
    return {
      flag: 'yellow',
      optionalTags: ['parse_error'],
    };
  }
}
