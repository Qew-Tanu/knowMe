import { Typography } from 'antd'

const { Title, Paragraph } = Typography

const About = () => {
  return (
    <section id="about" style={{ padding: '80px 24px', background: '#fff' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <Title level={2} style={{ textAlign: 'center', marginBottom: '48px', fontSize: '36px' }}>
          Professional Summary
        </Title>
        <Paragraph style={{ fontSize: '18px', lineHeight: '1.8', textAlign: 'center' }}>
          A detail-oriented Full-stack Developer with nearly 2 years of experience at Doosoft, 
          complemented by a strong 6-year background as a Project Engineer at SCG Packaging. 
          I specialize in bridging complex engineering logic with modern web development to 
          build systematic, high-performance solutions. Proven track record in delivering 
          business-aligned applications using Next.js, Node.js, and PostgreSQL.
        </Paragraph>
      </div>
    </section>
  )
}

export default About
