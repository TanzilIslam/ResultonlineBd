import ApiService from '~/services/ApiService.js'
export const namespaced = true
export const state = () => ({
    PageNumber: 2,
    HighRatedArticles: []
})

export const mutations = {

    SET_HIGH_RATED_ARTICLES(state, payload) {
        state.HighRatedArticles = payload
    },
    SET_MORE_HIGH_RATED_ARTICLES(state, payload) {
        state.HighRatedArticles.push(payload)
    },
    INCREASE_PAGE_NUMBER(state) {
        state.PageNumber++;
    },
}

export const actions = {
    FetchHighRatedArticles({ commit }, posts) {
        commit('SET_HIGH_RATED_ARTICLES', posts)
    },
    FetchMoreHighRatedArticles({ commit, rootState }) {
        return ApiService.GetMoreHighRatedArticles(rootState.highRated.PageNumber).then(response => {
            response.data.results.forEach(element => {
                commit('SET_MORE_HIGH_RATED_ARTICLES', element)
            });
            commit('INCREASE_PAGE_NUMBER')
        })
    }
}
