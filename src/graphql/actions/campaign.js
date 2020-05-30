import logger from 'hoopa-logger'
// import { rethinkly } from '../../services'

// const { instance, retrieveData, insertData } = rethinkly

export const getCampaign = async (_, { id }) => {
  logger.info(`Getting role --id: ${id} from rethink`)
  return []
}

export const listCampaigns = async () => {
  logger.info('List roles from rethink')
  return []
}

export const addCampaign = async (_, { data }) => {
  logger.info(`Creating role ${JSON.stringify(data)}...`)

  return { executed: true }
}

export const deleteCampaign = async (_, { data }) => {

  return { executed: true }
}
