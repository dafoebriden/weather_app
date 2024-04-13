import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'

class MongoDbContext {
  Account = mongoose.model('Account', AccountSchema);
}

export const mongoDbContext = new MongoDbContext()



