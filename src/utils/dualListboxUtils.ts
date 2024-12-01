// dualListboxUtils.ts

export const moveItems = <T extends { Id: string }>(source: T[], target: T[], selectedIds: string[]): { updatedSource: T[]; updatedTarget: T[] } => {
  const movedItems = source.filter((item) => selectedIds.includes(item.Id));
  const remainingItems = source.filter((item) => !selectedIds.includes(item.Id));
  return {
    updatedSource: remainingItems,
    updatedTarget: [...target, ...movedItems],
  };
};
