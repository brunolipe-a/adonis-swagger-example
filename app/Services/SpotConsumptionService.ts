import { inject } from '@adonisjs/fold'
import Spot from 'App/Models/Spot'
import SpotRepository from 'App/Repositories/SpotRepository'
import { DateTime } from 'luxon'

interface ConsumptionResponse {
  spot_id: number
  start_reading: number
  end_reading: number
  consumption: number
  measurement_unit: 'm3' | 'l'
}

@inject()
export default class SpotConsumptionService {
  constructor(private spotRepository: SpotRepository) {}

  public async run(spot: Spot, [dateStart, dateEnd]: DateTime[]): Promise<ConsumptionResponse> {
    const startReading = await this.spotRepository.firstReadingBeforeDate(spot, dateStart)
    const endReading = await this.spotRepository.firstReadingBeforeDate(spot, dateEnd)

    const startReadingValue = startReading?.reading ?? 0
    const endReadingValue = endReading?.reading ?? 0

    const consumption = startReadingValue - endReadingValue

    return {
      spot_id: spot.id,
      start_reading: startReadingValue / 1000,
      end_reading: endReadingValue / 1000,
      consumption: consumption / 1000,
      measurement_unit: 'm3',
    }
  }
}
