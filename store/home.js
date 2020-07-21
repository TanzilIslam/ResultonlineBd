import ApiService from '~/services/ApiService.js'
export const namespaced = true
export const state = () => ({
    PageNumber: 2,
    HomeArticles: [],
    LatestArticles: []
})

export const mutations = {
    SET_HOME_ARTICLES(state, payload) {
        state.HomeArticles = payload
    },
    SET_MORE_HOME_ARTICLES(state, payload) {
        state.HomeArticles.push(payload)
    },
    SET_LATEST_ARTICLES(state, payload) {
        state.LatestArticles = payload
    },
    INCREASE_PAGE_NUMBER(state) {
        state.PageNumber++;
    }
}

export const actions = {

    FetchHomeArticles({ commit }, posts) {
        commit('SET_HOME_ARTICLES', posts)
    },
    FetchMoreHomeArticles({ commit, rootState }) {
        return ApiService.GetMoreHomeArticles(rootState.home.PageNumber).then(response => {
            response.data.results.forEach(element => {
                commit('SET_MORE_HOME_ARTICLES', element)
            });
            commit('INCREASE_PAGE_NUMBER')
        })
    },
    FetchLatestArticles({ commit }, posts) {
        commit('SET_LATEST_ARTICLES', posts)
    },
    More({ commit }, posts) {
        commit('SET_MORE_HOME_ARTICLES', posts)

    }
}
