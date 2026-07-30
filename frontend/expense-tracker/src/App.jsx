import React from 'react'

import{
  BrowserRouter as Roter,
  Routers,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import Home from "./pages/Auth/Home";
import Income from "./pages/Auth/Income";
import Expense from "./pages/Auth/Expense";

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
          <Route path="/income" exact elemtn= {<Expense />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App