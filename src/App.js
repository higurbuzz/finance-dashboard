import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";

import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./pages/Dashboard";
import CreditCards from "./pages/CreditCards";
import Transactions from "./pages/Transactions";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [headerTitle, setHeaderTitle] = useState("Overview");
  const location = useLocation();

  useEffect(() => {
    const pathToTitle = {
      "/": "Overview",
      "/credit-cards": "Credit Cards",
      "/transactions": "Transactions",
    };

    setHeaderTitle(pathToTitle[location.pathname] || "Overview");
  }, [location.pathname]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`app ${isSidebarOpen ? "sidebar-open" : ""}`}>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="right-panel">
        <Header title={headerTitle} toggleSidebar={toggleSidebar} />
        <div className="content-container">
          <Switch>
            <Route exact path="/">
              <Dashboard />
            </Route>
            <Route exact path="/credit-cards">
              <CreditCards />
            </Route>
            <Route exact path="/transactions">
              <Transactions />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
