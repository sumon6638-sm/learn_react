import React, { useEffect, useState } from 'react';
import { add as addition, multiply } from '../../utilities/storage';
import Cosmetic from '../Cosmetic/Cosmetic';


const Cosmetics = () => {
    const first = 55;
    const second = 89;
    const sum = addition(first, second);
    const multi = multiply(first, second);

    const [cosmetics, setCosmetics] = useState([]);
    useEffect(() => {
        fetch('./cosmetics.json')   // "./"--  দেও্যা মানে রুট থেকে ফোল্ডার কে খুজে ধরে আনা...
            .then(res => res.json())
            .then(data => setCosmetics(data));
    },[])
    return (
        <div>
            <h3>Shop my cosmetics!</h3>
            {
                cosmetics.map(cosmetic => <Cosmetic
                    key={cosmetic._id}
                    cosmetic={cosmetic}
                ></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;