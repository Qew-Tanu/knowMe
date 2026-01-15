import { Typography, Card, Row, Col } from 'antd'
import { BookOutlined } from '@ant-design/icons'

const { Title, Text } = Typography

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Mechanical Engineering',
      school: 'Kasetsart University',
      period: '2011 – 2014',
      gpa: '3.26',
    },
    {
      degree: 'Sci-Math (English Program)',
      school: "St' Francis Xavier (Muangthong Thani)",
      period: '',
      gpa: '',
    },
  ]

  return (
    <section id="education" style={{ padding: '80px 24px', background: '#f5f5f5' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <Title level={2} style={{ textAlign: 'center', marginBottom: '48px', fontSize: '36px' }}>
          Education
        </Title>
        <Row gutter={[24, 24]}>
          {education.map((edu, index) => (
            <Col xs={24} md={12} key={index}>
              <Card
                hoverable
                style={{ height: '100%' }}
              >
                <BookOutlined style={{ fontSize: '32px', color: '#1890ff', marginBottom: '16px' }} />
                <Title level={4} style={{ color: '#1890ff', marginBottom: '12px' }}>
                  {edu.degree}
                </Title>
                <Text strong style={{ fontSize: '16px', display: 'block', marginBottom: '8px' }}>
                  {edu.school}
                </Text>
                {edu.period && (
                  <Text type="secondary" style={{ display: 'block', marginBottom: '4px' }}>
                    {edu.period}
                  </Text>
                )}
                {edu.gpa && (
                  <Text type="secondary" style={{ display: 'block' }}>
                    GPA: {edu.gpa}
                  </Text>
                )}
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  )
}

export default Education
