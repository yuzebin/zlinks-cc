import { Hono } from 'hono'

const app = new Hono()

// Health check
app.get('/api/health', (c) => {
  return c.json({ status: 'ok', timestamp: new Date().toISOString() })
})

// Projects API
app.get('/api/projects', (c) => {
  const projects = [
    { id: 'wetalk', icon: '🎙️', title: 'weLinks Talk', tags: ['WebRTC', 'FastAPI', 'React'] },
    { id: 'vr', icon: '🥽', title: 'VR English', tags: ['Zhipu AI', 'Zustand', 'TypeScript'] },
    { id: 'comfy', icon: '🎨', title: 'ComfyUI/SwarmUI', tags: ['Python', 'Stable Diffusion'] },
    { id: 'ecom', icon: '🛒', title: '智慧电商系统', tags: ['Spring Cloud', 'WeChat'] },
  ]
  return c.json(projects)
})

// Contact form API (placeholder)
app.post('/api/contact', async (c) => {
  const body = await c.req.json()
  const { name, email, message } = body

  // Here you can integrate with email service like SendGrid, Resend, etc.
  console.log('Contact form submitted:', { name, email, message })

  return c.json({ success: true, message: 'Message received' })
})

// Serve static assets in production
app.get('*', async (c) => {
  return c.env.ASSETS.fetch(c.req.raw)
})

export default app
