/**
 * Base AI Agent Interface
 *
 * Defines the foundation contract for AI agents in the system.
 * Keeps provider implementations (OpenAI, Anthropic, Gemini, etc.)
 * isolated behind this abstraction so providers can be swapped easily.
 */

export interface AgentContext {
  userId?: string;
  companyId?: string;
  metadata?: Record<string, unknown>;
}

export interface AgentResult<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  tokensUsed?: number;
  metadata?: Record<string, unknown>;
}

export interface AIAgent<TInput = unknown, TOutput = unknown> {
  readonly name: string;
  readonly description: string;
  run(input: TInput, context?: AgentContext): Promise<AgentResult<TOutput>>;
}
