import { Typography, Space, Button } from 'antd'
import { PhoneOutlined, MailOutlined, LinkedinOutlined, GithubOutlined } from '@ant-design/icons'

const { Title, Paragraph } = Typography

const Contact = () => {
  return (
    <section id="contact" style={{ padding: '80px 24px', background: '#fff', textAlign: 'center' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <Title level={2} style={{ marginBottom: '24px', fontSize: '36px' }}>
          Contact
        </Title>
        <Paragraph style={{ fontSize: '18px', marginBottom: '48px', maxWidth: '700px', margin: '0 auto 48px' }}>
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </Paragraph>
        <Space wrap size="large" style={{ justifyContent: 'center' }}>
          <Button
            type="primary"
            size="large"
            icon={<PhoneOutlined />}
            href="tel:064-542-3562"
            style={{ height: '50px', fontSize: '16px' }}
          >
            064-542-3562
          </Button>
          <Button
            type="primary"
            size="large"
            icon={<MailOutlined />}
            href="mailto:qewtanu@hotmail.com"
            style={{ height: '50px', fontSize: '16px', background: '#722ed1', borderColor: '#722ed1' }}
          >
            Email Me
          </Button>
          <Button
            size="large"
            icon={<LinkedinOutlined />}
            href="https://linkedin.com/in/tanu-taratikumporn/"
            target="_blank"
            style={{ height: '50px', fontSize: '16px' }}
          >
            LinkedIn
          </Button>
          <Button
            size="large"
            icon={<GithubOutlined />}
            href="https://github.com/Qew-Tanu"
            target="_blank"
            style={{ height: '50px', fontSize: '16px' }}
          >
            GitHub
          </Button>
        </Space>
      </div>
    </section>
  )
}

export default Contact
