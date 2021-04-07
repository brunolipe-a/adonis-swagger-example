import Spot from 'App/Models/Spot'
import Reading from 'App/Models/Reading'
import { DateTime } from 'luxon'

export default class SpotRepository {
  public async firstReadingBeforeDate(spot: Spot, date: DateTime): Promise<Reading | null> {
    return spot
      .related('readings')
      .query()
      .where('readedAt', '<=', date.toSQL())
      .orderBy('readedAt', 'desc')
      .first()
  }
}
