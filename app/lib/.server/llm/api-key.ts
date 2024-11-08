import { env } from 'node:process';

export function getAPIKey(cloudflareEnv: Env) {
  /**
   * The `cloudflareEnv` is only used when deployed or when previewing locally.
   * In development the environment variables are available through `env`.
   */
  return env.ANTHROPIC_API_KEY || cloudflareEnv.ANTHROPIC_API_KEY || env.OPENAI_API_KEY;
}

export function getAPIBase() {
  return env.OPENAI_API_BASE || 'https://api.anthropic.com/v1';
}
