import React, { Component } from 'react';
import Dropzone from 'react-dropzone'
import { image } from '../redux/actions'

import {Session} from 'bc-react-session';
class Upload extends Component {
  constructor(props){
    super(props);
    this.obj = Session.getPayload();
    this.state = {
      caption:"",
      email:"",
      image:null,
      black: true,
      preview:null
   }
  
  }

  OnChange=(event)=>{
    this.setState({[event.target.name]:event.target.value});
  }

  handleDrop=([image])=>{
      // console.log("handle Drop",image.preview)
      this.setState({"image":image});
      this.setState({preview:URL.createObjectURL(image)});
      this.setState({email:this.obj.email});
  }
    
  render() {
    
    return (<div>
            <div className="contnt_2" >
                <div className="div_a">
                <div className="btm_rgt">
                    <div className="btm_arc">New Post</div>
                </div>
                <textarea rows="4" cols="50" name="caption" onChange={this.OnChange} form="usrform" defaultValue="caption for the post......."></textarea>
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
                    <input type="submit" value="Upload" />
                </form>
                </div>
              </div>
              </div>
            )}
}
export default Upload