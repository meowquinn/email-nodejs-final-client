import React, { useState } from 'react'
import {
    AppstoreOutlined,
    CalendarOutlined,
    LinkOutlined,
    MailOutlined,
    LeftOutlined,
    RightOutlined,
    SettingOutlined,
    ArrowLeftOutlined,
    ArrowRightOutlined
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
        {
            key: 'collapse',
            icon: collapse ? <RightOutlined /> : <LeftOutlined />,
            onClick: toggleCollapse
        },
        getItem('Navigation One', '1', <MailOutlined />),
        getItem('Navigation Two', '2', <CalendarOutlined />),
        getItem('Navigation Two', 'sub1', <AppstoreOutlined />, [
            getItem('Option 3', '3'),
            getItem('Option 4', '4'),
            getItem('Submenu', 'sub1-2', null, [
                getItem('Option 5', '5'),
                getItem('Option 6', '6')
            ])
        ]),
        { type: 'divider' },
        getItem('Navigation Three', 'sub2', <SettingOutlined />, [
            getItem('Option 7', '7'),
            getItem('Option 8', '8'),
            getItem('Option 9', '9'),
            getItem('Option 10', '10')
        ]),
        getItem(
            <a
                href="https://ant.design"
                target="_blank"
                rel="noopener noreferrer"
            >
                Ant Design
            </a>,
            'link',
            <LinkOutlined />
        )
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
