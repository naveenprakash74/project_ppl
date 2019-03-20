import React, { Component } from 'react';
import {connect} from 'react-redux';
// import { Link } from 'react-router-dom'
import {  reply } from '../redux/actions'
import {Session} from 'bc-react-session';
import ReplyComment from './replycomment';


class Comment extends Component {
    constructor(props){
        super(props)
        this.state={
            comment:'',
            _id:"",
            rname:'',
            ruser_id:"",
            rcomment:"",
            black:true}
    this.obj = Session.getPayload();
    }
    OnChange=(event)=>{
        this.setState({[event.target.name]:event.target.value});
      }
    handelReply=(event)=>{
        event.preventDefault();
        this.props.dispatch(reply(this.state));
    }
    AssignValue=()=>{
        this.setState({comment:this.props.val.comment});
        this.setState({ruser_id:this.obj._id});
        this.setState({_id:this.props.val._id});
        this.setState({rname:this.obj.fname});
    }
  render() {

    let date=this.props.val.time;
    // let t=date?date.toDateString():"";
    let t=new Date(date);
    return (<div>
            <p>{t.toDateString()} {t.toLocaleTimeString()}</p>
            <div className="list_image">
                      <div className="image_sec">
                      <img src="/images/post_img.png" /></div>
                      <div className="image_name">{this.props.val.name}</div>
                    </div>
                    <div className="list_info">{this.props.val.comment}
                    </div>
                    { this.props.val.reply? this.props.val.reply.map(function (value,key) {       
                        return <li><ReplyComment key={value._id}comment={value} /></li>
                        }):''}
                    <input type="button" defaultValue="Reply" className="black_btn" onClick={()=>{this.setState({black:!this.state.black});this.AssignValue();}}/>
                    <div className="cmnt_div" style={{display:this.state.black?"none":"block"}}>
                    <form autoComplete="off" onSubmit={this.handelReply}>
                      <input type="text" placeholder="Add a Comment" className="cmnt_bx" name="rcomment" onChange={this.OnChange} required/>
                      <input type="submit" className="sub_bttn" defaultValue="Submit Comment"/>
                      </form>
                    </div>
              </div>
            )}
    }
function mapStateToProps(state){
  // console.log("this is state in post",state);
  return {user:state}
}
export default connect(mapStateToProps,null)(Comment);