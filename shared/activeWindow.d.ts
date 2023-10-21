import activeWindow from 'active-win';
import type { SubscribeCallback } from './types';

export namespace ActiveWindow {
  export interface Result extends activeWindow.Result {
    timestamp: number;
  }
  export type Callback = SubscribeCallback<Result | undefined>;
  export type Subscribe = (callback: Callback) => void;
}
