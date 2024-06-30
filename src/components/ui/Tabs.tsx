import React from 'react';
import Button from '@/components/ui/Button';
import { ButtonsListProps } from '@/types';
const Tabs: React.FC<ButtonsListProps> = ({
  buttonsList,
  getClickedItem,
  selected,
  loading,
}) => {
  return (
    <div className="mt-8 rounded-md w-full p-4 bg-gray-200">
      <div className="flex flex-row justify-center">
        {buttonsList.map((list, key) => (
          <div key={`list__${key + 1}`} className="basis-1/4 me-3">
            <Button
              disabled={selected == key + 1 || loading === true}
              className={
                selected == key + 1
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-gray-900 '
              }
              onClick={() => getClickedItem(list.id)}
              label={list.label}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
