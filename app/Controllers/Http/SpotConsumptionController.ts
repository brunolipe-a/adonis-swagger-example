import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { inject } from '@adonisjs/fold'
import Spot from 'App/Models/Spot'
import SpotConsumptionService from 'App/Services/SpotConsumptionService'
import GetConsumptionValidator from 'App/Validators/Spot/GetConsumptionValidator'

@inject()
export default class SpotConsumptionController {
  constructor(private spotConsumptionService: SpotConsumptionService) {}

  public async handle({ request, params }: HttpContextContract) {
    const { id } = params
    const { date_end: dateStart, date_start: dateEnd } = await request.validate(
      GetConsumptionValidator
    )

    const spot = await Spot.findOrFail(id)

    return this.spotConsumptionService.run(spot, [dateStart, dateEnd])
  }
}
