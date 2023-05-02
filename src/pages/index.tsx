import ComposeEmail from '@/components/ComposeEmail'
import EmailTable from '@/components/EmailTable'
import CustomLayout from '@/components/Layout'
import SearchBar from '@/components/SearchBar'
import SidebarNavigation from '@/components/SidebarNavigation'
import { FormOutlined } from '@ant-design/icons'
import { FloatButton, Input, Layout } from 'antd'
import { getCookie } from 'cookies-next'
import { NextPageContext } from 'next'
import { useState } from 'react'
const { TextArea } = Input
const { Header, Content } = Layout

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

export default function Home() {
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
                    shape="circle"
                    onClick={showCompose}
                    style={{ right: 64, bottom: 64, width: 96, height: 96 }}
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

// Home.getInitialProps = async ({ req }: NextPageContext) => {
//     const headers = req ? req.headers : {}
//     const account = JSON.parse((headers.account as string) || '{}')
//     return { account }
// }
