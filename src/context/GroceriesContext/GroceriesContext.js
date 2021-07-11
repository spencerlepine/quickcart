import React, { useState, useEffect, useContext } from 'react';
import formatGroceryObj from '../../modules/formatGroceryObj';
import * as api from '../../api/firebase/groceries';

export const GroceriesContext = React.createContext();

export function GroceriesProvider({ children }) {
  const [allGroceryItems, setAllGroceryItems] = useState([]);
  const starterCount = 20;
  const [displayStarters, setDisplayStarters] = useState(true);
  const [totalGroceryCount, setTotalGroceryCount] = useState(-1);
  const [loading, setLoading] = useState();

  useEffect(() => {
    if (totalGroceryCount < 0) {
      fetchTotalGroceryCount();
    }
  })

  useEffect(() => {
    if (totalGroceryCount === 0) {
      setDisplayStarters(false);
      return;
    } else if (displayStarters) {
      if (totalGroceryCount >= 0 && totalGroceryCount < starterCount) {
        setDisplayStarters(false);
        return
      }
      if (allGroceryItems.length === totalGroceryCount || allGroceryItems.length === starterCount) {
        return;
      }
    }



    if (totalGroceryCount > 0 && allGroceryItems.length < totalGroceryCount) {
      const lastItem = allGroceryItems.slice(-1);
      const lastId = lastItem.length ? lastItem[0]['_id'] : '';
      getAllGroceries(lastId);
    }
  }, [totalGroceryCount, allGroceryItems, displayStarters]);

  async function fetchTotalGroceryCount() {
    const count = await api.fetchGroceryCount();
    setTotalGroceryCount(count);
  }

  async function getAllGroceries(lastGroceryId = '') {
    setLoading(true);
    try {
      const data = await api.fetchGroceries(lastGroceryId);
      setAllGroceryItems(prevList => [...prevList, ...data]);
    } catch (error) {
      console.log(error.message);
    }
    setLoading(false);
  }

  async function updateGroceryItem(updatedGroceryItem) {
    try {
      const newGrocery = await api.updateGrocery(updatedGroceryItem);
      const newGroceryId = newGrocery['_id'];

      // go through and replace the old grocery
      setAllGroceryItems(prevList => {
        return prevList.map(item => item['_id'] === newGroceryId ? newGrocery : item);
      })
    } catch (error) {
      console.log(error.message);
    }
  }

  async function createGroceryItem(newGroceryItem) {
    setDisplayStarters(false);
    try {
      const filledGroceryObj = formatGroceryObj(newGroceryItem);
      const newGrocery = await api.createGrocery(filledGroceryObj);

      // Add only new groceries
      setAllGroceryItems(prevList => {
        return [...prevList, newGrocery];
      })

      // Save the total count
      await setTotalGroceryCount(prevCount => prevCount + 1);
    } catch (error) {
      console.log(error.message);
    }
  }

  async function deleteGroceryItem(groceryId) {
    setDisplayStarters(false);
    try {
      await api.deleteGrocery(groceryId);

      // go through and replace the old grocery
      setAllGroceryItems(prevList => {
        return prevList.filter(item => item['_id'] !== groceryId);
      })

      await setTotalGroceryCount(prevCount => prevCount - 1);
    } catch (error) {
      console.log(error.message);
    }
  }

  const value = {
    loading,
    allGroceryItems,
    setAllGroceryItems,
    displayStarters,
    setDisplayStarters,
    totalGroceryCount,
    createGroceryItem,
    updateGroceryItem,
    deleteGroceryItem,
    setTotalGroceryCount,
    fetchTotalGroceryCount,
  };

  return (
    <GroceriesContext.Provider value={value}>
      {children}
    </GroceriesContext.Provider>
  )
}

const useGroceries = () => {
  const { loading, displayStarters, setDisplayStarters, setAllGroceryItems, fetchTotalGroceryCount, setTotalGroceryCount, totalGroceryCount, allGroceryItems, updateGroceryItem, createGroceryItem, deleteGroceryItem } = useContext(GroceriesContext);

  return {
    displayStarters,
    setDisplayStarters,
    setAllGroceryItems,
    fetchTotalGroceryCount,
    setTotalGroceryCount,
    loading,
    totalGroceryCount,
    allGroceryItems,
    createGroceryItem,
    updateGroceryItem,
    deleteGroceryItem,
  };
};

export default useGroceries;