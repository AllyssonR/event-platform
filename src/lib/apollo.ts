import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4q04klk2s9001xleln13tan/master',
  cache: new InMemoryCache()
})