import { HashRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Vehicle from './pages/Vehicle'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/fahrzeug" element={<Vehicle />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </HashRouter>
  )
}
