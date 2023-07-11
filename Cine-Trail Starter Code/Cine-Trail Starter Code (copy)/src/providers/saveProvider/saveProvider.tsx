import React, { createContext, ReactNode, useState, useEffect } from 'react';

import { ISaveItem } from '../../interfaces/saveItem.interface';

interface IProps {
  children: ReactNode;
}

interface ISaveContext {
  saved?: ISaveItem[];
  addOnSave?: (item: ISaveItem) => void;
  removeOnSave?: (id: string) => void;
}

export const SaveContext = createContext<ISaveContext>({});

const SaveProvider: React.FC<IProps> = ({ children }) => {
  const [saved, setSaved] = useState<ISaveItem[]>([]);

  const addOnSave = (item: ISaveItem) => {
    setSaved((prevSaved) => [...prevSaved, item]);
  };


  const removeOnSave = (id: string) => {
    // Complete the code.
    setSaved((prevSaved) => prevSaved.filter((item) => item.id !== id));
  };

//  Using useEffect Create a getItem and setItem
useEffect(() => {
    const savedItems = localStorage.getItem('savedItems');
    if (savedItems) {
      setSaved(JSON.parse(savedItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('savedItems', JSON.stringify(saved));
  }, [saved]);

  return (
    <>
      <SaveContext.Provider value={{ saved, addOnSave, removeOnSave }}>
        {children}
      </SaveContext.Provider>
    </>
  );
};

export default SaveProvider;
