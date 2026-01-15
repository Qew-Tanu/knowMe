import { Layout, Menu } from 'antd'
import { HomeOutlined, UserOutlined, CodeOutlined, ExperimentOutlined, BookOutlined, MailOutlined } from '@ant-design/icons'

const { Header: AntHeader } = Layout

const Header = () => {
  const menuItems = [
    { key: 'home', icon: <HomeOutlined />, label: <a href="#">Home</a> },
    { key: 'about', icon: <UserOutlined />, label: <a href="#about">About</a> },
    { key: 'skills', icon: <CodeOutlined />, label: <a href="#skills">Skills</a> },
    { key: 'experience', icon: <ExperimentOutlined />, label: <a href="#experience">Experience</a> },
    { key: 'education', icon: <BookOutlined />, label: <a href="#education">Education</a> },
    { key: 'contact', icon: <MailOutlined />, label: <a href="#contact">Contact</a> },
  ]

  return (
    <AntHeader style={{ position: 'fixed', zIndex: 1000, width: '100%', display: 'flex', alignItems: 'center', background: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
      <div style={{ fontSize: '20px', fontWeight: 'bold', marginRight: '50px', color: '#1890ff' }}>
        Tanu T.
      </div>
      <Menu
        mode="horizontal"
        defaultSelectedKeys={['home']}
        items={menuItems}
        style={{ flex: 1, minWidth: 0, border: 'none' }}
      />
    </AntHeader>
  )
}

export default Header
