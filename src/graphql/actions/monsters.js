import logger from 'hoopa-logger'
// import { rethinkly } from '../../services'

// const { instance, retrieveData, insertData } = rethinkly

export const getMonster = async (_, { id }) => {
  logger.info(`Getting role --id: ${id} from rethink`)
  return []
}

export const listMonsters = async () => {
  logger.info('List roles from rethink')
  return []
}
