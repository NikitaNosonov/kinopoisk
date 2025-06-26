import {setupWorker} from "msw/browser";
import {hundlers} from "./handlers";

export const worker = setupWorker(...hundlers)