import { parseError } from './utils'

export default (client) => ({
    save (spot, email) {
        const query = `
          mutation Register($spot: String!, $email: String) {
            eventRegistry(spotId: $spot, email: $email) {
              hash
              raffleId
              email
            }
          }
        `
        const data = {
            query,
            variables: {
                spot: spot,
                email: email
            }
        }

        return client
            .post('', data)
            .then(resp => resp.data.getIn(['data', 'eventRegistry']))
            .catch(parseError)
    }
})
