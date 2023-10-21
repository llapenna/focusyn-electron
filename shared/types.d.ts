import { IpcRendererEvent } from 'electron';

export type SubscribeCallback<T extends object = object> = (
  event: IpcRendererEvent,
  args: T
) => void;
