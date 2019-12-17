import "reflect-metadata";
import { IDemoRoute, IDemoController } from "./interfaces";
import { NextFunction } from "express";
import { TYPES } from "./types";
import { inject, injectable } from "inversify";

@injectable()
export class DemoRoute implements IDemoRoute {
  private _demoController: IDemoController;

  constructor(@inject(TYPES.IDemoController) demoController: IDemoController) {
    this._demoController = demoController;
  }

  create(req: Request, res: Response, next: NextFunction) {
    return this._demoController.create(req.body);
  }
}
