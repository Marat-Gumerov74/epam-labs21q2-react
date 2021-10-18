import './App.css';
import React from 'react';
import UserDetails from "../UserDetails/UserDetails";
import Content from "../Content/Content";

function App(props) {
  return (
    <div className="app">
      <header className="app-header">
        <UserDetails {...props}/></header>
      <section><Content/></section>
    </div>
  );
}

export default App;