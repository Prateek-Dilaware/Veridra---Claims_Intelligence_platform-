import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';
import { sendError } from '../utils/response.js';
import { logger } from '../utils/logger.js';

export const errorHandler = (
  err: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction
): void => {
  logger.error('Unhandled application error:', err);

  if (err instanceof ZodError) {
    sendError(res, 'Validation error', 400, err.issues);
    return;
  }

  if (err instanceof Error) {
    sendError(res, err.message, 500);
    return;
  }

  sendError(res, 'Internal server error', 500);
};
