import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';
import { data } from './modules/card-data'


// fetch('https://jsonplaceholder.typicode.com/albums')
//     .then(response => response.json())
//     .then(json => console.log('json',json))

// fetch('https://jsonplaceholder.typicode.com/albums')
//     .then((res) => {
//         return res.json();
//     })
//     .then((body) => {
//         console.log(body)
//     })

const getResource = async (url) => {
    const res = await fetch(url);
    const body = await res.json()
    return body
}

getResource('https://jsonplaceholder.typicode.com/albums')
.then((body) =>  console.log(body))
    .catch((err) => {
        console.log('Could not fetch',err)
    })




ReactDOM.render(
  <React.StrictMode>
    <App data={data}/>
  </React.StrictMode>,
  document.getElementById('root')
);
