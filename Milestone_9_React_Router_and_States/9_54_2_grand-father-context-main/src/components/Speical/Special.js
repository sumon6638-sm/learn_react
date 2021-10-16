import React, { useContext } from 'react';
import { RingContext } from '../../App';

const Special = (props) => {
    // const { ornaments} = props;

    const [ornaments, house] = useContext(RingContext);
    console.log(ornaments)

    return (
        <div>
            <h2>Special: </h2>
            <small>{ornaments}</small>
            <br />
            <small>house: {house}</small>
        </div>
    );
};

export default Special;