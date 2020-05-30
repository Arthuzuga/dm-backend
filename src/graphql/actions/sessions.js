import logger from 'hoopa-logger'
// import { rethinkly } from '../../services'

// const { instance, retrieveData, insertData } = rethinkly

export const getSession = async (_, { campaignId, sessionId }) => {
  logger.info(`Getting role --id: ${campaignId, sessionId} from rethink`)
  return []
}

export const listSessions = async (_, { campaignId }) => {
  logger.info(`List roles from rethink ${campaignId}`)
  return []
}

export const addSession = async (_, { campaignId, data }) => {
  logger.info(`Creating role ${campaignId +': '+ JSON.stringify(data)}...`)

  return { executed: true }
}

export const deleteSession = async (_, { campaignId,data }) => {
    logger.info(`Deleting role ${campaignId +': '+ JSON.stringify(data)}...`)
  return { executed: true }
}
