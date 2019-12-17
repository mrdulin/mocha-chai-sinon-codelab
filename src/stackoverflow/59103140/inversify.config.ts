import { Container } from "inversify";
import { TYPES } from "./types";
import { IDemoController, IDemoRoute } from "./interfaces";
import { DemoRoute } from "./demoRoute";
import { DemoController } from "./demoController";

const container = new Container();
container.bind<IDemoRoute>(TYPES.IDemoRoute).to(DemoRoute);
container.bind<IDemoController>(TYPES.IDemoController).to(DemoController);

export { container };
