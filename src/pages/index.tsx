import EmailTable from '@/components/EmailTable'
import CustomLayout from '@/components/Layout'
import SearchBar from '@/components/SearchBar'
import SidebarNavigation from '@/components/SidebarNavigation'
import { FormOutlined } from '@ant-design/icons'
import { Drawer, FloatButton, Form, Input, Layout } from 'antd'
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

function Home({ account }: { account: object }) {
    console.log(account)

    // const cookieValue = req.cookies.get('account') // <--- GET COOKIE
    // console.log(cookieValue)

    // get cookie
    const [open, setOpen] = useState(false)
    const showDrawer = () => setOpen(true)
    const onClose = () => setOpen(false)

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
        </CustomLayout>
    )
}

Home.getInitialProps = async ({ req }: NextPageContext) => {
    const headers = req ? req.headers : {}
    const account = JSON.parse((headers.account as string) || '{}')
    return { account }
}

export default Home
