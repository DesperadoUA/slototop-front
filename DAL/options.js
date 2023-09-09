import axios from 'axios'
import config from '../config'
class DAL_Options {
	static getOptions() {
		return axios.get(config.API_URL[config.LANG] + 'options')
	}
}
export default DAL_Options
