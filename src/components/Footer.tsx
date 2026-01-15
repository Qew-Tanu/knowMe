import { Layout, Typography } from 'antd'

const { Footer: AntFooter } = Layout
const { Text } = Typography

const Footer = () => {
  return (
    <AntFooter style={{ textAlign: 'center', background: '#001529', color: 'rgba(255,255,255,0.65)', padding: '24px 50px' }}>
      <Text style={{ color: 'rgba(255,255,255,0.65)', display: 'block', marginBottom: '8px' }}>
        © {new Date().getFullYear()} Tanu Tarathikhamporn. All rights reserved.
      </Text>
      <Text style={{ color: 'rgba(255,255,255,0.45)' }}>
        Built with React, TypeScript, and Ant Design
      </Text>
    </AntFooter>
  )
}

export default Footer
