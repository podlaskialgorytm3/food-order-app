import React from 'react';
import ReactLoading from 'react-loading';
 
export const Loading = () => (
    <div className="loading">
        <ReactLoading type="spin" color="white" delay={0} height={'50px'} width={'50px'} />
    </div>
);
 