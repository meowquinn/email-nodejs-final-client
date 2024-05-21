import { ReactNode } from 'react'
import { ConfigProvider } from 'antd'

type Props = {
    children: ReactNode
}

const Layout = ({ children }: Props) => {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#00b96b'
                }
            }}
        >
            {children}
        </ConfigProvider>
    )
}

export default Layout
