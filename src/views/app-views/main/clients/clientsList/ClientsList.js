import React, { Component } from 'react'
import { Card, Table, Tooltip, message, Button, Spin } from 'antd'
import { EyeOutlined, DeleteOutlined, UserOutlined } from '@ant-design/icons'
import AvatarStatus from 'components/shared-components/AvatarStatus'
import { withRouter } from 'react-router-dom'

class ClientList extends Component {
    state = {
        clients: this.props.clients,
        error: this.props.error,
        loading: this.props.loading,
    }

    deleteUser = (userId) => {
        this.setState({
            clients: this.state.clients.filter((item) => item.id !== userId),
        })
        message.success({ content: `Deleted user ${userId}`, duration: 2 })
    }

    showUserProfile = (userInfo) => {
        this.props.history.push(`/app/main/clients/clientInfo/${userInfo.id}`, {
            id: userInfo.id,
        })
    }

    render() {
        const { clients, loading } = this.state
        const tableColumns = [
            {
                title: 'User',
                dataIndex: 'name',
                render: (_, record) => (
                    <div className="d-flex">
                        <AvatarStatus
                            icon={<UserOutlined />}
                            name={record.name}
                            subTitle={record.email}
                        />
                    </div>
                ),
                sorter: {
                    compare: (a, b) => {
                        a = a.name.toLowerCase()
                        b = b.name.toLowerCase()
                        return a > b ? -1 : b > a ? 1 : 0
                    },
                },
            },
            {
                title: 'Company',
                dataIndex: 'company',
                render: (_, data) => <div>{data.company.name}</div>,
                sorter: {
                    compare: (a, b) => {
                        a = a.company.name.toLowerCase()
                        b = b.company.name.toLowerCase()
                        return a > b ? -1 : b > a ? 1 : 0
                    },
                },
            },
            {
                title: 'Phone Number',
                dataIndex: 'phone',
                render: (_, data) => <div>{data.phone}</div>,
                sorter: { compare: (a, b) => a.phone.length - b.phone.length },
            },
            {
                title: 'Website',
                dataIndex: 'website',
                render: (_, data) => <div>{data.website}</div>,
                sorter: {
                    compare: (a, b) => {
                        a = a.website.toLowerCase()
                        b = b.website.toLowerCase()
                        return a > b ? -1 : b > a ? 1 : 0
                    },
                },
            },
            {
                title: '',
                dataIndex: 'actions',
                render: (_, elm) => (
                    <div className="text-right">
                        <Tooltip title="View">
                            <Button
                                type="primary"
                                className="mr-2"
                                icon={<EyeOutlined />}
                                onClick={() => {
                                    this.showUserProfile(elm)
                                }}
                                size="small"
                            />
                        </Tooltip>
                        <Tooltip title="Delete">
                            <Button
                                danger
                                icon={<DeleteOutlined />}
                                onClick={() => {
                                    this.deleteUser(elm.id)
                                }}
                                size="small"
                            />
                        </Tooltip>
                    </div>
                ),
            },
        ]
        return (
            <Spin spinning={loading}>
                <Card bodyStyle={{ padding: '0px' }}>
                    <Table
                        columns={tableColumns}
                        dataSource={clients}
                        rowKey="id"
                    />
                </Card>
            </Spin>
        )
    }
}

export default withRouter(ClientList)
