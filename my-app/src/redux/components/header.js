import React from 'react'
import {connect} from 'react-redux';
class Header extends React.Component{
    render(){
      return(
          <div>
            <p>{this.props.name}</p>
           <div className="leftHeader">
            </div> 
          </div>
        )
  }
}
function mapStateToProps(state){
    console.log("this is map resduce-----",state);
    return {name:state.name};
  }
export default connect(mapStateToProps,null)(Header)