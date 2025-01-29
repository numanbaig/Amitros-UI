"use client";

// ViewContext.tsx
import React, { createContext, useContext, useEffect, useState } from "react";

type ViewContextType = {
  isGridView: boolean;
  setIsGridView: (value: boolean) => void;
};

const ViewContext = createContext<ViewContextType | undefined>(undefined);

export const ViewProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isGridView, setIsGridView] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      const storedView = localStorage.getItem("gridView");
      return storedView ? JSON.parse(storedView) : true;
    }
    return true;
  });

  useEffect(() => {
    localStorage.setItem("gridView", JSON.stringify(isGridView));
  }, [isGridView]);

  return (
    <ViewContext.Provider value={{ isGridView, setIsGridView }}>
      {children}
    </ViewContext.Provider>
  );
};

export const useViewContext = () => {
  const context = useContext(ViewContext);
  if (!context) {
    throw new Error("useViewContext must be used within a ViewProvider");
  }
  return context;
};
