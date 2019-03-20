import React from 'react'
import {connect} from 'react-redux';
class Footer extends React.Component{
    render(){
      return(
      <div>this is status
      <p><img src={`http://localhost:8081/${this.props.image}`} alt=""/></p>
    </div>)
  }}
function mapStateToProps(state){
    console.log("this is map resduce-----",state);
    return {image:state.image};
  }
export default connect(mapStateToProps,null)(Footer)  