 import React from 'react';
 import { connect } from 'react-redux';
 import Modal from './Modal';
 
class StudentDetailedModalElement extends React.Component {
    render(){
    return (
        <Modal
            className='modal'
            show={true}
            close={this.props.onCloseModal}>
                {'Name: ' + this.props.selectedStudent.name }
                <br />
                {'Roll Number: '+ this.props.selectedStudent.rollNo }
                <br />
                {'Class: ' + this.props.selectedStudent.class }
                <br />
                {'Attendance: '+ this.props.selectedStudent.status }
        </Modal>);
    }
}
 
function mapStateToProps(state) {
    return { ...state.studentModel};
}
 
function mapDispatchToProps(dispatch) {
    return {
        onCloseModal : () => {
            const action = {type: 'CLOSE_STUDENT_MODAL'};
            dispatch(action);                
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(StudentDetailedModalElement);