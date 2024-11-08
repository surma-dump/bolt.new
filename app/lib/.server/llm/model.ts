import { createAnthropic } from '@ai-sdk/anthropic';
import { createOpenAI } from '@ai-sdk/openai';
import { env } from 'node:process';
import { getAPIBase } from './api-key.js';

export function getAnthropicModel(apiKey: string) {
  if (env.OPENAI_API_BASE || env.OPENAI_API_KEY) {
    const model = createOpenAI({
      baseURL: getAPIBase(),
      apiKey,
    });

    return model('anthropic:claude-3-5-sonnet-20240620');
  } else {
    const anthropic = createAnthropic({
      apiKey,
    });
    return anthropic('claude-3-5-sonnet-20240620');
  }
}
