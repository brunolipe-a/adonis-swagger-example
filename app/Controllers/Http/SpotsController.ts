import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Spot from 'App/Models/Spot'

export default class SpotsController {
  public async index({}: HttpContextContract) {
    return Spot.all()
  }
}
