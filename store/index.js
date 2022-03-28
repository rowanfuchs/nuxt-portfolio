// root state
export const state = () => ({
    theme: false
})

// actions
export const actions = {
    changeTheme({ state, commit }, value) {
        commit('setTheme', value)
    }
}
// mutations
export const mutations = {
    setTheme(state, value) {
        state.theme = value
    }
}
// getters
export const getters = {
    theme(state) {
        return state.theme
    }
}
