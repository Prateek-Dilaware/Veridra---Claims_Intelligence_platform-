import { Request, Response } from 'express';
import { sendSuccess } from '../utils/response.js';

export class AuditController {
  async getAll(_req: Request, res: Response): Promise<void> {
    sendSuccess(res, {
      message: 'Audit module is scheduled for future implementation',
      items: [],
    });
  }

  async getById(req: Request, res: Response): Promise<void> {
    sendSuccess(res, {
      message: `Audit details placeholder for id: ${req.params['id']}`,
    });
  }
}

export const auditController = new AuditController();
