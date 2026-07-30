import React from 'react'

import{
  BrowserRouter as Roter,
  Routers,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import Home from "./pages/Dashboard/Home";
import Income from "./pages/Dashboard/Income";
import Expense from "./pages/Dashboard/Expense";

export const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/login" exact elemtn= {<Login />} />
          <Route path="/signup" exact elemtn= {<SignUp />} />
          <Route path="/dashboard" exact elemtn= {<Home />} />
          <Route path="/income" exact elemtn= {<Income />} />
          <Route path="/expense" exact elemtn= {<Expense />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App

const Root = () => {
  //Checking if token exits in local storage
  const isAuthenticated = !!localStorage.getItem("token");

  // Redirect to dashboard if authenticated, otherwise back to login page
  return isAuthenticated ? (
    <Navigate to="/dashboard" />
  ) : (
    <Navigate to="/login" />
  );
};