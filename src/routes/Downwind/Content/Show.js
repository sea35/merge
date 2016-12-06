/**
 * Created by sea35 on 2016/12/6.
 */
import React, {Component, PropTypes} from 'react';
import {connect} from 'dva';
import {Card, Flex, Tag,WhiteSpace,WingBlank} from 'antd-mobile';
import styles from './Content.css';
import {ContentPage} from '../../../components';

class Show extends Component {
  render() {
    return (<ContentPage title="行程">
      <Card full>
        <Card.Header
          title="陈先生"
          thumb="http://img2.imgtn.bdimg.com/it/u=2043474383,248776887&fm=21&gp=0.jpg"
          thumbStyle={{borderRadius: 40, height: 80, width: 80}}
          extra={<img className={styles.showExtra} src={require("../img/telephone.png")}/>}
        />
        <Card.Body>
          <div>
            <Flex>
              <Flex.Item style={{flex:5}}>
                <div style={{height: 60}}><img style={{height: 20, paddingRight: 20}}
                                               src={require("../img/clock.png")}/>{'今天 14：25'}</div>
              </Flex.Item>
              <Flex.Item style={{flex: 1}}>
                <div style={{height: 60}}><div style={{ textAlign:'center',borderRadius:15,backgroundColor:'#2db7f5',height:35,width:100}}>{'3位'}</div></div>
              </Flex.Item>
            </Flex>
              <Flex>
              <Flex.Item>
                <div style={{height: 60}}><img style={{height: 20, paddingRight: 20}}
                                               src={require("../img/outset.png")}/>{'厦门软件园观日路20号'}</div>
              </Flex.Item>
            </Flex>
            <Flex>
              <Flex.Item  style={{flex: 5}}>
                <div style={{height: 60}}><img style={{height: 20, paddingRight: 20}}
                                               src={require("../img/end.png")}/>{'厦门'}</div>
              </Flex.Item>
              <Flex.Item style={{flex: 1}}>
                <div style={{height: 60,justifyContent:'flex-end'}}>
                  <div style={{ textAlign:'center',borderRadius:15,backgroundColor:'coral',height:35,width:100}}>{'60元'}</div></div>
              </Flex.Item>
            </Flex>
          </div>
        </Card.Body>
      </Card>
      <WhiteSpace size="sm" />
      <Card full>
        <Card.Body>
          <Flex>
            <Flex.Item>
              <div style={{height: 60}}><img style={{height: 20, paddingRight: 20}}
                                             src={require("../img/aim.png")}/>{'乘车要求'}</div>
            </Flex.Item>
          </Flex>
          <div className={styles.tagContainer}>
            <Tag small>不抽烟</Tag><Tag small>不吃零食</Tag><Tag small>不呕吐</Tag>
          </div>
        </Card.Body>
      </Card>
    </ContentPage>)
  }
}

export default connect()(Show);
