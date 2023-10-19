import { IpcRendererEvent } from 'electron';

export type SubscribeFunction = (
  event: IpcRendererEvent,
  ...args: any[]
) => void;
