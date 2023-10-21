import activeWindow from 'active-win';
import type { IPC } from './utils';

export namespace ActiveWindow {
  export type Result = activeWindow.Result;
  export type Callback = IPC.SubscribeCallback<Result | undefined>;
  export type Subscribe = (callback: Callback) => void;
}
