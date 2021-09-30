import './App.css';
import React from 'react';
import UserDetails from "../UserDetails/UserDetails";
import Content from "../Content/Content";
import ava from '../../assets/images/avatar.jpg'

function App(props) {
    const {name , username, email} = props.data;
    const info = {name, username, email, ava};
    const {street, suite, city, zipcode} = props.data.address;
    const address = {street, suite, city, zipcode};

    console.log(props.data)
  return (
    <div className="app">
      <header className="app-header"><UserDetails info={info}/></header>
      <section><Content data={address}/></section>
    </div>
  );
}

export default App;
