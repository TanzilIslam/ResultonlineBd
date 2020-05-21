import ApiService from '~/services/ApiService.js'
export const namespaced = true
export const state = () => ({
    PageNumber: 2,
    HealthArticles: []
})

export const mutations = {
    SET_HEALTH_ARTICLES(state, payload) {
        state.HealthArticles = payload
    },
    SET_MORE_HEALTH_ARTICLES(state, payload) {
        state.HealthArticles.push(payload)
    },
    INCREASE_PAGE_NUMBER(state) {
        state.PageNumber++;
    }
}
export const actions = {

    FetchHealthArticles({ commit }, posts) {
        commit('SET_HEALTH_ARTICLES', posts)
    },
    FetchMoreHealthArticles({ commit, rootState }) {
        return ApiService.GetMoreHealthArticles(rootState.health.PageNumber).then(response => {
            response.data.results.forEach(element => {
                commit('SET_MORE_HEALTH_ARTICLES', element)
            });
            commit('INCREASE_PAGE_NUMBER')
        })
    },
}
