/**
 * Created by sea35 on 2016/12/6.
 */
import React, { Component, PropTypes } from 'react';
import { NavBar,Icon } from 'antd-mobile';

class ContentPage extends Component{
  static  propTypes = {

  }
  static contextTypes = {
    router: PropTypes.object.isRequired
  };
  constructor(props){
    super(props);

  }

  render(){
    return(
      <div>
        <NavBar leftContent="返回" mode="light" onLeftClick={this.context.router.goBack}>{this.props.title}</NavBar>
        <div>{this.props.children}</div>
      </div>
    )
  }
}
export default ContentPage;
