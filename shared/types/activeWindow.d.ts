import activeWindow from 'active-win';
import type { IPC } from './utils';

export namespace ActiveWindow {
  interface BaseResult {
    timestamp: number;
  }

  export interface GenericResult extends activeWindow.Result, BaseResult {}
  export interface IdleResult extends BaseResult {
    title: 'Idle';
    owner: {
      name: 'Idle';
    };
  }
  export type Result = GenericResult | IdleResult;
  export type Callback = IPC.SubscribeCallback<Result | undefined>;
  export type Subscribe = (callback: Callback) => void;
}
