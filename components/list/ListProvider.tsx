import React, { createContext, useState, useContext } from "react";

/**
 * List context
 */
const ListContext = createContext<ListContextType | null>(null!);

/**
 * List context type
 */
interface ListContextType {
  options: ListOptions;
  filters: FilterType[] | null;
  showFilterForm: boolean;
  setOptions: React.Dispatch<React.SetStateAction<ListOptions>>;
  setFilters: React.Dispatch<React.SetStateAction<FilterType[] | null>>;
  setShowFilterForm: React.Dispatch<React.SetStateAction<boolean>>;
}

/**
 * Filter Item Type
 */
export interface FilterItemType {
  id: string;
  name: string;
}

/**
 * Table options type
 */
export interface ListOptions {
  page: number;
  size: number;
}

/**
 * Filter Type
 */
export interface FilterType {
  filterName: string;
  filterField: string;
  items: FilterItemType[];
}

/**
 * List provider type
 */
interface ListProviderProps {
  children: React.ReactNode;
}

/**
 * List provider
 */
export const ListProvider = ({ children }: ListProviderProps) => {
  const [filters, setFilters] = useState<FilterType[] | null>(null);
  const [showFilterForm, setShowFilterForm] = useState(false);
  const [options, setOptions] = useState({ page: 0, size: 10 });

  const contextValue: ListContextType = {
    filters,
    setFilters,
    showFilterForm,
    setShowFilterForm,
    options,
    setOptions,
  };

  return <ListContext.Provider value={contextValue}>{children}</ListContext.Provider>;
};

export default ListProvider;

/**
 * List context hooks
 */
export const useListContext = () => {
  const context = useContext(ListContext) as ListContextType;
  if (!context) {
    throw new Error("useListContext must be used within a ListProvider");
  }
  return context;
};
