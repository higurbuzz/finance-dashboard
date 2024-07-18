import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./pages/Dashboard";
import CreditCards from "./pages/CreditCards";
import Transactions from "./pages/Transactions";
import { SidebarProvider } from "./contexts/SidebarContext";

const App = () => {
  return (
    <div className={"app"}>
      <Sidebar />
      <div className="right-panel">
        <Header />
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
    <SidebarProvider>
      <App />
    </SidebarProvider>
  </Router>
);

export default AppWrapper;
