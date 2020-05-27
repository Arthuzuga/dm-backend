// import { getRole, listRoles, createRole } from './actions/role'
import { getMonster, listMonsters, deleteMonster, addMonster } from './actions/monsters'
import { getConfig } from './actions/config'
import { startInteraction } from './actions/interaction'

export default {
	// Query: { getRole, getConfig, listRoles },
	Query: { getMonster, listMonsters },
	// Mutation: { startInteraction, createRole },
	// Mutation: {  createRole },
	Mutation: {  addMonster, deleteMonster },
}
