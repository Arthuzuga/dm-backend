import {gql} from 'apollo-server-koa'

export default gql`
  type Campaign {
    id: String
    name: String
  }

  type StandardReponse {
    executed: Boolean
  }

  type Query {
    getCampaign(id: String): Campaign
    listCampaigns: [Campaign]
  }

  type Mutation {
    addCampaign(
      name: String
      ): Campaign
    deleteCampaign(
      id: String
      ): StandardReponse
  }
`