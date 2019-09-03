import React, { Component } from 'react'
import { Menu, Icon } from 'antd'
import { Link, withRouter } from 'react-router-dom'
import './LeftNav.less'
import menuConfig from '../../Config/MenuConfig'

const { SubMenu } = Menu

class LeftNav extends Component {
  constructor(props){
    super(props)
    this.state = {}
    this.data = {
      menuList: menuConfig,
      menuItem: null,
      openKey: '',
    }
  }
  componentWillMount() {
    this.data.menuItem = this.getMenuItem(this.data.menuList)
  }
  // 渲染列表
  getMenuItem(menuList){
    const path = this.props.location.pathname
    return menuList && menuList.map((item)=>{
      if(!item.children){
        return (
          <Menu.Item key={item.key}>
            <Link to={item.key}>
              <Icon type={item.icon} />
              <span>{item.title}</span>
            </Link>
          </Menu.Item>
        )
      } else {
        let secondMenu = item.children.find(i => i.key === path)
        if(secondMenu){
          this.data.openKey = item.key
        }
        return (
          <SubMenu
            key={item.key}
            title={
              <span>
                <Icon type={item.icon} />
                <span>{item.title}</span>
              </span>
            }
          >
            { this.getMenuItem(item.children) }
          </SubMenu>
        )
      }
    })
  }
  render() {
    const path = this.props.location.pathname
    return (
      <div>
        <Link to="/" className="">
          <div className="leftNav">
            <header className="leftNavHeader">
              {/* <img src="" alt=""/>
              <h1 style={{color: 'white'}}>hhhh</h1> */}
            </header>
          </div>
        </Link>
        {/* selectedKeys根据path路径选中菜单栏 */}
        <Menu
          theme="dark" mode="inline"
          selectedKeys={[path]}
          defaultOpenKeys={[this.data.openKey]}
        >
          {this.data.menuItem}
        </Menu>
      </div>
    )
  }
}
export default withRouter(LeftNav)