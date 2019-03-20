import React from 'react'
import {connect} from 'react-redux';
class Middle extends React.Component{
  
    render(){
      return(
    <div>
      this is email
      <p>{this.props.email}</p>
    </div>)
  }}
  function mapStateToProps(state){
    console.log("this is map resduce-----",state);
    return {email:state.email};
  }
export default connect(mapStateToProps,null)(Middle)  