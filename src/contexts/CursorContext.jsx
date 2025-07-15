import React, { createContext, useContext, useState, useCallback } from 'react';

const CursorContext = createContext();

export const useCursor = () => {
  const context = useContext(CursorContext);
  if (!context) {
    throw new Error('useCursor must be used within a CursorProvider');
  }
  return context;
};

export const CursorProvider = ({ children }) => {
  const [cursorVariant, setCursorVariant] = useState('default');
  const [cursorText, setCursorText] = useState('');

  const setCursor = useCallback((variant, text = '') => {
    setCursorVariant(variant);
    setCursorText(text);
  }, []);

  const resetCursor = useCallback(() => {
    setCursorVariant('default');
    setCursorText('');
  }, []);

  return (
    <CursorContext.Provider value={{
      cursorVariant,
      cursorText,
      setCursor,
      resetCursor,
    }}>
      {children}
    </CursorContext.Provider>
  );
};