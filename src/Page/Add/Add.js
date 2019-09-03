import React, { Component } from 'react'
import { Form, Icon, Input, Button, DatePicker, Table } from 'antd'
import { Select } from 'antd'

const { Option } = Select

export default class Add extends Component {
  // 提交表单
  handleSubmit(e) {
    e.preventDefault()
    // this.props.form.validateFields((err, values) => {
    //   if (!err) {
    //     console.log('Received values of form: ', values)
    //   }
    // })
  }
  // 选择类型
  handleChange() {
    // e.preventDefault()
    // console.log(e.target.value)
  }

  render() {
    // const { getFieldDecorator } = this.props.form
    const columns = [
      {
        title: '早餐',
        dataIndex: 'breakfast',
        key: 'breakfast'
      },
      {
        title: '午餐',
        dataIndex: 'lunch',
        key: 'lunch',
      },
      {
        title: '晚餐',
        dataIndex: 'dinner',
        key: 'dinner',
      },
      {
        title: '宵夜',
        dataIndex: 'nightSnack',
        key: 'nightSnack',
      },
      {
        title: '房租',
        dataIndex: 'rent',
        key: 'rent',
      },
      {
        title: '医疗',
        dataIndex: 'medi',
        key: 'medi',
      },
      {
        title: '车费',
        dataIndex: 'fare',
        key: 'fare',
      }
    ]
    const data = [
      {
        key: '1',
        breakfast: 8,
        lunch: 16,
        dinner: 12,
        nightSnack: 1,
        rent: 480,
        medi: 100,
        fare: 50,
      },
      {
        key: '2',
        breakfast: 8,
        lunch: 16,
        dinner: 12,
        nightSnack: 1,
        rent: 480,
        medi: 100,
        fare: 50,
      },
      {
        key: '3',
        breakfast: 8,
        lunch: 16,
        dinner: 12,
        nightSnack: 1,
        rent: 480,
        medi: 100,
        fare: 50,
      },
    ];
    return (
      <div>
        <Form onSubmit={this.handleSubmit.bind(this)} className="login-form">
          <Form.Item>
            <DatePicker placeholder="请选择时间"/>
          </Form.Item>
          <Form.Item>
            <Select placeholder="请选择类型" style={{ width: 120 }} onChange={this.handleChange.bind(this)}>
              <Option value="food">餐饮</Option>
              <Option value="fare">车费</Option>
              <Option value="MedicalCare">医疗</Option>
              <Option value="rent">房租</Option>
              <Option value="income">收入</Option>
              <Option value="pay">支出</Option>
            </Select>
          </Form.Item>
          <Form.Item>
            {/* {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })( */}
              <Input
                prefix={<Icon type="bulb" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="描述"
              />
            {/* )} */}
          </Form.Item>
          <Form.Item>
            {/* {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })( */}
              <Input
                prefix={<Icon type="gold" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="价格"
              />
            {/* )} */}
          </Form.Item>
          <Form.Item>
            {/* {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(<Checkbox>Remember me</Checkbox>)}
            <a className="login-form-forgot" href="">
              Forgot password
            </a> */}
            <Button type="primary" htmlType="submit" className="login-form-button">
              提交
            </Button>
          </Form.Item>
        </Form>
        <h1>表格汇总</h1>
        <Table columns={columns} dataSource={data} />
      </div>
    )
  }
}