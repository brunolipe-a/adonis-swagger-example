import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import StoreUserValidator from 'App/Validators/User/StoreUserValidator'

export default class UsersController {
  public async store({ request, response }: HttpContextContract) {
    const { email, name, password } = await request.validate(StoreUserValidator)

    await User.create({ email, password, name })

    return response.status(201).json({ message: 'User created with success' })
  }
}
