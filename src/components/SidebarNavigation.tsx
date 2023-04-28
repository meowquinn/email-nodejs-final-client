import React, { useState } from 'react'
import {
    FileOutlined,
    StarOutlined,
    SendOutlined,
    MailOutlined,
    LeftOutlined,
    RightOutlined,
    PlusOutlined,
    SettingOutlined,
} from '@ant-design/icons'
import { Button, Divider, Menu, Switch } from 'antd'
import type { MenuProps, MenuTheme } from 'antd/es/menu'
import { Layout, Space } from 'antd'
import { inherits } from 'util'
const { Header, Footer, Sider, Content } = Layout

type MenuItem = Required<MenuProps>['items'][number]

function getItem(
    label: React.ReactNode,
    key?: React.Key | null,
    icon?: React.ReactNode,
    children?: MenuItem[]
): MenuItem {
    return {
        key,
        icon,
        children,
        label
    } as MenuItem
}

export default () => {
    const [collapse, setCollapse] = useState(false)
    const toggleCollapse = () => {
        setCollapse(!collapse)
    }

    const items: MenuItem[] = [
        getItem('Inbox', '1', <MailOutlined />),
        getItem('Starred', '2', <StarOutlined />),
        getItem('Sent', '3', <SendOutlined />),
        getItem('Drafts', '4', <FileOutlined />),
        { type: 'divider' },
        getItem('Manage labels', '5', <SettingOutlined />),
        getItem('Create new label', '6', <PlusOutlined />),
    ]

    const siderStyle: React.CSSProperties = {
        textAlign: 'center',
        lineHeight: '120px',
        color: '#fff',
        backgroundColor: '#3ba0e9',
        minHeight: '100vh'
    }

    return (
        <Sider
            style={siderStyle}
            width={256}
            collapsed={collapse}
            breakpoint={'md'}
            onBreakpoint={(broken) => {
                setCollapse(broken)
            }}
            collapsible
            onCollapse={(value) => setCollapse(value)}
            trigger={collapse ? <RightOutlined /> : <LeftOutlined />}
        >
            <Menu
                style={{ width: '100%', height: '100%' }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode={'inline'}
                theme={'light'}
                items={items}
            />
        </Sider>
    )
}
