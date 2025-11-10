import React from "react";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Dashboard />
    </div>
  );
}
