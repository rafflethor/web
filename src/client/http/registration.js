export default (client) => ({
    register (spot, email) {
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
            .catch(err => console.log(err))
    }
})
