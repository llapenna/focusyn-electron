import { ActiveWindow } from '@/shared/types/activeWindow';

export interface GroupByArgs {
  by: 'title' | 'owner.name';
  consecutive: boolean;
}
export type GroupByFunction = (
  arr: ActiveWindow.Result[],
  props: Partial<GroupByArgs>
) => ActiveWindow.Grouped[];

export type GetComparedEntryFunction = (
  arr: ActiveWindow.Grouped[],
  current: ActiveWindow.Result,
  props: GroupByArgs
) => ActiveWindow.Grouped | null;
