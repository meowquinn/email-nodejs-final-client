import React from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Checkbox, Form, Input, Col, Layout, Row } from 'antd'
import { PhoneOutlined } from '@ant-design/icons'

const App: React.FC = () => {
    const onFinish = (values: any) => {
        console.log('Received values of form: ', values)
    }

    return (
        <Row
            className="flex h-full w-full flex-row items-center justify-center bg-white"
            style={{
                width: '100wh',
                height: '100vh'
            }}
        >
            {' '}
            <Col lg={6} md={10} sm={16} xs={24}>
                <Form
                    name="login"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="phone"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your phone number!'
                            }
                        ]}
                    >
                        <Input
                            type="tel"
                            size="large"
                            prefix={
                                <PhoneOutlined className="site-form-item-icon" />
                            }
                            placeholder="phone"
                        />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!'
                            }
                        ]}
                    >
                        <Input
                            size="large"
                            prefix={
                                <LockOutlined className="site-form-item-icon" />
                            }
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item
                            name="remember"
                            valuePropName="checked"
                            noStyle
                        >
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <a className="float-right" href="">
                            Forgot password
                        </a>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" block={true}>
                            Log in
                        </Button>
                    </Form.Item>
                    <Form.Item>
                        Or <a href="">register now!</a>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    )
}

export default App
