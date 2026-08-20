import React, { createContext, useContext, useMemo, useState } from 'react';
import { PRODUCTS, money } from '../data/products.js';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]); // {id, qty} — in-memory only, resets on reload by design
  const [isOpen, setIsOpen] = useState(false);

  const add = (id, qty = 1) => {
    setItems(prev => {
      const existing = prev.find(i => i.id === id);
      if (existing) {
        return prev.map(i => i.id === id ? { ...i, qty: i.qty + qty } : i);
      }
      return [...prev, { id, qty }];
    });
    setIsOpen(true);
  };

  const remove = (id) => setItems(prev => prev.filter(i => i.id !== id));
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  const count = useMemo(() => items.reduce((a, i) => a + i.qty, 0), [items]);
  const total = useMemo(() => items.reduce((sum, i) => {
    const p = PRODUCTS.find(p => p.id === i.id);
    return sum + (p ? p.price * i.qty : 0);
  }, 0), [items]);

  const value = { items, add, remove, open, close, isOpen, count, total, money };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  return useContext(CartContext);
}
