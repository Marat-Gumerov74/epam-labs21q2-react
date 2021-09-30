import './Content.css';
import React from 'react';

function Content(props) {
    const {street, suite, city, zipcode} = props.data;
    return (
            <ul className="content">
                <li><p>street: </p><p>{street}</p></li>
                <li><p>suite:</p><p>{suite}</p></li>
                <li><p>city:</p><p>{city}</p></li>
                <li><p>zipcode:</p><p>{zipcode}</p></li>
            </ul>
    );
}

export default Content;