import activeWinLib from 'active-win';
import type { IPC } from './utils';

export namespace ActiveWindow {
  // POSSIBLE RESULTS
  interface BaseResult extends activeWinLib.BaseResult {
    timestamp: number;
  }
  interface WindowResult extends activeWinLib.Result, BaseResult {}
  export interface IdleResult extends BaseResult {
    title: 'Idle';
    owner: {
      name: 'Idle';
      processId: 0;
    };
  }
  export type Result = WindowResult | IdleResult;
  export type Grouped = Result & {
    group: {
      count: number;
      by: string;
    };
  };

  export type Callback = IPC.SubscribeCallback<Result | undefined>;
  export type Subscribe = (callback: Callback) => void;
}
