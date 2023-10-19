

import React from 'react';
import subheaderStyles from './style';

const Subheader = ({ title, icon } : { title: string, icon: any}) => {
    return (
        <div className={subheaderStyles.wrapper}>
            <h1>{ title }</h1>
            <div className={subheaderStyles.icon}>{ icon }</div>
        </div>
    )
}

export default Subheader;