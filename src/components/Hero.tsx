import { Typography, Space, Button } from 'antd'
import { PhoneOutlined, MailOutlined, LinkedinOutlined, GithubOutlined, MessageOutlined } from '@ant-design/icons'

const { Title, Text } = Typography

const Hero = () => {
  return (
    <section style={{ paddingTop: '120px', paddingBottom: '80px', textAlign: 'center', background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        {/* Profile Picture */}
        <div style={{ marginBottom: '32px', display: 'flex', justifyContent: 'center' }}>
          <img
            src="/image/my_picture.png"
            alt="Tanu Tarathikhamporn"
            style={{ width: '200px', height: '200px', borderRadius: '50%', objectFit: 'cover', boxShadow: '0 8px 32px rgba(0,0,0,0.1)', border: '5px solid white' }}
          />
        </div>
        
        <Title level={1} style={{ fontSize: '48px', marginBottom: '16px', background: 'linear-gradient(90deg, #1890ff 0%, #722ed1 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          TANU TARATHIKHAMPORN
        </Title>
        <Title level={2} style={{ fontSize: '28px', fontWeight: 400, marginBottom: '16px' }}>
          Full-Stack Developer | Former Project Engineer
        </Title>
        <Text style={{ fontSize: '18px', color: '#666', display: 'block', marginBottom: '32px' }}>
          Ratchaburi, Thailand
        </Text>

        <Space wrap size="middle" style={{ justifyContent: 'center' }}>
          <Button type="primary" icon={<PhoneOutlined />} size="large" href="tel:064-542-3562">
            064-542-3562
          </Button>
          <Button type="primary" icon={<MailOutlined />} size="large" href="mailto:qewtanu@hotmail.com">
            Email
          </Button>
          <Button icon={<LinkedinOutlined />} size="large" href="https://linkedin.com/in/tanu-taratikumporn/" target="_blank">
            LinkedIn
          </Button>
          <Button icon={<GithubOutlined />} size="large" href="https://github.com/Qew-Tanu" target="_blank">
            GitHub
          </Button>
          <Button icon={<MessageOutlined />} size="large" href="https://line.me/ti/p/queqewww" target="_blank">
            Line
          </Button>
        </Space>
      </div>
    </section>
  )
}

export default Hero
