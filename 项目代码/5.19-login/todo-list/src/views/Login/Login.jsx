import React, { Component } from 'react'
import "./Login.css"
import { Form, Input, Button, Checkbox, Row, Radio, Col,message } from 'antd';
import { UserOutlined, LockOutlined, InboxOutlined } from '@ant-design/icons';
import axios from "axios"

const onFinish = (values) => {

    axios.post("http://111.203.59.61:8060/dev-api/login", {
        code: values.captcha,
        key: values.radioValue,
        password: values.password,
        username: values.username,
        uuid: sessionStorage.getItem("uuid")
    }).then(ok => {
        const { msg, code, token } = ok.data
        message.info(msg);
        if (code === 200) {
            // 登陆成功
            // 跳转


        }
    })
};

const onChange = e => {
    console.log('radio checked', e.target.value);

};
export default class Login extends Component {
    componentDidMount() {
        this.getCode()
    }
    // 获取验证码
    getCode = () => {
        axios.get("http://111.203.59.61:8060/dev-api/captchaImage").then(ok => {
            const { code, img, uuid } = ok.data
            if (code === 200) {
                document.querySelector("#code").src = `data:image/gif;base64,${img}`
                sessionStorage.setItem("uuid", uuid)
            }
        })
    }


    render() {
        return (
            <div className="login">
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                >
                    <h3 className="title">八维生产性实训平台</h3>
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: '用户名不能为空' }]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="账户" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: '密码不能为空' }]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="密码"

                        />
                    </Form.Item>

                    <Form.Item >
                        <Row gutter={8}>
                            <Col span={12}>
                                <Form.Item
                                    name="captcha"
                                    noStyle
                                    rules={[{ required: true, message: '验证码不能为空' }]}
                                >
                                    <Input prefix={<InboxOutlined className="site-form-item-icon" />} placeholder="验证码" />
                                </Form.Item>
                            </Col>
                            <Col span={12}><img src="" alt="" id="code" onClick={this.getCode} /></Col>
                        </Row>
                    </Form.Item>
                    <div className="box">

                        <Form.Item name="remember" valuePropName="checked">
                            <Checkbox>记住密码</Checkbox>
                        </Form.Item>

                        <Form.Item name="radioValue" onChange={onChange}>
                            <Radio.Group>
                                <Radio value="student">学生</Radio>
                                <Radio value="teacher">教师</Radio>
                            </Radio.Group>
                        </Form.Item>
                    </div>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button" style={{width:"100%"}}> 登录</Button>
                    </Form.Item>
                </Form>




            </div>
        )
    }
}
