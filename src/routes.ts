import { Router } from 'express'

const router = Router()

let informations: Array<{
  user: string,
  content: 'sou um email'
}> = []

router.get('/', (req, res) => {
  return res.status(201).json({
    message: 'ok'
  })
})

router.post('/add', async (req, res) => {
  const {
    user,
    content
  } = req.body

  informations.push({ user, content })

  return res.status(201).json({
    message: 'ok'
  })
})

router.get('/informations', async (req, res) => {
  return res.status(200).json({
    data: informations
  })
})

export default router