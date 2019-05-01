import React from 'react';
import classNames from 'classnames';
import { Control } from 'react-redux-form';

const InputField = function(props) {
    return (
        <div className='input-field'>
            <label className='input-label-field'htmlFor={props.textName}>{props.labelName}</label>
            <Control.text className={classNames('input-text-field',{'error' : props.isUserMessageVisible})} 
                model={props.modelName} type={props.elementType} />
        </div>
    );
};
export default InputField;