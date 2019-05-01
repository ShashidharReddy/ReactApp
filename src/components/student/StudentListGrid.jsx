import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import actions from '../../helper/actions';
import Student from './Student';

import '../../style/studentlist.css';
import '../../style/login.css';

class StudentlistGrid extends React.Component {
    constructor(props) {
        super(props);
        
        this.onStudentSearch = this.onStudentSearch.bind(this);
    }

    onStudentSearch(e){
        this.props.onSearchStudent(e.target.value.trim());
    }
    
    render(){
        return ([
                <div className='slist-header'>
                <div className='slist-element'>
                <img className='students-list-icon' alt='' src={ require('../../images/students.png') } />
                    {/* <h2 className='slist-element'>SList</h2> */}
                    SList</div>
                    <div className='present-student-count'>{this.props.numberOfPresentStudents+ ' present today'}</div> 
                    {<SearchPanel onStudentSearch={this.onStudentSearch} />}
            </div>,
            <div className='detailed-student-list'>
                {this.props.filteredStudentList &&
                    this.props.filteredStudentList.map((student, index)=> 
                        <Student key={'student_'+ index} student={student} />                                
                    ) 
                }
                </div>]
        );
    }
}

const StatusElement = function(props) {
    return(
        [<td>
            <div className={classNames('color-box', {'present': props.status === 'Present'})} />
        </td>,
        <td>
            <div>{props.status}</div>
        </td>]
    );
}

const StatusNotation = function() {
    return (
        <table>
            <tr>
                <StatusElement status='Present' />
            </tr>
            <tr>                
                <StatusElement status='Absent' />
            </tr>
        </table>
    );
}

const SearchPanel = function(props) {
    return (
        <table className='slist-search-panel'>
            <tr>
                <td>
                    <div className='student-list-search-div' >
                        <input className='student-list-search' type='text' onChange={props.onStudentSearch} />
                        <img className='search-icon' alt='' src={ require('../../images/search.png') } />
                    </div>
                </td>
                <td>
                <div className='status-notation'>
                    {<StatusNotation />}
                </div>
                </td>
            </tr>
    </table> );
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
        onSearchStudent : (searchText) => {
           const action = {type: actions.FILTER_STUDENT_LIST, searchText: searchText};
            dispatch(action);
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(StudentlistGrid);