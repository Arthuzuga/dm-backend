// import { getRole, listRoles, createRole } from './actions/role'
import { getMonster, listMonsters } from './actions/monsters'
import { getCampaign, listCampaigns, deleteCampaign, addCampaign } from './actions/campaign'
import { getSession, addSession, deleteSession, listSessions } from './actions/sessions'
import { getConfig } from './actions/config'
import { startInteraction } from './actions/interaction'

export default {
	// Query: { getRole, getConfig, listRoles },
	Query: { getCampaign, listCampaigns, getSession, listSessions, getMonster, listMonsters},
	// Mutation: { startInteraction, createRole },
	// Mutation: {  createRole },
	Mutation: {  addCampaign, deleteCampaign, addSession, deleteSession, },
}
