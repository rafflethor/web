export default (client) => ({
    checkResult (raffleId, hash) {
        const query = `
          query GetRaffleResult($id: String!, $hash: String!) {
              checkRaffleResult(id: $id, hash: $hash) {
                  didIWin
                  winners {
                      social
                      ordering
                      id
                  }
                  raffle {
                      id
                      name
                      ... on TwitterRaffle {
                          organization {
                              id
                              name
                          }
                      }
                      ... on RandomListRaffle {
                          organization {
                              id
                              name
                          }
                      }
                  }
              }
          }
        `
        const data = {
            query,
            variables: {
                id: raffleId,
                hash: hash
            }
        }

        return client
            .post('', data)
            .then(resp => {
                return resp.data.getIn(['data', 'checkRaffleResult'])
            })
            .catch(err => console.log(err))
    }
})
