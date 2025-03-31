import { GUARD_MODAL_KEY } from '@/constants'
export const state = () => ({
    [GUARD_MODAL_KEY]: false
})
export const mutations = {
    setStateModal(state, data) {
        state[data.key] = data.status
    }
}
export const actions = {
    async setStateModal({ commit }, payload) {
        if (payload.key in this.state.modal) {
            commit('setStateModal', payload)
        }
    }
}
export const getters = {
    getModals(state) {
        return state
    }
}
