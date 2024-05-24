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
    postType(postType) {
        this.#options.POST_TYPE = postType
        return this
    }
    url(data) {
        this.#options.URL = data
        return this
    }
    get() {
        return axios.get(
            this.#options.URL_API +
            this.#options.POST_TYPE +
            '/' +
            this.#options.URL
        )
    }
    static getOptions() {
        return axios.get(config.API_URL[config.LANG] + 'options')
    }
    static getSettings() {
        return axios.get(config.API_URL[config.LANG] + 'settings')
    }
    static search(search_word) {
        return axios.get(config.API_URL[config.LANG] + 'search', {
            params: {
                search_word
            }
        })
    }
}
