import {gql} from 'apollo-server-koa'

export default gql`
  type Monster {
    id: String
    name: String
  }

  type StandardReponse {
    executed: Boolean
  }

  type Query {
    getMonster(id: String): Monster
    listMonsters: [Monster]
  }

  type Mutation {
    addMonster(
      name: String
      ): StandardReponse
    deleteMonster(
      id: String
      ): StandardReponse
  }
`