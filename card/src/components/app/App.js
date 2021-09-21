import './App.css';
import React from 'react';
import UserDetails from "../user-details/user-details";
import Content from "../content/content";
import ava from '../../assets/images/avatar.jpg'

function App(props) {
    const {name , username, email} = props.data;
    const info = {name, username, email, ava};
    const {street, suite, city, zipcode} = props.data.address;
    const address = {street, suite, city, zipcode};

  return (
    <div className="app">
      <header className="app-header"><UserDetails info={info}/></header>
      <section><Content data={address}/></section>
    </div>
  );
}

export default App;
