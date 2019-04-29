import axios from 'axios'

const GITHUB_URL = 'https://api.github.com'

export default {
  async buscarUsuario (nomeUsuario) {
    return this._get(`${GITHUB_URL}/users/${nomeUsuario}`)
  },

  async listarRepositirios (nomeUsuario) {
    return this._get(`${GITHUB_URL}/users/${nomeUsuario}/repos`)
  },

  async listarRepositiriosFavoritos (nomeUsuario) {
    return this._get(`${GITHUB_URL}/users/${nomeUsuario}/starred`)
  },

  async _get (url) {
    let repositorios = null

    try {
      const response = await axios.get(url)

      repositorios = response.data
    } catch (e) { }

    return repositorios
  }
}
