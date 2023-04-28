import { Drawer, Row, Space, Table, Tag, Col, Divider, FloatButton } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import { useState } from 'react'
import { FormOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons'

interface DataType {
    key: string
    name: string
    age: number
    address: string
    tags: string[]
}

const columns: ColumnsType<DataType> = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age'
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address'
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: (_, { tags }) => (
            <>
                {tags.map((tag) => {
                    let color = tag.length > 5 ? 'geekblue' : 'green'
                    if (tag === 'loser') {
                        color = 'volcano'
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    )
                })}
            </>
        )
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <a>Invite {record.name}</a>
                <a>Delete</a>
            </Space>
        )
    }
]

const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
        console.log(
            `selectedRowKeys: ${selectedRowKeys}`,
            'selectedRows: ',
            selectedRows
        )
    },
    getCheckboxProps: (record: DataType) => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
        name: record.name
    })
}

interface DescriptionItemProps {
    title: string
    content: React.ReactNode
}

const DescriptionItem = ({ title, content }: DescriptionItemProps) => (
    <div className="site-description-item-profile-wrapper">
        <p className="site-description-item-profile-p-label">{title}:</p>
        {content}
    </div>
)

export default () => {
    const [open, setOpen] = useState(false)

    const showDrawer = () => {
        setOpen(true)
    }

    const onClose = () => {
        setOpen(false)
    }

    const data: DataType[] = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer']
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser']
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sydney No. 1 Lake Park',
            tags: ['cool', 'teacher']
        }
    ]

    return (
        <>
            <Table
                size="large"
                rowSelection={{
                    type: 'checkbox',
                    ...rowSelection
                }}
                columns={columns}
                dataSource={data}
                onRow={(record, rowIndex) => {
                    return {
                        onClick: (event) => {
                            console.log('row clicked', record, rowIndex)
                            showDrawer()
                        }
                    }
                }}
            />
            <Drawer
                width={640}
                placement="right"
                closable={false}
                onClose={onClose}
                open={open}
            >
                <p
                    className="site-description-item-profile-p"
                    style={{ marginBottom: 24 }}
                >
                    User Profile
                </p>
                <p className="site-description-item-profile-p">Personal</p>
                <Row>
                    <Col span={12}>
                        <DescriptionItem title="Full Name" content="Lily" />
                    </Col>
                    <Col span={12}>
                        <DescriptionItem
                            title="Account"
                            content="AntDesign@example.com"
                        />
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <DescriptionItem title="City" content="HangZhou" />
                    </Col>
                    <Col span={12}>
                        <DescriptionItem title="Country" content="China🇨🇳" />
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <DescriptionItem
                            title="Birthday"
                            content="February 2,1900"
                        />
                    </Col>
                    <Col span={12}>
                        <DescriptionItem title="Website" content="-" />
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <DescriptionItem
                            title="Message"
                            content="Make things as simple as possible but no simpler."
                        />
                    </Col>
                </Row>
                <Divider />
                <p className="site-description-item-profile-p">Company</p>
                <Row>
                    <Col span={12}>
                        <DescriptionItem
                            title="Position"
                            content="Programmer"
                        />
                    </Col>
                    <Col span={12}>
                        <DescriptionItem
                            title="Responsibilities"
                            content="Coding"
                        />
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <DescriptionItem title="Department" content="XTech" />
                    </Col>
                    <Col span={12}>
                        <DescriptionItem
                            title="Supervisor"
                            content={<a>Lin</a>}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <DescriptionItem
                            title="Skills"
                            content="C / C + +, data structures, software engineering, operating systems, computer networks, databases, compiler theory, computer architecture, Microcomputer Principle and Interface Technology, Computer English, Java, ASP, etc."
                        />
                    </Col>
                </Row>
                <Divider />
                <p className="site-description-item-profile-p">Contacts</p>
                <Row>
                    <Col span={12}>
                        <DescriptionItem
                            title="Email"
                            content="AntDesign@example.com"
                        />
                    </Col>
                    <Col span={12}>
                        <DescriptionItem
                            title="Phone Number"
                            content="+86 181 0000 0000"
                        />
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <DescriptionItem
                            title="Github"
                            content={
                                <a href="http://github.com/ant-design/ant-design/">
                                    github.com/ant-design/ant-design/
                                </a>
                            }
                        />
                    </Col>
                </Row>
            </Drawer>
        </>
    )
}
