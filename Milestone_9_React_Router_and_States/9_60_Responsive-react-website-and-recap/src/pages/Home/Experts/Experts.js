import React, { useEffect, useState } from 'react';
import Expert from '../Expert/Expert';

const Experts = () => {

    const [experts, setExperts] = useState([]);

    const url = './mechanic.json';

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setExperts(data))
    }, [])

    return (
        <div id='experts' className='container'>
            <h2 className='text-primary mt-5'>This is our Expert section</h2>
            
            <div className='row'>
                {
                    experts.map(expert =>
                        <Expert
                            key={expert.id}
                            expert={expert}
                        ></Expert>
                    )
                }
                
            </div>
        </div>
    );
};

export default Experts;