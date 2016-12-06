import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { ListView,Flex,Button} from 'antd-mobile';

import styles from './Downwind.css';


const data = [
  {
    time: '今天 14:00',
    seat:4,
    outset: '厦门软件园',
    end:'长泰'
  },
  {
    time: '今天 14:00',
    seat:3,
    outset: '厦门观音山',
    end:'长泰'
  },
  {
    time: '今天 14:00',
    seat:2,
    outset: '厦门集美',
    end:'长泰'
  },
];
let index = data.length - 1;

const NUM_ROWS = 20;
let pageIndex = 0;


class Downwind extends Component {
  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  constructor(props){
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });

    this.genData = (pIndex = 0) => {
      const dataBlob = {};
      for (let i = 0; i < NUM_ROWS; i++) {
        const ii = (pIndex * NUM_ROWS) + i;
        dataBlob[`${ii}`] = `row - ${ii}`;
      }
      return dataBlob;
    };
    this.rData = this.genData();
    this.state = {
      dataSource: dataSource.cloneWithRows(this.rData),
      isLoading: false,
    };
    this.linkTo=this.linkTo.bind(this);
  }
   linkTo() {
     this.context.router.push('/Content/Show');
   }
  onEndReached(event) {
    // load new data
    console.log('reach end', event);
    this.setState({ isLoading: true });
    setTimeout(() => {
      this.rData = { ...this.rData, ...this.genData(++pageIndex) };
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.rData),
        isLoading: false,
      });
    }, 1000);
  }
  render() {
    const separator = (sectionID, rowID) => (
      <div key={`${sectionID}-${rowID}`} style={{
        backgroundColor: '#F5F5F9',
        height: 8,
        borderTop: '1px solid #ECECED',
        borderBottom: '1px solid #ECECED',
      }}
      />
    );
    const row = (rowData, sectionID, rowID) => {
      if (index < 0) {
        index = data.length - 1;
      }
      const obj = data[index--];
      return (
        <div key={rowID}
             style={{
               padding: '12px 18px',
               backgroundColor: 'white',
             }}
        >
          <Flex>
            <Flex.Item style={{flex:3}}><div className={styles.row_height}>{obj.time}</div></Flex.Item>
            <Flex.Item><div className={styles.row_height}>{obj.seat}位</div></Flex.Item>
          </Flex>
          <Flex>
            <Flex.Item><div className={styles.row_height}><img className={styles.row_container_img} src={require("./img/outset.png")} />{obj.outset}</div></Flex.Item>
          </Flex>
          <Flex>
            <Flex.Item style={{flex:3}}><div className={styles.row_height}><img className={styles.row_container_img} src={require("./img/end.png")} />{obj.end}</div></Flex.Item>
            <Flex.Item><Button className="btn" inline size="small" type="warning" onClick={this.linkTo} >立即同行</Button></Flex.Item>
          </Flex>
        </div>
      );
    };
    return (
      <ListView
        dataSource={this.state.dataSource}
        //renderHeader={() => <span>header</span>}
        renderFooter={() => <div style={{ padding: 30, textAlign: 'center' }}>
          {this.state.isLoading ? '加载中...' : '加载完毕'}
        </div>}
        renderRow={row}
        renderSeparator={separator}
        className="am-list"
        pageSize={4}
        scrollRenderAheadDistance={500}
        scrollEventThrottle={20}
        onScroll={() => { console.log('scroll'); }}
        useBodyScroll
        onEndReached={this.onEndReached}
        onEndReachedThreshold={10}
      />
    );
    }
}

export default connect()(Downwind);

