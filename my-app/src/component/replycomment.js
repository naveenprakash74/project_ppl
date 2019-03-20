import React, { Component } from 'react';
import {connect} from 'react-redux';
class ReplyComment extends Component {
    constructor(props){
        super(props)
    }

  render() {
    return (<div>
                <div className="list_image"><div className="image_name">{this.props.comment.rname}</div></div>
                <div className="list_info">{this.props.comment.rcomment}
                </div>
              </div>
            )}
    }
function mapStateToProps(state){
  // console.log("this is state in post",state);
  return {}
}
export default connect(mapStateToProps,null)(ReplyComment);