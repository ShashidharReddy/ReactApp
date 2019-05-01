import React from 'react';
import { connect } from 'react-redux';
import  StudentDetailedModalElement from './StudentDetailedModalElement';
import StudentlistGrid from './StudentListGrid';

import '../../style/studentlist.css';

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    render() {
        return(
            <div className='slist-home-page'>
                {!this.props.isStudentListLoaded && 
                    <img className='loading-indicator' alt='' src={ require('../../images/giphy.gif') } />}
                {this.props.showStudentList && <StudentlistGrid />} 
                {this.props.isStudentModalVisisble && <StudentDetailedModalElement />}
            </div>
        );
    }

    onClick(e){
        this.props.onClicked(e.currentTarget.id);
    } 

    componentDidMount(){
        this.props.onLoad();
    }

    componentWillMount() {
        if(!this.props.isAuthenticated){
            this.props.history.push('/');
        }
    }
}
 
function mapStateToProps(state) {
    let showStudentList = state.studentModel.isStudentListLoaded && !state.studentModel.isStudentModalVisisble
    return { ...state.studentModel, ...state.loginModel, showStudentList};
}
 
function mapDispatchToProps(dispatch) {
    return {
        onLoad : () => {
            const action = {type: 'GET_STUDENT_LIST'};
            dispatch(action);
        }
    }
}
const connectedHomePage = connect(mapStateToProps, mapDispatchToProps)(HomePage);
export default connectedHomePage;
 