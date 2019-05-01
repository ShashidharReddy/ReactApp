
import React from 'react';
import { connect } from 'react-redux';
import { Form } from 'react-redux-form';

import InputField from './InputField';
import ButtonElement from './ButtonElement';
import actions  from '../../helper/actions';

import '../../style/login.css';

class Login extends React.Component {

    componentDidUpdate() {
        if(this.props.isAuthenticated) {
            this.props.history.push('/homepage');
        }
    }
    
    render() {
        
        return (
            <div className='login-page' >
            <Form model='user' className='login-form' 
            onSubmit={values => this.props.handleSubmit(values)}> 
                 { !!this.props.isUserMessageVisible &&
                 (<div className='user-message'> Invalid Credentials </div>) }
                         {/* <div htmlFor='message'>Invalid Credentials</label>
                     </div>) }     */}
                <div className='loagin-heading'>
                    <h2 className='slist-element' >SList</h2> 
                </div>

                 <InputField 
                    labelName='USER NAME :  '
                    textName='username' 
                    elementType='text'
                    modelName='user.username'
                    isUserMessageVisible={this.props.isUserMessageVisible} /> 
                 
                <InputField 
                    labelName='PASSWORD :  '
                    textName='password' 
                    elementType='password'
                    modelName='user.password'
                    isUserMessageVisible={this.props.isUserMessageVisible} /> 

                <ButtonElement buttonText='Sign In' /> 
            </Form>  
            </div>
        );
    }
}
 
function mapStateToProps(state) { 
    return { ...state.loginModel };
}
 
function mapDispatchToProps(dispatch) {
    return {
        handleSubmit : (values) => {
            const action = {type: actions.LOGIN, value: values};
            dispatch(action);
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
 


