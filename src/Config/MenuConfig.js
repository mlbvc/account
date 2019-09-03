const menuList = [
  {
    key: '/home',
    icon: 'home',
    title: '首页'
  },
  {
    key: '/money',
    icon: 'user',
    title: '我的'
  },
  {
    key: 'sub1',
    icon: 'setting',
    title: '管理',
    children: [
      { 
        key: '/add',
        icon: 'plus',
        title: '添加',
      },
      {
        key: '/graph',
        icon: 'stock',
        title: '图表',
      },
      {
        key: '/xx',
        icon: 'ellipsis',
        title: '其他',        
      }
    ]
  }
]


export default menuList