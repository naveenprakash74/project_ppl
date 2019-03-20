import React from 'react'
import {sendData} from '../actions'
import {connect} from 'react-redux';
import Header from './header'
import Middle from './middle'
import Footer from './footer'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      email:"",
      psw:""
    }
  }
  handelChange=(event)=>{
    this.setState({[event.target.name]: event.target.value});
  }
  handleSignup=(event)=> {
    event.preventDefault();
    this.props.dispatch(sendData(this.state));
  }

  render(){
    return(
  <div>
    <div>
    <form autoComplete="off" onSubmit={this.handleSignup}>
    <input type="email" name="email" placeholder="Username/Email" onChange={this.handelChange}/>
    <input type="password" name="psw" placeholder="Password" onChange={this.handelChange}/>
    <button type="submit"> submit</button>
    </form>
     </div>
     <Header  />
    <Middle />
    <Footer />
  </div>
  )
    }

  }
  function mapStateToProps(state){

    return {};
  }
export default connect(mapStateToProps,null)(App)
