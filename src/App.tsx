import { Layout } from 'antd'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

const { Content } = Layout

function App() {
  return (
    <Layout className="min-h-screen">
      <Header />
      <Content>
        <Hero />
        <About />
        <Experience />
        <Skills />        
        <Education />
        <Contact />
      </Content>
      <Footer />
    </Layout>
  )
}

export default App
