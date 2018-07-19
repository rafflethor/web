export default (client) => ({
    detail (raffleId) {
        const query = `
          query GetRaffle($id: String!) {
            raffle(id: $id) {
              id
              name
              ... on RandomListRaffle {
                organization {
                  id
                  name
                }
              }
              ... on TwitterRaffle {
                organization {
                  id
                  name
                }
              }
            }
          }
        `
        const data = {
            query,
            variables: {
                id: raffleId
            }
        }

        return client
            .post('', data)
            .then(resp => {
                return resp.data.getIn(['data', 'raffle'])
            })
            .catch(err => console.log(err))
    }
})
