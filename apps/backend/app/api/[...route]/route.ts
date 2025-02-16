import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import { cors } from 'hono/cors'

export const runtime = 'edge'

const app = new Hono().basePath('/api')

app.use('/*' , 
  cors({
    origin: ['http://localhost:3001'],
    allowMethods: ['GET', 'HEAD', 'POST', 'PUT', 'DELETE', 'CONNECT', 'OPTIONS', 'TRACE', 'PATCH'],
    allowHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  })
)

app.get('/hello', (c) => {
  return c.json({
    message: 'Hello from Hono!'
  })
})

export const GET = handle(app)
