import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { TabBar } from 'antd-mobile';

class App extends Component {
  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  constructor(props,context) {
    super(props,context);
    this.state={
      hidden:false,
      selectedTab:'blueTab'
    }
  }
  componentDidMount(){
    this.linkTo('/Downwind');
  }
  linkTo(link) {
    this.context.router.push(link);
  }
  renderContent() {
    return (
      <div>{this.props.children}</div>
    );
  }

  render(){
    return (
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="white"
        hidden={this.state.hidden}
      >
        <TabBar.Item
          title="拼车"
          key="拼车"
          icon={{uri:'https://zos.alipayobjects.com/rmsportal/UNQhIatjpNZHjVf.png'}}
          selectedIcon={{uri:'https://zos.alipayobjects.com/rmsportal/HLkBvJOKnmOfBPO.png'}}
          selected={this.state.selectedTab === 'blueTab'}
          onPress={() => {
            this.linkTo('/Downwind');
            this.setState({
              selectedTab: 'blueTab',
            });
          }}
          data-seed="logId"
        >
          {this.renderContent()}
        </TabBar.Item>
        <TabBar.Item
          icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/UNQhIatjpNZHjVf.png' }}
          selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/HLkBvJOKnmOfBPO.png' }}
          title="出行"
          key="出行"
          badge={1}
          selected={this.state.selectedTab === 'redTab'}
          onPress={() => {
            this.linkTo('/Stroke');
            this.setState({
              selectedTab: 'redTab',
            });
          }}
          data-seed="logId1"
        >
          {this.renderContent()}
        </TabBar.Item>
        <TabBar.Item
          icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/YWpPVCVOnJoCYhs.png' }}
          selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/WadBBxOIZtDzsgP.png' }}
          title="我的"
          key="我的"
          selected={this.state.selectedTab === 'yellowTab'}
          onPress={() => {
            this.linkTo('/Me');
            this.setState({
              selectedTab: 'yellowTab',
            });
          }}
        >
          {this.renderContent()}
        </TabBar.Item>
      </TabBar>
    )};
}

App.propTypes = {
};

export default connect()(App);
