export default (client) => ({
    register (code, social) {
        const query = `
          mutation Register($code: String!, $social: String) {
            eventRegistry(code: $code, social: $social) {
              hash
              raffleId
              social
            }
          }
        `
        const data = {
            query,
            variables: {
                code: code,
                social: social
            }
        }

        return client
            .post('', data)
            .then(resp => resp.data.getIn(['data', 'eventRegistry']))
            .catch(err => console.log(err))
    }
})
