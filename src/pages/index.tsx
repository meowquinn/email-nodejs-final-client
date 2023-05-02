import { ConfigProvider, Drawer, FloatButton, Form, Input, Layout } from 'antd'
import SidebarNavigation from '@/components/SidebarNavigation'
import SearchBar from '@/components/SearchBar'
import EmailTable from '@/components/EmailTable'
import { useState } from 'react'
import { FormOutlined } from '@ant-design/icons'

const { TextArea } = Input
const { Header, Footer, Sider, Content } = Layout

const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 32,
    background: '#fff'
}

const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    color: '#fff'
}

const footerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#7dbcea'
}

export default function Home() {
    const [open, setOpen] = useState(false)
    const showDrawer = () => {
        setOpen(true)
    }
    const onClose = () => {
        setOpen(false)
    }

    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#00b96b'
                }
            }}
        >
            <Layout>
                <SidebarNavigation />
                <Layout>
                    <Header style={headerStyle}>
                        <SearchBar />
                    </Header>
                    <Content style={contentStyle}>
                        <EmailTable />
                    </Content>
                </Layout>
                <FloatButton
                    description="Compose"
                    icon={<FormOutlined />}
                    type="primary"
                    onClick={showDrawer}
                    style={{ right: 60, bottom: 60, width: 70, height: 70 }}
                />
                <Drawer
                    // responsive width
                    width={640}
                    placement="right"
                    onClose={onClose}
                    open={open}
                >
                    <Form layout="vertical" style={{ width: '100%' }}>
                        <Form.Item label="Send to">
                            <Input placeholder="input placeholder" />
                        </Form.Item>
                        <Form.Item label="CC">
                            <Input placeholder="input placeholder" />
                        </Form.Item>
                        <Form.Item label="BCC">
                            <Input placeholder="input placeholder" />
                        </Form.Item>
                        <Form.Item label="Content">
                            {/* <ReactQuill /> */}
                            <TextArea rows={4} showCount />
                        </Form.Item>
                    </Form>
                </Drawer>
            </Layout>
        </ConfigProvider>
    )
}
