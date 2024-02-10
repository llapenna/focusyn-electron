import activeWinLib from 'active-win';
import type { SubscribeCallback } from './ipc';

// POSSIBLE RESULTS
interface BaseResult extends activeWinLib.BaseResult {
  timestamp: number;
}
export type Result = activeWinLib.Result & BaseResult;
export type Grouped = Result & {
  group: {
    count: number;
    by: string;
  };
};

// SUBSCRIBE/UNSUBSCRIBE METHODS
export type Callback = SubscribeCallback<Result | undefined>;
export type Subscribe = (callback: Callback) => void;
export type Unsubscribe = () => void;
