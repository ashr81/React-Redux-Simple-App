import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser} from '../actions/index';

class UserList extends Component{
  createUserLists() {
    return this.props.users.map((user) => {
      return (
        <li key={user.id} onClick={() => this.props.selectUser(user)}>{user.first} {user.last}</li>
      );
    });
  }

  render(){
    return(
      <ul>
        {this.createUserLists()}
      </ul>
    )
  }
}

function mapStateToProps(state){
  return{
    users: state.users
  }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({selectUser}, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(UserList);
