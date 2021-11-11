const axios = require('axios')

exports.handler = async function () {
  const POKEMON_API = 'https://pokeapi.co/api/v2/pokedex/kanto'

  const response = await axios.get(POKEMON_API)

  return {
    statusCode: 200,
    body: JSON.stringify(response.data),
  }
}
