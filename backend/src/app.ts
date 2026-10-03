import express, { Express } from 'express';
import cors from 'cors';
import { env } from './config/env.js';
import apiRoutes from './routes/index.js';
import { errorHandler } from './middleware/error.middleware.js';
import { notFoundHandler } from './middleware/not-found.middleware.js';

export const createApp = (): Express => {
  const app = express();

  // Basic Middleware
  app.use(
    cors({
      origin: env.CLIENT_ORIGIN,
      credentials: true,
    })
  );
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Root health endpoint alias
  app.get('/health', (_req, res) => {
    res.status(200).json({ status: 'ok' });
  });

  // Mount API router
  app.use('/api', apiRoutes);

  // 404 and Error handling
  app.use(notFoundHandler);
  app.use(errorHandler);

  return app;
};

export const app = createApp();
