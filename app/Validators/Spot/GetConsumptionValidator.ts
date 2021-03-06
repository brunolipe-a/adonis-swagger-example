import { schema } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class GetConsumptionValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    date_start: schema.date({
      format: 'yyyy-MM-dd HH:mm:ss',
    }),
    date_end: schema.date({
      format: 'yyyy-MM-dd HH:mm:ss',
    }),
  })

  /**
   * Custom messages for validation failures. You can make use of dot notation `(.)`
   * for targeting nested fields and array expressions `(*)` for targeting all
   * children of an array. For example:
   *
   * {
   *   'profile.username.required': 'Username is required',
   *   'scores.*.number': 'Define scores as valid numbers'
   * }
   *
   */
  public messages = {}
}
