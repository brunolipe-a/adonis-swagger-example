import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Spot from './Spot'

export default class Reading extends BaseModel {
  public static connection = 'mysql'
  public static table = 'ponto_leitura'

  @column({ isPrimary: true, columnName: 'id_leitura' })
  public id: number

  @column({ columnName: 'id_ponto' })
  public spotId: number

  @column({ columnName: 'volume' })
  public reading: number

  @column.dateTime({ columnName: 'data_hora' })
  public readedAt: DateTime

  @belongsTo(() => Spot)
  public spot: BelongsTo<typeof Spot>
}
