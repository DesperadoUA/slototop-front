import axios from 'axios'
import config from '../config'
import transport from './transport'
export default class JsonRequest {
	#options = {
		URL_API: config.API_URL[config.LANG],
		POST_TYPE: 'casino',
		URL: '',
		IS_SEARCH: false,
		SEARCH_WORD: ''
	}
    transport = new transport[config.API_TRANSPORT]
	postType(postType) {
		this.#options.POST_TYPE = postType
		return this
	}
	setSearch(flag) {
		this.#options.IS_SEARCH = flag
		return this
	}
	searchWold(word) {
		this.#options.SEARCH_WORD = word
		return this
	}
	url(data) {
		this.#options.URL = data
		return this
	}
	async get() {
		if (this.#options.IS_SEARCH) {
			return transport[config.API_TRANSPORT].search(this.#options.SEARCH_WORD)
		}
        else {
            return this.transport
                .postType(this.#options.POST_TYPE)
                .url(this.#options.URL)
                .get()
		}
	}
    static getOptions() {
        return transport[config.API_TRANSPORT].getOptions()
    }
    static getSettings() {
        return transport[config.API_TRANSPORT].getSettings()
    }
}
