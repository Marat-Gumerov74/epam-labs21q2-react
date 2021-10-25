import './App.css';
import React from 'react';
import UserDetails from "../UserDetails/UserDetails";
import Content from "../Content/Content";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <UserDetails /></header>
      <section><Content/></section>
    </div>
  );
}

export default App;