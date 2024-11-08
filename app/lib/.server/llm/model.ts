import { createAnthropic } from '@ai-sdk/anthropic';
import {createOpenAI} from '@ai-sdk/openai';
import * as fs from "node:fs";

export function getAnthropicModel(apiKey: string) {
  // const anthropic = createAnthropic({
  //   apiKey,
  // });
  // return anthropic('claude-3-5-sonnet-20240620');

  const model = createOpenAI({
    baseURL: "https://proxy.shopify.ai/v1",
    apiKey,
  });

  return model('anthropic:claude-3-5-sonnet-20240620');
}
