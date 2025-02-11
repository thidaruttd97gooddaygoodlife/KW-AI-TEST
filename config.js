//API Open AI
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: "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",
});

const completion = openai.chat.completions.create({
  model: "gpt-4o-mini",
  store: true,
  messages: [
    {"role": "user", "content": "write a haiku about ai"},
  ],
});

completion.then((result) => console.log(result.choices[0].message));