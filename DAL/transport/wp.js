import axios from 'axios'
import config from '../../config'
export default class WP {
    #options = {
        URL_API: config.API_URL[config.LANG],
        POST_TYPE: 'casino',
        URL: '',
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
        return axios.post(this.#options.URL_API, {
                type: this.#options.POST_TYPE,
                url: this.#options.URL
            }
        )
    }
    static getOptions() {
        return axios.post(config.API_URL[config.LANG], {type: 'options'})
    }
    static getSettings() {
        return axios.post(config.API_URL[config.LANG], {type: 'settings'})
    }
    static search(searchWord) {
        return axios.post(config.API_URL[config.LANG], {
            type: 'search',
            search_word: searchWord
        })
    }
}
