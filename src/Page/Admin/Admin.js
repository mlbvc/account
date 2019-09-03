import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { Layout, Icon, Avatar, Popover } from 'antd'
import LeftNav from '../../Component/LeftNav/LeftNav'
// import Charts from '../../Component/Charts/Charts'
import Home from '../Home/Home'
import Money from '../Money/Money'
import Graph from '../Graph/Graph'
import Add from '../Add/Add'
import AdminStyle from './AdminStyle'

const styles = AdminStyle.styles
const { Header, Sider, Content, Footer } = Layout
const content = (
  <div style={{cursor: 'pointer'}}>
    <p>修改头像</p>
    <p>退出登录</p>
  </div>
)

export default class Admin extends Component {
  state = {
    collapsed: false
  }
  
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }
  // qp(){
  //   if (document.documentElement.requestFullscreen) {
  //     document.documentElement.requestFullscreen()
  //   } else if (document.documentElement.mozRequestFullScreen) {
  //     document.documentElement.mozRequestFullScreen()
  //   } else if (document.documentElement.webkitRequestFullScreen) {
  //     document.documentElement.webkitRequestFullScreen()
  //   }else {
  //     document.documentElement.msRequestFullscreen()
  //   }
  // }
  render() {
    console.log(styles);
    
    // const pathname = this.props.location.pathname
    return (
      <Layout style={{width: '100%', height: '100%', position: 'fixed', bottom: 0}}>
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <LeftNav />
          </Sider>
          <Layout>
            <Header style={{display: 'flex', background: '#fff', paddingLeft: 20}}>
              <div style={{flex: 9}}>
                <Icon
                  className="trigger"
                  type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                  onClick={this.toggle}
                />
              </div>
              <div style={styles.headerRight}>
                <div>欢迎</div>
                <div style={{cursor: 'pointer'}}>
                  <Popover placement="bottom" content={content} trigger="click">
                    <Avatar size="small" icon="user" />
                  </Popover>
                </div>
              </div>
            </Header>
            <Content
              style={{
                margin: '24px 16px',
                padding: 24,
                background: '#fff',
                overflowY: 'scroll'
              }}
            >
              <Switch>
                <Route path='/home' component={Home} />
                <Route path='/money' component={Money} />
                <Route path='/graph' component={Graph} />
                <Route path='/add' component={Add} />
                <Redirect to='/home'/>
              </Switch>
              {/* <div onClick={this.qp.bind(this)}>1</div> */}
            </Content>
            <Footer>bottom</Footer>
          </Layout>
        </Layout>
    )
  }
}