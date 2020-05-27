import { makeExecutableSchema } from 'graphql-tools'
import {gql} from 'apollo-server-koa'

// Scheme Content
import typeDefs from './type-defs'
import resolvers from './resolvers'

import monsterType from './monsters'
import campaingType from './campaigns'

const executableSchema = makeExecutableSchema({
	// typeDefs,
	typeDefs: monsterType,
	resolvers,
})

export default executableSchema
