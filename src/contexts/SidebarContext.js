import React, { createContext, useReducer, useContext, useEffect } from "react";

// Initial state
const initialState = {
  isSidebarOpen: false,
  isMobileView: window.innerWidth < 1400,
};

// Reducer function
const sidebarReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_SIDEBAR":
      return {
        ...state,
        isSidebarOpen: !state.isSidebarOpen,
      };
    case "SET_MOBILE_VIEW":
      return {
        ...state,
        isMobileView: action.payload,
      };
    default:
      return state;
  }
};

// Create context
const SidebarContext = createContext();

// Custom hook to use the Sidebar context
export const useSidebar = () => {
  return useContext(SidebarContext);
};

// Provider component
export const SidebarProvider = ({ children }) => {
  const [state, dispatch] = useReducer(sidebarReducer, initialState);

  const toggleSidebar = () => {
    dispatch({ type: "TOGGLE_SIDEBAR" });
  };

  const handleResize = () => {
    dispatch({ type: "SET_MOBILE_VIEW", payload: window.innerWidth < 1400 });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <SidebarContext.Provider value={{ state, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};
