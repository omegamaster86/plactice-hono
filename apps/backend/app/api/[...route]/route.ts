import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import { cors } from 'hono/cors'

export const runtime = 'edge'

const app = new Hono().basePath('/api')

let blog = [
  {
    id: 1,
    title: 'Hello World',
    body: 'Hello World',
  },
  {
    id: 2,
    title: 'Hello World2',
    body: 'Hello World2',
  },
  {
    id: 3,
    title: 'Hello World3',
    body: 'Hello World3',
  },
]

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
