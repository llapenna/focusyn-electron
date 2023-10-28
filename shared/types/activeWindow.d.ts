import activeWindow from 'active-win';
import type { IPC } from './utils';

export namespace ActiveWindow {
  // POSSIBLE RESULTS
  export type WindowResult = activeWindow.Result;
  export interface IdleResult extends activeWindow.BaseResult {
    title: 'Idle';
    owner: {
      name: 'Idle';
      processId: 0;
    };
  }
  export type Result = WindowResult | IdleResult;

  export type Callback = IPC.SubscribeCallback<Result | undefined>;
  export type Subscribe = (callback: Callback) => void;
}
