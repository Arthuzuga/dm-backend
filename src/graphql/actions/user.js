import logger from 'hoopa-logger'
// import { rethinkly } from '../../services'

// const { instance, retrieveData, insertData } = rethinkly

export const getUser = async (_, { id }) => {
  logger.info(`Getting user --id: ${id} from rethink`)
  return []
}
export const listUsers = async () => {
  logger.info(`List Users`)
  return []
}

export const registerUser = async (_,{data}) => {
  logger.info(`Register User ${JSON.stringify(data)} on rethink`)
  return []
}
export const deleteUser = async (_,{id}) => {
  logger.info(`Delete user --id: ${id}`)
  return []
}
