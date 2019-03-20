/*eslint-disable*/

import React, { Component } from 'react';
import {connect} from 'react-redux';
import Post from './post';
import { image, catagory, getImage } from '../redux/actions'
import {Session} from 'bc-react-session';
import Dropzone from 'react-dropzone'
class Timeline extends Component {
  constructor(props){
    super(props);
    this.obj = Session.getPayload();
    this.state = {
      caption:"",
      email:"",
      category:"",
      name:"",
      image:null,
      black: true,
      preview:null,
   }
  }
  changeColor=()=>{
    this.setState({black: !this.state.black})
  }
  OnChange=(event)=>{
    this.setState({[event.target.name]:event.target.value});
  }
  handleDrop=([image])=>{
    this.setState({"image":image});
    this.setState({preview:URL.createObjectURL(image)});
    this.setState({email:this.obj.email});
    this.setState({name:this.obj.fname})
    // this.setState({
}
handelChange=(event)=>{
  event.preventDefault();
  const formData = new FormData();
  formData.append('myImage',this.state.image);
  const{caption,email,category,name}=this.state;
  const data = {caption,email,category,name};
  formData.append("data",JSON.stringify(data));
  this.props.dispatch(image(formData));
}
addCatagory=(event)=>{
  event.preventDefault();
  this.props.dispatch(catagory({catagory:this.state.category.toUpperCase()}));
  console.log("im in catagory");

}
componentDidMount(){
  let flag={id:1};
  this.props.dispatch(getImage(flag));
  this.props.dispatch(catagory(flag));
}
  render() {
    // console.log("this is props",this.props)
      return (
        <div>
        <div className="navbar navbar-inverse navbar-fixed-top">
          <div className="navbar-inner">
            <div className="container">
              <button type="button" className="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse"> <span className="icon-bar" /> <span className="icon-bar" /> <span className="icon-bar" /> </button>
              <a className="brand" href="#">PPL</a>
              <div className="pro_info pull-right">
                <div className="pro_icn"><img src="images/pic_small.png" /></div>
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
                  <li className="active"> <a href='#'>Home</a> </li>
                  <li > <a href="#">E-Coupons</a> </li>
                  <li > <a href="#">E-Brands</a> </li>
                  <li > <a href="#">Resuse Market</a> </li>
                  <li > <a href="#">Lost and Found</a> </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="header">
          <div className="header_lft">
            <div className="logo"><a href="/timeline"><img src="images/logo.png" /></a></div>
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
            <div className="flag_div"><img src="images/flag.png" /></div>
            <input type="text" placeholder="Search" className="txt_box" />
            <div className="msg_box"><a href="#"><span className="msg_count">100</span></a></div>
            <div className="info_div">
              <div className="image_div"> <img src="images/pic.png" /> </div>
              <div className="info_div1">Me</div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="content">
            <div className="content_rgt">
              <div className="rght_btn" onClick={this.changeColor}> <span className="rght_btn_icon"><img src="images/btn_iconb.png" alt="up" /></span> <span className="btn_sep"><img src="images/btn_sep.png" alt="sep" /></span><a>Upload Post</a> </div>
              <div className="rght_btn"> <span className="rght_btn_icon"><img src="images/btn_icona.png" alt="up" /></span> <span className="btn_sep"><img src="images/btn_sep.png" alt="sep" /></span> <a href="#">Invite Friends</a> </div>
              <div className="rght_cate">
                <div className="rght_cate_hd" id="rght_cat_bg">Categories</div>
                <div className="rght_list">
                  <ul>
                  <li><form onSubmit={this.addCatagory}><input type="text" name="category"  onChange={this.OnChange}placeholder="add catagory" required/><button type="submit">Add</button></form></li>
                  <div>{ this.props.precatagory? this.props.precatagory.catagory.map(function (value,key) {    
                    return <li><a href="#"><span className="list_icon"><img src="images/icon.png" style={{width:'25px', height:'30px'}}alt="up" /></span>{value}</a></li>
                    }):''}
                  </div>
                  </ul>
                </div>
              </div>
              <div className="rght_cate">
                <div className="rght_cate_hd" id="opn_cat_bg">Featured</div>
                <div className="sub_dwn">
                  <div className="feat_sec">
                    <div className="feat_sec_img"><img src="images/feat_img1.png" alt="image" /></div>
                    <div className="feat_txt">Lorem Ipusum Text</div>
                  </div>
                  <div className="feat_sec">
                    <div className="feat_sec_img"><img src="images/feat_img2.png" alt="image" /></div>
                    <div className="feat_txt">Lorem Ipusum Text</div>
                    <div className="btm_rgt">
                      <div className="btm_arc">Dogs</div>
                    </div>
                  </div>
                  <div className="feat_sec">
                    <div className="feat_sec_img"><img src="images/feat_img3.png" alt="image" /></div>
                    <div className="feat_txt">Lorem Ipusum Text</div>
                    <div className="btm_rgt">
                      <div className="btm_arc">Rabbits</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content_lft">
              <div className="contnt_1">
                <div className="list_1">
                  <ul>
                    <li>
                      <input type="checkbox" className="chk_bx" />
                      Friends</li>
                    <li>
                      <input type="checkbox" className="chk_bx" />
                      Flaged</li>
                  </ul>
                </div>
                <div className="timeline_div">
                  <div className="timeline_div1">
                    <div className="profile_pic">
                      <img src="images/timeline_img1.jpg" />
                      <div className="profile_text"><a href="#">Change Profile Pic</a></div>
                    </div>
                    <div className="profile_info">
                      <div className="edit_div"><a href="#">Edit <img src="images/timeline_img.png" /></a></div>
                      <div className="profile_form">
                        <ul>
                          <li>
                            <div className="div_name1">Name :</div>
                            <div className="div_name2">{this.obj.fname.toUpperCase()} {this.obj.lname.toUpperCase()}</div>
                          </li>
                          <li>
                            <div className="div_name1">Sex :</div>
                            <div className="div_name2">Male</div>
                          </li>
                          <li>
                            <div className="div_name1">Description :</div>
                            <div className="div_name3">{this.obj.email}<br/>This is an example of a comment. You can create as many comments like this one
                              or sub comments as you like and manage all of your content inside Account.</div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="timeline_div2">
                    <ul>
                      <li><a href="#" className="active">Timeline    </a></li>
                      <li><a href="#">About  </a></li>
                      <li><a href="#">Album</a></li>
                      <li><a href="#"> Pets</a></li>
                      <li><a href="#">My Uploads </a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="contnt_2" style={{display:this.state.black?"none":"block"}}>
                <div className="div_a">
                <div className="btm_rgt">
                    <div className="btm_arc">New Post</div>
                </div>
                <textarea rows="4" cols="50" name="caption" onChange={this.OnChange} form="usrform"defaultValue="caption for the post......."></textarea>
                <form autoComplete="off" onSubmit={this.handelChange}>
                  <Dropzone onDrop={this.handleDrop} multiple={false} accept="image/*">
                    {
                        ({getRootProps,getInputProps})=>{
                            return <div {...getRootProps()}>
                                <input {...getInputProps()}/>
                                <p className="drop-zone">Drop your file here</p>
                                <img style={{height:"100%",width:"100%"}}src={this.state.preview}></img>
                            </div>
                        }
                    }
                    </Dropzone><br />
                    <select name="category" onChange={this.OnChange}>
                          { this.props.precatagory? this.props.precatagory.catagory.map(function (value,key) {    
                          return <option value={value}>{value}</option>
                          }):''}
                      </select>
                    <input type="submit" value="Upload" onClick={this.changeColor}/>
                </form>
                </div>
              </div>
              {/* {this.state.showUpload?<Post val={this.props.user}/>:''} */}
              <div>{ this.props.preimage? this.props.preimage.map(function (value) {       
                    return <Post  key={value._id} val={value}/>
                    }):''}
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
              <li><a href="#"><img src="images/social_1.png" /></a></li>
              <li><a href="#"><img src="images/social_2.png" /></a></li>
              <li><a href="#"><img src="images/social_3.png" /></a></li>
              <li><a href="#"><img src="images/social_4.png" /></a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state){
  // console.log("this state coming from state",state)
  return {preimage:state.previous_image,precatagory:state.previous_catagory}
}
export default connect(mapStateToProps,null)(Timeline);