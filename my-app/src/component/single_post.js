import React, { Component } from 'react';
import {connect} from 'react-redux';
import {comment,single_Images,getComment } from '../redux/actions'
import axios from "axios";
import {Session} from 'bc-react-session';
import { Link } from 'react-router-dom'
import Comment from './comment'

class Post extends Component {
  constructor(props){
    super(props);
    this.state={
      comment:'',
      user_id:'',
      name:'',
      _id:"",
      black:true
    }
    this.obj = Session.getPayload();
  }
  OnChange=(event)=>{
    this.setState({[event.target.name]:event.target.value});
  }
  handelComment=(event)=>{
    event.preventDefault();
    this.props.dispatch(comment(this.state));
  }
 componentDidMount(){
    
    this.setState({_id:this.props.match.params.id});
    this.setState({name:this.obj.fname});
    this.setState({user_id:this.obj._id});
    let id={id:this.props.match.params.id};
    this.props.dispatch(single_Images(id));
    this.props.dispatch(getComment(id));
  }
  render() {
    // console.log("this is likes",this.props);
    let date=this.props.image.time;
    // let t=date?date.toDateString():"";
    let t=new Date(date)
    
    return (
        <div>
        <div className="navbar navbar-inverse navbar-fixed-top">
          <div className="navbar-inner">
            <div className="container">
              <button type="button" className="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse"> <span className="icon-bar" /> <span className="icon-bar" /> <span className="icon-bar" /> </button>
              <a className="brand" href="#">PPL</a>
              <div className="pro_info pull-right">
                <div className="pro_icn"><img src="/images/pic_small.png" /></div>
                <div className="pro_txt">Me<b className="caret" /></div>
                <ul className="dropdown-menu" role="menu" aria-labelledby="dLabel">
                  <li><a tabIndex={-1} href="#">My Profile</a></li>
                  <li><a tabIndex={-1} href="#">Message Box</a></li>
                  <li><a tabIndex={-1} href="#">Change Language</a></li>
                  <li className="divider" />
                  <li><a tabIndex={-1} href="#">
                      <input type="text" placeholder="search" />
                    </a></li>
                </ul>
              </div>
              <div className="nav-collapse collapse">
                <ul className="nav">
                  <li className="active"> <a href="#">Home</a> </li>
                  <li > <a href="#">E-Coupons</a> </li>
                  <li ><a href="#">E-Brands</a> </li>
                  <li > <a href="#">Resuse Market</a> </li>
                  <li > <a href="#">Lost and Found</a> </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="header">
          <div className="header_lft">
            <div className="logo"><Link to="/timeline"><img src="/images/logo.png" /></Link></div>
            <div className="navigatn">
              <ul>
                <li><a href="#" className="active">Home</a></li>
                <li><a href="#"> E-Coupons </a></li>
                <li><a href="#">E-Brands </a></li>
                <li><a href="#"> Resuse Market </a></li>
                <li><a href="#"> Lost and Found</a></li>
              </ul>
            </div>
          </div>
          <div className="header_rgt">
            <div className="flag_div"><img src="/images/flag.png" /></div>
            <input type="text" placeholder="Search" className="txt_box" />
            <div className="msg_box"><a href="#"><span className="msg_count">100</span></a></div>
            <div className="info_div">
              <div className="image_div"> <img src="/images/pic.png" /> </div>
              <div className="info_div1">Me</div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="content">
            <div className="content_rgt">
              <div className="rght_btn"> <span className="rght_btn_icon"><img src="/images/btn_iconb.png" alt="up" /></span> <span className="btn_sep"><img src="/images/btn_sep.png" alt="sep" /></span> <a href="#">Upload Post</a> </div>
              <div className="rght_btn"> <span className="rght_btn_icon"><img src="/images/btn_icona.png" alt="up" /></span> <span className="btn_sep"><img src="/images/btn_sep.png" alt="sep" /></span> <a href="#">Invite Friends</a> </div>
              <div className="rght_cate">
                <div className="rght_cate_hd" id="rght_cat_bg">Categories</div>
                <div className="rght_list">
                  <ul>
                    <li><a href="#"><span className="list_icon"><img src="/images/icon_01.png" alt="up" /></span> CATS</a></li>
                    <li><a href="#"><span className="list_icon"><img src="/images/icon_02.png" alt="up" /></span> Dogs</a></li>
                    <li><a href="#"><span className="list_icon"><img src="/images/icon_03.png" alt="up" /></span> Birds</a></li>
                    <li><a href="#"><span className="list_icon"><img src="/images/icon_04.png" alt="up" /></span> Rabbit</a></li>
                    <li><a href="#"><span className="list_icon"><img src="/images/icon_05.png" alt="up" /></span> Others</a></li>
                  </ul>
                </div>
              </div>
              <div className="rght_cate">
                <div className="rght_cate_hd" id="opn_cat_bg">Featured</div>
                <div className="sub_dwn">
                  <div className="feat_sec">
                    <div className="feat_sec_img"><img src="/images/feat_img1.png" alt="image" /></div>
                    <div className="feat_txt">Lorem Ipusum Text</div>
                  </div>
                  <div className="feat_sec">
                    <div className="feat_sec_img"><img src="/images/feat_img2.png" alt="image" /></div>
                    <div className="feat_txt">Lorem Ipusum Text</div>
                    <div className="btm_rgt">
                      <div className="btm_arc">Dogs</div>
                    </div>
                  </div>
                  <div className="feat_sec">
                    <div className="feat_sec_img"><img src="/images/feat_img3.png" alt="image" /></div>
                    <div className="feat_txt">Lorem Ipusum Text</div>
                    <div className="btm_rgt">
                      <div className="btm_arc">Rabbits</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content_lft">
              <div className="contnt_2">
                <div className="div_a">
                  <div className="div_title">{this.props.image.caption}</div>
                  <div className="btm_rgt">
                    <div className="btm_arc">{this.props.image.category?this.props.image.category:" "}</div>
                  </div>
                  <div className="div_top">
                    <div className="div_top_lft"><img src="/images/img_6.png" />{this.props.image.name}</div>
                    <div className="div_top_rgt"><span className="span_date">{t?t.toDateString():""}</span><span className="span_time">{t?t.toLocaleTimeString():""}</span></div>
                  </div>
                  <div className="div_image"><img src={`http://192.168.100.125:3001/${this.props.image.image}`} alt="pet" /></div>
                  <div className="div_btm">
                    <div className="btm_list">
                      <ul>
                        <li><a href="#"><span className="btn_icon"><img src="/images/icon_001.png" alt="share" /></span>Share</a></li>
                        <li><a href="#"><span className="btn_icon"><img src="/images/icon_002.png" alt="share" /></span>Flag</a></li>
                        <li><a href="#"><span className="btn_icon"><img src="/images/icon_003.png" alt="share" /></span>{this.props.match.params.like} Likes</a></li>
                      <li><a href="#"><span className="btn_icon"><img src="/images/icon_004.png" alt="share" /></span> {Object.keys(this.props.allcomment?this.props.allcomment.comments:"").length} Comments</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="contnt_3">
                <ul>
                  <li>
                    <div className="cmnt_div1">
                    <form autoComplete="off" onSubmit={this.handelComment}>
                      <input type="text" placeholder="Enter your Comment" name="comment"className="cmnt_bx1" onChange={this.OnChange} required/>
                      <input type="submit" className="sub_bttn1" defaultValue="Submit Comment"/></form>
                    </div>
                  </li>
                  <div>{ this.props.allcomment? this.props.allcomment.comments.map(function (value,key) {       
                    return <li><Comment key={value._id} val={value}/></li>
                    }):''}
                  </div>
                </ul>
                <div className="view_div"><a href="#">View more</a></div>
              </div>
            </div>
          </div>
          <div className="clear" />
        </div>
        <div className="footr">
          <div className="footr_lft">
            <div className="footer_div1">Copyright © Pet-Socail 2014 All Rights Reserved</div>
            <div className="footer_div2"><a href="#">Privacy Policy </a>| <a href="#"> Terms &amp; Conditions</a></div>
          </div>
          <div className="footr_rgt">
            <ul>
              <li><a href="#"><img src="/images/social_1.png" /></a></li>
              <li><a href="#"><img src="/images/social_2.png" /></a></li>
              <li><a href="#"><img src="/images/social_3.png" /></a></li>
              <li><a href="#"><img src="/images/social_4.png" /></a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state){
  // console.log("this is state comming from databse",state);
  return {
    image:state.single_image,allcomment:state.previous_comments
  }
}
export default connect(mapStateToProps,null)(Post);

