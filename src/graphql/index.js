import { makeExecutableSchema } from 'graphql-tools'

// Scheme Content
// Import typeDefs from './type-defs'
import resolvers from './resolvers'

import campaingType from './campaigns'

const executableSchema = makeExecutableSchema({
	// TypeDefs,
	typeDefs: campaingType,
	resolvers,
})

export default executableSchema
