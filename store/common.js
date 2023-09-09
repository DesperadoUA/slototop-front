export const state = () => ({
	common: {
		showSearch: false,
		mobileMenu: false,
		headers: undefined
	}
})
export const mutations = {
	setShowSearch(state, data) {
		state.common.showSearch = data
	},
	setMobileMenu(state, data) {
		state.common.mobileMenu = data
	},
	setHeaders(state, data) {
		state.common.headers = data
	}
}
export const actions = {
	setShowSearch({ commit }, data) {
		commit('setShowSearch', data)
	},
	setMobileMenu({ commit }, data) {
		commit('setMobileMenu', data)
	},
	setHeaders({ commit }, data) {
		commit('setHeaders', data)
	}
}
export const getters = {
	getShowSearch(state) {
		return state.common.showSearch
	},
	getMobileMenu(state) {
		return state.common.mobileMenu
	},
	getHeaders(state) {
		return state.common.headers
	}
}
