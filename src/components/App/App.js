import './App.css';
import React from 'react';
import UserDetails from "../UserDetails/UserDetails";
import Content from "../Content/Content";
import ava from '../../assets/images/avatar.jpg'

function App({data: {name , username, email}}) {
  const info = {name, username, email, ava};
  return (
    <div className="app">
      <header className="app-header"><UserDetails info={info}/></header>
      <section><Content/></section>
    </div>
  );
}

export default App;