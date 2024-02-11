import { Result, Grouped } from '@/shared/types/activeWindow';

// -------------------
// GROUP BY types
// -------------------
export interface GroupByArgs {
  by: 'title' | 'owner.name';
  consecutive: boolean;
}
export type GroupByFunction = (
  arr: Result[],
  props: Partial<GroupByArgs>
) => Grouped[];

export type GetComparedEntryFunction = (
  arr: Grouped[],
  current: Result,
  props: GroupByArgs
) => Grouped | null;

// -------------------
// GET TOTAL TIME types
// -------------------
export type FilterBy = 'All' | 'Active' | 'Idle' | 'Focus';
