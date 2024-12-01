import React, { useCallback, useEffect, useState } from 'react';
import { FaArrowsAltV, FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { useDrag, useDrop } from 'react-dnd';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Sensor } from '@/types/models/Sensor.model';
import { Button } from '@/components/ui/button';

interface Props {
  valName: string;
  setResultData: React.Dispatch<React.SetStateAction<any>>;
  resultData: any;
  validationErrors: any;
}

interface Calibrations {
  id: string;
  X: number;
  Y: number;
}

function DraggableRow({ item, index, moveRow, handleEdit, handleDelete }: { item: Calibrations; index: number; moveRow: Function; handleEdit: Function; handleDelete: Function }) {
  const [, ref] = useDrag({
    type: 'ROW',
    item: { index },
  });

  const [, drop] = useDrop({
    accept: 'ROW',
    hover: (draggedItem: { index: number }) => {
      if (draggedItem.index !== index) {
        moveRow(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });
  const handleRef = useCallback(
    (node: HTMLTableRowElement | null) => {
      ref(node);
      drop(node);
    },
    [ref, drop],
  );

  return (
    <tr ref={handleRef}>
      <td className="w-[40%]">
        <input
          name="X"
          className={'flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm'}
          type="number"
          value={item.X}
          onChange={(e) => handleEdit(item.id, 'X', e.target.value)}
        />
      </td>
      <td className="w-[40%]">
        <input
          name="Y"
          className={'flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm'}
          type="number"
          value={item.Y}
          onChange={(e) => handleEdit(item.id, 'Y', e.target.value)}
        />
      </td>
      <td className="flex h-[58px] items-center justify-around text-lg">
        <MdDelete onClick={() => handleDelete(item.id)} className="cursor-pointer text-red-500" />
        <FaArrowsAltV className="cursor-n-resize" />
      </td>
    </tr>
  );
}

function Calibrations({ valName, setResultData, resultData, validationErrors }: Props) {
  const [content, setContent] = useState<Calibrations[]>(resultData?.Calibrations);

  const moveRow = (fromIndex: number, toIndex: number) => {
    const newData = [...content];
    const [movedItem] = newData.splice(fromIndex, 1);
    newData.splice(toIndex, 0, movedItem);
    setContent(newData);
  };

  const handleEdit = (id: string, field: any, value: string) => {
    setContent((prevContent) => prevContent.map((el) => (el.id === id ? { ...el, [field]: value } : el)));
  };

  const handleDelete = (id: string) => {
    setContent((prevContent) => prevContent.filter((el) => el.id !== id));
  };
  useEffect(() => {
    if (content.length > 0) {
      setResultData({
        ...resultData,
        [valName]: content.map((content, i) => ({
          X: +content.X,
          Y: +content.Y,
          ItemOrder: i + 1,
          bg: '#' + Math.floor(Math.random() * 16777215).toString(16),
        })),
      });
    } else {
      setResultData({
        ...resultData,
        [valName]: [],
      });
    }
  }, [content]);

  return (
    <DndProvider backend={HTML5Backend}>
      <>
        <section>
          <div className="flex justify-between">
            <p className="mb-2 text-2xl font-semibold">Calibrations</p>
            <Button type="button" onClick={() => setContent([...content, { X: 0, Y: 0, id: Math.random().toString() }])}>
              Add
            </Button>
          </div>
          <div className="ml-1 max-h-[250px] w-full overflow-auto border bg-white">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="">X</th>
                  <th className="">Y</th>
                  <th className="flex h-[45px] items-center justify-center">
                    <FaEdit />
                  </th>
                </tr>
              </thead>
              <tbody>
                {content.map((item, index) => (
                  <DraggableRow key={index} item={item} index={index} moveRow={moveRow} handleEdit={handleEdit} handleDelete={handleDelete} />
                ))}
              </tbody>
            </table>
          </div>
          {validationErrors?.Calibrations && <p className="mt-2 text-center text-red-500">{validationErrors.Calibrations}</p>}
        </section>
      </>
    </DndProvider>
  );
}

export default Calibrations;
