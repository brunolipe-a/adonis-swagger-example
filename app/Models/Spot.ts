import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Reading from './Reading'

export default class Spot extends BaseModel {
  public static connection = 'mysql'
  public static table = 'ponto'

  @column({ isPrimary: true, columnName: 'id_ponto' })
  public id: number

  @column({ columnName: 'nome_ponto' })
  public name: string

  @hasMany(() => Reading)
  public readings: HasMany<typeof Reading>
}
