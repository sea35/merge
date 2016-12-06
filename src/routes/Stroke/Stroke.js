/**
 * Created by sea35 on 2016/12/5.
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { ListView,Flex,Button} from 'antd-mobile';

class Me extends Component{
  render(){
    return(<div>行程</div>)
  }
}
export default connect()(Me);
