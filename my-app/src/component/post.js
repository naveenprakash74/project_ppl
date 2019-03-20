import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom'
import axios from "axios";
import {Session} from 'bc-react-session';


class Post extends Component {
  constructor(props){
    super(props);
    this.obj = Session.getPayload();
    
    this.state={
      _id:this.props.val._id,
      email:this.obj.email,
      likes:''
    }
  }
  componentDidMount(){
    const data={_id:this.state._id,email:this.state._id};
    axios.post('http://192.168.100.125:3001/likes',data).then(res=> {
      console.log("likes",res.data);
    this.setState({likes:res.data});
  })
  }
  handelLikes=(event)=>{
    event.preventDefault();
    axios.post('http://192.168.100.125:3001/likes',this.state).then(res=> {
      
    this.setState({likes:res.data});
  })
  }
  render() {
    let number_likes="";
    let date=this.props.val.time;
    // let t=date?date.toDateString():"";
    let t=new Date(date)
    return (<div>
            <div className="contnt_2">
                <div className="div_a">
                  <div className="div_title">{this.props.val.caption}</div>
                  <div className="btm_rgt">
                    <div className="btm_arc">{this.props.val.category?this.props.val.category:" "}</div>
                  </div>
                  <div className="div_top">
                    <div className="div_top_lft"><img src="images/img_6.png" />{this.props.val.name}</div>
                    <div className="div_top_rgt"><span className="span_date">{t?t.toDateString():""}</span><span className="span_time">{t?t.toLocaleTimeString():""}</span></div>
                  </div>
                  <div className="div_image"><Link to={`/single-post/${this.props.val._id}/${this.state.likes?number_likes= this.state.likes.email.length:""}`}><img src={`http://192.168.100.125:3001/${this.props.val.image}`} alt="pet" /></Link></div>
                  <div className="div_btm">
                    <div className="btm_list">
                      <ul>
                        <li><a href="#"><span className="btn_icon"><img src="images/icon_001.png" alt="share" /></span>Share</a></li>
                        <li><a href="#"><span className="btn_icon"><img src="images/icon_002.png" alt="share" /></span>Flag </a></li>
                        <li><a href="javaScript:" onClick={this.handelLikes}><span className="btn_icon"><img src="images/icon_003.png" alt="share" /></span>{this.state.likes?this.state.likes.email.length:"0"} Likes</a></li>
                        <li><Link to={`/single-post/${this.props.val._id}/${console.log("kuch nhi",this.state.likes)?this.state.likes.email.length:""}`}><span className="btn_icon"><img src="images/icon_004.png" alt="share" /></span>Comments</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            )}
}
function mapStateToProps(state){
  return {user:state}
}
export default connect(mapStateToProps,null)(Post);