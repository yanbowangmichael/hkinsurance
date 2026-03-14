import { useState, useEffect, useCallback } from 'react';
import type { KnowledgeItem } from '@/types';
import { defaultKnowledgeItems } from '@/data/companies';

const STORAGE_KEY = 'hk-insurance-knowledge-base';

export function useKnowledgeBase() {
  const [items, setItems] = useState<KnowledgeItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setItems(parsed);
      } catch {
        setItems(defaultKnowledgeItems);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultKnowledgeItems));
      }
    } else {
      setItems(defaultKnowledgeItems);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultKnowledgeItems));
    }
    setIsLoaded(true);
  }, []);

  // Save to localStorage whenever items change
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    }
  }, [items, isLoaded]);

  const addItem = useCallback((item: Omit<KnowledgeItem, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newItem: KnowledgeItem = {
      ...item,
      id: Date.now().toString(),
      createdAt: Date.now(),
      updatedAt: Date.now()
    };
    setItems(prev => [...prev, newItem]);
    return newItem;
  }, []);

  const updateItem = useCallback((id: string, updates: Partial<Omit<KnowledgeItem, 'id' | 'createdAt'>>) => {
    setItems(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, ...updates, updatedAt: Date.now() }
          : item
      )
    );
  }, []);

  const deleteItem = useCallback((id: string) => {
    setItems(prev => prev.filter(item => item.id !== id));
  }, []);

  const getItemsByCategory = useCallback((category: KnowledgeItem['category']) => {
    return items.filter(item => item.category === category);
  }, [items]);

  const resetToDefault = useCallback(() => {
    setItems(defaultKnowledgeItems);
  }, []);

  const exportData = useCallback(() => {
    return JSON.stringify(items, null, 2);
  }, [items]);

  const importData = useCallback((jsonString: string) => {
    try {
      const parsed = JSON.parse(jsonString);
      if (Array.isArray(parsed)) {
        setItems(parsed);
        return true;
      }
      return false;
    } catch {
      return false;
    }
  }, []);

  return {
    items,
    isLoaded,
    addItem,
    updateItem,
    deleteItem,
    getItemsByCategory,
    resetToDefault,
    exportData,
    importData
  };
}
