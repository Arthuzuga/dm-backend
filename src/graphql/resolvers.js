// import { getRole, listRoles, createRole } from './actions/role'
import { getMonster, listMonsters } from './actions/monsters'
import { getCampaign, listCampaigns, deleteCampaign, addCampaign } from './actions/campaign'
import { getSession, addSession, deleteSession, listSessions } from './actions/sessions'
import {getUser, listUsers, registerUser, deleteUser } from './actions/user'
// import { getConfig } from './actions/config'
// import { startInteraction } from './actions/interaction'

export default {
	// Query: { getRole, getConfig, listRoles },
	Query: { getCampaign, listCampaigns, getSession, listSessions, getMonster, listMonsters, getUser, listUsers},
	// Mutation: { startInteraction, createRole },
	Mutation: {  addCampaign, deleteCampaign, addSession, deleteSession,registerUser, deleteUser },
}
