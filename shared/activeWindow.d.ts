import activeWindow from 'active-win';
import type { SubscribeCallback } from './types';

export namespace ActiveWindow {
  export type Result = activeWindow.Result | undefined;
  export type Callback = SubscribeCallback<Result>;
  export type Subscribe = (callback: Callback) => void;
}
