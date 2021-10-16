import React from 'react';

const Expert = (props) => {
    const { name, img, expertize } = props.expert;
    return (
        <div className='col-lg-4 col-sm-6 col-6'>
            <img className='img-fluid' src={img} alt="" />
            <h2>{name}</h2>
            <h4 className='text-danger'>Expert at: {expertize}</h4>
        </div>
    );
};

export default Expert;