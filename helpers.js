export const move = (item, list, directionFn) => {
  const reorderedList = [...list];
  const index = reorderedList.indexOf(item);
  const itemToMove = reorderedList[index];
  const indexToMove = directionFn(index);

  reorderedList[index] = reorderedList[indexToMove];
  reorderedList[indexToMove] = itemToMove;

  return reorderedList;
};
