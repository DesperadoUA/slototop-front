import DAL_Builder from '~/DAL/builder'

export const state = () => ({
	options: null
})
export const mutations = {
	setOptions(state, data) {
		state.options = data
	}
}
export const actions = {
	async setOptions({ commit }, state) {
		if (this.state.options.options === null) {
			const result = await DAL_Builder.getOptions()
			commit('setOptions', result.data.body)
		}
	}
}
export const getters = {
	getOptions(state) {
		return state.options
	}
}
