import ApiService from '~/services/ApiService.js'
export const namespaced = true
export const state = () => ({
    PageNumber: 2,
    TopArticles: []
})

export const mutations = {
    SET_TOP_ARTICLES(state, payload) {
        state.TopArticles = payload
    },
    SET_MORE_TOP_ARTICLES(state, payload) {
        state.TopArticles.push(payload)
    },
    INCREASE_PAGE_NUMBER(state) {
        state.PageNumber++;
    }
}

export const actions = {

    FetchTopArticles({ commit }, posts) {
        commit('SET_TOP_ARTICLES', posts)
    },
    FetchMoreTopArticles({ commit, rootState }) {
        return ApiService.GetMoreTopArticles(rootState.top.PageNumber).then(response => {
            response.data.results.forEach(element => {
                commit('SET_MORE_TOP_ARTICLES', element)
            });
            commit('INCREASE_PAGE_NUMBER')
        })
    },
}
