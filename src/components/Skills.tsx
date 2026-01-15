import { Typography, Card, Tag, Row, Col } from 'antd'

const { Title } = Typography

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        'Next.js',
        'TypeScript',
        'Ant Design',
        'Ant Design Charts',
        'Refine',
        'Tailwind CSS',
        'HTML5',
        'CSS3',
        'JavaScript',
        'Bootstrap',
      ],
      color: 'blue',
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Loopback 3', 'ExpressJS', 'Sequelize'],
      color: 'green',
    },
    {
      title: 'Database',
      skills: ['PostgreSQL'],
      color: 'purple',
    },
    {
      title: 'Engineering & Management',
      skills: [
        'Project Integration & Control',
        'Systematic Problem-Solving',
        'Piping & Machine Design',
      ],
      color: 'orange',
    },
  ]

  return (
    <section id="skills" style={{ padding: '80px 24px', background: '#f5f5f5' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <Title level={2} style={{ textAlign: 'center', marginBottom: '48px', fontSize: '36px' }}>
          Technical Skills
        </Title>
        <Row gutter={[24, 24]}>
          {skillCategories.map((category) => (
            <Col xs={24} md={12} key={category.title}>
              <Card
                title={category.title}
                bordered={false}
                headStyle={{ background: '#1890ff', color: 'white', fontSize: '20px', fontWeight: 'bold' }}
              >
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {category.skills.map((skill) => (
                    <Tag key={skill} color={category.color} style={{ fontSize: '14px', padding: '4px 12px' }}>
                      {skill}
                    </Tag>
                  ))}
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  )
}

export default Skills
