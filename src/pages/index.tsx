import ComposeEmail from '@/components/ComposeEmail'
import EmailTable from '@/components/EmailTable'
import CustomLayout from '@/components/Layout'
import SearchBar from '@/components/SearchBar'
import SidebarNavigation from '@/components/SidebarNavigation'
import { FormOutlined } from '@ant-design/icons'
import { Drawer, FloatButton, Form, Input, Layout } from 'antd'
import { NextPageContext } from 'next'
import { useRef, useState } from 'react'
const { TextArea } = Input
const { Header, Content } = Layout
import type { DraggableData, DraggableEvent } from 'react-draggable'
import Draggable from 'react-draggable'

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

function Home({ account }: { account: object }) {
    console.log(account)
    const [open, setOpen] = useState(false)

    const handleOk = (e: React.MouseEvent<HTMLElement>) => {
        console.log(e)
        setOpen(false)
    }

    const handleCancel = (e: React.MouseEvent<HTMLElement>) => {
        console.log(e)
        setOpen(false)
    }

    const showCompose = () => {
        setOpen(true)
    }

    return (
        <CustomLayout>
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
                    onClick={showCompose}
                    style={{ right: 60, bottom: 60, width: 70, height: 70 }}
                />
                <ComposeEmail
                    open={open}
                    onOk={handleOk}
                    onCancel={handleCancel}
                />
                {/* <Drawer
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
                {/* <TextArea rows={4} showCount />
                        </Form.Item>
                    </Form>
                </Drawer>  */}
            </Layout>
        </CustomLayout>
    )
}

Home.getInitialProps = async ({ req }: NextPageContext) => {
    const headers = req ? req.headers : {}
    const account = JSON.parse((headers.account as string) || '{}')
    return { account }
}

export default Home
