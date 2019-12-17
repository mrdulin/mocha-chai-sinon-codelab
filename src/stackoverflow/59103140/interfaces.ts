import { NextFunction } from "express";

export interface IDemoRoute {
  create(req: Request, res: Response, next: NextFunction): any;
}

export interface IDemoController {
  create(body: any): any;
}
