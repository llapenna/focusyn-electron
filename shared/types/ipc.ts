import { IpcRendererEvent } from 'electron';

export type SubscribeCallback<T extends object | undefined | null = object> = (
  event: IpcRendererEvent,
  args: T
) => void;
