/**
 * Created by sea35 on 2016/12/6.
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { TabBar } from 'antd-mobile';

import {ContentPage} from '../../../components';

class Show extends Component{
  render(){
    return(<ContentPage><div>Test</div></ContentPage>)
  }
}

export default connect()(Show);
