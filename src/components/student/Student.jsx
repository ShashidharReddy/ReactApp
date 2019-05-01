import React from 'react';
import Switch from 'react-switch';
import { connect } from 'react-redux';
import classNames from 'classnames';

import actions from '../../helper/actions';

class Student extends React.Component {
    constructor(props) {
        super(props);
    
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange() {
        this.props.onAttendanceStatusChanged(this.props.student.id)                                                                                                            
    }
    
    render() {
        return (
        <div className={classNames('student-item', {'absent' : this.props.student.status === 'Absent'})}>
                <div className='student-link'
                    onClick={() => {this.props.onClicked(this.props.student.id)}}> 
                    {this.props.student.gender === 'Male' && 
                        <img className='search-icon' alt='' src={ require('../../images/boy.png') } /> }
                    {this.props.student.gender !== 'Male' && 
                        <img className='search-icon' alt='' src={ require('../../images/girl.png') } /> }            
                    <div>{'Name: '+ this.props.student.name }</div>
                    <div>{' RollNumber: ' + this.props.student.rollNo  }</div>
                    <div>{' Class: '+ this.props.student.class  }</div>
                </div>            
                <Switch
                onChange={this.handleChange}
                className='react-switch'
                checked={this.props.student.status === 'Present'} /> 
        </div>
        );
    }
}; 
 
function mapStateToProps(state) {
    return { ...state.studentModel, ...state.loginModel};
}
 
function mapDispatchToProps(dispatch) {
    return {
        onClicked : (studentId) => {
            const action = {type: actions.OPEN_STUDENT_MODAL, value: {studentId: studentId}};
            dispatch(action);
        },
        onAttendanceStatusChanged : (studentId) => {
           const action = {type: actions.ATTENDANCE_STATUS_CHANGED, value: studentId};
            dispatch(action);
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Student);


