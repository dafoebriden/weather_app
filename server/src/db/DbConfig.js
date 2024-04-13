import mongoose from 'mongoose'
import { logger } from '../utils/Logger'

mongoose.connection.on('error', err => {
  logger.error('[DATABASE ERROR]:', err)
})
mongoose.connection.on('connection', () => {
  logger.log('DbConnection Successful')
})

mongoose.set('strictQuery', false)

export class MongoDbConnection {
  static async connect(connectionstring = process.env.MONGO_CONNECTION_STRING || '') {
    const status = 0
    try {
      if (!connectionstring) {
        return logger.warn('Db not available, no CONNECTION_STRING')
      }
      const status = await mongoose.connect(connectionstring)
      logger.log('[CONNECTION TO DB SUCCESSFUL]')
      return status
    } catch (e) {
      logger.error(
        '[MONGOOSE CONNECTION ERROR]:',
        'Invalid connection string'
      )
      return status
    }
  }
}
export class WeatherAPIConnection {
  static async connect(connectionstring = process.env.WEATHER_CONNECTION_STRING || '') {
    const status = 0
    try {
      if (!connectionstring) {
        return logger.warn('API not available, no CONNECTION_STRING')
      }
      const status = await connectionstring
      logger.log('[CONNECTION TO WEATHER API SUCCESSFUL]')
      return status
    } catch (e) {
      logger.error(
        '[WEATHER API CONNECTION ERROR]:',
        'Invalid connection string'
      )
      return status
    }
  }
}
