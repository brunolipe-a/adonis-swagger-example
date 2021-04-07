import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class UserSeeder extends BaseSeeder {
  public async run() {
    await User.updateOrCreate(
      { email: 'admin@test.com' },
      {
        name: 'Admin',
        password: '123456',
      }
    )
  }
}
