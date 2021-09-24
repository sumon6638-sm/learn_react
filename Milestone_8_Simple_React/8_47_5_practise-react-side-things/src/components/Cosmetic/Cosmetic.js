import React from 'react';
import { addToDb, deleteFromDb } from '../../utilities/fakedb';

const Cosmetic = (props) => {
    // console.log(props.cosmetic)
    const { name, gender, company, _id, price } = props.cosmetic;
    const handlePurchase = id => {
        //set to local storage
        console.log(id);
        addToDb(id);
    }

    // const withParam = (id) => handlePurchase(id)

    const handleRemove = id => {
        deleteFromDb(id);
    }

    return (
        <div>
            <h2>name: {name}</h2>
            <p>_id: {_id}</p>
            <p>Price: ${price}</p>
            <p><small>gender: {gender}</small></p>
            <h4>Company: {company}</h4>
            <button onClick={() => handlePurchase(_id)}>Purchase</button>
            <button onClick = {() => handleRemove(_id)}>Remove</button>
        </div>
    );
};

export default Cosmetic;