import express from 'express'
import { createServer } from 'http'
import { Startup } from './Startup'
import { MongoDbConnection, WeatherAPIConnection } from './db/DbConfig'
import { logger } from './utils/Logger'
import './utils/Mailer'

// create server & socketServer
const app = express()
const port = process.env.PORT || 3000

if (process.env.NODE_ENV == 'dev') {
  // @ts-ignore
  process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 1;
}

const httpServer = createServer(app)
Startup.ConfigureGlobalMiddleware(app)
Startup.ConfigureRoutes(app)

MongoDbConnection.connect()
WeatherAPIConnection.connect()

httpServer.listen(port, () => {
  logger.log(`[NODE_ENV] ${process.env.NODE_ENV} ${process.version} `)
  logger.log(`[SERVING ON PORT] http://localhost:${port} `)
})
