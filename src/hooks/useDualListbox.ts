// useDualListbox.ts

import { moveItems } from '@/utils/dualListboxUtils';
import { useState } from 'react';

interface Item {
  Id: string;
  Name: string;
}

export const useDualListbox = (data: Item[]) => {
  const [leftList, setLeftList] = useState<Item[]>(data);
  const [rightList, setRightList] = useState<Item[]>([]);
  const [selectedLeft, setSelectedLeft] = useState<string[]>([]);
  const [selectedRight, setSelectedRight] = useState<string[]>([]);
  const [leftSearch, setLeftSearch] = useState<string>('');
  const [rightSearch, setRightSearch] = useState<string>('');

  const filteredLeftList = leftList.filter((item) => item.Name.toLowerCase().includes(leftSearch.toLowerCase()));
  const filteredRightList = rightList.filter((item) => item.Name.toLowerCase().includes(rightSearch.toLowerCase()));

  const moveToRight = () => {
    const { updatedSource, updatedTarget } = moveItems(leftList, rightList, selectedLeft);
    setLeftList(updatedSource);
    setRightList(updatedTarget);
    setSelectedLeft([]);
  };

  const moveToLeft = () => {
    const { updatedSource, updatedTarget } = moveItems(rightList, leftList, selectedRight);
    setRightList(updatedSource);
    setLeftList(updatedTarget);
    setSelectedRight([]);
  };

  const moveAllToRight = () => {
    setRightList([...rightList, ...leftList]);
    setLeftList([]);
    setSelectedLeft([]);
  };

  const moveAllToLeft = () => {
    setLeftList([...leftList, ...rightList]);
    setRightList([]);
    setSelectedRight([]);
  };

  const handleSelect = (id: string, setSelected: React.Dispatch<React.SetStateAction<string[]>>, selected: string[]) => {
    setSelected((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]));
  };

  return {
    leftList,
    rightList,
    selectedLeft,
    selectedRight,
    leftSearch,
    rightSearch,
    filteredLeftList,
    filteredRightList,
    moveToRight,
    moveToLeft,
    moveAllToRight,
    moveAllToLeft,
    setLeftSearch,
    setRightSearch,
    handleSelectLeft: (id: string) => handleSelect(id, setSelectedLeft, selectedLeft),
    handleSelectRight: (id: string) => handleSelect(id, setSelectedRight, selectedRight),
  };
};
