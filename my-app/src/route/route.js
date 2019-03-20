import React, { Component } from 'react';
import { Route} from 'react-router-dom';
import Login from '../component/login';
import Register from '../component/register';
import Home from '../component/home';
import Forget from '../component/forgot';
import Reset from '../component/reset';
import Post from '../component/single_post';
import Timeline from '../component/timeline';


class Routerr extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/forget" component={Forget} />
        <Route path="/reset" component={Reset} />
        <Route path="/single-post/:id/:like" component={Post} />
        <Route path="/timeline" component={Timeline} />
      </div>
    );
  }
}

export default Routerr;
