/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes/index.ts` as follows
|
| import './cart'
| import './customer'
|
*/

import HealthCheck from '@ioc:Adonis/Core/HealthCheck'
import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return {
    message: 'Bem-vindo(a) ao SATS integração',
    docs: "Acesse '/docs' para documentação",
  }
})

Route.get('/healthz', async () => {
  return HealthCheck.getReport()
})

Route.post('login', 'SessionsController.store')

Route.get('/docs', async ({ view }) => {
  const specUrl = '/swagger.json'
  return view.render('swagger', { specUrl })
})

Route.group(() => {
  Route.resource('spots', 'SpotsController').only(['index'])
  Route.get('spots/:id/consumption', 'SpotConsumptionController').as('spots.consumptinon')

  Route.resource('users', 'UsersController').only(['store'])
}).middleware('auth')
