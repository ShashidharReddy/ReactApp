import React from 'react';

import '../../style/login.css';

const ButtonElement = function(props) {
    return (
        <button className='button-element'>{props.buttonText}</button>
    );
};
export default ButtonElement;