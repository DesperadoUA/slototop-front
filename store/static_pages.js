export const state = () => ({
	body: null
})
export const mutations = {
	setState(state, data) {
		state.body = data
	}
}
export const actions = {
	async setState({ commit }, state) {
		localStorage.setItem('test', 'Key')
	}
}
export const getters = {
	getState(state) {
		return state.body
	}
}
