import User from 'App/Models/User'
import { SuperTest, Test } from 'supertest'

type AuthHeader = {
  Authorization: string
}

const login = async (request: SuperTest<Test>, user: User | null = null): Promise<AuthHeader> => {
  if (!user) {
    user = await User.query().firstOrFail()
  }

  const { body } = await request
    .post('/login')
    .send({ email: user.email, password: '123456' })
    .set('Accept', 'application/json')

  return { Authorization: `Bearer ${body.token}` }
}

export { AuthHeader, login }
