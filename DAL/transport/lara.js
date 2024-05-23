import axios from 'axios'
import config from '../../config'
export default class Lara {
    #options = {
        URL_API: config.API_URL[config.LANG],
        POST_TYPE: 'casino',
        URL: '',
        IS_SEARCH: false,
        SEARCH_WORD: ''
    }
    static getOptions() {
        return axios.get(config.API_URL[config.LANG] + 'options')
    }
    static getSettings() {
        return axios.get(config.API_URL[config.LANG] + 'settings')
    }
    static search(search_word) {
        return axios.post(config.API_URL[config.LANG] + 'search', {
            params: {
                search_word
            }
        })
    }
}
